const App = () => {
  marked.setOptions({
    gfm: true,
    highlight: false,
    tables: false,
    breaks: true,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false,
    langPrefix: false });


  const init = `
# I am h1
## I am h2
I am [link](https://www.google.com/)
\`<p>I am inline code</p>\`
\`\`\`
const str = 'I am code block' 
alert(str)
\`\`\`

1. apple
1. banana
1. **cinnamon**

>no pain no gain

![Arch Linux w/ Text](https://archhurd.org/static/logos/archlinux-logo-dark-90dpi.ebdee92a15b3.png)
        `;
  const [markedVal, markedValUpdate] = React.useState(marked(init));
  const textareaHandler = event => {
    let value = event.target.value;
    markedValUpdate(marked(value));
  };
  return (
    React.createElement(React.Fragment, null,
    React.createElement("textarea", { onChange: e => textareaHandler(e), id: "editor" },
    init),

    React.createElement("div", { id: "preview", dangerouslySetInnerHTML: { __html: markedVal } })));



};

ReactDOM.render(React.createElement(App, null), document.getElementById('App'));