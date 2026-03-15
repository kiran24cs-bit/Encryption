let map = {};
let reverseMap = {};
function encrypt(){
    const chars = "abcdefghijklmnopqrstuvwxyz123456789.'():?/@ ";
    let symbols = "!@#$%^&*()_+-={}[]:;<>,.?/|~ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    symbols=symbols.split("");
    let message = document.getElementById("normalmessage").value.toLowerCase();
    if(message.length === 0){
        document.getElementById("emptymessage").innerHTML="EMPTY INPUT...!";
        document.getElementById("decryptbutton").style.display="none";
        document.getElementById("decryptedmessage").innerHTML="";
        return;
    }
    if(!(/^[A-Za-z0-9./?()#:'@ ]+$/.test(message))){
        document.getElementById("emptymessage").innerHTML="EMPTY VALID INPUT...!";
        document.getElementById("decryptbutton").style.display="none";
        document.getElementById("decryptedmessage").innerHTML="";
        return;
    }
    map = {};
    reverseMap = {};
    for(let c of chars){
        let randno = Math.floor(Math.random()*symbols.length);
        let rand=symbols[randno];
        map[c] = rand;
        reverseMap[rand] = c;
        symbols.splice(randno,1);
    }
    let encrypted = "";
    for(let c of message){
        encrypted += map[c];
    }
    document.getElementById("normalmessage").value = encrypted;
    document.getElementById("decryptbutton").style.display="block";
}
function decrypt(){
    let encrypted = document.getElementById("normalmessage").value;
    let decrypted = "";
    for(let c of encrypted){
        decrypted += reverseMap[c];
    }
    document.getElementById("decryptedmessage").innerHTML = decrypted;
}
