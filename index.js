var recipes={
  eggs: "3",
  flour: "1 cup",
  milk: "200ml"
};
function updateObjectWithKeyAndValue(recipes,salt,onetbspoon){
  var newrecipes=Object.assign(recipes,{salk:"onetbspoon"});
  return newrecipes;
}
function destructivelyUpdateObjectWithKeyAndValue(recipes,salt,onetbspoon){
  recipes[salt]=onetbspoon;
  return recipes;
}
function deleteFromObjectByKey(recipes,milk){
  return delete recipes.milk;
}
function destructivelyDeleteFromObjectByKey(recipes,milk){
  delete recipes[milk];
  return recipes;
}
