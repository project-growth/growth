
export const createPost = (req, res) => {
  const { heading, description, user, createdAt } = req.body;
  console.log('what', Date.now(), new Date());
};
