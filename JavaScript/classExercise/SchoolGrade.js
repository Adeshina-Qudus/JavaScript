const array1 = [95,78,86,60,45,92];
const newArray = [];
const map1 = array1.map((x) => {if(x >= 90 && x <= 100 )newArray.push("A");});
const map2 = array1.map((x) => {if(x >= 80 && x <= 89 )newArray.push("B");});
const map3 = array1.map((x) => {if(x >= 70 && x <= 79 )newArray.push("C");});
const map4 = array1.map((x) => {if(x >= 60 && x <= 69 )newArray.push("D");});
const map5 = array1.map((x) => {if(x < 60 )newArray.push("F");});
console.log(newArray)
var  news = []
let arr = array1.map((x) => 
{if(x >= 90 && x <= 100 ){
    news.push('A')
}else if(x >= 80 && x <= 89 ){
    news.push('B')
}else if(x >= 70 && x <= 79) {
    news.push('C')
}else if(x >= 60 && x <= 69 ){
    news.push('D')
}else {
    news.push('F')
}

}

)
console.log(news)
