var recipe={
  eggs: "3",
  flour: "1 cup",
  milk: "200ml"
}
function updateObjectWithKeyAndValue(recipe,salt,'1 tbspoon'){
  return Object.assign({},recipe,{[salt]:'1 tbspoon'});
}
