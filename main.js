window.addEventListener("load", main, false);
var observer = new MutationObserver(main);
var target = document.getElementsByTagName('body');
console.log(target);
observer.observe(target[0], { childList: true, subtree: true });

function main(e) {
  var x = document.getElementsByTagName('div');
  for (let index = 0; index < x.length; index++) {
    const el = x[index];
    if (el.getAttribute('aria-label')) {
      var elLabel = el.getAttribute('aria-label');
      if ((elLabel.indexOf('フォロー中') != -1)) {
        el.style.backgroundColor = 'rgb(29, 161, 242)';
        el.style.borderColor = 'rgba(0,0,0,0)';
      } else if ((elLabel.indexOf('フォロー') != -1)) {
        el.style.backgroundColor = 'rgba(0,0,0,0)';
        el.children[0].children[0].children[0].style.color = 'white';
        el.style.borderColor = 'rgb(83, 100, 113)';
      }
    }
  }
}
