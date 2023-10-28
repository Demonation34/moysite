fortimescale();
function forchecknameofkotl(){
  $.ajax({
    url: "ajax/forcheckajaxnameofkot.php",
    type:"POST",
    data : {'idofkotl':idofkotl},
    dataType: 'json',
    success: function(data){
      var botofkotlname=document.getElementById('kotlname');
      botofkotlname.innerHTML=data;
    }
  });
}
forchecknameofkotl();
function insertAfter(newNode, existingNode) {
  existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}
function forcheckid1(){
  var check= document.getElementsByName('delenievremy');
   for (var i=0, len=check.length; i<len; ++i)
      if (check[i].checked)
      var checkid= check[i].id;
$.ajax({
  url: "ajax/forcheckajax.php",
  type : "POST",
  data : {'idofkotl':idofkotl},
  dataType: 'json',
  success: function (data) {
  var list1=document.getElementById("tasks__lists1");
  while (list1.firstChild) {
  list1.removeChild(list1.firstChild);
    }     
    for(let i=0;i<data.length;i=i+2){ 
  var cr=document.createElement('li');
  cr.innerHTML=`${data[i+1]}`;
  cr.id=data[i];
  list1.appendChild(cr);
        }
}});
}
forcheckid1();

function fortimeajax(){
button1.style.display = 'none';
button.style.display = 'none';
showChart()
var firsdata=document.getElementById("pervoe").value;
var secnddata=document.getElementById("vtoroe").value;
var timedel=$('input[name="delenievremy"]:checked').attr('id'); 
//не использованные параметры
listnouse=document.getElementById("tasks__lists1");
linouse=listnouse.querySelectorAll('li');
//список параметров 1
var listtask2=document.getElementById("tasks__list2");
var li=listtask2.querySelectorAll('li');
var stroka='';
// список параметров 2
var listtask3=document.getElementById("tasks__list3");
var li3=listtask3.querySelectorAll('li');
var stroka3='';
// список параметров 3
var listtask4=document.getElementById("tasks__list4");
var li4=listtask4.querySelectorAll('li');
var stroka4='';
//обновление переменных при нажатии кнопки отмены
cancelnouse=linouse;
cancellist1=li;
cancellist2=li3;
cancellist3=li4;
cancelfirsttime=firsdata;
cancelsecondtime=secnddata;
canceltimescale=timedel;

var arrli2=[];
//подготовка времени для запроса
firsdata=firsdata.replace('-','');
firsdata=firsdata.replace('-','');
firsdata=firsdata.replace('T',' ');
secnddata=secnddata.replace('-','');
secnddata=secnddata.replace('-','');
secnddata=secnddata.replace('T',' ');
  //строка 2ого списка
  for (let i=0;i<li.length;i++){
     if(i>0){
      stroka=stroka+' , ';
     }
     stroka=stroka+`${li[i].id}`;
    arrli2.push(li[i].id);

  }
  //строка 2ого списка
  for (let i=0;i<li3.length;i++){
     if(i>0){
      stroka3=stroka3+' , ';
     }
     stroka3=stroka3+`${li3[i].id}`;
  }
  //строка 2ого списка
  for (let i=0;i<li4.length;i++){
     if(i>0){
      stroka4=stroka4+' , ';
     }
     stroka4=stroka4+`${li4[i].id}`;
  }
  if (stroka.length==0){
    stroka="0";
  }
  if (stroka3.length==0){
    stroka3="0";
  }
  if (stroka4.length==0){
    stroka4="0";
  }
$.ajax({
  url: "ajax/forcheckajax2.php",
  type : "POST",
  data : {"idofkotl": idofkotl,"stroka": stroka,"stroka3": stroka3,"stroka4": stroka4,"firsdata": firsdata,"secnddata":secnddata,"timedel":timedel},
  dataType: 'json',
  success: function (datafromphp) {
    //удаление canvas
    document.querySelector('#myChart').remove();
    //создание нового canvas
    var newelem=document.createElement('canvas');
    newelem.id="myChart";
    document.getElementById('divforcanvas').appendChild(newelem);
    //создание dataset из полученного json
    var datasetforgraph=[];
     var datasetnum=[];
     var dataprimer=[];
     var colorch=0;
     var del='minute'
     if(timedel=='hour'){
      del='hour'
     }
     if(timedel=='day'){
      del='day'
     }
     if(timedel=='month'){
      del='month'
     }
     
     var kolvoy=[false,false,false];
    for(let i=0;i<datafromphp.length;i=i+2){
      if(datafromphp[i]=="!"){
       i++;
       let nuzhy;
       let massivdlyexper=[];
       let labelforgraph=[];
       labelforgraph=labelforgraph.concat(datafromphp[i]);
       i++;
       if(datafromphp[i]=="firsty"){
        kolvoy[0]=true;
        nuzhy="y";
       }
       if(datafromphp[i]=="secondy"){
        kolvoy[1]=true;
        nuzhy="y1";
       }
       if(datafromphp[i]=="thirdy"){
        kolvoy[2]=true;
        nuzhy="y2";
       }
       i++;
       for(let j=0;j<datasetforgraph.length;j++){
        massivdlyexper.push({...datasetforgraph[j]});
       }
        datasetnum.push({data:dataprimer.concat(datasetforgraph),yAxisID: nuzhy,label :`${labelforgraph[0]} , Y:${nuzhy}`,borderColor:colorsforgrapg[colorch++]});
        if(colorch==colorsforgrapg.length){
          colorch=0;
        }
        dataprimer.length=0;
        datasetforgraph.length=0;
      } 
      let dataforx=new Date(datafromphp[i+1])
      datasetforgraph.push({x:dataforx,y:datafromphp[i]});
    }
    var speedDAta={datasets:datasetnum};
    const myChart = new Chart(
  document.getElementById('myChart'),
  {
  type: 'line',
  data: speedDAta,
  options: {
        zoomEnabled : "true",
      scales: {
          x: {
              type: 'time',

              time: {
                unit: 'minute',
                  displayFormats: {
                      minute: 'yyyy-MM-dd HH:mm'
                  }},
              ticks:{

                  maxTicksLimit: 10,

                  callback: function(value, index, ticks) {
                      return  value;}
              }
              
          },
           y:{
            type: 'linear',
            display: kolvoy[0],
            position: 'left',
          },
          y1:{
              type: 'linear',
              display: kolvoy[1],
              position: 'left',
          },
          y2:{
              type: 'linear',
              display: kolvoy[2],
              position: 'left',
          }
      }
  }
}
);


}});
$('.popup-fade').fadeOut();
}
function cancelbutt(){
var listno=document.getElementById("tasks__lists1");
  while (listno.firstChild) {
  listno.removeChild(listno.firstChild);
    }     
    for(let i=0;i<cancelnouse.length;i++){ 
  listno.appendChild(cancelnouse[i]);
        }

var list1=document.getElementById("tasks__list2");
  while (list1.firstChild) {
  list1.removeChild(list1.firstChild);
    }     
    for(let i=0;i<cancellist1.length;i++){ 
  list1.appendChild(cancellist1[i]);
        }

        var list2=document.getElementById("tasks__list3");
  while (list2.firstChild) {
  list2.removeChild(list2.firstChild);
    }     
    for(let i=0;i<cancellist2.length;i++){ 
  list2.appendChild(cancellist2[i]);
        }
        var list3=document.getElementById("tasks__list4");
  while (list3.firstChild) {
  list3.removeChild(list3.firstChild);
    }     
    for(let i=0;i<cancellist3.length;i++){ 
  list3.appendChild(cancellist3[i]);
        }

  document.getElementById("pervoe").value=cancelfirsttime;
  document.getElementById("vtoroe").value=cancelsecondtime;
  document.getElementById(`${canceltimescale}`).checked=true;

}
document.querySelector('.scroll-table:nth-child(4)').style.display = 'none';
document.querySelector('.scroll-table:nth-child(3)').style.display = 'none';

$(document).ready(function () {
  $('#y2-axis-button').click(function () {
      // Perform some action when the button is clicked
      document.querySelector('.scroll-table:nth-child(4)').style.display = '';
      a.style.display='none';
  });
});
$(document).ready(function () {
  $('#y1-axis-button').click(function () {
      // Perform some action when the button is clicked
      document.querySelector('.scroll-table:nth-child(3)').style.display = '';
      b.style.display='none';
      a.style.display='';
  });
});

