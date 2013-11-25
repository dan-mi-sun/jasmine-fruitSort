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
  // 4. Ajax bit
}