import React from "react";
import "./Quote.css";

class Quote extends React.Component {
  render() {
    return (
      <figure class="QuoteCard">
        <img src={this.props.image} alt={this.props.character} />
        <figcaption>
          <blockquote>{this.props.quote}</blockquote>
          <p>
            <cite>{this.props.character}</cite>
          </p>
        </figcaption>
      </figure>
    );
  }
}

export default Quote;
