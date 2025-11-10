import Greeting from "./components/Task";

export default function Title() {
  return (
    <div>
      <h1> Hello </h1>
      <p> This is my first react application</p>
      <Greeting />
    </div>
  );
}

function Description() {
  return (
    <div>
      <p> This is my second component</p>
    </div>
  );
}
