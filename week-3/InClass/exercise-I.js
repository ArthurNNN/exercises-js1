const array = [
    100,
    "iSMael",
    55,
    45,
    "sANyiA",
    66,
    "JaMEs",
    "eLAmIn",
    23,
    "IsMael",
    67,
    19,
    "ElaMIN",
  ];

  clearArray = array.filter(element => typeof element === 'string').map(name => name.toUpperCase() + "!");

  console.log(clearArray);