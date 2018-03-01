module.exports = function longestConsecutiveLength(array) {
 var arr = [];
 var counter=0;
 var j=0;

 if (array.length < 2) return array.length;
  
 for(i = 0; i < array.length; i++){
    arr[array[i]] = array[i];
 }

for(i = 0; i < arr.length; i++){
    if(i in arr){
      counter++;  
    } else {
      if (counter > j){
         j = counter;
      }
      counter = 0;
   }
}

return j;
}
