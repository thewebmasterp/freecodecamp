function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _classPrivateFieldGet(receiver, privateMap) {var descriptor = privateMap.get(receiver);if (!descriptor) {throw new TypeError("attempted to get private field on non-instance");}if (descriptor.get) {return descriptor.get.call(receiver);}return descriptor.value;}const [SESSION, BREAK, TIME] = [25, 5, ['00', '00']];
const [color1, color2] = ['DodgerBlue', 'DarkOrange'];
const DEVELOPER_MODE = false;

const styleData = num => {
  let str = String(num);
  if (str.length === 1) str = 0 + str;
  return str;
};

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

class Timer {
  constructor(min, sec) {_defineProperty(this, "onZeroZero",












    f => this.onZeroZerof = f);_zeroZero.set(this, { writable: true, value:


      () => {
        console.log('zero zero !!');
        this.stop();
        if (this.onZeroZerof) this.onZeroZerof();
      } });_defineProperty(this, "start",


    () => {
      if (!this.running) {
        this.running = true;
        this.t = setInterval(() => {
          if (this.running) {
            //decrease the time with 1 second
            let totalSeconds = Number(this.min) * 60 + Number(this.sec);
            totalSeconds--;
            //convert it to mm:ss
            this.sec = styleData(totalSeconds % 60);
            this.min = styleData((totalSeconds - Number(this.sec)) / 60);
            //handle
            if (this.subscribed) this.subscribed([this.min, this.sec]);
            if (this.sec === '00' && this.min === '00') _classPrivateFieldGet(this, _zeroZero).call(this);
          }
        }, DEVELOPER_MODE ? 200 : 1000);
      } else {
        // throw "Already Started!"
      }
    });_defineProperty(this, "stop",


    () => {
      if (this.running) {
        this.running = false;
        clearInterval(this.t);
      } else {
        // throw "Already Stopped!"
      }
    });_defineProperty(this, "subscribe",




    func => this.subscribed = func);_defineProperty(this, "update",
    data => {
      this.subscribed(data);
    });this.min = min; //the minutes left
    this.sec = sec; //and the remainder of the minutes in seconds
    this.running = false;this.interval = null;}init(arr) {this.min = styleData(arr[0]);this.sec = styleData(arr[1]);} //user given function to call when timer reaches 00:00
  get time() {return [this.min, this.sec];}}var _zeroZero = new WeakMap();const Media = props => {
  return (
    React.createElement("button", { onClick: e => props.click(e), id: props.id, className: "media", style: {
        height: props.size + 'px',
        width: props.size + 'px' } },

    React.createElement("i", { className: props.classes })));


};

const Control = props => {
  return (
    React.createElement("div", { className: "control", id: props.ids[1] },
    React.createElement("div", { className: "label", id: props.ids[1] }, props.ids[1].split('-').map(str => str.capitalize())[0] + " Length"),
    React.createElement("div", { className: "input" },
    React.createElement(Media, { click: () => props.change(num => num < 60 ? num + 1 : num), size: "26", id: props.ids[0] + '-increment', classes: "fa fa-arrow-up" }),
    React.createElement("div", { id: props.ids[0] + '-length', class: "display", style: {
        height: '26px',
        lineHeight: '26px' } },
    props.children),
    React.createElement(Media, { click: () => props.change(num => num > 1 ? num - 1 : num), size: "26", id: props.ids[0] + '-decrement', classes: "fa fa-arrow-down" }))));



};

const Controls = props => {
  const setTimer = () => {
    if (props.timerStatus) {
      props.setTimerStatus(false);
    } else {
      props.setTimerStatus(true);
    }
  };
  const changeLenHandler = (ofWhat, state) => {
    if (!props.timerStatus) {
      return ofWhat(state);
    }
  };
  return (
    React.createElement("div", { id: "controls" },
    React.createElement("div", { id: "alignLeft" },
    React.createElement(Media, { id: "start_stop", click: () => setTimer(), size: "50", classes: `fa fa-${props.timerStatus ? 'pause' : 'play'}` }),
    React.createElement(Media, { id: "reset", click: () => props.resetCounter(), size: "50", classes: "fa fa-refresh" })),

    React.createElement("div", { id: "alignRight" },
    React.createElement("div", { id: "mode", style: {
        left: props.mode ? "130px" : "260px",
        background: props.mode ? color1 : color2 } }),

    React.createElement(Control, { change: state => changeLenHandler(props.changeSessionLen, state), ids: ['session', 'session-label'] }, props.session),
    React.createElement(Control, { change: state => changeLenHandler(props.changeBreakLen, state), ids: ['break', 'break-label'] }, props.break))));



};




// let a = 1;
let onlyOnce = true;

const Time = props => {
  const [timeLeft, setTimeLeft] = React.useState(props.currentTime);

  React.useEffect(() => {
    if (onlyOnce) {
      setTimeLeft(timer.time);
      onlyOnce = false;
    }
    timer.subscribe(setTimeLeft);
  }, [timeLeft]);
  return (
    React.createElement(React.Fragment, null,
    React.createElement("div", { id: "timer-label" }, props.mode ? 'Session' : 'Break'),
    React.createElement("div", { id: "time-left", style: {
        "background": props.mode ? color1 : color2 } },
    timeLeft[0] + ':' + timeLeft[1])));


};

const timer = new Timer(styleData(SESSION), '00');

const App = () => {
  const [sessionLen, changeSessionLen] = React.useState(SESSION);
  const [breakLen, changeBreakLen] = React.useState(BREAK);

  const [currentTime, setCurrentTime] = React.useState(TIME);
  const [timerStatus, setTimerStatus] = React.useState(false);
  const [mode, setMode] = React.useState(true); //true - session; false - break; 
  const beep = React.useRef(null);

  const zeroZeroHandler = () => {
    //beep a little
    beep.current.play();

    //toggle session/break
    if (mode) {
      setMode(false);
      timer.init([styleData(breakLen), '01']); //this 01 is because the decrement happens before the display and compensation is needed.
      timer.start();
    } else {
      setMode(true);
      timer.init([styleData(sessionLen), '01']);
      timer.start();
    }
  };
  timer.onZeroZero(zeroZeroHandler);

  const setSession = f => {
    //dirtyyyyy
    if (f) {
      let md;
      changeSessionLen(state => {
        md = f(state);
        return md;
      });
      setCurrentTime(time => {
        time = [styleData(md), '00'];
        timer.init(time);
        timer.update(time);
        return time;
      });
    }
  };

  const setBreak = f => {
    //dirtyyyyy
    if (f) {
      let md;
      changeBreakLen(state => {
        md = f(state);
        return md;
      });
      setCurrentTime(time => {
        return [styleData(md), '00'];
      });
    }
  };

  const init = () => {
    //could call it reset but I am too lazy to change it now.. 

    changeSessionLen(SESSION);
    changeBreakLen(BREAK);
    timer.stop();
    timer.init([SESSION, '00']);
    timer.update([SESSION, '00']);
    setCurrentTime(SESSION);
    setTimerStatus(false);

    //set the label to "session"
    setMode(true);

    //stop the beep
    beep.current.pause();
    beep.current.currentTime = 0;
  };

  //play/pause
  if (timerStatus) {
    timer.start();
  } else {
    timer.stop();
  }

  return (
    React.createElement("div", { id: "Countdown" },
    React.createElement(Time, { currentTime: currentTime, mode: mode }),
    React.createElement(Controls, {
      session: sessionLen,
      changeSessionLen: setSession,
      break: breakLen,
      changeBreakLen: setBreak,
      resetCounter: init,
      timerStatus: timerStatus,
      setTimerStatus: setTimerStatus,
      mode: mode }),
    React.createElement("audio", {
      id: "beep",
      preload: "auto",
      ref: beep,
      src: "https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" })));


};

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));