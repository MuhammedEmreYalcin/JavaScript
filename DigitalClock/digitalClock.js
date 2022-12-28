function add(value){
    var makeString = value.toString();
    var long       = makeString.lenght;
        if(long===1){
            return "0"+makeString;
        }else{
            return makeString;
        }
}

function time(){
    var date    = new Date();
    var hours   = date.getHours();
    var min     = date.getMinutes();
    var sec     = date.getSeconds();
    document.getElementById("clock").innerHTML = add(hours)+":"+add(min)+":"+add(sec);
}
setInterval(time,1000);