import Cart from '../models/Cart.js';

export const getCart = async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user.id }).populate('items.productId');
  res.json(cart || { items: [] });
};

export const addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  let cart = await Cart.findOne({ userId: req.user.id });
  if (!cart) cart = new Cart({ userId: req.user.id, items: [] });
  const item = cart.items.find(item => item.productId.equals(productId));
  if (item) item.quantity += quantity;
  else cart.items.push({ productId, quantity });
  await cart.save();
  res.status(201).json(cart);
};

export const updateCartItem = async (req, res) => {
  const { quantity } = req.body;
  const cart = await Cart.findOne({ userId: req.user.id });
  const item = cart.items.id(req.params.itemId);
  if (item) item.quantity = quantity;
  await cart.save();
  res.json(cart);
};

export const removeCartItem = async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user.id });
  cart.items = cart.items.filter(item => !item._id.equals(req.params.itemId));
  await cart.save();
  res.json(cart);
};