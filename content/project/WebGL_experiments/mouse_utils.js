
function getRelativeMousePosition(event, target) {
  var rect = target.getBoundingClientRect();

  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  }
}

// assumes target or event.target is canvas
export function getNoPaddingNoBorderCanvasRelativeMousePosition(event, target) {
  target = target || event.target;
  var pos = getRelativeMousePosition(event, target);

  pos.x = pos.x / target.width  *  2 - 1;
  pos.y = pos.y / target.height * -2 + 1;

  return pos;
}
