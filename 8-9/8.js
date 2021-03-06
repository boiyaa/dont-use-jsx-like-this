import { h } from "preact";

const Child = ({ id }) => (
  <div id={id}>
    <h1>Heading</h1>
    <p>{id}</p>
  </div>
);

const Parent = () => <Child id="child" />;

// $ npx babel 8.js
// import { h } from "preact";

// const Child = ({
//   id
// }) => h("div", {
//   id: id
// }, h("h1", null, "Heading"), h("p", null, id));

// const Parent = () => h(Child, {
//   id: "child"
// });
