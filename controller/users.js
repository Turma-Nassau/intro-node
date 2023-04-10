const controller = {};
const userModel = require("../models/users");

controller.getAll = async (req, res) => {
  try {
    let userData = await userModel.findAll({});
    console.log(userData);
    res.status(200).json({ data: userData });
  } catch (error) {
    res.send(error);
  }
};

controller.getUserById = async (req, res) => {
  console.log("User By Id");
  console.log(req.params);
  await userModel
    .findByPk(req.params.id)
    .then((data) => {
      res.status(201).json({
        data,
      });
    })
    .catch((error) => {
      res.status(404).json({ message: error });
    });
};

controller.createUser = async (req, res) => {
  console.log("Em createUser");
  console.log(req.body);
  await userModel
    .create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    })
    .then((data) => {
      res.status(201).json({
        data,
      });
    })
    .catch((error) => {
      res.status(404).json({ message: error });
    });
};

controller.deleteUser = async (req, res) => {
  console.log(req.params);
  await userModel
    .destroy({
      where: { id: req.params.id },
    })
    .then((data) => res.json(data))
    .catch((error) => res.json(error));
};

controller.updateUser = async (req, res) => {
  res.send("Implementar update");
};

module.exports = controller;

//   console.log(req);
//   db.all(sql, params, (err, rows) => {
//     if (err) {
//       res.status(400).json({ error: err.message });
//       return;
//     }
//     res.json({
//       status: "success",
//       data: rows,
//     });
//   });
// };
