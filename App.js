
const heading = React.createElement("h1", {className:"one"}, "Heading First");

const heading2 = React.createElement("h2", {className:"two"}, "Heading Second");

const container = React.createElement("div", {id:"container"}, [heading, heading2])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
