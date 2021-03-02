const model = require("../model/Comments");

function postComment(req, res, next) {
  const newComment = req.body.addComment;
  console.log("handler ", req.body);
  model
    .addComment(newComment)
    .then((Comments) => {
      res.status(201).send(Comments);
    })
    .catch(next);
}

function delComment(req, res, next) {
  const id = req.params.id;
  model
    .delComment(id)
    .then(() => {
      res.status(204).send();
    })
    .catch(next);
}

function getComments(req, res, next) {
  const id = req.params.id;
  model
    .getComments(id)
    .then((data) => {
      res.send(data);
    })
    .catch(next);
}

module.exports = {
  getComments,
  postComment,
  delComment,
};
