// TODO

// 1. Sortables

// 2. calculatePositions
function calculatePositions(list) {
  var fruitList = list.childNodes;
  var positions = [];

  for (var i = 0; i < fruitList.length; i++) {

    $(fruitList[i]).attr("data-position", i);
    positions.push({"id":parseInt($(fruitList[i]).attr("id")),position:i});
  }
  return positions;
}
// 3. Set positions on the box
