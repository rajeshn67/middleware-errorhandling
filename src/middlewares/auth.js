//logic of request is coming from an admin (authorizzation)
const adminauth = (req, res, next) => {
  console.log("admin auth is checked");
  const token = "xyz";

  const authorized = token === "xyz";
  if (!authorized) {
    res.status(401).send("Unauthorized");
  } else {
    next();
  }
};
const userauth = (req, res, next) => {
  console.log("admin auth is checked");
  const token = "xyz";

  const authorized = token === "xyz";
  if (!authorized) {
    res.status(401).send("Unauthorized");
  } else {
    next();
  }
};

module.exports = { adminauth , userauth };
