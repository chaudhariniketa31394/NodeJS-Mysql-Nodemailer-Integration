"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePayload = void 0;
const Ajv = require("ajv");
const addFormats = require("ajv-formats");
const ajv = new Ajv.default({ allErrors: true, verbose: true }); // code: { source: true, formats: MyFormat } 
// ajv.addFormat("email", /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/);
ajv.addFormat("mobile", /^[6789]\d{9}$/);
ajv.addFormat("zip", /\b\d{6}\b/g);
ajv.addKeyword('isNotEmpty', {
    type: 'string',
    validate: function (schema, data) {
        return typeof data === 'string' && data.trim() !== '';
    },
    errors: false
});
addFormats(ajv);
function validatePayload(schemaObj, payloadObj) {
    try {
        console.log("schemaobj", schemaObj, "payloadObj", payloadObj);
        const data = payloadObj;
        const validate = ajv.compile(schemaObj);
        const valid = validate(data);
        if (valid)
            return { statusCode: 200, isValid: true };
        if (!valid)
            throw validate.errors;
    }
    catch (error) {
        console.log("eroor", error);
        const errorObj = {
            statusCode: 404,
            isValid: false,
            message: `${error[0].instancePath} ${error[0].message}`.replace(/[/]/g, ' '),
            errorCode: 404
        };
        return errorObj;
    }
}
exports.validatePayload = validatePayload;
