import "./App.css";
import marked from "marked";
import DOMPurify from "dompurify";
import { useState } from "react";

function App() {
  const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;
  const [text, setText] = useState(placeholder);

  return (
    <div className="App">
      <div class="headings">
        <h1 class="text-input">Enter text here</h1>
        <h1 class="output">Output:</h1>
      </div>
      <div class="content">
        <TextArea setText={setText} text={text} />
        <TextOutput text={text} />
      </div>
    </div>
  );
}

function TextArea(props) {
  const handleChange = (e) => {
    props.setText(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div>
      <textarea
        value={props.text}
        onChange={handleChange}
        id="editor"
      ></textarea>
    </div>
  );
}

function TextOutput(props) {
  marked.setOptions({
    breaks: true,
  });
  return (
    <div id="output">
      <div
        id="preview"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(marked(props.text)),
        }}
      ></div>
    </div>
  );
}

export default App;
