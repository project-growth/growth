import User from '../models/user';
import Post from '../models/post';

export const createPost = (req, res) => {
  const { title, body, email } = req.body;
  User.where({ email })
    .fetch()
    .then((user) => {
      const userId = user.get('id');
      new Post({ title, body, author_id: userId })
        .save()
        .then(() => {
          res.send({ saved: true });
        })
        .catch((err) => { console.error(err); });
    })
    .catch((err) => { console.error(err); });
};

export const getPosts = (req, res) => {
  console.log('not getting here');
  console.log(req.body);
  Post.fetchAll()
  .then((results) => {
    const resultsJSON = results.toJSON();
    console.log(resultsJSON);
    res.send(resultsJSON);
  });
};
