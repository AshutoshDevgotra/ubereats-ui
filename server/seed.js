import mongoose from "mongoose";
import dotenv from "dotenv";
import Restaurant from "./models/Restaurant.js";
import process from "node:process";
dotenv.config();
await mongoose.connect(process.env.MONGO_URI);

await Restaurant.deleteMany();

await Restaurant.insertMany([

{
  name: "Haveli",
  slug: "haveli",
  cover_image: "/images/haveli-cover.jpg",
  logo: "/images/haveli-logo.png",
  address: "GT Road, Jalandhar",

  location: { lat: 31.3260, lng: 75.5762 },

  cuisine: ["Punjabi", "North Indian"],
  mood_tags: ["family", "comfort", "rich", "celebration"],
  price_range: "₹₹₹",
  rating: 4.6,
  total_reviews: 2189,
  hygiene_score: 9,
  delivery_time: 35,
  safety_badges: ["FSSAI", "Clean Kitchen"],

  menu: [
    { name: "Dal Makhani", description: "Slow cooked buttery dal", price: 220, veg: true, spicy: false, image: "/images/dal-makhani.jpg", bestseller: true },
    { name: "Butter Naan", description: "Tandoori naan", price: 40, veg: true, spicy: false, image: "/images/butter-naan.jpg" }
  ],

  reviews: [
    { rating: 5, comment: "Authentic Punjabi food, very hygienic." },
    { rating: 4, comment: "Perfect for family dinner." }
  ]
},

{
  name: "Chawla Chicken",
  slug: "chawla-chicken",
  cover_image: "/images/chawla-cover.jpg",
  logo: "/images/chawla-logo.png",
  address: "Model Town, Jalandhar",

  location: { lat: 31.3188, lng: 75.5830 },

  cuisine: ["Punjabi", "Non-Veg"],
  mood_tags: ["hungry", "friends", "spicy", "night"],
  price_range: "₹₹",
  rating: 4.7,
  total_reviews: 1456,
  hygiene_score: 8,
  delivery_time: 30,
  safety_badges: ["FSSAI"],

  menu: [
    { name: "Butter Chicken", description: "Creamy gravy chicken", price: 260, veg: false, spicy: false, image: "/images/butter-chicken.jpg", bestseller: true },
    { name: "Tandoori Chicken", description: "Charcoal roasted", price: 280, veg: false, spicy: true, image: "/images/tandoori.jpg" }
  ],

  reviews: [
    { rating: 5, comment: "Best chicken in Jalandhar." },
    { rating: 4, comment: "Always fresh & spicy." }
  ]
},

{
  name: "Love Italy",
  slug: "love-italy",
  cover_image: "/images/love-italy-cover.jpg",
  logo: "/images/love-italy-logo.png",
  address: "Lajpat Nagar, Jalandhar",

  location: { lat: 31.3212, lng: 75.5769 },

  cuisine: ["Italian", "Fast Food"],
  mood_tags: ["date", "light", "cheesy"],
  price_range: "₹₹",
  rating: 4.5,
  total_reviews: 876,
  hygiene_score: 9,
  delivery_time: 20,
  safety_badges: ["FSSAI", "Clean Kitchen"],

  menu: [
    { name: "White Sauce Pasta", description: "Creamy pasta", price: 190, veg: true, spicy: false, image: "/images/white-pasta.jpg", bestseller: true },
    { name: "Garlic Bread", description: "Buttery bread", price: 120, veg: true, spicy: false, image: "/images/garlic-bread.jpg" },
    {name: "Margherita Pizza", description: "Classic cheese pizza", price: 250, veg: true, spicy: false, image: "/images/margherita.jpg", bestseller: true },

  ],

  reviews: [
    { rating: 5, comment: "Great place for couples." },
    { rating: 4, comment: "Clean and tasty." }
  ]
},

{
  name: "Bittu Tikki Wala",
  slug: "bittu-tikki-wala",
  cover_image: "/images/bittu-cover.jpg",
  logo: "/images/bittu-logo.png",
  address: "Rainak Bazaar, Jalandhar",

  location: { lat: 31.3265, lng: 75.5768 },

  cuisine: ["Street Food"],
  mood_tags: ["snack", "cheap", "quick"],
  price_range: "₹",
  rating: 4.4,
  total_reviews: 650,
  hygiene_score: 7,
  delivery_time: 15,
  safety_badges: ["FSSAI"],

  menu: [
    { name: "Aloo Tikki", description: "Crispy potato tikki", price: 60, veg: true, spicy: true, image: "/images/tikki.jpg", bestseller: true }
  ],

  reviews: [
    { rating: 5, comment: "Perfect evening snack." }
  ]
}

// ================== APPEND PACK ==================
,
{
  name: "Sagar Ratna",
  slug: "sagar-ratna",
  cover_image: "/images/sagar-cover.jpg",
  logo: "/images/sagar-logo.png",
  address: "Model Town, Jalandhar",
  location: { lat: 31.3190, lng: 75.5832 },
  cuisine: ["South Indian"],
  mood_tags: ["light", "healthy", "family"],
  price_range: "₹₹",
  rating: 4.6,
  total_reviews: 1340,
  hygiene_score: 10,
  delivery_time: 20,
  safety_badges: ["FSSAI", "Clean Kitchen"],
  menu: [
    { name: "Masala Dosa", description: "Crispy dosa with potato filling", price: 160, veg: true, spicy: false, image: "/images/masala-dosa.jpg", bestseller: true },
    { name: "Idli Sambhar", description: "Soft idli with sambhar", price: 120, veg: true, spicy: false, image: "/images/idli.jpg" }
  ],
  reviews: [{ rating: 5, comment: "Authentic south indian taste." }]
},

{
  name: "The Chocolate Room",
  slug: "the-chocolate-room",
  cover_image: "/images/chocolate-room-cover.jpg",
  logo: "/images/chocolate-room-logo.png",
  address: "BMC Chowk, Jalandhar",
  location: { lat: 31.3268, lng: 75.5801 },
  cuisine: ["Desserts", "Sweets"],
  mood_tags: ["sweet", "date", "celebration"],
  price_range: "₹₹",
  rating: 4.5,
  total_reviews: 810,
  hygiene_score: 9,
  delivery_time: 18,
  safety_badges: ["FSSAI"],
  menu: [
    { name: "Chocolate Waffle", description: "Loaded waffle", price: 180, veg: true, spicy: false, image: "/images/waffle.jpg", bestseller: true },
    { name: "Brownie Sundae", description: "Hot brownie with ice cream", price: 200, veg: true, spicy: false, image: "/images/brownie.jpg" }
  ],
  reviews: [{ rating: 5, comment: "Best dessert spot." }]
},

{
  name: "Yo! China",
  slug: "yo-china",
  cover_image: "/images/yochina-cover.jpg",
  logo: "/images/yochina-logo.png",
  address: "Lajpat Nagar, Jalandhar",
  location: { lat: 31.3219, lng: 75.5780 },
  cuisine: ["Chinese"],
  mood_tags: ["spicy", "night", "friends"],
  price_range: "₹₹",
  rating: 4.4,
  total_reviews: 990,
  hygiene_score: 8,
  delivery_time: 25,
  safety_badges: ["FSSAI"],
  menu: [
    { name: "Hakka Noodles", description: "Veg hakka noodles", price: 170, veg: true, spicy: true, image: "/images/hakka-noodles.jpg", bestseller: true },
    { name: "Manchurian", description: "Veg manchurian gravy", price: 180, veg: true, spicy: true, image: "/images/manchurian.jpg" }
  ],
  reviews: [{ rating: 4, comment: "Good chinese taste." }]
},

{
  name: "Gopal Sweets",
  slug: "gopal-sweets",
  cover_image: "/images/gopal-cover.jpg",
  logo: "/images/gopal-logo.png",
  address: "Civil Lines, Jalandhar",
  location: { lat: 31.3290, lng: 75.5794 },
  cuisine: ["Sweets"],
  mood_tags: ["sweet", "family", "festival"],
  price_range: "₹",
  rating: 4.7,
  total_reviews: 1560,
  hygiene_score: 10,
  delivery_time: 15,
  safety_badges: ["FSSAI", "Clean Kitchen"],
  menu: [
    { name: "Gulab Jamun", description: "Soft syrup balls", price: 120, veg: true, spicy: false, image: "/images/gulabjamun.jpg", bestseller: true },
    { name: "Rasgulla", description: "Spongy rasgulla", price: 100, veg: true, spicy: false, image: "/images/rasgulla.jpg" }
  ],
  reviews: [{ rating: 5, comment: "Pure ghee sweets." }]
},

{
  name: "Pind Balluchi",
  slug: "pind-balluchi",
  cover_image: "/images/pind-cover.jpg",
  logo: "/images/pind-logo.png",
  address: "GT Road, Jalandhar",
  location: { lat: 31.3278, lng: 75.5759 },
  cuisine: ["North Indian"],
  mood_tags: ["family", "rich", "celebration"],
  price_range: "₹₹₹",
  rating: 4.6,
  total_reviews: 2040,
  hygiene_score: 9,
  delivery_time: 35,
  safety_badges: ["FSSAI", "Clean Kitchen"],
  menu: [
    { name: "Shahi Paneer", description: "Rich cashew gravy", price: 230, veg: true, spicy: false, image: "/images/shahi-paneer.jpg", bestseller: true },
    { name: "Lachha Paratha", description: "Layered paratha", price: 45, veg: true, spicy: false, image: "/images/lachha.jpg" }
  ],
  reviews: [{ rating: 5, comment: "Royal Punjabi vibe." }]
},
{
  name: "Belgian Waffle",
  slug: "belgian-waffle",
  cover_image: "/images/belgian-cover.jpg",
  logo: "/images/belgian-logo.png",
  address: "Model Town, Jalandhar",
  location: { lat: 31.3205, lng: 75.5820 },

  cuisine: ["Desserts", "Waffles"],
  mood_tags: ["sweet", "date", "celebration", "cheesy"],
  price_range: "₹₹",
  rating: 4.6,
  total_reviews: 920,
  hygiene_score: 9,
  delivery_time: 18,
  safety_badges: ["FSSAI", "Clean Kitchen"],

  menu: [
    { name: "Nutella Waffle", description: "Loaded Nutella waffle", price: 180, veg: true, spicy: false, image: "/images/nutella-waffle.jpg", bestseller: true },
    { name: "Strawberry Cream Waffle", description: "Creamy strawberry waffle", price: 170, veg: true, spicy: false, image: "/images/strawberry-waffle.jpg" }
  ],

  reviews: [
    { rating: 5, comment: "Best waffles in town." },
    { rating: 4, comment: "Very clean and fresh." }
  ]
}


]);

console.log("Jalandhar restaurant data seeded!");
process.exit();
