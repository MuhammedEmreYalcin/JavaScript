function calculate(){
    var totalbill        = document.getElementById("bill").value;
    var tip              = document.getElementById("tippercent").value;

    var tipamount        = (totalbill/100)*tip;
    var totalbillwithtip = eval(totalbill+"+"+tipamount);
    document.getElementById("tipamountValue").innerHTML = tipamount;
    document.getElementById("totalBillValue").innerHTML = totalbillwithtip;
}

