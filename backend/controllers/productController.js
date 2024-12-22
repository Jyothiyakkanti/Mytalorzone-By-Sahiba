const products = require('../data/products.json');

// Get all products
exports.getAllProducts = (req, res) => {
  res.json(products);
};

// Get a single product by id
exports.getProductById = (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).send('Product not found');
  res.json(product);
};
