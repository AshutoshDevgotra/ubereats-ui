import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  rating: { type: Number, min: 1, max: 5 },
  comment: String,
}, { timestamps: true });

const MenuItemSchema = new mongoose.Schema({
   name: String,
  description: String,
  price: Number,
  image: String,
  veg: Boolean,
  spicy: Boolean,
  rating: Number,
  bestseller: Boolean
});

const RestaurantSchema = new mongoose.Schema({
  name: String,
  cover_image: String,
  logo: String,
  address: String,
  slug: { type: String, unique: true },

  location: {
    lat: Number,
    lng: Number,
  },

  cuisine: [String],
  mood_tags: [String],

  price_range: String,
  rating: Number,
  total_reviews: Number,
  hygiene_score: Number,
  delivery_time: Number,

  safety_badges: [String], // "FSSAI", "Clean Kitchen", etc

  menu: [MenuItemSchema],
  reviews: [ReviewSchema],
}, { timestamps: true });

export default mongoose.model("Restaurant", RestaurantSchema);
