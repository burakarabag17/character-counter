function wordCount(){
    var count = 0;
    var text = document.getElementById("txtarea").value;
    var split = text.split(' ');
    for (var i = 0; i < split.length; i++) {
     if (split[i] != "") {
      count ++;
     }
    }
    document.getElementById("showCount").innerHTML = count;
   }

function letterCount(){
    var str = document.getElementById("txtarea").value;
    document.getElementById("showLetter").innerHTML = str.length
}

function deleteFunction(){
    var text = document.getElementById("txtarea");
    text.value = ""; 
    document.getElementById("showCount").innerHTML = 0;
    document.getElementById("showLetter").innerHTML = 0;
}