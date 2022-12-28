var totalarea = 1000;

var chart1area  = document.getElementById("chart1");
var percentage1 = 100;
var calculate1  = 100 / percentage1;
var px1          = totalarea / calculate1;
var begin1      = 0;

var time1       = setInterval(function(){
    if(percentage1<50){
        document.getElementById("chart1").style.backgroundColor = "#F0E85D";
    }else if(percentage1<50){
        document.getElementById("chart1").style.backgroundColor = "#F0E85D";
    }
    document.getElementById("chart1").style.width = begin1 + "px";
    begin1 = begin1+1;
    if(begin1>=px1){
        document.getElementById("value1").innerHTML = "%"+percentage1 + "&nbsp;";
        clearInterval(time1)
    }
},1);

var chart2area  = document.getElementById("chart2");
var percentage2 = 20;
var calculate2  = 100/percentage2;
var px2          = totalarea/calculate2;
var begin2      = 0;

var time2       = setInterval(function(){
    if(percentage2<30){
        document.getElementById("chart2").style.backgroundColor = "red";
    }else if(percentage2<50){
        document.getElementById("chart2").style.backgroundColor = "#F0E85D";
    }
    document.getElementById("chart2").style.width = begin2+"px";
    begin2 = begin2+1;
    if(begin2>=px2){
        document.getElementById("value2").innerHTML = "%"+percentage2 + "&nbsp;";
        clearInterval(time2)
    }
},1);

var chart3area  = document.getElementById("chart3");
var percentage3 = 85;
var calculate3  = 100/percentage3;
var px3          = totalarea/calculate3;
var begin3      = 0;

var time3       = setInterval(function(){
    if(percentage3<50){
        document.getElementById("chart3").style.backgroundColor = "#F0E85D";
    }else if(percentage3<50){
        document.getElementById("chart3").style.backgroundColor = "#F0E85D";
    }
    document.getElementById("chart3").style.width = begin3+"px";
    begin3 = begin3+1;
    if(begin3>=px3){
        document.getElementById("value3").innerHTML = "%"+percentage3 + "&nbsp;";
        clearInterval(time3)
    }
},1);

var chart4area  = document.getElementById("chart4");
var percentage4 = 60;
var calculate4  = 100/percentage4;
var px4          = totalarea/calculate4;
var begin4      = 0;

var time4       = setInterval(function(){
    if(percentage4<50){
        document.getElementById("chart4").style.backgroundColor = "#F0E85D";
    }else if(percentage4<50){
        document.getElementById("chart4").style.backgroundColor = "#F0E85D";
    }
    document.getElementById("chart4").style.width = begin4+"px";
    begin4 = begin4+1;
    if(begin4>=px4){
        document.getElementById("value4").innerHTML = "%"+percentage4 + "&nbsp;";
        clearInterval(time4)
    }
},1);

var chart5area  = document.getElementById("chart5");
var percentage5 = 30;
var calculate5  = 100/percentage5;
var px5          = totalarea/calculate5;
var begin5     = 0;

var time5       = setInterval(function(){
    if(percentage5<50){
        document.getElementById("chart5").style.backgroundColor = "#F0E85D";
    }else if(percentage5<50){
        document.getElementById("chart5").style.backgroundColor = "#F0E85D";
    }
    document.getElementById("chart5").style.width = begin5+"px";
    begin5 = begin5+1;
    if(begin5>=px5){
        document.getElementById("value5").innerHTML = "%"+percentage5 + "&nbsp;";
        clearInterval(time5)
    }
},1);