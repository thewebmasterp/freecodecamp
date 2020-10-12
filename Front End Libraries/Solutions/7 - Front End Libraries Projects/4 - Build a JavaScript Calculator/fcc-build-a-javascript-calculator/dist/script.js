'use strict';

//Within the following Calculator class is contained the 'hardcore' logic
function _classPrivateMethodGet(receiver, privateSet, fn) {if (!privateSet.has(receiver)) {throw new TypeError("attempted to get private field on non-instance");}return fn;}class Calculator {
  constructor() {_init.add(this);_evaluate.add(this);_add.add(this);
    this.statement = '';
    this.expression = '0';
    this.lastChar = null;
    this.lastOperation = null;
    this.listen = false;
  }


































































































  proceed(char) {
    //validation
    char = char.trim().toUpperCase();
    let cond1 = char.length > 0 && char.length < 3;
    let cond2 = !(char.length === 2 && char !== "AC");
    let cond3 = /AC|\d|\%|\/|\*|\-|\+|\=|\./.test(char);
    if (!(cond1 && cond2 && cond3)) throw new Error('Invalid Input!');

    switch (char) {
      case 'AC':
        return _classPrivateMethodGet(this, _init, _init2).call(this);
      case '=':
        return _classPrivateMethodGet(this, _evaluate, _evaluate2).call(this);
      default:
        return _classPrivateMethodGet(this, _add, _add2).call(this, char);}

  }}



//React components
var _add = new WeakSet();var _evaluate = new WeakSet();var _init = new WeakSet();var _add2 = function _add2(char) {const replaceLastCharacter = _with => {this.expression = this.expression.replace(/[\%|\/|\*|\-|\+]+$/, _with);};const isOperator = val => /\%|\/|\*|\-|\+/.test(val),isZero = val => val === '0' || val === 0,isNumber = val => /[1-9]/.test(val),isDecimal = val => val === '.';const push = exp => {this.statement += exp;if (Number(this.statement)) this.statement = Number(this.statement) + '';this.expression = '0';};if (this.listen && !isOperator(char)) {this.statement = '0';}this.listen = false;if (isOperator(char)) {if (isOperator(this.lastChar)) {if (char === '-') {this.expression += char;} else {replaceLastCharacter(char);}} else if (isDecimal(this.lastChar)) {this.expression += '0';push(this.expression);this.expression = char;} else if (isNumber(this.lastChar) || isZero(this.lastChar)) {push(this.expression);this.expression = char;} else if (this.lastChar === null) {this.expression += 0 + char;}this.lastOperation = char;} else if (isZero(char)) {if (isOperator(this.lastChar)) {push(this.expression);this.expression += '0.';this.lastOperation = '.';} else if (this.lastOperation === '.') {this.expression += char;} else {this.expression = Number(this.expression + char) + '';}} else if (isNumber(char)) {if (isOperator(this.lastChar)) {push(this.expression);this.expression = Number(this.expression + char) + '';} else if (isNumber(this.lastChar)) {this.expression = Number(this.expression + char) + '';} else if (this.lastChar === null) {this.expression = Number(this.expression + char) + '';} else {this.expression = Number(this.expression + char) + '';}} else if (isDecimal(char)) {if (isDecimal(this.lastChar) && this.lastOperation !== '.') {replaceLastCharacter(char);} else if (isOperator(this.lastChar) || this.expression.length === 0) {push(this.expression);this.expression += '0.';} else if (this.lastOperation !== '.') {this.expression += char;}this.lastOperation = '.';}this.lastChar = char;console.log([this.statement, this.expression]);return [this.statement, this.expression];};var _evaluate2 = function _evaluate2() {this.statement += this.expression;let evaluated = 1000 * eval(this.statement) / 1000 + '';if ((evaluated + '').length >= 7) {evaluated = Number.parseFloat(evaluated).toFixed(6);}this.expression = evaluated;this.statement += '=';let a = this.statement;let b = this.expression;_classPrivateMethodGet(this, _init, _init2).call(this, evaluated);this.listen = true;console.log([a, b]);return [a, b];};var _init2 = function _init2(exp) {this.statement = exp || '';this.expression = exp ? '' : '0';this.lastOperation = null;return [this.statement, this.expression];};
const Button = props => {
  //the ripple effect is achieved with one of the handy scripts I have in my github
  return (
    React.createElement("button", { onClick: e => props.click(e), className: "ripple light", id: props.id }, props.children));

};

const Display = props => {
  return (
    React.createElement(React.Fragment, null,
    React.createElement("div", { class: "output", id: "input", style: {
        paddingRight: props.displayVal.length * 20 } },
    props.inputVal),
    React.createElement("div", { class: "output", id: "display" }, props.displayVal)));


};

const buttons = {
  clear: 'AC',
  modulo: '%',
  divide: '/',
  seven: 7,
  eight: 8,
  nine: 9,
  multiply: '*',
  four: 4,
  five: 5,
  six: 6,
  subtract: '-',
  one: 1,
  two: 2,
  three: 3,
  add: '+',
  zero: 0,
  decimal: '.',
  equals: '=' };


const Numpad = props => {
  return (
    React.createElement("div", { id: "numpad" },
    Object.entries(buttons).map(([id, val]) => React.createElement(Button, { click: e => props.onInput(e), id: id }, val))));


};

const calc = new Calculator();
const App = () => {
  const [display, setDisplay] = React.useState(['', '0']);
  const inputHandler = char => {
    char = char.target.innerHTML;
    setDisplay(calc.proceed(char));
  };
  return (
    React.createElement("div", { id: "calculator" },
    React.createElement(Display, { inputVal: display[0], displayVal: display[1] }),
    React.createElement(Numpad, { onInput: char => inputHandler(char) })));


};

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));