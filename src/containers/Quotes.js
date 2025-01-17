import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {removeQuote, upvoteQuote, downvoteQuote} from '../actions/quotes'

class Quotes extends Component {

  render() {
    let quotes = this.props.quotes.map((quote) => { return <QuoteCard quote={quote} key={quote.id} removeQuote={this.props.removeQuote} upvoteQuote={this.props.upvoteQuote} downvoteQuote={this.props.downvoteQuote}/> })

    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {quotes}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{ quotes: state.quotes }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     removeQuote: () => { dispatch(removeQuote()) },
//     upvoteQuote: () => { dispatch(upvoteQuote()) },
//     downvoteQuote: () => { dispatch(downvoteQuote()) }
//   }
// }


export default connect(mapStateToProps, {removeQuote, upvoteQuote, downvoteQuote})(Quotes);
