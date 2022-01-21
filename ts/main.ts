// Skapa variabler
let firstName: string = "Steve";
let age: number = 31;

console.log(firstName, age);

// Skapa lista med en for-loop
let numbers: number[] = [1, 1, 2, 3, 5, 8, 13];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    
    let div = document.createElement("div");
    div.innerHTML = numbers[i].toString();
    document.body.appendChild(div);
}

// Skapar flera variabler av olika datatyper
let food: string = "Pizza";
let number: number = 777;
let trueFalse: boolean = true;

console.log(food, number, trueFalse);
