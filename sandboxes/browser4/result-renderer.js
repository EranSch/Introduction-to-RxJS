function renderer(domNode) {
  const targetNode = domNode;
  return function(data) {

    var list = document.createElement('ul');

    data.forEach(result => {
      var item = document.createElement('li');
      item.innerHTML = result.label;
      list.appendChild(item);
    });

    targetNode.innerHTML = '';
    targetNode.appendChild(list);

  }
}

module.exports = renderer;
