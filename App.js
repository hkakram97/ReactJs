const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "children1" }, [
    React.createElement("h1", {}, "I'm heading"),
    React.createElement("h2", {}, "I'm heading2"),
  ]),
  React.createElement("div", { id: "children2" }, [
    React.createElement("h1", {}, "I'm heading"),
    React.createElement("h2", {}, "I'm heading2"),
  ]),
]);

console.log(parent);
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world! ReactJs"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
