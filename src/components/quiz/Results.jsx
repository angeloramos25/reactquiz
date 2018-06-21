import React, {Component} from 'react';

class Results extends Component {
  render() {
    return(
      <div className="card">
        <div className="card-header">
          Results
        </div>
      <div className="card-body">
        <h5 className="card-title">Correct: {this.props.score} of {this.props.questions.length}</h5>
        <a href="/app" className="btn btn-primary">Restart!</a>
      </div>
      </div>
    )
  }
}

export default Results
