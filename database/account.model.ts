import { model, models, Schema, Types } from "mongoose";

export interface IAccount {
  userId: Types.ObjectId; // User Identification: Reference to the User model
  name: string; // Name: The name associated with the account
  image?: string; // Profile Image: URL of the user's profile picture
  password?: string; // Password: Only required for email/password authentication
  provider: string; // Authentication Method: The method of login (e.g., GitHub, Google, email/password)
  providerAccountId: string; // Provider Account ID: Unique ID from the login provider
}

const AccountSchema = new Schema<IAccount>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    password: { type: String },
    provider: { type: String, required: true },
    providerAccountId: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Account = models?.Account || model<IAccount>("Account", AccountSchema);

export default Account;
