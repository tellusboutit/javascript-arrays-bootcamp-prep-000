var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray (array, element){
  array.unshift(element)
  return array
}

function destructivelyAddElementToBeginningOfArray (array, element){
  var desAddBegArray = array.unshift(element)
  return array
}

function addElementToEndOfArray (array,element){
  array.push(element)
  return array
}

function destructivelyAddElementToEndOfArray (array, element){
  var desAddEndArray = array.push(element)
  return array
}

function accessElementInArray (array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  var desRemoveArray = array.shift()
  return array
}

function removeElementFromBeginningOfArray (array){
  array = array.slice(1)
  return array
}

function destructivelyRemoveElementFromEndOfArray(array){

}
