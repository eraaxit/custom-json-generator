const express = require("express");
const rateLimit = require("express-rate-limit");

const app = express();
const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 100, // limit each IP to 100 requests per windowMs,
  message: "You are being rate-limited. Please try again after 5 minutes.",
});

app.use(express.json({ extended: false }));
app.use("/api", limiter);

app.get("/", (req, res) => res.json({ msg: "hello world" }));

app.use("/api", require("./route"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server running on ${PORT}`));
