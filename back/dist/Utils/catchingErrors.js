"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchingErrors = void 0;
const catchingErrors = (controller) => {
    return function (req, res, next) {
        controller(req, res, next).catch((error) => next(error));
    };
};
exports.catchingErrors = catchingErrors;
