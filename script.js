let myRequest = new XMLHttpRequest();

myRequest.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200) {
        document.getElementById('word').innerHTML = myRequest.responseText;
    }
};
myRequest.open("GET", "hangman.txt", true);
myRequest.send();

document.getElementById("btn"),addEventListener("click", getOneWord);

function getOneWord(){
    //console.log("IT WORKS");
   let myArray =  myRequest.responseText.split(", ")
   console.log(myArray)
}
