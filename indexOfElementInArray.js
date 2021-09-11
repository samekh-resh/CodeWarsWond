// function find(array, element) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === element) return i;
//   }
//   return "Not found";
// } shortening the upper equation

const find = (b, z) => (z = b.indexOf(z)) < 0 ? 'Not found' : z