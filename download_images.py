import os
import requests

API_KEY = "51271526-3730c9fa099ca09986b2f64b1"
IMAGE_DIR = "server/public/images"
os.makedirs(IMAGE_DIR, exist_ok=True)

images = {
    "haveli-cover.jpg": "punjabi restaurant",
    "haveli-logo.png": "indian restaurant logo",
    "dal-makhani.jpg": "dal makhani",
    "butter-naan.jpg": "butter naan",

    "chawla-cover.jpg": "chicken restaurant india",
    "chawla-logo.png": "chicken restaurant logo",
    "butter-chicken.jpg": "butter chicken",
    "tandoori.jpg": "tandoori chicken",

    "love-italy-cover.jpg": "italian restaurant",
    "love-italy-logo.png": "italian restaurant logo",
    "white-pasta.jpg": "white sauce pasta",
    "garlic-bread.jpg": "garlic bread",
    "margherita-pizza.jpg": "margherita pizza",
    "bittu-cover.jpg": "street food india",
    "bittu-logo.png": "street food logo",
    "tikki.jpg": "aloo tikki",

    "sagar-cover.jpg": "south indian restaurant",
    "sagar-logo.png": "south indian logo",
    "masala-dosa.jpg": "masala dosa",
    "idli.jpg": "idli sambhar",

    "belgian-cover.jpg": "waffle shop",
    "belgian-logo.png": "belgian waffle logo",
    "nutella-waffle.jpg": "nutella waffle",
    "strawberry-waffle.jpg": "strawberry waffle",

    "yochina-cover.jpg": "chinese restaurant india",
    "yochina-logo.png": "chinese restaurant logo",
    "hakka-noodles.jpg": "hakka noodles",
    "manchurian.jpg": "veg manchurian",

    "chocolate-room-cover.jpg": "dessert cafe",
    "chocolate-room-logo.png": "dessert cafe logo",
    "waffle.jpg": "chocolate waffle",
    "brownie.jpg": "brownie",

    "gopal-cover.jpg": "indian sweet shop",
    "gopal-logo.png": "sweet shop logo",
    "gulabjamun.jpg": "gulab jamun",
    "rasgulla.jpg": "rasgulla",

    "pind-cover.jpg": "punjabi dhaba",
    "pind-logo.png": "dhaba logo",
    "shahi-paneer.jpg": "shahi paneer",
    "lachha.jpg": "lachha paratha"
}

for filename, query in images.items():
    url = f"https://pixabay.com/api/?key={API_KEY}&q={query.replace(' ', '+')}&image_type=photo&per_page=3"
    res = requests.get(url).json()

    if res["hits"]:
        img_url = res["hits"][0]["largeImageURL"]
        print("Downloading", filename)
        img = requests.get(img_url).content

        with open(os.path.join(IMAGE_DIR, filename), "wb") as f:
            f.write(img)
    else:
        print("No image found for", filename)

print("All Pixabay images downloaded successfully!")
