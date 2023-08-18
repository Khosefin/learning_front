// let nums = [2, 5, 7, 7]
// for (let list of nums) {
//   list = Number(list)
//   double = list[0] * 2
//   console.log(double);
// }



// a = 1;
// b = 2;
// c = 3;
// e = 4;
// f = 5;
// function sum (...numbers){
//   let total = 0;
//   for (let number of numbers){
//     total += number
//   }
//   return total;
// }
// console.log(sum(a, b, c));


// let students = ["spongbob", "patrick", "squidward"];
// students.forEach(capitalize);
// function capitalize(element, index, array) {
//       array[index] = element[0].toUpperCase() + element.substring(1);
//       console.log(a);
// }



// let nums = [1, 2, 3, 4, 5, 6];
// let squares = nums.map(square);
// squares.forEach(print);

// function square(element) {
//       return Math.pow(element, 2);
// }
// function print(element){
//   console.log(element);
// }



// let price = [5, 10, 20, 35, 45]
// let ali = price.reduce(check)
// function check(total, element){
//   return total + element
// }




// let grades = [10, 70, 30, 5, 50]
// grades = grades.sort(sorst);
// console.log(grades)
// function sorst(a,b){
//   return b - a;
// }



promise = new Promise ((resolve, reject) => {
  let fileLoaded = true

  if (fileLoaded){
    resolve("File Loaded!!!")
  }
    else{
      reject("File NOT Loaded !!!")
    }
  }
);

promise.then(a => console.log(a))
       .catch(b => console.log(b));