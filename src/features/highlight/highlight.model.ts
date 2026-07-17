import mongoose, { Schema } from 'mongoose';
import { IHighlight } from './highlight.interface';

const HighlightSchema = new Schema<IHighlight>(
  {
    image: { type: String, required: true },
    title: { type: String, required: true },
    des: { type: String, required: true },
    time: {
      day: { type: Number, required: true, min: 1, max: 31 },
      month: { type: String, required: true },
      year: { type: Number, required: true, min: 1900 },
    },
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

export default mongoose.model<IHighlight>('Highlight', HighlightSchema);
