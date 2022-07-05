function validateForm(form) {


  var activity = parseInt(getValue("WKNumState"));



  var listFields = ["name", "mail", "rg", "cpf", "dpto"];

  var consts = {
    inicio: 4,
    analisar_reembolso: 5,
    aprovar_reembolso: 13
  }


  // switch (activity) {
  //   
  //   case consts.inicio:
  //     break;

  //   case consts.analisar_reembolso:
  //     break;

  //   case consts.aprovar_reembolso:

  //   default:
  //     break;
  // }



  if (activity == consts.inicio || activity == 0) {

    var validation = validationFields(form, listFields)


    for (var i = 0; i < validation.length; i++) {
      log.info(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>" + validation[i])
      throw ("WARNING: Campos não preenchidos" + validation[i]);
    }

  }
  if (activity == consts.analisar_reembolso) {

  }

  if (activity == consts.aprovar_reembolso) {

  }

}



function validationFields(form, fields) {
  var invalidFields = []

  for (var i = 0; i < fields.length; i++) {
    var field = form.getValue(fields[i])
    if (field == "" || field == null) {
      invalidFields.push(fields[i]);
    }
  }
  log.info(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>" + invalidFields)
  return invalidFields;
}
