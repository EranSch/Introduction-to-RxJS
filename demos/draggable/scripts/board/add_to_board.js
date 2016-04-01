const icon = require('../icons/translate');

const board = global.domNodes.board;

module.exports = node => {
  const element = icon.render(icon.extract(node));
  return board.appendChild(element);
};