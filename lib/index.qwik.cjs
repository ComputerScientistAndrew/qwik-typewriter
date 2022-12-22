"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const jsxRuntime = require("@builder.io/qwik/jsx-runtime");
const useTypewriter = ({ words, typingSpeed = 200, deleteSpeed = 100, pauseSpeed = 1e3 }) => {
  const store = qwik.useStore({
    typedString: "",
    typingState: "Typing",
    wordsIndex: 0
  });
  qwik.useClientEffectQrl(qwik.inlinedQrl(({ track }) => {
    const [deleteSpeed2, pauseSpeed2, store2, typingSpeed2, words2] = qwik.useLexicalScope();
    track(() => store2.typedString);
    track(() => store2.typingState);
    track(() => store2.wordsIndex);
    track(() => words2);
    switch (store2.typingState) {
      case "Typing": {
        if (words2[store2.wordsIndex] === store2.typedString) {
          store2.typingState = "Paused";
          return;
        }
        const timeout = setTimeout(() => {
          store2.typedString = words2[store2.wordsIndex].slice(0, store2.typedString.length + 1);
        }, typingSpeed2);
        return () => clearTimeout(timeout);
      }
      case "Deleting": {
        if (!store2.typedString) {
          const nextIndex = store2.wordsIndex + 1;
          store2.wordsIndex = words2[nextIndex] ? nextIndex : 0;
          store2.typingState = "Typing";
          return;
        }
        const remainingString = words2[store2.wordsIndex].slice(0, store2.typedString.length - 1);
        const timeout1 = setTimeout(() => {
          store2.typedString = remainingString;
        }, deleteSpeed2);
        return () => clearTimeout(timeout1);
      }
      case "Paused":
      default:
        const timeout2 = setTimeout(() => {
          store2.typingState = "Deleting";
        }, pauseSpeed2);
        return () => clearTimeout(timeout2);
    }
  }, "useTypewriter_useClientEffect_tC0tiGMZoFY", [
    deleteSpeed,
    pauseSpeed,
    store,
    typingSpeed,
    words
  ]));
  return store.typedString;
};
const Typewriter = /* @__PURE__ */ qwik.componentQrl(qwik.inlinedQrl((props) => {
  const typedString = useTypewriter(props);
  return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, {
    children: /* @__PURE__ */ jsxRuntime.jsx("span", {
      class: "blinking-cursor " + (props.class ?? ""),
      children: typedString
    })
  }, "tA_0");
}, "Typewriter_component_g8wEJFmGjfc"));
exports.Typewriter = Typewriter;
exports.useTypewriter = useTypewriter;
