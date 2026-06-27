import { Router } from "express";
import logger from "./logger";
import { requestCounter, errorCounter, register } from "./metrics";
const router = Router();
// Health Check
router.get("/health", (req, res) => {
    requestCounter.inc();
    logger.info("Health endpoint called");
    res.json({
        status: "UP",
        message: "Service is running"
    });
});
// Process Job
router.post("/process", async (req, res) => {
    requestCounter.inc();
    logger.info("Processing request started");
    const delay = Math.floor(Math.random() * 3000);
    await new Promise(resolve => setTimeout(resolve, delay));
    const failed = Math.random() < 0.1;
    if (failed) {
        errorCounter.inc();
        logger.error("Job processing failed");
        return res.status(500).json({
            success: false,
            message: "Processing failed"
        });
    }
    logger.info(`Job processed successfully in ${delay} ms`);
    return res.json({
        success: true,
        message: "Job processed successfully",
        processingTime: `${delay} ms`
    });
});
// Manual Error Endpoint
router.get("/simulate-error", (req, res) => {
    requestCounter.inc();
    errorCounter.inc();
    logger.error("Manual error triggered");
    return res.status(500).json({
        success: false,
        message: "Simulated Error"
    });
});
// Prometheus Metrics Endpoint
router.get("/metrics", async (req, res) => {
    res.set("Content-Type", register.contentType);
    res.end(await register.metrics());
});
export default router;
