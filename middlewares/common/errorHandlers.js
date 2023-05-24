//dependency
const createError = require("http-errors");
//not found handler
function notFoundHandler(req, res, next) {
  next(createError(404, "Your requested page not found!"));
}

//error handler middleware

function errorHandler(err, req, res, next) {
  const error =
    process.env.NODE_ENV === "development" ? err : { message: err.message };
  res.locals.html = true;

  if (res.headersSent) {
    next();
  } else {
    try {
      res.locals.error = error;
      res.status(error.status || 500);

      if (res.locals.html) {
        res.render("pages/error", {
          title: "Error page",
        });
      } else {
        res.json(error);
      }
    } catch (error) {
      next(error);
    }
  }
}

//export

module.exports = {
  notFoundHandler,
  errorHandler,
};
