"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailSchema = exports.createAuthUserSchema = void 0;
exports.createAuthUserSchema = {
    type: "object",
    properties: {
        firstname: { type: "string" },
        lastname: { type: "string" },
        username: { type: "string" },
        password: { type: "string" },
        SMTPHost: { type: "string" },
        SMTPPort: { type: "number" },
        imaphost: { type: "string" },
        imapport: { type: "number" },
        differentreplyaddress: { type: "number" },
        messageperday: { type: "number" },
        minimumtimegap: { type: "number" },
        smtpsecure: { type: "string", enum: ["SSL", "TLS", "None"] },
        imapsecure: { type: "string", enum: ["SSL", "TLS", "None"] },
    },
    required: ["firstname", "lastname", "username", "password", "SMTPHost", "SMTPPort", "differentreplyaddress",
        "messageperday", "minimumtimegap", "imaphost", "imapport", "smtpsecure", "imapsecure"],
    additionalProperties: false
};
exports.emailSchema = {
    type: "object",
    properties: {
        email: { type: "string" },
        subject: { type: "string" },
        body: { type: "string" },
    },
    required: ["email", "subject", "body"],
    additionalProperties: false
};
