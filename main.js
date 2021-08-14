//グローバル変数を宣言
var background_color;
var color;
var following_back_color;
var following_color;
var follow_back_color;
var follow_color;
const follow_cancel_back_color = 'rgb(220, 30, 41)';
const TRANSPARENT = 'rgba(0, 0, 0, 0)';


window.addEventListener('load', () => {//オブザーバー関係,dom更新時にmainを走らせる
  //console.log('DOMContentLoaded');
  var observer = new MutationObserver(main);
  var target = document.querySelector('body');
  //background_color.colorはmainで使われる
  background_color = target.style.backgroundColor;
  var id = setInterval(function () {
    var button = Array.from(document.getElementsByTagName('a')).filter(tag => tag.getAttribute('aria-label') == 'ツイートする')[0];
    if (button) {
      //console.log(button.style.backgroundColor);
      color = button.style.backgroundColor;
      //console.log(background_color);
      //console.log(color);
      setColors();
      //オブザーバー起動
      document.addEventListener("DOMContentLoaded", main, false);
      observer.observe(target, { childList: true, subtree: true });
      clearInterval(id);
    }
  }, 100);
});

function main(e) {
  //console.log('main');
  if (background_color == undefined || color == undefined)
    return;
  //console.log(background_color);
  //console.log(color);
  var divs = document.getElementsByTagName('span');
  for (let i = 0; i < divs.length; i++) {
    const el = divs[i];
    if (isButton(el) && el.children.length == 0 && el.innerText.length != 0) {
      ////console.log(el);
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
        getParentButton(el).style.borderColor = TRANSPARENT;
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

function isButton(el) {
  return ((el.parentNode.parentNode.parentNode) ? 1 : 0) && (el.parentNode.parentNode.parentNode.getAttribute('role') == 'button');
}

function getParentButton(el) {
  return (el.parentNode.parentNode.parentNode);
}

function setColors() {
  following_back_color = color;
  following_color = 'white';
  follow_back_color = 'rgba(0, 0, 0, 0)';
  if (background_color == 'rgb(255, 255, 255)') {
    follow_color = 'black';
  }
  else {
    follow_color = 'white';
  }
}
