import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema({
  name: String,
  type: String,
  privacy: String,
  baseURL: String,
  logoURL: String,
  category: String,
  description: String,
  status: Boolean,
});
