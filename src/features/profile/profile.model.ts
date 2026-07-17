import { model, Schema } from 'mongoose';
import { TProfile } from './profile.interface';

const profileSchema = new Schema<TProfile>(
  {
    name: { type: String, required: true },
    role: { type: String, required: true },
    bio: { type: String, required: true },
    education: { type: String, required: true },
    portfolioUrl: { type: String, required: true },
    coverImage: { type: String, required: true },
    profileImage: { type: String, required: true },
    sortDes: { type: String, required: true },
    longDes: { type: String, required: true },
  },
  { timestamps: true },
);

export const Profile = model<TProfile>('Profile', profileSchema);
