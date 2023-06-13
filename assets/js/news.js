//Anno
var slider_anno = document.getElementById("barra_news_anno");
var output_anno = document.getElementById("valore_news_anno");
    output_anno.innerHTML = slider_anno.value; 
    slider_anno.oninput = function() {
        output_anno.innerHTML = this.value;
      }

//Mese
var slider_mese = document.getElementById("barra_news_mese");
    var output_mese = document.getElementById("valore_news_mese");
    slider_mese.oninput = function() {
        var range_val = this.value;
        if (range_val==1){
            output_mese.innerHTML = "Gennaio";
        };
        if (range_val==2){
            output_mese.innerHTML = "Febbraio";
        };
        if (range_val==3){
            output_mese.innerHTML = "Marzo";
        };
        if (range_val==4){
            output_mese.innerHTML = "Aprile";
        };
        if (range_val==5){
            output_mese.innerHTML = "Maggio";
        };
        if (range_val==6){
            output_mese.innerHTML = "Giugno";
        };
        if (range_val==7){
            output_mese.innerHTML = "Luglio";
        };
        if (range_val==8){
            output_mese.innerHTML = "Agosto";
        };
        if (range_val==9){
            output_mese.innerHTML = "Settembre";
        };
        if (range_val==10){
            output_mese.innerHTML = "Ottobre";
        };
        if (range_val==11){
            output_mese.innerHTML = "Novembre";
        };
        if (range_val==12){
            output_mese.innerHTML = "Dicembre";
        };
      }


/* 

//Anno
var rangeSlider1 = document.getElementById("rs-range-line_year");
var rangeBullet1 = document.getElementById("rs-bullet_year");
rangeSlider1.addEventListener("input", showSliderValueyear, false);
function showSliderValueyear() {
  rangeBullet1.innerHTML = rangeSlider1.value;
  //var bulletPosition1 = (rangeSlider1.value /(rangeSlider1.max-rangeSlider1.min));
  var bulletPosition1 = rangeSlider1.value;
  console.log(bulletPosition1)
  rangeBullet1.style.left = (bulletPosition1-2000)*5 + "px";
  }


//mese
var rangeSlider = document.getElementById("rs-range-line_month");
var rangeBullet = document.getElementById("rs-bullet_month");

rangeSlider.addEventListener("input", showSliderValue, false);

function showSliderValue() {
  var range_val = rangeSlider.value
  if (range_val==1){
    rangeBullet.innerHTML = "Gennaio";
};
if (range_val==2){
    rangeBullet.innerHTML = "Febbraio";
};
if (range_val==3){
    rangeBullet.innerHTML = "Marzo";
};
if (range_val==4){
    rangeBullet.innerHTML = "Aprile";
};
if (range_val==5){
    rangeBullet.innerHTML = "Maggio";
};
if (range_val==6){
    rangeBullet.innerHTML = "Giugno";
};
if (range_val==7){
    rangeBullet.innerHTML = "Luglio";
};
if (range_val==8){
    rangeBullet.innerHTML = "Agosto";
};
if (range_val==9){
    rangeBullet.innerHTML = "Settembre";
};
if (range_val==10){
    rangeBullet.innerHTML = "Ottobre";
};
if (range_val==11){
    rangeBullet.innerHTML = "Novembre";
};
if (range_val==12){
    rangeBullet.innerHTML = "Dicembre";
};
 // rangeBullet.innerHTML = rangeSlider.value;
var bulletPosition = (range_val.value /rangeSlider.max);
rangeBullet.style.left = (bulletPosition * 578) + "px";
} */

var data = document.getElementById("orario");
var fecha = new Date(data.dateTime);
giorno = fecha.getFullYear()
console.log(giorno);

