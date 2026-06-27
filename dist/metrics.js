"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.errorCounter = exports.requestCounter = void 0;
const prom_client_1 = __importDefault(require("prom-client"));
const register = new prom_client_1.default.Registry();
exports.register = register;
prom_client_1.default.collectDefaultMetrics({
    register
});
exports.requestCounter = new prom_client_1.default.Counter({
    name: "app_requests_total",
    help: "Total number of requests"
});
exports.errorCounter = new prom_client_1.default.Counter({
    name: "app_errors_total",
    help: "Total number of errors"
});
register.registerMetric(exports.requestCounter);
register.registerMetric(exports.errorCounter);
