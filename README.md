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
| class | string  | Optional  | css classname to be set for the component  | ex: ```"text-bold text-red"```  |
| typingSpeed | number  | Optional  | Character typing speed in milliseconds  | 200  |
| pauseSpeed | number  | Optional  | Time between words in milliseconds  | 1000  |
| deleteSpeed | number  | Optional  | Character deleting speed in milliseconds  | 150  |
