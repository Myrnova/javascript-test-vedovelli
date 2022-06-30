export function sum(num1, num2) {
  // return +num1 + +num2; // +num transforma em número
  // se eu utilizar o +num1 ele transforma uma string vazia em 0 e não em NaN
  const int1 = parseInt(num1, 10);
  const int2 = parseInt(num2, 10);

  if (Number.isNaN(int1) || Number.isNaN(int2)) {
    throw new Error('Please check your input');
  }
  return int1 + int2;
}
