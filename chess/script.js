
$(document).ready(function(){
  var letter = ["a","b","c","d","e","f","g","j"];
  $("#start").click(function(){
    for (var j=0; j <= 3; j++) {
      for (var i = 0; i < 8; i++){
        if (j<1){
          if (i<5){
            var figure = '<img src='+"chess/b"+(i%5)+".png"+' alt="альтернативный текст">';
            var pos = "." + letter[i] + "7";
            $(pos).html(figure);
          }
          else {
            var figure = '<img src='+"chess/b"+((7-i)%5)+".png"+' alt="альтернативный текст">';
            var pos = "." + letter[i] + "7";
            $(pos).html(figure);
          };

        }
        else {
          if (j==1){
            var figure = '<img src='+"chess/b10.png"+' alt="альтернативный текст">';
            var pos = "." + letter[i] + "6";
            $(pos).html(figure);
          }
            else if (j==3) {
              var figure = '<img src='+"chess/w10.png"+' alt="альтернативный текст">';
              var pos = "." + letter[i] + "1";
              $(pos).html(figure);
            }
              else {
                if (i<5){
                  var figure = '<img src='+"chess/w"+(i%5)+".png"+' alt="альтернативный текст">';
                  var pos = "." + letter[i] + "0";
                  $(pos).html(figure);
                }
                else {
                  var figure = '<img src='+"chess/w"+((7-i)%5)+".png"+' alt="альтернативный текст">';
                  var pos = "." + letter[i] + "0";
                  $(pos).html(figure);
                }
              }
        }

      }
  }
  $("img").css({"height":"98px","width":"63px","margin-left": "10px"});
});
  $(".b1").click(function(){
    link=this.childNodes[0].src;
  //  alert(link);
//link=$(this);
console.log(link);
  });
});
