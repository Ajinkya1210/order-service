import { Router } from "express";
const router = Router();
// Health Check
router.get("/health", (req, res) => {
    res.json({
        status: "UP",
        message: "Service is running"
    });
});
// Process Job
router.post("/process", async (req, res) => {
    const delay = Math.floor(Math.random() * 3000);
    await new Promise(resolve => setTimeout(resolve, delay));
    const failed = Math.random() < 0.1;
    if (failed) {
        return res.status(500).json({
            success: false,
            message: "Processing failed"
        });
    }
    return res.json({
        success: true,
        message: "Job processed successfully",
        processingTime: `${delay} ms`
    });
});
// Manual Error Endpoint
router.get("/simulate-error", (req, res) => {
    return res.status(500).json({
        success: false,
        message: "Simulated Error"
    });
});
export default router;
