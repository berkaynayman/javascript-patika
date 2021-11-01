const INP_DOM     = document.querySelector('#task')
const LIST_DOM    = document.querySelector('#list')

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

function hasWhiteSpace(s) {
    return /\s/g.test(s);
}

function newElement() {
    if( hasWhiteSpace(INP_DOM.value) || INP_DOM.value == ""){
        $('#liveToast2').toast('show')
        INP_DOM.value = ""
    }else{
        let LI       = document.createElement('li')
        LI.innerHTML = `${INP_DOM.value}<span class="close">×</span>`
        LIST_DOM.append(LI)
        $('#liveToast1').toast('show')
        INP_DOM.value = ""

        for (i = 0; i < close.length; i++) {
            close[i].onclick = function () {
              var div = this.parentElement;
              div.style.display = "none";
            };
          }
    }
}

var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);