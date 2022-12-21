import { component$ } from "@builder.io/qwik";

import { useTypewriter } from "./useTypewriter";

export type TypewriterProps = {
  words: string[],
  typingSpeed?: number,
  deleteSpeed?: number,
  pauseSpeed?: number,
  class?: string,
}

export const Typewriter = component$((props: TypewriterProps) => {
  const typedString = useTypewriter(props);
  return (
    <>
      <span class={"blinking-cursor " + (props.class ?? '')}>{typedString}</span>
    </>
  );
});
