var recipe={
  eggs: "3",
  flour: "1 cup",
  milk: "200ml"
}
function updateObjectWithKeyAndValue(recipe,salt,onetbspoon){
  var newrecipe=Object.assign({},recipe,{[salt]:'onetbspoon'});
  return newrecipe;
}
function destructivelyUpdateObjectWithKeyAndValue(recipe,salt,onetbspoon){
  recipe[salt]=onetbspoon;
  return recipe;
}
