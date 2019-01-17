let now = null;
const current = () => now;

const empty = [];
const setup = [];

const $ = value => typeof value === typeof $ ? value() : value;

const diff = (a, b) => (a.length !== b.length || a.some(diverse, b));

const stacked = id => runner => {
  const state = {i: 0, stack: []};
  runner[id] = state;
  runner.before.push(() => {
    state.i = 0;
  });
};

let id = 0;
const uid = () => '_$' + id++;

const unstacked = id => {
  const {[id]: state, update} = now;
  const {i, stack} = state;
  state.i++;
  return {i, stack, update, unknown: i === stack.length};
};

var augmentor = fn => {
  const current = runner($);
  each(setup, current);
  $.reset = () => {
    each(current.reset, current);
    for (const key in current) {
      if (/^_\$/.test(key))
        current[key].stack.splice(0);
    }
  };
  return $;
  function $() {
    const prev = now;
    now = current;
    try {
      const {_, before, after, external} = current;
      each(before, current);
      const result = fn.apply(_.c = this, _.a = arguments);
      each(after, current);
      if (external.length)
        each(external.splice(0), result);
      return result;
    }
    finally {
      now = prev;
    }
  }
};

const each = (arr, value) => {
  const {length} = arr;
  let i = 0;
  while (i < length)
    arr[i++](value);
};

const runner = $ => {
  const _ = {
    c: null,
    a: null
  };
  return {
    _: _,
    before: [],
    after: [],
    external: [],
    reset: [],
    update: () => $.apply(_.c, _.a)
  };
};

function diverse(value, i) {
  return value !== this[i];
}

const id$1 = uid();

let cancel, request;

try {
  cancel = cancelAnimationFrame;
  request = requestAnimationFrame;
} catch (o_O) {
  // i.e. if you run this in NodeJS
  cancel = clearTimeout;
  request = setTimeout;
}

const create = (always, check, inputs, raf, fn) => ({
  always,
  check,
  inputs,
  raf,
  fn,
  clean: null,
  t: 0,
  update: check
});

const effect = raf => (callback, refs) => {
  const {i, stack, unknown} = unstacked(id$1);
  const comp = refs || empty;
  if (unknown) {
    const always = comp === empty;
    const check = always || !raf || typeof comp !== typeof effect;
    if (always || !raf || typeof comp !== typeof effect) {
      stack.push(create(always, check, comp, raf, () => {
        set(stack[i], callback());
      }));
    } else {
      current().external.push(result => refs(callback, result));
      stack.push(create(always, always, empty, raf, effect));
    }
  } else {
    const info = stack[i];
    const {check, always, inputs} = info;
    if (check && (always || diff(inputs, comp))) {
      info.inputs = comp;
      info.update = true;
    }
  }
};

const set = (info, clean) => {
  info.t = 0;
  info.clean = clean;
};

setup.push(runner => {
  const stack = [];
  const state = {i: 0, stack};
  runner[id$1] = state;
  const reset = () => {
    state.i = 0;
    for (let {length} = stack, i = 0; i < length; i++) {
      const {check, clean, raf, t} = stack[i];
      if (check) {
        if (raf && t)
          cancel(t);
        else if (clean)
          clean();
        set(stack[i], null);
      }
    }
  };
  runner.reset.push(reset);
  runner.before.push(reset);
  runner.after.push(() => {
    for (let {length} = stack, i = 0; i < length; i++) {
      const {fn, raf, update} = stack[i];
      if (update) {
        if (raf)
          stack[i].t = request(fn);
        else
          stack[i].clean = fn();
      }
    }
  });
});

const useEffect = effect(true);

const id$2 = uid();

setup.push(stacked(id$2));

var ref = value => {
  const {i, stack, unknown} = unstacked(id$2);
  if (unknown)
    stack.push({current: $(value)});
  return stack[i];
};

const id$3 = uid();

setup.push(stacked(id$3));

var useReducer = (reducer, value) => {
  const {i, stack, unknown, update} = unstacked(id$3);
  if (unknown)
    stack.push([
      $(value),
      action => {
        value = reducer(value, action);
        pair[0] = value;
        update();
      }
    ]);
  const pair = stack[i];
  return pair;
};

var state = value => useReducer(
  (_, value) => value,
  value
);

const id$4 = uid();

setup.push(stacked(id$4));

var useMemo = (callback, refs) => {
  const {i, stack, unknown} = unstacked(id$4);
  const comp = refs || empty;
  if (unknown)
    stack.push(create$1(callback, comp));
  const {filter, value, fn, inputs} = stack[i];
  return (filter ? diff(inputs, comp) : (callback !== fn)) ?
          (stack[i] = create$1(callback, comp)).value :
          value;
};

const create$1 = (fn, inputs) => ({
  filter: inputs !== empty,
  value: fn(),
  fn,
  inputs
});

var callback = (fn, inputs) => useMemo(() => fn, inputs);

function getNativeConstructor(ext) {
  return ext ? document.createElement(ext).constructor : HTMLElement;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * **Note:** The result of compose is not automatically curried.
 *
 * @func
 * @param {...Function} fns - The functions to compose.
 * @return {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);

const camel = name => name.replace(/-([a-z])/g, ($0, $1) => $1.toUpperCase());

/**
 * Create a complete assign function with custom descriptors.
 * @param  {Object} options - The custom descriptor options.
 * @return {Function}
 */
function createCompleteAssign(options) {
    return (target, ...sources) => {
        sources.forEach((source) => {
            for (const prop in source) {
                const descriptor = Object.getOwnPropertyDescriptor(source, prop);
                Object.defineProperty(target, prop, Object.assign(descriptor, options));
            }
        });
        return target;
    };
}

/**
 * Complete assign is used to copy the values of all enumerable own properties from one or more source objects to a target object, including getters and setters. It will return the target object. Properties are still allowed to be overridden.
 *
 * @param  {Object} target
 * @param  {...Object} sources
 * @return {Object} The target with assigned properties
 */
const completeAssign = createCompleteAssign({
    enumerable: false,
    configurable: true,
    writeable: false
});

function CustomEvent(name, params = {}) {
  if ('CustomEvent' in window && typeof window.CustomEvent === 'function') {
    return new window.CustomEvent(name, params);
  } else {
    var newEvent = document.createEvent('CustomEvent');
    newEvent.initCustomEvent(name, params.bubbles, params.cancelable, params);
    return newEvent;
  }
}

const CONNECTED = 'connected';
const DISCONNECTED = 'dis' + CONNECTED;

function element(...enhancers) {
  let enhancer = compose(...enhancers);
  return (renderFn, options) => enhancedElement(renderFn, enhancer, options);
}

function enhancedElement(renderFn, enhancer, options) {
  if (typeof enhancer !== 'function' && typeof options === 'undefined') {
    options = enhancer;
    enhancer = undefined;
  }

  const Native = getNativeConstructor(options && options.extends);
  function CustomElement() {
    if (typeof enhancer !== 'undefined') {
      if (typeof enhancer !== 'function') {
        throw new Error('Expected the enhancer to be a function.');
      }

      const enhancerRef = enhancer;
      enhancer = undefined;
      const element = enhancerRef(CustomElement)(options);
      enhancer = enhancerRef;
      return element;
    }

    if (!(this instanceof CustomElement)) {
      return new CustomElement();
    }
    if (typeof Reflect !== 'undefined') {
      return Reflect.construct(Native, [], this.constructor);
    }
    return Native.call(this);
  }

  const proto = CustomElement.prototype = Object.create(Native.prototype);
  proto.constructor = CustomElement;

  CustomElement.observedAttributes = options && options.observedAttributes || [];
  CustomElement.observedAttributes.forEach(name => {
    // it is possible to redefine the behavior at any time
    // simply overwriting get prop() and set prop(value)
    if (!(name in proto)) Object.defineProperty(
      proto,
      camel(name),
      {
        configurable: true,
        get() {
          return this.getAttribute(name);
        },
        set(value) {
          if (value == null)
            this.removeAttribute(name);
          else
            this.setAttribute(name, value);
        }
      }
    );
  });

  const update = augmentor(requestUpdate);

  function requestUpdate() {
    this.renderer(this.renderRoot, render.bind(this));
    return this;
  }

  function connectedCallback() {
    update.call(this);
    this.dispatchEvent(new CustomEvent(CONNECTED));
  }

  function disconnectedCallback() {
    this.dispatchEvent(new CustomEvent(DISCONNECTED));
  }

  function renderer(root, html) {
    root.innerHTML = html();
  }

  function render() {
    return renderFn.call(this, this);
  }

  function attributeChangedCallback(name, oldValue, newValue) {
    if (this.shouldUpdate(oldValue, newValue)) {
      update.call(this);
    }
  }

  function shouldUpdate(oldValue, newValue) {
    return oldValue !== newValue;
  }

  completeAssign(proto, {
    connectedCallback,
    disconnectedCallback,
    attributeChangedCallback,
    shouldUpdate,
    renderer,
    get renderRoot() {
      return this.shadowRoot || this._shadowRoot || this;
    }
  });

  return CustomElement;
}

function useEffect$1(fn, inputs = []) {
  const args = [fn];
  if (inputs)
    // if the inputs is an empty array
    // observe the returned element for connect/disconnect events
    // and invoke effects/cleanup on these events only
    args.push(inputs.length ? inputs : lifecycleHandler);
  return useEffect.apply(null, args);
}

function lifecycleHandler($, element$$1) {
  const handler = { handleEvent, onconnected, ondisconnected, $, _: null };
  element$$1.addEventListener(CONNECTED, handler, false);
  element$$1.addEventListener(DISCONNECTED, handler, false);
}

function handleEvent(e) {
  this['on' + e.type]();
}

function onconnected() {
  ondisconnected.call(this);
  this._ = this.$();
}

function ondisconnected() {
  const {_} = this;
  this._ = null;
  if (_)
    _();
}

function defaultRenderer(root, html) {
  root.innerHTML = html();
}

function rndrr(renderer = defaultRenderer) {
  return createElement => (...args) => {
    const element = createElement(...args);
    return Object.assign(element, {
      renderer,
    });
  };
}

function applyMiddleware(...middlewares) {
  return createElement => (...args) => {
    const element = createElement(...args);

    let renderer = () => {
      throw new Error(
        `Rendering while constructing your middleware is not allowed. ` +
          `Other middleware would not be applied to this renderer.`
      );
    };

    const middlewareAPI = {
      renderer: (...args) => renderer(...args)
    };

    const chain = middlewares.map(middleware => middleware(middlewareAPI));
    renderer = compose(...chain)(element.renderer.bind(element));

    element.renderer = renderer;
    return element;
  };
}

export { callback as useCallback, useMemo, useReducer, ref as useRef, state as useState, useEffect$1 as useEffect, rndrr as renderer, applyMiddleware, CONNECTED, DISCONNECTED, element, getNativeConstructor, compose, camel, createCompleteAssign, completeAssign, CustomEvent };