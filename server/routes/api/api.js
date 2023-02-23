import express from "express";
var router = express.Router();

// import routers from controllers


router.use("/comments", commentRouter);
router.use("/infor", infoRouter);
router.use("/user", userRouter);

export default router;
