$( function() {
    $( "#tasks__lists1, #tasks__list2, #tasks__list3, #tasks__list4" ).sortable({
      connectWith: ".tasks__list",
      tolerance: "touch"
    }).disableSelection();
  } );
  let datasetforgraph2=[];
  let colorsforgrapg=["red","blue","green","black"];
  let cancelfirsttime;
  let cancelsecondtime;
  let cancellist1;
  let cancellist2;
  let cancellist3;
  let canceltimescale;
  let cancelnouse;
  let idofkotl=21;
  document.addEventListener("DOMContentLoaded", function () {
    var graficButton = document.getElementById("graficforcheck");
  
    graficButton.addEventListener("click", function () {
      // Здесь вызывайте функцию, которая строит график
      // Например, вызов функции showChart()
      // Вызов функции для скрытия графика

    // Вызов функции для построения графика
    showChart();
    $(this).parents('.popup-fade').fadeOut();
      cancelbutt();
      return false;
    });
  });
  
  