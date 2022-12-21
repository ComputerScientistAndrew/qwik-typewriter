import { component$ } from "@builder.io/qwik";

import { useTypedStrings } from "./useTypedStrings";

export const Typewriter = component$((props: { words: string[] }) => {
  const typedString = useTypedStrings(props.words);
  return (
    <>
      <span class="blinking-cursor">{typedString}</span>
    </>
  );
});
