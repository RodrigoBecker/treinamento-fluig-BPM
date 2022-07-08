function displayFields(form, customHTML) {

  var consts = {
    inicio: 4,
    analisar_reembolso: 5,
    aprovar_reembolso: 13
  }

  // methods 

  // form.setValue("field", "value");
  // form.getValue("field");
  // form.setEnabled("field", boolean);
  // form.setVisibleById("id", boolean);
  // form.setVisible("field", boolean);
  // 


  var listFields = ["name", "mail", "address", "numb", "cep", "rg", "cpf", "dpto"];

  var kargs = [];

  var activity = parseInt(getValue("WKNumState"));
  log.info("*******************************************" + activity)

  if (activity == consts.inicio || activity == 0) {
    log.info("*****************************************" + consts.inicio)
    form.setVisibleById("analysi", false);
    form.setVisibleById("manager", false);

    // var user = getValue("WKUser");
    // var result = getColleagueUser(user)

    // form.setValue("name", result.getValue(0, "colleagueName"));
    // form.setValue("mail", result.getValue(0, "mail"));

    var user = fluigAPI.getUserService().getCurrent()

    log.info("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$" + user);
    form.setValue("name", user.fullName);
    form.setValue("mail", user.email)
    //form.setEnabled("name", false);
    //form.setEnabled("mail", false);

    kargs.push("mail", "name", "cep")
    disableField(form, listFields, kargs);
  }
  if (activity == consts.analisar_reembolso) {

    form.setVisibleById("manager", false);
  }
  if (activity == consts.aprovar_reembolso) {
    form.setValue("name", "Rodrigo Becker");

    kargs.push("name", "mail");

    disableField(form, listFields, kargs);
  }

}


// function abstract disableField with array list fields and with kargs
function disableField(form, listFields, kargs) {

  for (var i = 0; i <= listFields.length; i++) {

    for (var j = 0; j < kargs.length; j++) {

      if (listFields[i] == kargs[j]) {
        listFields.splice(listFields.indexOf(listFields[i]), 1);
        j = 0;
      }
    }
    form.setEnabled(listFields[j], false);

  }
}

function getColleagueUser(user) {

  var constraints = []
  var c1 = DatasetFactory.createConstraint("colleaguePK.colleagueId", user, user, ConstraintType.MUST);
  constraints.push(c1);
  return DatasetFactory.getDataset("colleague", null, constraints, null);
}
