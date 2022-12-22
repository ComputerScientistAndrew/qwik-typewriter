import { useClientEffect$, useStore } from "@builder.io/qwik";
import { TypewriterProps } from "./typewriter";

export const useTypewriter = ({
  words,
  typingSpeed = 200,
  deleteSpeed = 100,
  pauseSpeed = 1000,
}: TypewriterProps) => {
  const store = useStore({
    typedString: "",
    typingState: "Typing",
    wordsIndex: 0,
  });

  useClientEffect$(({ track }) => {
    track(() => store.typedString);
    track(() => store.typingState);
    track(() => store.wordsIndex);
    track(() => words);
    switch (store.typingState) {
      case "Typing": {
        if (words[store.wordsIndex] === store.typedString) {
          store.typingState = "Paused";
          return;
        }
        const timeout = setTimeout(() => {
          store.typedString = words[store.wordsIndex].slice(
            0,
            store.typedString.length + 1
          );
        }, typingSpeed);
        return () => clearTimeout(timeout);
      }
      case "Deleting": {
        if (!store.typedString) {
          const nextIndex = store.wordsIndex + 1;
          store.wordsIndex = words[nextIndex] ? nextIndex : 0;
          store.typingState = "Typing";
          return;
        }
        const remainingString = words[store.wordsIndex].slice(
          0,
          store.typedString.length - 1
        );
        const timeout = setTimeout(() => {
          store.typedString = remainingString;
        }, deleteSpeed);
        return () => clearTimeout(timeout);
      }
      case "Paused":
      default:
        const timeout = setTimeout(() => {
          store.typingState = "Deleting";
        }, pauseSpeed);
        return () => clearTimeout(timeout);
    }
  });
  return store.typedString;
};
