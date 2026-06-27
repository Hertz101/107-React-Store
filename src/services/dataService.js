const catalog = [
    {
        "title": "Orange",
        "category": "fruit",
        "price": 15,
        "image":"Orange.jpeg",
        "_id":"1"//Must be unique
        },
        {
        "title": "Chocolate",
        "category": "grocery",
        "price": 16,
        "image":"chocolate.jpeg",
        "_id":"2"//Must be unique
        },
        {
        "title": "Hoodie",
        "category": "merch",
        "price": 17,
        "image":"hoodie.jpeg",
        "_id":"3"//Must be unique
        }
];

class DataService{
    getProducts()
    {
        return catalog;
    }
}

export default DataService;