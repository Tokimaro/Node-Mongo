var letter = ["a","b","c","d","e","f","g","j"]
var table = document.getElementById("mainChessBoard");
for (var i=0; i< 8; i++){
    for (var j = 0; j < 8; j++) {

    if ((i%2==0 && j%2 == 0) || (i%2!=0 && j%2 != 0) )
    {
    var elem = document.createElement("div");
  //  elem.style.backgroundColor = "black";
    elem.className = (letter[j]+i);
    elem.id="mainb";
    table.appendChild(elem);
    }
    else
    {
      var elem = document.createElement("div");
  //    elem.style.backgroundColor = "white";
        elem.className = (letter[j]+(i));
        elem.id="mainw";
        table.appendChild(elem);
    }
}  var letBoard = document.createElement("div");
  letBoard.className = (letter[i]);
  letBoard.id="letterBoard";
  letBoard.innerHTML = i+1;
  table.appendChild(letBoard);
}
