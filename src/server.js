import express from "express";

const PORT = 4000;

const app = express();

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  console.log(req.secure);
  next();
};

const handleHome = (request, response) => {
  response.send("hello!");
};

app.use(logger);
app.get("/", handleHome);

const handleListening = () =>
  console.log(`✅ Server listening on http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
