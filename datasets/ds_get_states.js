
function createDataset(fields, constraints, sortFields) {


  //var dataset = DatasetBuilder.newDataset()


  var constraints = []
  var c1 = DatasetFactory.createConstraint("UF", "AM", "AM", ConstraintType.MUST);
  var c2 = DatasetFactory.createConstraint("Cidade", "São Paulo", "São Paulo", ConstraintType.MUST);
  constraints.push(c1, c2);

  var ds = DatasetFactory.getDataset("ds_custom_city", null, constraints, null)


  return ds
}
