import { model, Schema } from 'mongoose';
import { ICreateUser } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../config';

const userSchema = new Schema<ICreateUser>({
  name: {
    type: String,
    required: [true, 'Please provide your name'],
    minlength: [3, '{VALUE} must be at least 3 characters long'],
    maxlength: [50, '{VALUE} cannot be longer than 50 characters'],
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    validate: {
      validator: function (value: string) {
        return /[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/.test(value);
      },
      message: '{VALUE} is not valid email',
    },
    immutable: true,
  },
  pass: {
    type: String,
    required: [true, 'Please provide your password'],
  },
  role: {
    type: String,
    enum: {
      values: ['user', 'admin'],
      message: '{VALUE} is not valid, please provide a valid role',
    },
    default: 'user',
    required: [true, 'Please provide your role'],
  },
});

userSchema.pre('save', async function (next) {
  const user = this;
  user.pass = await bcrypt.hash(user.pass, Number(config.bcrypt_salt_rounds));
  next();
});

userSchema.post('save', function (docs, next) {
  docs.pass = '';
  next();
});

export const User = model<ICreateUser>('User', userSchema);
