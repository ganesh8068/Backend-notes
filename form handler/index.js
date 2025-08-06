import express from "express";
import path from "path";
const app = express();

app.use(express.urlencoded({ extended: true }));

const staticPath = path.join(import.meta.dirname, "public");
app.use(express.static(staticPath));

app.post("/submit", (req, res) => {
  console.log(req.body);
  res.send("OKKKK Done");
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(import.meta.dirname, "view", "404.html"));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
