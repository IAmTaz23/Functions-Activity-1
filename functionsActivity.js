//1. Create a function called myFunction that console logs the text Hello World
console.log("Question1:")
function myFunction(){
    console.log("Hello World")
}


//2. Execute the function declared above
console.log("Question2:")
myFunction()

//3. Create a function that takes a number as a parameter. This function should return a number that is double the number in the parameter 
console.log("Question3:")
function doubleNumber(number) {
    const double  = number * 2
    return double
}

console.log(doubleNumber(4))

//4. Create a function that takes 2 numbers and multiplies them together
console.log("Question4:")

function TwoNumbers(one, two) {
    const product = one * two
    return product
}

console.log(TwoNumbers (4,8))


//5. Create a function that takes a string and IF the string is rainy, console logs "Bring an umbrella!"
console.log("Question5:")
function getWeather(weather) {
    if(weather === "rainy") {
        console.log("Bring an umbrella ")
    }
}
getWeather ("rainy")

//6. Write out what you think this will print
console.log("Question6:")

console.log(1)
console.log(2)

function callMe() {
console.log(3)
}

console.log(4)
blondie()
callMe()

function blondie() {
console.log(5)
}

console.log(6)
callMe()
console.log(7)