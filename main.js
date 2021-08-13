document.addEventListener("DOMContentLoaded", main, false);
var observer = new MutationObserver(main);
var target = document.getElementsByTagName('body');
observer.observe(target[0], { childList: true, subtree: true });

var following_back_color = 'rgb(29, 161, 242)';
var following_color = 'white';
var follow_back_color = 'rgba(0, 0, 0, 0)';
var follow_color = 'white';
var follow_cancel_back_color = 'rgb(220, 30, 41)';
var transparent = 'rgba(0, 0, 0, 0)';

function main(e) {
  console.log('main');
  var divs = document.getElementsByTagName('span');
  for (let i = 0; i < divs.length; i++) {
    const el = divs[i];
    if (isButton(el) && el.children.length == 0 && el.innerText.length != 0) {
      console.log(el);
      if (el.innerText == 'フォロー') {
        getParentButton(el).style.backgroundColor = follow_back_color;
        getParentButton(el).style.borderColor = follow_color;
        el.style.color = follow_color;
        getParentButton(el).addEventListener('mousemove', () => {
          getParentButton(el).style.backgroundColor = 'rgba(255,255,255,0.2)';
        });
        getParentButton(el).addEventListener('mouseleave', () => {
          getParentButton(el).style.backgroundColor = follow_back_color;
        });
      } else if (el.innerText == 'フォロー中') {
        getParentButton(el).style.backgroundColor = following_back_color;
        getParentButton(el).style.borderColor = transparent;
        el.style.color = following_color;

        getParentButton(el).addEventListener('mousemove', () => {
          getParentButton(el).style.backgroundColor = follow_cancel_back_color;
        });
        getParentButton(el).addEventListener('mouseleave', () => {
          getParentButton(el).style.backgroundColor = following_back_color;
        });
      } else if (el.innerText == 'フォロー解除') {
        getParentButton(el).style.backgroundColor = follow_cancel_back_color;
        el.style.color = follow_color;
        getParentButton(el).addEventListener('mousemove', () => {
          getParentButton(el).style.backgroundColor = follow_cancel_back_color;
        });
        getParentButton(el).addEventListener('mouseleave', () => {
          getParentButton(el).style.backgroundColor = following_back_color;
        });
      }
    }
  }
}

function getButtonText(el) {
  if (el.children[0].children[0].children[0].innerText)
    return (el.children[0].children[0].children[0].innerText)
  return 0
}

function isButton(el) {
  return ((el.parentNode.parentNode.parentNode) ? 1 : 0) && (el.parentNode.parentNode.parentNode.getAttribute('role') == 'button');
}

function getParentButton(el) {
  return (el.parentNode.parentNode.parentNode);
}
