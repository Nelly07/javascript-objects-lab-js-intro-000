var recipe={
  eggs: "3",
  flour: "1 cup",
  milk: "200ml"
}
function updateObjectWithKeyAndValue(recipe,salt,onetbspoon){
  return Object.assign({},recipe,{[salt]:'onetbspoon'});
}
