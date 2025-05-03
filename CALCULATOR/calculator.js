let display = document.getElementById('display');
function OpendToDisplay(value) {
    display.value += value;
}

function ClearDisplay() {
    display.value = '';
}

function CalculateResult() {
    try{
        display.value = eval(display.value);
    }catch(error) {
        display.value ='Error';
    }
}

function DeletToDisplay() {
    display.value = display.value.slice(0,-1);
}