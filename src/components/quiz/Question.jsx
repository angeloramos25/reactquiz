import React, {Component} from 'react';

class Question extends Component {
  onClick(event) {
    event.preventDefault();
    const {setCurrent, setScore, question} = this.props

    let selected = event.target.value;

    if (selected == question.correct) {
      setScore(this.props.score + 1);
    }
    setCurrent(this.props.currentQuestion + 1);
  }

  render() {
    const {question} = this.props;
    return(
      <div className="card">
        <div className="card-header">
          {question.text}
        </div>
      <div className="card-body">
          {
            this.props.question.choices.map(choice => {
              return(
                <div key={choice.id}>
                  <button type="button" className="btn btn-dark" onClick={this.onClick.bind(this)} name={question.id} value={choice.id}>
                    {choice.text}
                  </button>
                </div>
              )
            })
          }
      </div>
      </div>
    )
  }
}

export default Question
