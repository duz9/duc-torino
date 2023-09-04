//Anno---------------------------------
var slider_anno = document.getElementById("barra_news_anno");
var output_anno = document.getElementById("valore_news_anno");
    //output_anno.innerHTML = slider_anno.value; 
    slider_anno.oninput = function() {
        var range_val_year = this.value;
        output_anno.innerHTML = this.value;

        //filter by year--------------------
    var data, fecha, giorno, mese, anno;
        for (i = 0; i < 9; i++) {
            news = document.getElementsByClassName("card");
            data = document.getElementsByClassName("post-date");
            fecha = new Date(data[i].dateTime);
            anno = fecha.getFullYear();
            if (anno == range_val_year) {
                news[i].style.display = "";
                //now add optional filter by month
                //[...]
              } else {
                news[i].style.display = "none";
              }
          }
      }

//Mese----------------------------------
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

    //filter by month--------------------------------
    var data, fecha, mese, mes;

for (i = 0; i < 9; i++) {
    news = document.getElementsByClassName("card");
    data = document.getElementsByClassName("post-date");
    fecha = new Date(data[i].dateTime);
    mese = fecha.getMonth();
    mes = mese+1;
     if (mes == range_val) {
      news[i].style.display = "";
    } else {
      news[i].style.display = "none";
    }
  }

  }


function news_filter() {
    var input, filter, title, i, a, news;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    for (i = 0; i < 9; i++) {
        news = document.getElementsByClassName("card");
        a = document.getElementsByClassName("post-title");
        title = a[i].textContent || a[i].innerText;
        if (title.toUpperCase().indexOf(filter) > -1) {
          news[i].style.display = "";
        } else {
          news[i].style.display = "none";
        }
      }
  }


function filter_by_tag(tag){
    var num_post = document.getElementsByClassName("post-tags").length;
    var lun = document.getElementsByClassName("news_tag").length;
    var tag_selected = tag;
    for (var i=0; i < num_post; i++) {
        var flag = 0;
        var element_id = document.getElementById(i);
        console.log(element_id);
        var element_tag = element_id.getElementsByClassName("news_tag")
        var lun = element_tag.length;
        for (var k=0; k<lun; k++){
            var tag_news_value = element_tag[k].innerText;
            if (tag_news_value==tag_selected){
                flag = 1;
            }
        }
        var news = document.getElementsByClassName("card");
        if (flag == 1){
            news[i].style.display = "";
        } else {
            news[i].style.display = "none";
        }
}
}


function ripristina_filtri_news(){

    var search_value = document.getElementById("myInput");
    search_value.value = "";
    var scritta_anno = document.getElementById("valore_news_anno");
    scritta_anno.innerHTML = "Seleziona l'anno";
    var scritta_mese = document.getElementById("valore_news_mese");
    scritta_mese.innerHTML = "Seleziona il mese";

    for (i = 0; i < 9; i++) {
        news = document.getElementsByClassName("card");
        news[i].style.display = "";
    }
}
