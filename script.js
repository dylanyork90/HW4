
let firstArray = [];
ChangedWords.style.display = "none";
GetWords.style.display = "block";



var startBtn = document.querySelector("#start");
startBtn.addEventListener("click",StartProgram,false);

var changeBtn = document.querySelector("#changeWords");
changeBtn.style.visibility = "hidden";
changeBtn.addEventListener("click",ChangeWords,false);

function StartProgram(){
    startBtn.style.visibility = "hidden";
    var ul = document.getElementById("list1");
    var li;
    var i;
    for(i = 0; i < 3; i++) {
        firstArray.push(prompt("Please enter a word"));
        li = document.createElement("li");
        li.appendChild(document.createTextNode(firstArray[i]));
        ul.appendChild(li);
    }
    changeBtn.style.visibility = "visible"
}

function ChangeWords(){

    ChangedWords.style.display = "block";
    GetWords.style.display = "none";

    var secondArray = firstArray.map(function(oneWord) {
        return oneWord.charAt(oneWord.length - 1) + oneWord.substring(1, oneWord.length - 1) + oneWord.charAt(0); });
    

    var ul = document.getElementById("list2");
    var li;
    var i;
    for(i=0; i<3; i++)
    {

        li = document.createElement("li");
        li.appendChild(document.createTextNode(secondArray[i]));
        ul.appendChild(li);
    }
}
