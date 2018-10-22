$(function(){
  $("#form").submit(function(event){
    event.preventDefault();
    var favColor = $("input#color").val();
    var favanimal = $("input#animal").val();
    var favnumber = $("input#number").val();

    var all = [favColor,favanimal,favnumber]
    $(".results").show();
;  }
}
