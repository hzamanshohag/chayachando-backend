import mongoose, { Schema } from 'mongoose';
import { THero } from './hero.interface';

const HeroSchema = new Schema<THero>(
  {
    image: { type: String, required: true },
    title: { type: String, required: true },
    sortDes: { type: String, required: true },
    // time: { type: String, required: true },
    colSpan: { type: String, required: true },
    articleID: { type: String, required: true },
    category: {
      type: String,
      required: true,
      enum: ['সংবাদ', 'মতামত', 'বিনোদন', 'খেলাধুলা', 'সাক্ষাৎকার', 'ব্যক্তিত্ব', 'বিবিধ'],
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model<THero>('Hero', HeroSchema);
