import express from "express";
import { createReview } from "../Controller/reviewController.js";
import { verifyAdmin } from "../utils/verifyToken.js";
import { verifyUser } from "../utils/verifyToken.js";


// creare testing api 
router.get('/test', (req, res) => {
    res.send("review  testing route is working")
})
const router = express.Router();
//create review
router.post("/:tourId",verifyUser, createReview);
export default router;