const catalog = [
    {
        "title": "Hunting Jacket",
        "desc": "Stay warm while out hunting",
        "category": "Apparel",
        "price": 39.99,
        "image":"Hunting Jacket.png",
        "_id":"1"//Must be unique
        },

        {
        "title": "Upland Bird Vest",
        "desc": "Orvis hunting vest to carry your ammo and birds",
        "category": "Apparel",
        "price": 29.99,
        "image":"bird vest.png",
        "_id":"2"//Must be unique
        },


        {
        "title": "Tent",
        "desc": "Stay out of the weather in this family size tent",
        "category": "Camping",
        "price": 699.00,
        "image":"tent.png",
        "_id":"3"//Must be unique
        },

        {
        "title": "Fly fishing Sod",
        "desc": "8' Fly fising rod",
        "category": "Fishing Gear",
        "price": 89.00,
        "image":"fly fishing rod.png",
        "_id":"4"//Must be unique
        },

        {
        "title": "Hat",
        "desc": "Sportsman retreat hat",
        "category": "Apparel",
        "price": 15.00,
        "image":"hat.jpg",
        "_id":"5"//Must be unique
        },
        
        {
        "title": "Sleeping Bag",
        "desc": "Comfy sleeping bag that sleeps 2",
        "category": "Camping",
        "price": 69.99,
        "image":"sleepingbag.jpg",
        "_id":"6"//Must be unique
        },

        {
        "title": "Custom Flies",
        "desc": "Flies tied by Eugene",
        "category": "Fishing Gear",
        "price": 8.78,
        "image":"flies.jpg",
        "_id":"7"//Must be unique
        },
        
        
];

class DataService{
    getProducts()
    {
        return catalog;
    }
}

export default DataService;