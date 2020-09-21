const generateQuote = () => {
  const quotes = [
  ["The greatest glory in living lies not in never falling, but in rising every time we fall.", "Nelson Mandela"],
  ["The way to get started is to quit talking and begin doing.", "Walt Disney"],
  ["If life were predictable it would cease to be life, and be without flavor.", "Eleanor Roosevelt"],
  ["If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.", "Oprah Winfrey"],
  ["If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.", "James Cameron"],
  ["Life is what happens when you're busy making other plans.", "John Lennon"],
  ["Tell me and I forget. Teach me and I remember. Involve me and I learn.", "Benjamin Franklin"],
  ["The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.", "Helen Keller"],
  ["It is during our darkest moments that we must focus to see the light.", "Aristotle"],
  ["Whoever is happy will make others happy too.", "Anne Frank"]];

  return quotes[Math.floor(Math.random() * quotes.length)];
};

const App = () => {
  // let quote = generateQuote();

  const [quote, setQuote] = React.useState(generateQuote());
  const randomQuoteHandler = () => {
    setQuote(state => {
      let q = generateQuote();

      //ensures that the new quote is always  going to be different.
      while (q[0] === state[0]) q = generateQuote();

      return q;
    });
  };
  return (
    React.createElement("div", { id: "quote-box" },
    React.createElement("div", { class: "alwaysMiddle" },
    React.createElement("blockquote", { id: "text" },
    quote[0],
    React.createElement("footer", { id: "author" }, "-", React.createElement("i", null, quote[1])))),


    React.createElement("nav", null,
    React.createElement("a", { class: "btn twitter", href: "twitter.com/intent/tweet", id: "tweet-quote" }, "tweet"),
    React.createElement("button", { onClick: randomQuoteHandler, class: "btn", id: "new-quote" }, "Random quote"))));



};

ReactDOM.render(React.createElement(App, null), document.getElementById('App'));