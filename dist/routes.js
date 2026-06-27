"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const logger_1 = __importDefault(require("./logger"));
const metrics_1 = require("./metrics");
const router = (0, express_1.Router)();
// Health Check
router.get("/health", (req, res) => {
    metrics_1.requestCounter.inc();
    logger_1.default.info("Health endpoint called");
    res.json({
        status: "UP",
        message: "Service is running"
    });
});
// Process Job
router.post("/process", async (req, res) => {
    metrics_1.requestCounter.inc();
    logger_1.default.info("Processing request started");
    const delay = Math.floor(Math.random() * 3000);
    await new Promise(resolve => setTimeout(resolve, delay));
    const failed = Math.random() < 0.1;
    if (failed) {
        metrics_1.errorCounter.inc();
        logger_1.default.error("Job processing failed");
        return res.status(500).json({
            success: false,
            message: "Processing failed"
        });
    }
    logger_1.default.info(`Job processed successfully in ${delay} ms`);
    return res.json({
        success: true,
        message: "Job processed successfully",
        processingTime: `${delay} ms`
    });
});
// Manual Error Endpoint
router.get("/simulate-error", (req, res) => {
    metrics_1.requestCounter.inc();
    metrics_1.errorCounter.inc();
    logger_1.default.error("Manual error triggered");
    return res.status(500).json({
        success: false,
        message: "Simulated Error"
    });
});
// Prometheus Metrics Endpoint
router.get("/metrics", async (req, res) => {
    res.set("Content-Type", metrics_1.register.contentType);
    res.end(await metrics_1.register.metrics());
});
exports.default = router;
