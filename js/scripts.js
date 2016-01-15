$(document).ready(function(){
  $("form").submit(function(event){
    var money = $("select#money").val();
    var mountain = parseInt($("select#mountain").val());
    var city = parseInt($("select#city").val());
    var canoe = parseInt($("select#canoe").val());
    var explore = parseInt($("select#explore").val());
    var drink = parseInt($("select#drink").val());
    var total = mountain + city + canoe + explore + drink;
    if (money === "money1" && total >= 3) {
      $(".roger").show();
    } else if (money === "money1" && total < 3) {
      $(".pete").show();
    } else if (money === "money2" && total >= 3) {
      $(".pete").show();
    } else if (money === "money2" && total < 3) {
      $(".pete").show();
    } else if (money === "money3" && total >= 3) {
      $(".pete").show();
    } else if (money === "money3" && total < 3) {
      $(".pete").show();
    } else if (money === "money4" && total >= 3) {
      $(".pete").show();
    } else {
      $(".peggy").show()
    }
    event.preventDefault();
  });
});
