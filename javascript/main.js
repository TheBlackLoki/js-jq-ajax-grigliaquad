$(document).ready(function(){
  $(".square").each(function () {
    $(this).on("click", function () {
      console.log($(this));
      var quadratoSelezionato=$(this)
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
    })
  })
})
