const catalog = [
    {
        "title": "Orange",
        "desc": "Fresh picked oranges to help fuel you",
        "category": "Produce",
        "price": 1.99,
        "image":"Orange.jpeg",
        "_id":"1"//Must be unique
        },

        {
        "title": "Banana's",
        "desc": "Ripe banana's to help get your morning started",
        "category": "Produce",
        "price": .99,
        "image":"banana.jpg",
        "_id":"2"//Must be unique
        },


        {
        "title": "Eggs",
        "desc": "Fresh eggs everyday",
        "category": "Produce",
        "price": 4.99,
        "image":"eggs.png",
        "_id":"3"//Must be unique
        },

        {
        "title": "Chocolate Bar",
        "desc": "Rich dark chocolate fill your sweet tooth",
        "category": "Sweets",
        "price": 8.99,
        "image":"chocolate.jpeg",
        "_id":"4"//Must be unique
        },

        {
        "title": "Candy",
        "desc": "Candy to fix your sweet tooth",
        "category": "Sweets",
        "price": 4.99,
        "image":"candy.jpg",
        "_id":"5"//Must be unique
        },
        
        {
        "title": "Hoodie",
        "desc": "Comfy hoodie to keep you warm while you study",
        "category": "Apparel",
        "price": 35,
        "image":"hoodie.jpeg",
        "_id":"6"//Must be unique
        },

        {
        "title": "Hat",
        "desc": "Cool hat",
        "category": "Apparel",
        "price": 15,
        "image":"hat.jpg",
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