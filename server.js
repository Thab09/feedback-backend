import express from "express";
import box from "./routes/box.routes.js";
import feedback from "./routes/feedback.routes.js";
import userBox from "./routes/userBox.routes.js";
import userFeedback from "./routes/userFeedback.routes.js";

const app = express();
app.use(express.json());

//routes
app.use("/api/boxes", box);
app.use("/api/feedbacks", feedback);
app.use("/api/users/boxes", userBox);
app.use("/api/users/feedbacks", userFeedback);

app.listen(8080, () => {
  console.log("server is running");
});
