
$(document).ready(function(){
  var letter = ["a","b","c","d","e","f","g","j"];
    for (var j=0; j <= 3; j++) {
      for (var i = 0; i < 8; i++){
        if (j<1){
          if (i<5){
            var figure = '<img src='+"chess/b"+(i%5)+".png"+' alt="альтернативный текст">';
            var pos = "." + letter[i] + "7";
            $(pos).append(figure);
          }
          else {
            var figure = '<img src='+"chess/b"+((7-i)%5)+".png"+' alt="альтернативный текст">';
            var pos = "." + letter[i] + "7";
            $(pos).append(figure);
          };

        }
        else {
          if (j==1){
            var figure = '<img src='+"chess/b10.png"+' alt="альтернативный текст">';
            var pos = "." + letter[i] + "6";
            $(pos).append(figure);
          }
            else if (j==3) {
              var figure = '<img src='+"chess/w10.png"+' alt="альтернативный текст">';
              var pos = "." + letter[i] + "1";
              $(pos).append(figure);
            }
              else {
                if (i<5){
                  var figure = '<img src='+"chess/w"+(i%5)+".png"+' alt="альтернативный текст">';
                  var pos = "." + letter[i] + "0";
                  $(pos).append(figure);
                }
                else {
                  var figure = '<img src='+"chess/w"+((7-i)%5)+".png"+' alt="альтернативный текст">';
                  var pos = "." + letter[i] + "0";
                  $(pos).append(figure);
                }
              }
        }

      }
  }

  $("img").css({"height":"98px","width":"63px","margin-left": "10px"});
  $("img").addClass("a22");
$("#start").click(function(){
for (var j=0; j <= 3; j++) {
  for (var i = 0; i < 8; i++){
    if (j<1){
      if (i<5){
        var figure = '<img src='+"chess/b"+(i%5)+".png"+' alt="альтернативный текст">';
        var pos = "." + letter[i] + "7";
        $(pos).empty();
        $(pos).append(figure);
      }
      else {
        var figure = '<img src='+"chess/b"+((7-i)%5)+".png"+' alt="альтернативный текст">';
        var pos = "." + letter[i] + "7";
        $(pos).empty();
        $(pos).append(figure);
      };

    }
    else {
      if (j==1){
        var figure = '<img src='+"chess/b10.png"+' alt="альтернативный текст">';
        var pos = "." + letter[i] + "6";
        $(pos).empty();
        $(pos).append(figure);
      }
        else if (j==3) {
          var figure = '<img src='+"chess/w10.png"+' alt="альтернативный текст">';
          var pos = "." + letter[i] + "1";
          $(pos).empty();
          $(pos).append(figure);
        }
          else {
            if (i<5){
              var figure = '<img src='+"chess/w"+(i%5)+".png"+' alt="альтернативный текст">';
              var pos = "." + letter[i] + "0";
              $(pos).empty();
              $(pos).append(figure);
            }
            else {
              var figure = '<img src='+"chess/w"+((7-i)%5)+".png"+' alt="альтернативный текст">';
              var pos = "." + letter[i] + "0";
              $(pos).empty();
              $(pos).append(figure);
            }
          }
    }

  }
}

$("img").css({"height":"98px","width":"63px","margin-left": "10px"});
$("img").addClass("a22");
});
  $(".a22").click(function(){
    var pos = ($(this).attr("src")).split("/");
    pos[1]="w30.png"
    $(this).remove('img');
  //var end = pos.join('/');
    //$(this).attr("src", end);
    //console.log(end);
  });
});
