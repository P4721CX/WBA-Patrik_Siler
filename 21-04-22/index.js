console.log("Hello!");

function mojeFunkce(a, b)
{
    let sum = a+b;
    console.log("Součet čísel je: " + sum);
}
mojeFunkce(4,5);

const mojeFunkceJinak = (a,b) => {
    console.log("Součet čísel je: ", a+b);
}
mojeFunkceJinak(7,8);


const nadpis = document.getElementById("nadpis");
nadpis.innerHTML = "OLA!";

function KlikaciFunkce(){
    nadpis.innerHTML = "AHOJ!";
}



$(document).ready(() => {
    $("#nadpis").text("Už fakt nevím..");

    $("button").click(function(){
        alert("klikl jsi..");
    });
})