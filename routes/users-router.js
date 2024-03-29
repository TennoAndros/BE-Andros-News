const usersRouter = require("express").Router();

const {
  getUsers,
  getUserByUsername,
  postUser,
  deleteUserByUsername,
} = require("../controllers/users-controllers");

usersRouter.route("/").get(getUsers).post(postUser);
usersRouter.route("/:username").get(getUserByUsername).delete(deleteUserByUsername);

module.exports = usersRouter;
