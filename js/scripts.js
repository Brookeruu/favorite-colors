$(function(){
  $("#form").submit(function(event){
    event.preventDefault();
    var color = $("input#color").val();
    var color1 = $("input#color1").val();
    var color2 = $("input#color2").val();
    var color3 = $("input#color3").val();
    // var favanimal = $("input#animal").val();
    // var favnumber = $("input#number").val();

    var all = [color,color1,color2]
    all.push(color3)
    all.concat([color3]);
    [color,color1,color2]
    $(".results").show();
$("#clr").text(all[0]);
$("#anml").text(all[1]);
$("#numb").text(all[2]);
$("#newresults").text(all);

});
});
