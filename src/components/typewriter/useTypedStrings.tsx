import { useClientEffect$, useStore } from "@builder.io/qwik";

export const TIME_INTERVALS = {
  TYPING_MS: 200,
  PAUSED_MS: 1000,
  DELETING_MS: 100,
};

export const useTypedStrings = (words: string[]) => {
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
        const nextTypedString = words[store.wordsIndex].slice(
          0,
          store.typedString.length + 1
        );
        if (nextTypedString === store.typedString) {
          store.typingState = "Paused";
          return;
        }
        const timeout = setTimeout(() => {
          store.typedString = words[store.wordsIndex].slice(
            0,
            store.typedString.length + 1
          );
        }, 200);
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
        }, TIME_INTERVALS.DELETING_MS);
        return () => clearTimeout(timeout);
      }
      case "Paused":
      default:
        const timeout = setTimeout(() => {
          store.typingState = "Deleting";
        }, TIME_INTERVALS.PAUSED_MS);
        return () => clearTimeout(timeout);
    }
  });
  return store.typedString;
};
