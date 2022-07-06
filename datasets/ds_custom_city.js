
function createDataset(fields, constraints, sortFields) {

  var dataset = DatasetBuilder.newDataset()

  dataset.addColumn("UF");
  dataset.addColumn("Estado");
  dataset.addColumn("Cidade");

  var states = ListState();
  var params = {
    "UF": "",
    "Estado": "",
    "Cidade": ""
  }

  if (constraints != null && constraints.length) { // validation constraints

    for (var i = 0; i < constraints.length; i++) {

      if (constraints[i].fieldName == "UF") {
        params.UF = constraints[i].initialValue;

      }
      if (constraints[i].fieldName == "Estado") {
        params.Estado = constraints[i].initialValue;

      }
      if (constraints[i].fieldName == "Cidade") {
        params.Cidade = constraints[i].initialValue;
      }
    }

    for (var i = 0; i < states.length; i++) {
      if (params.UF == states[i].UF || params.Estado == states[i].Estado || params.Cidade == states[i].Cidade) {
        dataset.addRow([states[i].UF, states[i].Estado, states[i].Cidade]);
      }
    }

  } else {
    for (var i = 0; i < states.length; i++) {
      dataset.addRow([states[i].UF, states[i].Estado, states[i].Cidade]);
    }
  }


  // Create Columns

  // Create Rows 

  // dataset.addRow(["AM", "Amazonas", "Manaus"]);
  // dataset.addRow(["SP", "São Paulo", "São Paulo"]);
  // dataset.addRow(["RJ", "Rio de Janeiro", "Copacabana"]);
  // dataset.addRow(["MG", "Minas Gerais", "Goias"]);


  return dataset;

}

function ListState() {

  return [
    {
      "UF": "AM",
      "Estado": "Amazonas",
      "Cidade": "Manaus",
    },
    {
      "UF": "SP",
      "Estado": "São Paulo",
      "Cidade": "São Paulo",
    },
    {
      "UF": "RJ",
      "Estado": "Rio de Janeiro",
      "Cidade": "Copacabana",
    },
    {
      "UF": "MG",
      "Estado": "Minas Gerais",
      "Cidade": "Goaias",
    }
  ]
}
