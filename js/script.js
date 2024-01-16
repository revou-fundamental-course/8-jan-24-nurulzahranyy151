let input=1234567890;
try {
    let user= INPUT.parse(input);
} catch (err){
    console.log("error name: ", err.name);
    console.log("error message:", err.message);
}


function luas(){
    var sisi = document.getElementById('Square').value;
    var luas = sisi * sisi;
    document.getElementById('luas').innerHTML = luas;
    console.log(luas);
}
function kel(){
    var sisi = document.getElementById('Square').value;
    var kel = 4*sisi;
    document.getElementById('kel').innerHTML = kel;
    console.log(kel);
}

function tampilkanOutput(){
    
}
