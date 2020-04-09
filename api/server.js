const express = require("express");

const PostRouter = require("../posts/post-router.js");

const server = express();

server.use(express.json());

server.get("/", (req, res, next) => {
  const message = process.env.MESSAGE | "hello from localhost";
  res.status(200).json({
    api: "up",
    message
  })
})

server.use("/api/posts", PostRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

module.exports = server;
