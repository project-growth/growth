import User from '../models/user';
import Post from '../models/post';
import { camelCase } from '../utils/ctrlHelper';

export const createPost = (req, res) => {
  const { title, body, price, location, email } = req.body;
  User.where({ email })
    .fetch()
    .then((user) => {
      const userId = user.get('id');
      new Post({ title, body, price, location, author_id: userId })
        .save()
        .then(() => {
          res.send({ saved: true });
        })
        .catch((err) => { console.error(err); });
    })
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
  new Post({ id: req.params.id })
    .fetch()
    .then((post) => {
      res.send(...camelCase([post.toJSON()]));
    });
};
