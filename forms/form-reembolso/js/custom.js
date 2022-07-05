
$("#add").click(function() {

  let add = wdkAddChild("table_amounts");

})

$("#cep").blur(function() {

  let cep = $(this).val()
  cep.replace("-", "");

  $.ajax({
    type: "GET",
    dataType: "json",
    url: `https://viacep.com.br/ws/${cep}/json`,
    success: function(data, status, xhr) {
      $("#street").val(data.logradouro);
      $("#neighborhood").val(data.bairro);
      $("#city").val(data.localidade);
      $("#uf").val(data.uf);
    },
    error: function(data, status, error) {
      alert("Erro ao buscar endereço");
    }
  });
});


$("#code_bank").blur(function() {
  let code = $(this).val()

  $.ajax({
    type: "GET",
    dataType: "json",
    url: `https://brasilapi.com.br/api/banks/v1/${code}`,
    success: function(data, status, xhr) {
      $("#bank").val(data.fullName);
    },
    error: function(data, status, error) {
      alert("Codigo Inválido");
    }
  });
});
