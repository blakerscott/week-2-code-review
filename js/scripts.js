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
      $(".ashville").show();
    } else if (money === "money1" && total < 3) {
      $(".obx").show();
    } else if (money === "money2" && total >= 3) {
      $(".patagonia").show();
    } else if (money === "money2" && total < 3) {
      $(".mexico").show();
    } else if (money === "money3" && total >= 3) {
      $(".germany").show();
    } else if (money === "money3" && total < 3) {
      $(".venice").show();
    } else if (money === "money4" && total >= 3) {
      $(".finland").show();
    } else {
      $(".ibiza").show()
    }
    event.preventDefault();
  });
});
