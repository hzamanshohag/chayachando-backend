import { model, Schema } from 'mongoose';
import { TArticle } from './article.interface';

const articleSchema = new Schema<TArticle>(
  {
    image: {
      type: String,
      required: [true, 'Please provide image url'],
    },
    title: {
      type: String,
      required: [true, 'Please provide title'],
    },
    sortDes: {
      type: String,
      required: [true, 'Please provide sort description'],
    },
    longDes: {
      type: String,
      required: [true, 'Please provide long description'],
    },
    time: {
      day: { type: Number, required: true, min: 1, max: 31 },
      month: { type: String, required: true },
      year: { type: Number, required: true, min: 1900 },
    },
    category: {
      type: String,
      required: [true, 'Please provide category'],
      enum: {
        values: [
          'সংবাদ',
          'মতামত',
          'পড়াশুনা',
          'বিনোদন',
          'খেলাধুলা',
          'সাক্ষাৎকার',
          'ব্যক্তিত্ব',
          'বিবিধ',
        ],
        message: '{VALUE} is not a valid category',
      },
    },
  },
  { timestamps: true },
);

export const Article = model<TArticle>('Article', articleSchema);
