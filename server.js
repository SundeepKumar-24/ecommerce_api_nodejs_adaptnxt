import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import authRoutes from './routes/auth.js';
import productRoutes from './routes/product.js';
import cartRoutes from './routes/cart.js';
import orderRoutes from './routes/order.js';
import { verifyToken } from './middleware/auth.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', verifyToken, cartRoutes);
app.use('/api/orders', verifyToken, orderRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => app.listen(process.env.PORT, () => console.log(`Server running on ${process.env.PORT}`)))
  .catch(err => console.error(err));