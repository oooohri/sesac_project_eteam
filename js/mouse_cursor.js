let mouseCursor = document.getElementById('cursor');

document.addEventListener('mousemove', cursor);
function cursor(e) {
  mouseCursor.style.top = e.pageY + document.body.scrollTop + 'px';
  mouseCursor.style.left = e.pageX + document.body.scrollLeft + 'px';
}
