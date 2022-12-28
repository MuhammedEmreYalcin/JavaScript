function createpassword(){
    
    // Set the password length
    var length = document.getElementById("number").value;
    var codelength = Number(length);

    // Set the possible characters for the password
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const uppercase  = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY";
    const lowercase  = "abcdefghijklmnopqrstuvwxyz"
    const numbers    = "abcdefghijklmnopqrstuvwxyz0123456789";

    const uppercase1 = document.getElementById("uppercase");
    const numbers1 = document.getElementById("numbers");

    var password = "";

    if(uppercase1.checked==1 & numbers1.checked==1){
        for(var i=0; i<codelength; i++){
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        document.getElementById("code").innerHTML = password;
    }else if(uppercase1.checked==1){
            for(var i=0; i<codelength; i++){
                password += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
            }
            document.getElementById("code").innerHTML = password;
    }else if(numbers1.checked==1){
        for(var i=0; i<codelength; i++){
            password += numbers.charAt(Math.floor(Math.random() * numbers.length));
            }
            document.getElementById("code").innerHTML = password;
    }else{        
        for(var i=0; i<codelength; i++){
            password += lowercase.charAt(Math.floor(Math.random() * lowercase.length));
        }
        document.getElementById("code").innerHTML = password;
    }
}

function copy(){
        // Select the div element
        const divValue = document.getElementById('code').innerHTML;
        // Create a temporary input element
        const tempInput = document.createElement('input');
        // Set the value of the input element to the value of the div element
        tempInput.value = divValue;
        // Append the input element to the DOM
        document.body.appendChild(tempInput);
        // Select the text in the input element
        tempInput.select();
        // Copy the selected text to the clipboard
        document.execCommand('copy');
        // Remove the input element from the DOM
        document.body.removeChild(tempInput);
}   
