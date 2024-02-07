const shoppingList = [
    {name : "Apples",category :"Fruits",isHealthy :true},
    {name : "Potato Chips",category :"Snacks",isHealthy :false},
    {name : "Carrots",category :"Vegetables",isHealthy :true},
    {name : "Chocolate",category :"Sweets",isHealthy :false},
    {name : "Greek Yogurt",category :"Dairy",isHealthy :true},
    {name : "Soda",category :"Beverages",isHealthy : false}
]
let Healthy = [];
Healthy = shoppingList.filter(string => string.isHealthy == true);
Healthy.forEach((element) => console.log(element.name));