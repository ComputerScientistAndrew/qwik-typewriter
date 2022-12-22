import { Logo } from "./components/logo/logo";
import { Typewriter } from "./components/typewriter/typewriter";
import "./global.css";
export default () => {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Blank App</title>
      </head>
      <body>
        <Logo />
        <p>
          I am a <Typewriter words={["Developer", "Consultant", "Engineer"]} />
        </p>
      </body>
    </>
  );
};
