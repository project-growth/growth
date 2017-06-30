import User from '../models/user';
import Post from '../models/post';
import { camelCase } from '../utils/ctrlHelper';

export const createPost = (req, res) => {
  const { title, body, price, address, email } = req.body;
  User.where({ email })
    .fetch()
    .then(user => user.get('id'))
    .then((id) => {
      new Post({ title, body, price, address, author_id: id })
        .save();
    })
    .then(() => { res.send({ saved: true }); })
    .catch((err) => { console.error(err); });
};

export const getPosts = (req, res) => {
  Post.fetchAll()
  .then((results) => {
    const resultsJSON = camelCase(results.toJSON()).sort((a, b) => b.id - a.id);
    res.send({ posts: resultsJSON });
  });
};

export const viewPost = (req, res) => {
  let postJSON;
  new Post({ id: req.params.id })
    .fetch()
    .then((post) => {
      postJSON = camelCase([post.toJSON()])[0];
      return postJSON.authorId;
    })
    .then(id => new User({ id }).fetch())
    .then((user) => {
      const email = user.get('email');
      postJSON.email = email;
      delete (postJSON.authorId);
      res.send(postJSON);
    });
};
