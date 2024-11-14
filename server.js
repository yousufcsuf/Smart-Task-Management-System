const express = require("express");
const { PrismaClient } = require("@prisma/client"); // Import PrismaClient
const prisma = new PrismaClient(); // Initialize Prisma Client

const app = express();
app.use(express.json());

// Root route to confirm the server is running
app.get("/", (req, res) => {
  res.send("Welcome to the API! Server is running.");
});

// Create a New User (POST /users)
app.post("/users", async (req, res) => {
  const { firstName, lastName, password, email, teamId } = req.body;

  try {
    const newUser = await prisma.user.create({
      data: {
        firstName,
        lastName,
        password,
        email,
      },
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Read all Users (GET /users)
app.get("/users", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Read a Single User by ID (GET /users/)
app.get("/users/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: { id: parseInt(id) },
    });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a User by ID (PUT /users/)
app.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, password, email, teamId } = req.body;

  try {
    const updatedUser = await prisma.user.update({
      where: { id: parseInt(id) },
      data: { firstName, lastName, password, email, teamId },
    });
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a User by ID (DELETE /users/)
app.delete("/users/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.user.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a New Team (POST /teams)
app.post("/teams", async (req, res) => {
  const { name, description, userId } = req.body;

  try {
    const newTeam = await prisma.team.create({
      data: {
        name,
        description,
        userId,
      },
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Read all Teams (GET /teams)
app.get("/teams", async (req, res) => {
  try {
    const teams = await prisma.team.findMany();
    res.status(200).json(teams);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Read a Single Team by ID (GET /teams/)
app.get("/teams/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const user = await prisma.team.findUnique({
      where: { id: parseInt(id) },
    });
    if (!team) {
      return res.status(404).json({ error: "Team not found" });
    }
    res.status(200).json(team);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a Team by ID (PUT /teams/)
app.put("/teams/:id", async (req, res) => {
  const { id } = req.params;
  const { name, description, userId } = req.body;

  try {
    const updatedTeam = await prisma.team.update({
      where: { id: parseInt(id) },
      data: { name, description, userId },
    });
    res.status(200).json(updatedTeam);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a Team by ID (DELETE /teams/)
app.delete("/teams/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.team.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a New Task (POST /tasks)
app.post("/tasks", async (req, res) => {
  const {
    title,
    description,
    priority,
    status,
    dueDate,
    recId,
    guideline,
    userId,
  } = req.body;

  try {
    const newTask = await prisma.task.create({
      data: {
        title,
        description,
        priority,
        status,
        dueDate,
        recId,
        guideline,
        userId,
      },
    });
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Read all Tasks (GET /tasks)
app.get("/tasks", async (req, res) => {
  try {
    const tasks = await prisma.task.findMany();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Read a Single Task by ID (GET /tasks/)
app.get("/tasks/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const task = await prisma.task.findUnique({
      where: { id: parseInt(id) },
    });
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a Task by ID (PUT /tasks/)
app.put("/tasks/:id", async (req, res) => {
  const { id } = req.params;
  const {
    title,
    description,
    priority,
    status,
    dueDate,
    recId,
    guideline,
    userId,
  } = req.body;

  try {
    const updatedTask = await prisma.task.update({
      where: { id: parseInt(id) },
      data: {
        title,
        description,
        priority,
        status,
        dueDate,
        recId,
        guideline,
        userId,
      },
    });
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a Task by ID (DELETE /tasks/)
app.delete("/tasks/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.task.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a New Comment (POST /comments)
app.post("/comments", async (req, res) => {
  const { description, taskId, userId } = req.body;

  try {
    const newComment = await prisma.comment.create({
      data: {
        description,
        taskId,
        userId,
      },
    });
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Read all Comments (GET /comments)
app.get("/comments", async (req, res) => {
  try {
    const comments = await prisma.comment.findMany();
    res.status(200).json(teams);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a Comment by ID (PUT /comments/)
app.put("/comments/:id", async (req, res) => {
  const { id } = req.params;
  const { description, taskId, userId } = req.body;

  try {
    const updatedComment = await prisma.comment.update({
      where: { id: parseInt(id) },
      data: { description, taskId, userId },
    });
    res.status(200).json(updatedComment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a Comment by Task ID (DELETE /tasks/)
app.delete("/tasks/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.comment.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
