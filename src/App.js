import React from "react";
import axios from "axios";
import Quote from "./component/Quote";

const sampleQuote =
  "Shoplifting is a victimless crime, like punching someone in the dark.";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: sampleQuote,
    };
    this.getChangeQuote = this.getChangeQuote.bind(this);
  }

  getChangeQuote() {
    axios
      .get("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          quote: data.quote,
        });
      });
  }

  render() {
    return (
      <div>
        <Quote
          quote={this.state.quote}
          character="Nelson Muntz"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185"
        />
        <button type="button" onClick={this.getChangeQuote}>
          Change Quote
        </button>
      </div>
    );
  }
}

export default App;
