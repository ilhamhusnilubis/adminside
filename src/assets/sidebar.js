function sidebar() {
$(document).ready(() => {
  $(".button-collapse").sidebar();
  var sideNavScrollbar = document.querySelector('.custom-scrollbar');
  var ps = new PerfectScrollbar(sideNavScrollbar);
});
}