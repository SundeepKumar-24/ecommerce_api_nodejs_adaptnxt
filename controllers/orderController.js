import Cart from '../models/Cart.js';
import Order from '../models/Order.js';

export const placeOrder = async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user.id });
  if (!cart || cart.items.length === 0) return res.status(400).json({ message: 'Cart is empty' });

  const order = new Order({
    userId: req.user.id,
    products: cart.items.map(item => ({ productId: item.productId, quantity: item.quantity }))
  });

  await order.save();
  cart.items = [];
  await cart.save();

  res.status(201).json({ message: 'Order placed successfully', order });
};