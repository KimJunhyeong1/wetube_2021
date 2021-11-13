import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const loggerMiddleware = morgan("dev");

const handleHome = (request, response) => {
  return response.send("hello!");
};

app.use(loggerMiddleware);
app.get("/", handleHome);

const handleListening = () =>
  console.log(`✅ Server listening on http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
