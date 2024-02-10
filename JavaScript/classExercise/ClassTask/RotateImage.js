const rotateImage = (array)=>{
for (let outter = 0 ; outter < array.length;outter++){
    for (let inner = outter + 1; inner < array.length ;inner++){
        let temp = array[outter][inner];
        array[outter][inner] = array[inner][outter];
        array[inner][outter] = temp;
    }
}
for (let reverse = 0; reverse < array.length; reverse++){
        let left = 0 , right = array.length - 1;
        while (left < right){
        let temp = array[reverse][left];
        array[reverse][left] = array[reverse][right];
        array[reverse][right] = temp;
        left++;
        right--;
    }
}
return array;
}
console.log(rotateImage([[5,9,1],[3,8,2],[1,2,3]]))
module.exports = {rotateImage}