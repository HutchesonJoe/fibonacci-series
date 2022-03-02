function fibonacci(num) {
  let arr = [0, 1]
  for (let i = 0; i<num; i++){
    arr.push(arr[i] + arr[i+1]);
    console.log(arr)
  }
  if (i = 0){
    return 0
  }
  return arr[num]
}

if (require.main === module) {
  console.log("Expecting: 196418");
  console.log("=>", fibonacci(27));

  console.log("");
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// This function takes in a number, and finds that numth element in the Finonacci series. First, I need to create the series, which is a series that starts with [0, 1...] continueing with the next number being the sum of the two previous numbers. 
