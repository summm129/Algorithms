const result = document.getElementById('result');
const sortButton = document.getElementById('sort');
const clearButton = document.getElementById('clear');

function sort(input: number[]) {
  // const array = [2,3,9,1,6,7,5];
  const array = input;
  console.log(`今から[${array}]を昇順に整列させます。`);

  console.log(`[${array}]`);
  for (let j = 0; j < array.length - 1; j++) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        console.log(`[${array}]`);
        result.innerText = result.innerText + `[${array}] \n`;
      }
    }
  }

  console.log(`バブルソート結果：[${array}]`);
}

sortButton.addEventListener('click', () => {
  const input = <HTMLInputElement>document.getElementById('input');
  if (input) {
    const targetArray = input.value.split(',').map(Number);
    sort(targetArray);
  }
});

clearButton.addEventListener('click', () => {
  result.innerText = '';
});

// function test(){
//   console.log('testが呼ばれました')
// }
// window.test = test;
