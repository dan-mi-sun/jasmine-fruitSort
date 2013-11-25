// TODO

// 1. Sortables

// 2. calculatePositions
function calculatePositions(list) {
  _(list.childNodes).each(function(li, i) {
    li.setAttribute("data-position", i);
  });
}

// 3. Set positions on the box

function updatePositions(data) {
  $.ajax({
    url: "http://localhost:3000/fruits/update_positions",
    type: "POST",
    data: data
  });
}



