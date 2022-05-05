console.log("Hello world!");

function sumNumbers(a, b)
{
    let sum = a + b;
    console.log("Součet čísel je: " + sum);
}

sumNumbers(3, 4);

let cars = ["Honda", "Škoda", "Mitsubishi", "Subaru", "Dodge", "Nisan", "Ford"];

console.log(cars);

cars.forEach(carItem => {
    console.log("Položka pole: " + carItem);
})


function nevim(x){
    if(x>3 == true)
    {
        console.log("Ahoj")
    }
    else{
        console.log("Hello")
    }
}
nevim(4);