const routes = require("express").Router();
const SessionController = require("./controllers/SessionController");
const UserController = require("./controllers/UserController");
const authMiddleware = require("./middleware/auth");

routes.post("/login", SessionController.login);
routes.get("/dashboard", authMiddleware, SessionController.dashboard);

routes.post("/register", UserController.register);
routes.put("/:id/update", authMiddleware, UserController.update);
routes.delete("/:id/delete", authMiddleware, UserController.delete);
routes.get("/index", authMiddleware, UserController.index);

module.exports = routes;
