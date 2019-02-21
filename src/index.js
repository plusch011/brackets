module.exports = function check(str, bracketsConfig) {
  let open = bracketsConfig.map((elem) => elem[0]);
  let close = bracketsConfig.map((elem) => elem[1]);
  let arr = str.split('');

  for (let i = 0; i < arr.length; i++) {
      // если есть закрывающая скобка из массивов;
      if(close.includes(arr[i])) { 
          let n = i - 1;
          while(arr[n] == 0) n--;
          if(arr[n] == open[close.indexOf(arr[i])]) {
            arr[n] = 0;
            arr[i] = 0;
          }
      }
  }
  return arr.every((elem) => elem == 0);
}
