import mongoose, { Schema } from 'mongoose';

const product = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

export default mongoose.model('product', product);
