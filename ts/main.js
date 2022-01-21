// Skapa variabler
var firstName = "Steve";
var age = 31;
console.log(firstName, age);
// Skapa lista med en for-loop
var numbers = [1, 1, 2, 3, 5, 8, 13];
for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    var div = document.createElement("div");
    div.innerHTML = numbers[i].toString();
    document.body.appendChild(div);
}
// Skapa flera variabler av olika datatyper
var food = "Pizza";
var number = 777;
var trueFalse = true;
console.log(food, number, trueFalse);
