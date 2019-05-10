
function handleClick(evt) {
    console.log(evt);
    let x = document.getElementById('userId').value;
    Number(x);
    console.log(Number(x));
    if (evt.target.id === 'addId') {
        // this needs sum = sum + userInput;
        sum = sum + Number(x);
        document.getElementById('headerId').textContent = sum;
    }
};

function handleSubtract(evt) {
    let x = document.getElementById('userId').value;
    if (evt.target.id === 'subtractId') {
        sum = sum - Number(x)
        document.getElementById('headerId').textContent = sum;

    }
}

function render(){
    let numberSum = document.createElement('h1');
    let add =document.createElement('li');
    let numberInput =document.createElement('li');
    let subtract =document.createElement('li');
    numberSum.textContent = sum;
    add.textContent = "+";
    numberInput.innerHTML = '<input type="number" value="1" id="userId"></input>';
    subtract.textContent = "-";
    add.setAttribute("id", 'addId');
    numberInput.setAttribute('id', 'numberInputId');
    subtract.setAttribute('id', 'subtractId');
    add.addEventListener('click', handleClick);
    subtract.addEventListener('click', handleSubtract);
    document.getElementById('headerId').appendChild(numberSum);
    document.getElementById('info').appendChild(add);
    document.getElementById('info').appendChild(numberInput);
    document.getElementById('info').appendChild(subtract);
};

let sum = 0;
let userInput = 0;








render();

