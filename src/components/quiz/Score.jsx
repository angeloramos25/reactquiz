import React, {Component} from 'react';

class Score extends Component {
  render() {
    return(
      <div className="well">
        <span className="badge badge-secondary">Question {this.props.currentQuestion} of {this.props.questions.length}</span>
        <span className="badge badge-dark">Score: {this.props.score}</span>
      </div>
    )
  }
}

export default Score
