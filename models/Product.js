import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  description: String,
  stock: Number
});

export default mongoose.model('Product', productSchema);