document.addEventListener("DOMContentLoaded", main, false);
var observer = new MutationObserver(main);
var target = document.getElementsByTagName('body');
observer.observe(target[0], { childList: true, subtree: true });

function main(e) {
  console.log('main');
  var divs = document.getElementsByTagName('div');
  for (let i = 0; i < divs.length; i++) {
    const el = divs[i];
    if (el.getAttribute('aria-label')) {
      var elLabel = el.getAttribute('aria-label');
      if ((elLabel.indexOf('フォロー中') != -1)) {
        el.style.backgroundColor = 'rgb(29, 161, 242)';
        el.style.borderColor = 'rgba(0,0,0,0)';
        el.addEventListener('mousemove', () => {
          el.style.backgroundColor = 'rgb(220,30,41)';
        });
        el.addEventListener('mouseout', () => {
          el.style.backgroundColor = 'rgb(29, 161, 242)';
        });
      } else if ((elLabel.indexOf('フォロー') != -1)) {
        el.style.backgroundColor = 'rgba(0,0,0,0)';
        if (el.children[0].children[0].children[0])
          el.children[0].children[0].children[0].style.color = 'white';
        el.style.borderColor = 'rgb(83, 100, 113)';
        el.addEventListener('mousemove', () => {
          el.style.backgroundColor = 'rgba(255,255,255,0.15)';
        });
        el.addEventListener('mouseout', () => {
          el.style.backgroundColor = 'rgba(0,0,0,0)';
        });
      }
    }
  }
}
