import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>Hello World</h1>
      <p>Here is my first React App 🤩 </p>
      <a href={"https://codesandbox.io/u/MariaRiosNavarro"}>Look my profile</a>
    </article>
  );
}
