const inputSection = document.getElementById('Square');
const countButton = document.getElementById('countButton');

function validateInput(input) {
    const integerRegex = /^-?\d+$/;
    return integerRegex.test(input);
}

inputSection.addEventListener('input', function () {
    const inputValue = inputSection.value.trim();
    if (validateInput(inputValue)) {
        countButton.disabled = false;
    } else {
        countButton.disabled = true;
    }
});

function reset() {
    document.getElementById('Square').value = '';
    countButton.disabled = true;
    resetResults();
}

var catchDisplay=""

function resetResults() {
    document.getElementById('luas').value = '';  
    document.getElementById('kel').value = '';  
}


function hitung(){
        luas();
        kel();
}

function luas() {
    var sisi = document.getElementById('Square').value;
    var luas = sisi * sisi;
    document.getElementById('luas').innerHTML = luas;
    console.log("Luas:", luas)
    if (document.getElementById('countButton').disabled === false) {
        document.getElementById('luas').innerHTML = luas;
        console.log("Luas:", luas);
    }
}

function kel() {
    var sisi = document.getElementById('Square').value;
    var kel = 4*sisi;
    document.getElementById('kel').innerHTML = kel;
    console.log("Keliling:", kel)
    if (document.getElementById('countButton').disabled === false) {
        document.getElementById('kel').innerHTML = kel;
        console.log("Keliling:", kel);
    }
}






