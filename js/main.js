function txtoneRemove() {
    let text1 = document.querySelector('.parone').value;
    let txtParone = text1.replace(/\s+/g, ' ');
    document.querySelector('.parone').value = txtParone;
}

var textarea = document.getElementsByTagName('textarea')[0];

textarea.addEventListener('keydown', resize);

function resize() {
  if (event.ctrlKey || event.cmdKey) {
      console.log('Вы нажали Ctrl');
  } else {
        var el = this;
  setTimeout(function() {
    el.style.cssText = 'height:auto; padding:0';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  }, 1);
  }

}
