//dependency

//get login page
const getLogIn = (req, res, next) => {
  try {
    res.render("pages/login");
  } catch (error) {
    next(error);
  }
};
//get register page
const getRegister = (req, res, next) => {
  try {
    res.render("pages/register");
  } catch (error) {
    next(error);
  }
};

//exports

module.exports = {
  getLogIn,
  getRegister,
};
