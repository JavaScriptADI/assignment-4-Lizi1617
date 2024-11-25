// Write your code here
//1
// const myArray = [1, 2, 3];
// array.push(4);

// console.log(myArray); //Output: [1, 2, 3, 4]

//2
// const myArray = [1, 2, 3, 4];
// const firstElement = myArray.shift();

// console.log(myArray); // Output: [2, 3, 4]
// console.log(firstElement); // Output: 1


//3
//splice() - გამოიყენება array-ის კონტენტის შესაცვლელად, რაღაცის ჩასანაცვლებლად, საერთოდ წასაშლელად ან ახლის ჩასამატებლად, ხოლო
//slice() - ქმნის ახალ array-ის და მის კონტენტს აკოპრებს პირველი array-დან
//slice() - ის მნიშვნელობა კარგად მაინც ვერ გვაიგე :(

//4
// const myArray = [1, 2, 3, 4, 5];
// const arrayLength = myArray.length;

// console.log(arrayLength); // Output: 5

//5
// const myArray = [1, 2, 3, 4, 5];
// const hasThree = myArray.includes(3);
// const hasSix = myArray.includes(6);

// console.log(hasThree); // Output: true
// console.log(hasSix);   // Output: false

//6
//compare ფუნქცია sort()-ს ეხმარება, რომ სწორად დაალაგოს array, და თუ sort() ფუნქციას compare-ის გარეშე გამოვიყენებთ, ის კონსოლში პირდაპირ სტრინგებს გამოიტანს, ანუ ზუსტად იმ თანმიმდევრობით, როგორც array-ში გვაქვს მოცემული.
//მაგალითად:
// const numbers = [10, 2, 30, 4];
// numbers.sort();

// console.log(numbers); // შედეგი: [10, 2, 30, 4]


//7
//slice() - method
// const originalArray = [1, 2, 3];
// const copiedArray = originalArray.slice();

// console.log(copiedArray); // Output: [1, 2, 3]
//ამას გარდა კიდე სამია, მაგრამ მხოლოდ ეს ვიცი ჯერ :)

//8
// const myArray = [1, 2, 3, 4, 5];
// myArray.reverse();

// console.log(myArray); // Output: [5, 4, 3, 2, 1]

//9
//ამაზე ორი მეთოდი ვნახე, concat() da spread operator (...)
//concat()
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const combinedArray = array1.concat(array2);

// console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]
// console.log(array1);        // Output: [1, 2, 3] (unchanged)
// console.log(array2);        // Output: [4, 5, 6] (unchanged)

//spread operator(...)
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const combinedArray = [...array1, ...array2];

// console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

//როგორც ვხედავ მეორე ვარიანტი უფრო მარტივია :)

//10
// const matrix = [
//     [1, 2, 3],     // Row 0
//     [4, 5, 6],     // Row 1
//     [7, 8, 9]      // Row 2
//   ];
  
//   // Accessing specific elements
//   console.log(matrix[0][1]); // Output: 2 (Row 0, Column 1)
//   console.log(matrix[2][2]); // Output: 9 (Row 2, Column 2)
//   console.log(matrix[1][0]); // Output: 4 (Row 1, Column 0)


//Assignment 1: 
//1
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//2
console.log(numbers[2]); //output: 3, რადგან თვლას ვიწყებთ 0-დან 

//3
numbers[4] = 15;
console.log(numbers) // output: [1, 2, 3, 4, 15, 6, 7, 8, 9, 10];

//4
numbers.push(11);
console.log(numbers); //output: [1, 2, 3, 4, 15, 6, 7, 8, 9, 10, 11];

//5
numbers.shift();
console.log(numbers); //output: [2, 3, 4, 15, 6, 7, 8, 9, 10, 11]


//Assignment 2:
//1
let fruits = ["Apple", "Banana", "Grapes", "Cherry"];

//2
fruits.push("Orange");
console.log(fruits); //output: ["Apple", "Banana", "Grapes", "Cherry", "Orange"];

//3
let lastFruit = fruits.pop();

console.log(lastFruit);//output: "Orange"
console.log(fruits); //output: ["Apple", "Banana", "Cherry", "Grapes"];

//4
fruits.unshift("Strawberry");

console.log(fruits); //output:  ["Strawberry", "Apple", "Banana", "Cherry", "Grapes"];

//5
let firstFruit = fruits.shift();

console.log(firstFruit); //output: "Strawberry"
console.log(fruits); //output: ["Apple", "Banana", "Cherry", "Grapes"];


//Assignment 3:
//1
let colors = ["Red", "Blue", "Green", "Yellow", "Purple"];

//2
for (let i = 0; i < colors.length; i++){
    console.log(colors[i]);
} 

//output: Red
// Blue
// Green
// Yellow
// Purple


//Assignment 4:
//1
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//2
numbers.splice(1, 2); //ამით ვეუბნებით, რომ დაიწყოს პირველი ინდექსიდან (1) და წაშალოს ორი ელემენტი
console.log(numbers); //output: [1, 4, 5, 6, 7, 8, 9, 10];

//3
numbers.splice(1, 0, 10, 20) //დაიწყებს 1-დან, 0 ნიშნავს, რომ არ წაშლის ელემენეტს, და მათ ადგილზე ჩასვამს 10 და 20
console.log(numbers); //output: [1, 10, 20, 4, 5, 6, 7, 8, 9, 10];

//4
let lastThree = numbers.slice(-3); //ამით შეიქმნება ახალი array (პირველი array-დან აიღებს ბოლო სამ ციფრს)
console.log(numbers); //output: [8, 9, 10];


// Assignment 5:
//1
let names = ["Zura", "Gela", "Manuchari", "Tarieli", "Avtandili"]; //ამას სხვანაირად ვერც დავწერდი :)

//2
numbers.sort();
console.log(names) // ["Avtandili", "Gela", "Manuchari", "Tarieli", "Zura"]; (a-z)

//3
numbers.sort().reverse();
console.log(names); //output: ["Zura", "Tarieli", "Manuchari", "Gela", "Avtandili"]; (z-a)


//Assignment 6:
//1
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];

//2
let position = numbers.indexOf(7); //ამით ვეუბნებით, რომ იპოვოს ის ადგილი თუ სად დგას ციფრი 7
console.log(position); //output: 6 

//3
let hasNumbers = numbers.includes(20); //ანუ ვეკიტხბეით, კონსოლი შეიცავს თუ არა ციფრ 20
console.log(hasNumbers);//output:false (რადგან 20 არ გვიწერია ცვლადში)

//4
let firstGreaterThen = number.findIdnex(num => num > 7); //ამ შემთხვევაში ცვლადში ვეზებტ ისეთ ელემენტს რომელიც არის 7-ზე დიდი
console.log(firstGreaterThen);//output: 7 (რადგან პირველი ციფრი რომელიც არის შვიდზე დიდი არის 8, მისი ინდექსი კი არის 7);

//5
let indexGreaterThan = -1; //ციკლს ვიწყებთ -1-ით იმ შემთხვევისთვის, თუ არ მოიძებნება ელემენტი, რომელიც იქნება 7-ზე მეტი
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 7) { //ამით ვამოწმებთ, არის თუ არა ციკლში მიმდინარე ელემენტი 7-ზე მეტი
        indexGreaterThan = i; // თუ მეტია ეს დაიმახსოვრებს მის მდეაბრეობას ანუ ინდექსს
        break; //და ეს შეწყვეტს ციკლს მაშინ როდესაც შეხვედაბ პირველივე ელემენტს, რომელიც იქნება შვიდზე დიდი
    }
} 
console.log(indexGreaterThan); //output: 7, რადგან შვიდზე დიდი არის 8, ხოლო მისი ინდექსი არის 7


//Assignment 7:
//1
let grid = [
    [1, 2, 3,],
    [4, 5, 6,],
    [7, 8, 9,]
];

//2
let elements = grid[1][2];//2D მასივში ელემენტებზე წვდომა ხდება ორი ინდექსით, row(რიგი) და column(სვეტი),და თუ გვინდა, რომ მაგალითად მეორე რიგის მესამე ელემენტზე გვქონდეს წვდომა მსგავსად უნდა დავწეროთ. 
console.log(elements); //output:6

//3
//Modify ნიშნავს, რაიმეს შეცვლას grid-ში, ანუ ამ შემთხვევაში კოდი იქნება ასეთი:
grid[2][1] = 10; //ამით ვეუბნებით, რომ მესამე რიგის მეორე სვეტში, 8 შეცვალოს 10-ით
console.log(grid);//output: 
// [1, 2, 3,],
// [4, 5, 6,],
// [7, 10, 9,]


//Assignment 8:
//1
let rendomElemets = [10, 20, 30, 40];

//2
let [first, second] = array;

console.log(first);  // Output: 10
console.log(second); // Output: 20

//3
[first, second] = [second, first];

console.log(first);  // Output: 20
console.log(second); // Output: 10

//Assignment 9:
//1
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

//2
let combineTheArray = array1.concat(array2); //ეს მეთოდი ორ array-ის შეაწებებს

console.log(combineTheArray); //output: [1, 2, 3, 4, 5, 6,];

//3
let combinedArray = [...array1, ...array2]; //spread operator (...)-ის დახმარებით შეაწებებს ორივე array-ის 
console.log(combineTheArray); //output: [1, 2, 3, 4, 5, 6];


//Assignment 10:
//1
let Numbers = [1, 2, 3, 4, 5];

//2
numbers.reverse(); //ეს მეთოდი array-ში არსებული კონტენტის წერას იწყებს ბოლოდან და მიდის დასაწყისამდე
console.log(Numbers); //ანუ output:[5, 4, 3, 2, 1];

//3
numbers.sort((a, b) => b - a); //ეს მეთოდი array-ში არსებულ შიგთავსს დაალაგებს კლებადობით
console.log(numbers);  // Output: [5, 4, 3, 2, 1];




  










