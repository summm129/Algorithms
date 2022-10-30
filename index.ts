const array = [2,3,9,1,6,7,5];
console.log(`今から[${array}]を昇順に整列させます。`);

for(let j=0; j<array.length-1; j++){
  for(let i=0; i<array.length-1; i++){
    if(array[i]>array[i+1]){
      const temp = array[i];
      array[i]=array[i+1];
      array[i+1]=temp;
    }
  }
}

console.log(`バブルソート：[${array}]`);