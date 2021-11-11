import { Document } from 'mongoose';

export class Task extends Document {
  name: string;
  type: string;
  privacy: string;
  baseURL: string;
  logoURL: string;
  category: string;
  description: string;
  status: boolean;
}
