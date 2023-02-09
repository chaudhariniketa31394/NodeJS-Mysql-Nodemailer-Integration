"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendCreated = exports.sendError = exports.sendSuccess = void 0;
function sendSuccess(request, Message = 'Request Successfull', data) {
    let response = { StatusCode: 200, IsRequestSuccessfull: true, Message: Message, Data: data };
}
exports.sendSuccess = sendSuccess;
function sendError(request, response, errorCode, errorMgs) {
    let Response = { StatusCode: errorCode, IsRequestSuccessfull: false, Message: errorMgs };
    response.send(Response);
}
exports.sendError = sendError;
function sendCreated(request, response, data) {
    let Response = { StatusCode: 201, IsRequestSuccessfull: true, Message: 'Document Created Successfully', Data: data };
    response.send(Response);
}
exports.sendCreated = sendCreated;
