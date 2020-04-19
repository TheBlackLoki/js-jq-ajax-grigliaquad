// Griglia 6x6,
// ad ogni click (su ogni rettangolino) parte una richiesta AJAX che prende un numero random da 1 a 9 (primo end-point della API in slide).
// Se il num ritornato è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato

$(document).ready(function(){
  $(".square").each(function () {
    $(this).on("click", function () {
      console.log($(this));
      var quadratoSelezionato=$(this)
      // se utente clicca 2 volte sullo stesso rettangolo lo mando a ca… gli dico che non si può;
      if ($(this).hasClass("yellow") || $(this).hasClass("green")) {
        alert("non cliccare ancora, scimmia")
      }else {
        $.ajax({
          url: "https://flynn.boolean.careers/exercises/api/random/int",
          method:"GET",
          success: function (data,stato) {
            console.log(data,stato);
            quadratoSelezionato.html(data.response)
            if (data.response <=5) {
              console.log($(this));
              quadratoSelezionato.addClass("yellow")
            }else {
              quadratoSelezionato.addClass("green")
            }
          },
          error:function (richiesta,stato,errore) {
            alert("Si è verificato un errore",errore)
          }
        })
      }
    })
  })
})
