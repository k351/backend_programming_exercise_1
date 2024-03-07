for (let index = 2; index <= 1000; index++) {
  let isPrime = true;

  for (let j = 2; j <= index / 2; j++) {
    if (index % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(index);
  }
}