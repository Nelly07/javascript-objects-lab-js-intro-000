var recipe={
  eggs: "3",
  flour: "1 cup",
  milk: "200ml"
};
function updateObjectWithKeyAndValue(recipe,salt,onetbspoon){
  var newrecipe=Object.assign({},recipe);
  return newrecipe;
}
function destructivelyUpdateObjectWithKeyAndValue(recipe,salt,onetbspoon){
  recipe[salt]=onetbspoon;
  return recipe;
}
function deleteFromObjectByKey(recipe,milk){
  return delete recipe.milk;
}
function destructivelyDeleteFromObjectByKey(recipe,milk){
  delete recipe[milk];
  return recipe;
}
