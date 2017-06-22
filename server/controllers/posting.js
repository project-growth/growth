import connection from '../db';

export const createPost = (req, res) => {
  const { heading, description, user, createdAt } = req.body;
  console.log('what', Date.now(), new Date());
  const queryStr = `insert into postings (heading, description, poster_id, status,
     created_at) values ('${heading}', '${description}', (SELECT id from users where email='${user}'), 'new', '${Date.now()}')`;
  // const params = [heading, description, `SELECT id from users where email=${user}`, createdAt];
  connection.query(queryStr, (err, post) => {
    if (err) { throw err; }
    res.json(post);
  });
};
