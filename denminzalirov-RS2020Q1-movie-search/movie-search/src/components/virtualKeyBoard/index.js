import { keyBase } from './key';
import './index.css';

const virtualKeyBoard = () => null;

let leng = 'eng';
class Btn {
  constructor({
    code, value, valueShift, keySpecial,
  }) {
    this.code = code;
    this.value = value;
    this.valueShift = valueShift;
    this.leng = leng;
    this.keySpecial = keySpecial;
  }

  generateBtn() {
    const button = document.createElement('li');
    let template = '';
    if (this.keySpecial) {
      button.className = `btn-key-board btn-special ${this.keySpecial}`;
    } else { button.className = `btn-key-board ${this.code}`; }
    template += `<span class="">${this.value}</span>`;
    template += `<span class="hide">${this.valueShift}</span>`;
    button.innerHTML = template;
    return button;
  }
}

const classActive = (node) => {
  node.classList.add('active');
};
const classRemoveActive = (node) => {
  node.classList.remove('active');
};

// const textarea = document.createElement('textarea');
// const renderTextarea = () => {
//   textarea.id = 'textarea';
//   textarea.setAttribute('rows', '15');
//   return textarea;
// };
const main = document.createElement('main');
main.classList.add('main-key-board');
main.classList.add('main-key-board-hiden');
const section = document.createElement('section');

const inputValue = (val) => {
  main.classList.add('main-key-board');
  // let pozition = textarea.selectionStart;
  // const text = textarea.value;
  // const arr = text.split('');
  // arr.splice(pozition, 0, val);
  // textarea.value = arr.join('');
  // pozition += 1;
  // textarea.selectionStart = pozition;
  // textarea.selectionEnd = pozition;
  return val;
};

const renderKeyBoard = () => {
  section.remove();
  main.appendChild(section);
  section.innerHTML = '';
  keyBase[leng].map((el, id) => {
    const row = document.createElement('ul');
    row.className = `row-key-board row-${id}`;
    section.appendChild(row);
    return el.map((item) => {
      const btnEl = new Btn({ ...item });
      return row.appendChild(btnEl.generateBtn());
    });
  });

  let allBtn = document.querySelectorAll('.btn-key-board');
  const ctrlLeftNode = document.querySelector('.ControlLeft');
  const altlLeftNode = document.querySelector('.AltLeft');

  const keyUpListener = () => {
    allBtn.forEach((el) => {
      classRemoveActive(el);
    });
    allBtn = document.querySelectorAll('.btn-key-board');
  };
  allBtn.forEach((el) => {
    // eslint-disable-next-line consistent-return
    const mouseDownListener = (e) => {
      if (e.target.classList.contains('Space')) {
        inputValue(' ');
      }
      if (e.target.className.includes('Arrow')) {
        classActive(e.target);
        return inputValue('');
      }
      if (e.target.classList.contains('btn-key-board')) {
        if (e.target.classList.contains('btn-special')) {
          inputValue('');
          classActive(e.target);
        } else {
          classActive(e.target);
          inputValue(e.target.children.item(0).innerText);
        }
      }
      if (!e.target.classList.contains('btn-key-board')) {
        if (e.target.parentElement.className.includes('Arrow')) {
          classActive(e.target.parentElement);
          return inputValue('');
        }
        if (e.target.parentElement.classList.contains('btn-special')) {
          inputValue('');
          classActive(e.target.parentElement);
        } else {
          classActive(e.target.parentElement);
          inputValue(e.target.innerText);
        }
      }
    };
    el.addEventListener('mousedown', mouseDownListener);
    el.addEventListener('mouseup', () => {
      allBtn.forEach((elMouseup) => {
        classRemoveActive(elMouseup);
      });
    });
  });
  const keyDownListener = (e) => {
    // e.preventDefault();
    allBtn.forEach((el) => {
      if (el.classList.contains(e.code)) {
        if (el.classList.contains('ShiftLeft')
          || el.classList.contains('ControlLeft')
          || el.classList.contains('CapsLock')
          || el.classList.contains('MetaLeft')
          || el.classList.contains('AltLeft')
          || el.classList.contains('AltRight')
          || el.classList.contains('ControlRight')
          || el.classList.contains('ShiftRight')
          || el.classList.contains('Enter')
          || el.classList.contains('Backspace')
          || el.classList.contains('Delete')
          || el.classList.contains('ArrowLeft')
          || el.classList.contains('ArrowRight')
          || el.classList.contains('ArrowUp')
          || el.classList.contains('ArrowDown')
          || el.classList.contains('Tab')) {
          classActive(el);
        } else {
          classActive(el);
          inputValue(el.innerText);
        }
      }
    });
    if (ctrlLeftNode.classList.contains('active') && altlLeftNode.classList.contains('active')) {
      if (leng === 'eng') {
        leng = 'ru';
        allBtn = document.querySelectorAll('.btn-key-board');
        section.remove();
        renderKeyBoard();
      }
    }
    allBtn = document.querySelectorAll('.btn-key-board');
  };
  document.addEventListener('keydown', keyDownListener);
  document.removeEventListener('keyup', keyUpListener);
  document.addEventListener('keyup', keyUpListener);
  return section;
};

const init = () => {
  document.body.appendChild(main);
  main.appendChild(section);
  main.appendChild(renderKeyBoard());
};

init();

export default virtualKeyBoard;
