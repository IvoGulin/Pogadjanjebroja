let btn = document.getElementById('btn');
let output = document.getElementById('outputtext');

let number = [Math.floor(Math.random() * 100)];

btn.addEventListener('click', function(){
    let input = document.getElementById('userInput').value;
    if (input == number)
	{
        output.innerHTML = "Dobro ste pogodili, vaš broj je bio " + number;
    } 
	else if (input < number)
	{
        output.innerHTML = "Pogodili ste prenisko!";
    }
    if (input > number)
	{
        output.innerHTML = "Previsoko si pogodio!";
    }
});