$(document).ready(function(){
  $("form").submit(function(event){
    var gender = $("select#gender").val();
    var attractive = parseInt($("select#attractive").val());
    var describe = parseInt($("select#describe").val());
    var drink = parseInt($("select#drink").val());
    var prefer = parseInt($("select#prefer").val());
    var cigarette = parseInt($("select#cigarette").val());
    var total = attractive + describe + drink + prefer + cigarette;
    if (gender === "male" && total >= 3) {
      $(".roger").show();
    } else if (gender === "male" && total < 3) {
      $(".pete").show();
    } else if (gender === "female" && total >= 3) {
      $(".joan").show();
    } else {
      $(".peggy").show()
    }
    event.preventDefault();
  });
});
