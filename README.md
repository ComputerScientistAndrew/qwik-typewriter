# qwik-typewriter
 Typewriter effect for Qwik applications

# Install
```npm install qwik-typewriter```

# Usage
``` JS
import { component$ } from '@builder.io/qwik';
import { Typewriter } from "qwik-typewriter";

export default component$(() => {
  return (
    <>
        <p>
          I am a <Typewriter {/* Props */} />
        </p>
    </>
  );
});
```

# Component Props
| props | Type | Optional | Description | Default |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| words  | array  | Required  | Array of strings for the words  | ex: ```['Hello', 'World']```|
| class | string  | css classname to be set for the component  | Optional  | ex: ```"text-bold text-red"```  |
| typingSpeed | number  | Character typing speed in milliseconds  | Optional  | 200  |
| pauseSpeed | number  | Time between words in milliseconds  | Optional  | 1000  |
| deleteSpeed | number  | Character deleting speed in milliseconds  | Optional  | 150  |
