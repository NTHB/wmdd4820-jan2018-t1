function getKeyByValue( object, value ) {
  return Object.keys(object).find(key => object[key] === value);
}

const me = {
  name: "Jacob",
  age: 39
}

getKeyByValue(me, 39);
