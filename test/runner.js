require('basichtml').init();
const {
  default: augmentor,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} = require('../cjs');

const test = el => {

  useEffect(() => {
    console.log('after');
    return () => console.log('before');
  });

  useEffect(() => {
    console.log('again');
  }, random());

  useEffect(() => {
    console.error('THIS SHOULD NOT HAPPEN');
  }, (callback, result) => {
    console.log(result);
  });

  const counter = useRef(0);

  const [activated,  setActivated] = useState(() => false);
  const [firstTime,  setFirstTime] = useState(true);

  const onclick = useCallback(() => {
    counter.current++;
    if (firstTime)
      setFirstTime(false);
    setActivated(!activated);
  }, []);

  const onmouseover = useCallback((event) => {
    console.log(event.type, event.currentTarget.id);
  }, [counter.current]);

  const onshenanigans = useCallback((event) => {
    console.log(event.type, event.currentTarget.id);
  });

  useLayoutEffect(() => {
    console.log('current changed', counter.current);
    return () => console.log('current changed', counter.current);
  });

  const handler = useRef(Handler.new);

  el.innerHTML = `
    <strong>#${el.id}</strong><br>
    activated: ${activated}<br>
    first time: ${firstTime}<br>
    clicked: ${counter.current} times<br>
  `;

  el.addEventListener('click', onclick);
  el.addEventListener('mouseover', onmouseover);
  el.addEventListener('mouseover', handler.current);
  el.addEventListener('shenanigans', onshenanigans);

  return random().shift();

};

class Handler {
  static new() {
    return new Handler;
  }
  onmouseover(event) {
    console.log('over', event.currentTarget.id);
  }
  handleEvent(event) {
    this['on' + event.type](event);
  }
}

const [one, two] = [test, test].map(augmentor);

document.body.innerHTML = `
  <div id="first"></div>
  <div id="second"></div>
`;

const [first, second] = [
  document.querySelector('#first'),
  document.querySelector('#second')
];
one(first);
two(second);
first.click();
setTimeout(one.reset, 500);

function random() {
  return [Math.random()];
}

const App = augmentor(() => {
  const [state, update] = useState(0);
  useMemo(() => {
    update(state + 1);
  }, []);
  return () => state;
});

console.assert(App() === 1, 'no races');
