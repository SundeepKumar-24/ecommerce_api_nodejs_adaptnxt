import Product from '../models/Product.js';

export const getProducts = async (req, res) => {
  const { search, page = 1, limit = 10 } = req.query;
  const query = search ? { name: new RegExp(search, 'i') } : {};
  const products = await Product.find(query).skip((page - 1) * limit).limit(limit);
  res.json(products);
};

export const addProduct = async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.status(201).json(product);
};

export const updateProduct = async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(product);
};

export const deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: 'Product deleted' });
}; 