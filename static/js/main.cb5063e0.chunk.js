(this["webpackJsonpmarkdown-previewer"]=this["webpackJsonpmarkdown-previewer"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var s=n(0),i=n(1),r=n.n(i),o=n(4),a=n.n(o),c=(n(12),n(6)),d=(n(13),n(3)),l=n.n(d),u=n(5),h=n.n(u);function b(e){return Object(s.jsx)("div",{children:Object(s.jsx)("textarea",{value:e.text,onChange:function(t){e.setText(t.target.value),console.log(t.target.value)},id:"editor"})})}function j(e){return l.a.setOptions({breaks:!0}),Object(s.jsx)("div",{id:"output",children:Object(s.jsx)("div",{id:"preview",dangerouslySetInnerHTML:{__html:h.a.sanitize(l()(e.text))}})})}var f=function(){var e=Object(i.useState)("# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)\n"),t=Object(c.a)(e,2),n=t[0],r=t[1];return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsxs)("div",{class:"headings",children:[Object(s.jsx)("h1",{class:"text-input",children:"Enter text here"}),Object(s.jsx)("h1",{class:"output",children:"Output:"})]}),Object(s.jsxs)("div",{class:"content",children:[Object(s.jsx)(b,{setText:r,text:n}),Object(s.jsx)(j,{text:n})]})]})};a.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(f,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.cb5063e0.chunk.js.map