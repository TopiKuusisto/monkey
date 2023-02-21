const start = document.getElementById("start");
const reset = document.getElementById("reset");
const ready = document.getElementById("ready");

const problem1 = document.getElementById("prob1");
const problem2 = document.getElementById("prob2");
const problem3 = document.getElementById("prob3");

const answer1 = document.getElementById("ans1");
const answer2 = document.getElementById("ans2");
const answer3 = document.getElementById("ans3");

const res1 = document.getElementById("res1");
const res2 = document.getElementById("res2");
const res3 = document.getElementById("res3");

const result = document.getElementById("result");
resultCtr = 0;


let num1;
let num2;
let num3;
let num4;
let num5;
let num6; 

start.onclick = () => {

    res1.innerHTML = " ";
    res2.innerHTML = " ";
    res3.innerHTML = " ";

    answer1.innerHTML = " ";
    answer2.innerHTML = " ";
    answer3.innerHTML = " ";

    result.innerHTML = " ";

    num1 = Math.floor(Math.random()*11);
    num2 = Math.floor(Math.random()*11);
    num3 = Math.floor(Math.random()*11);
    num4 = Math.floor(Math.random()*11);
    num5 = Math.floor(Math.random()*11);
    num6 = Math.floor(Math.random()*11);

    start.style.pointerEvents = "none";
    ready.style.pointerEvents = "auto";
    

    setTimeout(() => {

    answer1.style.pointerEvents = "auto";
    answer2.style.pointerEvents = "auto";
    answer3.style.pointerEvents = "auto";

    

    problem1.innerHTML = " " + num1 + " x " + num2 + " = ";
    problem2.innerHTML = " " + num3 + " x " + num4 + " = ";
    problem3.innerHTML = " " + num5 + " x " + num6 + " = ";


    }, 500);

}

ready.onclick = () => {

    ready.style.pointerEvents = "none";
    start.style.pointerEvents = "none";

    answer1.style.pointerEvents = "none";
    answer2.style.pointerEvents = "none";
    answer3.style.pointerEvents = "none";


    if(answer1.value == num1*num2)
    {
        res1.innerHTML = ":-)";
        res1.style.color = "green";
        resultCtr++;
    }

    else
    {
        res1.innerHTML = ":-(";
        res1.style.color = "red";
    }

    if(answer2.value == num3*num4)
    {
        res2.innerHTML = ":-)";
        res2.style.color = "green";
        resultCtr++;
    }

    else
    {
        res2.innerHTML = ":-(";
        res2.style.color = "red";
    }

    if(answer3.value == num5*num6)
    {
        res3.innerHTML = ":-)";
        res3.style.color = "green";
        resultCtr++;
    }

    else
    {
        res3.innerHTML = ":-(";
        res3.style.color = "red";
    }

    if (resultCtr == 3)
    {
        result.innerHTML = "ALL CORRECT! GOOD WORK!";
        result.style.color = "green";
    }

    else{
        result.innerHTML = resultCtr + "/3 correct. Keep working!";
        result.style.color = "red";
    }
}

reset.onclick = () => {

    start.style.pointerEvents = "auto";
    result.style.pointerEvents = "none";

    res1.innerHTML = " ";
    res2.innerHTML = " ";
    res3.innerHTML = " ";

    answer1.value = " ";
    answer2.value = " ";
    answer3.value = " ";

    problem1.innerHTML = " ";
    problem2.innerHTML = " ";
    problem3.innerHTML = " ";

    result.innerHTML = " ";

}


