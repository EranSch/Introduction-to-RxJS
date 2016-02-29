module.exports = (function() {
  var zIndex = 99999;
  return path => {
    var img = document.createElement('img');
    img.src = path;
    img.className = 'pic';
    img.style.position = 'absolute';
    img.style.top = '0';
    img.style.left = '0';
    img.style.marginTop = '-100px';
    img.style.marginLeft = '-100px';
    img.style.transform = 'translate(0px; 0px)';
    img.style.zIndex = zIndex--;
    return img;
  }
})();
