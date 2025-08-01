import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("server is ready");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Why did the chicken cross the road?",
      punchline: "To get to the other side!",
    },
    {
      id: 2,
      title: "What do you call fake spaghetti?",
      punchline: "An impasta!",
    },
    {
      id: 3,
      title: "Why don’t scientists trust atoms?",
      punchline: "Because they make up everything!",
    },
    {
      id: 4,
      title: "What do you call cheese that is not yours?",
      punchline: "Nacho cheese!",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`sever at ${port}`);
});
