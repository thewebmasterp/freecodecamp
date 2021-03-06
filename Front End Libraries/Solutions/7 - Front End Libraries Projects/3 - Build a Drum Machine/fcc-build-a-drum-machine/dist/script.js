//GENERAL NEEDED FUNCTION DEFINITIONS AND CONSTANTS

const COLORS = { //notice the row ;)
  red: 'green',
  green: 'blue',
  blue: 'yellow',
  yellow: 'orange',
  orange: 'white',
  white: 'red' };


/* Randomize array using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function useEventListener(eventName, handler, element = window) {
  const savedHandler = React.useRef();
  React.useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);
  React.useEffect(
  () => {
    const isSupported = element && element.addEventListener;
    if (!isSupported) return;
    const eventListener = event => savedHandler.current(event);
    element.addEventListener(eventName, eventListener);
    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  },
  [eventName, element]);

};
//useEventListener component source: https://github.com/donavon/use-event-listener

function chageColor(audioEl) {
  let button = audioEl.parentElement;
  let buttonBColor = button.className.split(' ')[1];
  button.classList.remove(buttonBColor);
  button.classList.add(COLORS[buttonBColor]);
}

function playNow(e, updateCurrTrack, id) {
  console.log(id);
  if (!e.play) e = e.target.querySelector('audio') || e.srcElement.querySelector('audio');
  e.currentTime = 0;
  updateCurrTrack(id);
  // console.log(updateCurrTrack, id);
  chageColor(e);
  e.play();
}

//REACT COMPONENT DEFINITIONS

const DrumPad = props => {
  // console.log(props.color);
  let splittedSrc = props.src.split('/');
  let btnId = splittedSrc[splittedSrc.length - 1];

  return (
    React.createElement("button", { onClick: e => playNow(e, props.updateCurrTrack, btnId), id: btnId, className: `drum-pad ${props.color}` },
    props.children,
    React.createElement("audio", { src: props.src, id: props.children, className: "clip" })));


};

//Figure out (mesh and choose) initial button colors (Rubik's cube)
let colors = Object.keys(COLORS);
colors = shuffleArray(colors.map(color => Array(9).fill(color)).flat());

const NumPad = props => {
  const btns = {
    Q: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    W: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    E: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    A: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    S: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    D: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    Z: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    X: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    C: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' };

  handleKeydown = e => {
    let key = document.getElementById(e.key.toUpperCase());
    if (key) playNow(key, props.updateCurrTrack, key.parentElement.id);
  };
  //add event listener to the document
  useEventListener('keydown', handleKeydown);
  return (
    React.createElement("div", { id: "num-pad" },
    Object.keys(btns).map((letter, i, arr) => React.createElement(DrumPad, { updateCurrTrack: props.updateCurrTrack, color: colors[i], src: btns[letter] }, letter))));


};

const Display = props => {
  return (
    React.createElement("div", { id: "controls" },
    React.createElement("h5", { id: "display" }, props.track)));


};


const App = () => {
  const [currTrack, updateCurrTrack] = React.useState('Rock iit noow!');
  return (
    React.createElement("main", { id: "drum-machine" },
    React.createElement(NumPad, { updateCurrTrack: updateCurrTrack }),
    React.createElement(Display, { track: currTrack })));


};

ReactDOM.render(React.createElement(App, null), document.getElementById('App'));