exports.render = data => {
  const img = document.createElement('img');
  const {id, url, height, width, download} = data;
  img.src = url;
  img.height = height;
  img.width = width;
  // img.id = id;
  img.className = 'icon';
  img.dataset.download = download;
  if (data.offset) {
    img.style.transform = `translate(${data.offset.x}px, ${data.offset.y}px)`;
  }
  return img;
};

exports.extract = node => {
  return {
    url: node.src,
    height: node.height,
    width: node.width,
    // id: node.id,
    download: node.dataset.download,
    offset: {
      x: node.x,
      y: node.y
    }
  };
};