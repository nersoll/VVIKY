

function newlayer(i) {
    return `<div id="myInput" class="input-group__input">
    <p  class="slide-num">${i} slide</p>
    <input class="input-txt" placeholder="dsaddsf" type="text"/>
    <p class="img-descr">type of image: LALA</p>
  </div>`
}

function newlayerend(){
    return `<div class="button">
   <input type="button" value="Generate"/>
    </div>`
}
function combine(){
    var x = "";
    const slider = document.getElementById('slider');
    var value = slider.value
    for(var i = 0; i < value; i++){
        console.log(x);
        x += newlayer(i + 1);

    }
    x+= newlayerend();
    document.querySelector("#submition").innerHTML += x;
}

function onClick(event) {
  combine()
  document
    .getElementById('submision')
    .removeEventListener("click", onClick);
}
document
.getElementById('submision')
.addEventListener("click", onClick);