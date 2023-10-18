function myEach(collection, callback) {
    const collectionCopy = Object.entries(collection);
    for (let i = 0; i < collectionCopy.length; i++) {
      callback(collectionCopy[i][1]);
    }
    return collection;
  }
  
  function myMap(collection, callback) {
    const collectionCopy = Object.entries(collection);
    let builtArray = [];
    for (let i = 0; i < collectionCopy.length; i++) {
      builtArray.push(callback(collectionCopy[i][1]));
    }
    return builtArray;
  }
  
  function myReduce(collection, callback, acc) {
    const collectionCopy = Object.entries(collection);
    let accumulator = acc !== undefined ? acc : collectionCopy[0][1];
    let start = acc !== undefined ? 0 : 1;
    for (let i = start; i < collectionCopy.length; i++) {
      accumulator = callback(accumulator, collectionCopy[i][1]);
    }
    return accumulator;
  }
  
  function myFind(collection, predicate) {
    const collectionCopy = Object.entries(collection);
    for (let i = 0; i < collectionCopy.length; i++) {
      if (predicate(collectionCopy[i][1])) {
        return collectionCopy[i][1];
      }
    }
  }
  
  function myFilter(collection, predicate) {
    const collectionCopy = Object.entries(collection);
    let builtArray = [];
    for (let i = 0; i < collectionCopy.length; i++) {
      if (predicate(collectionCopy[i][1])) {
        builtArray.push(collectionCopy[i][1]);
      }
    }
    return builtArray;
  }
  
  function mySize(collection) {
    const collectionCopy = Object.entries(collection);
    let acc = 0;
    for (let i = 0; i < collectionCopy.length; i++) {
      acc += 1;
    }
    return acc;
  }
  
  function myFirst(arr, n) {
    if (n !== undefined) {
      return arr.slice(0, n);
    } else {
      return arr[0];
    }
  }
  
  function myLast(arr, n) {
    if (n !== undefined) {
      return arr.slice(arr.length - n);
    } else {
      return arr[arr.length - 1];
    }
  }
  
  function myKeys(obj) {
    let arr = [];
    for (const key in obj) {
      arr.push(key);
    }
    return arr;
  }
  
  function myValues(obj) {
    let arr = [];
    for (const key in obj) {
      arr.push(obj[key]);
    }
    return arr;
  }