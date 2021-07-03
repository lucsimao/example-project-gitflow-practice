module.exports = (app) => {
  const ROUTE = "clients";

  const model = {
    name: "Bob",
    age: "25",
    gender: "M",
  };

  app.get(`/${ROUTE}`, async (req, res) => {
    try {
      res.status(200).json(model);
      res.body = model;
    } catch (err) {
      res.status(400).json(err);
    }
  });
};
