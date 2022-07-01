function displayFields(form, customHTML) {

  var consts = {
    inicio: 4,
    analisar_reembolso: 5,
    aprovar_reembolso: 13
  }


  var listFields = ["name", "mail", "address", "numb", "cep", "rg", "cpf", "dpto"];

  var keyargs = [];

  var activity = parseInt(getValue("WKNumState"));
  log.info("*******************************************" + activity)

  if (activity == consts.inicio || activity == 0) {
    log.info("*****************************************" + consts.inicio)
    form.setVisibleById("analysi", false);
    form.setVisibleById("manager", false);
  }
  if (activity == consts.analisar_reembolso) {

    form.setVisibleById("manager", false);
  }
  if (activity == consts.aprovar_reembolso) {
    form.setValue("name", "Rodrigo Becker");

    keyargs.push("name", "mail");

    //disableField(form, listFields, keyargs);
  }

}

// function disableField(form, listFields, keyargs) {

//   for (var j = 0; j < listFields.length; j++) {


//     for (var i = 0; i < keyargs.length; i++) {

//       if (listFields[j] == keyargs[i]) {
//         listFields.p
//       }

//       form.setEnabled(listFields[j], false);
//     }
//   }
// }




