function sayi7(){
    document.getElementById("ekran").value += 7;
}

function sayi8(){
    document.getElementById("ekran").value += 8;
}

function sayi9(){
    document.getElementById("ekran").value += 9;
}

function sayi4(){
    document.getElementById("ekran").value += 4;
}

function sayi5(){
    document.getElementById("ekran").value += 5;
}

function sayi6(){
    document.getElementById("ekran").value += 6;
}

function sayi1(){
    document.getElementById("ekran").value += 1;
}

function sayi2(){
    document.getElementById("ekran").value += 2;
}

function sayi3(){
    document.getElementById("ekran").value += 3;
}

function sayi0(){
    document.getElementById("ekran").value += 0;
}

function carpi(){
    document.getElementById("ekran").value += "*";
}

function eksi(){
    document.getElementById("ekran").value += "-";
}

function arti(){
    document.getElementById("ekran").value += "+";

}

function virgul(){
    document.getElementById("ekran").value += ",";
}

function sifirla(){
    document.getElementById("ekran").value = "";
}

function esit(){
    var deger = document.getElementById("ekran").value;
    document.getElementById("ekran").value = eval(deger);
}