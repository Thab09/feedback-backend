import express from "express";
// import router from "./routes/boxRoutes.js";
import boxRoutes from "./routes/boxRoutes.js";
import feedbackRoutes from "./routes/feedbackRoutes.js";
import userBoxRoutes from "./routes/userBoxRoutes.js";
import userFeedbackRoutes from "./routes/userFeedbackRoutes.js";

const app = express();
app.use(express.json());

//routes
app.use("/api/boxes", boxRoutes);
app.use("/api/feedbacks", feedbackRoutes);
app.use("/api/users/boxes", userBoxRoutes);
app.use("/api/users/feedbacks", userFeedbackRoutes);

app.listen(8080, () => {
  console.log("server is running");
});
