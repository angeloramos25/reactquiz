import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './quiz/QuestionList.jsx';
import Score from './quiz/Score.jsx';
import Results from './quiz/Results.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          text: 'What is my favorite sports team?',
          choices: [
            {
              id: 'a',
              text: 'Lakers'
            },
            {
              id: 'b',
              text: 'Celtics'
            },
            {
              id: 'c',
              text: 'Patriots'
            },
            {
              id: 'd',
              text: 'Dodgers'
            }
          ],
          correct: 'a'
        },
        {
          id: 2,
          text: 'What is my favorite color?',
          choices: [
            {
              id: 'a',
              text: 'red'
            },
            {
              id: 'b',
              text: 'blue'
            },
            {
              id: 'c',
              text: 'green'
            },
            {
              id: 'd',
              text: 'orange'
            }
          ],
          correct: 'b'
        },
        {
          id: 3,
          text: 'What is my favorite activity?',
          choices: [
            {
              id: 'a',
              text: 'Hiking'
            },
            {
              id: 'b',
              text: 'Eating'
            },
            {
              id: 'c',
              text: 'Playing video games'
            },
            {
              id: 'd',
              text: 'All of the above'
            }
          ],
          correct: 'd'
        },
        {
          id: 4,
          text: 'What is my favorite ice cream flavor?',
          choices: [
            {
              id: 'a',
              text: 'Chocolate'
            },
            {
              id: 'b',
              text: 'Rocky Road'
            },
            {
              id: 'c',
              text: 'Vanilla'
            },
            {
              id: 'd',
              text: 'Pistachio'
            }
          ],
          correct: 'c'
        }
      ],
      score: 0,
      currentQuestion: 1,
    }
  }

  setCurrent(current) {
    this.setState({currentQuestion: current});
  }

  setScore(score) {
    this.setState({score: score});
  }

  render() {
    if (this.state.currentQuestion > this.state.questions.length) {
      var score = '';
      var results = <Results {...this.state} />
    } else {
      var score = <Score {...this.state} />
      var results = '';
    }
    return(
      <div>
        {score}
        {results}
        <QuestionList {...this.state}
                      setCurrent={this.setCurrent.bind(this)}
                      setScore={this.setScore.bind(this)}/>
      </div>
    )
  }
}

export default App
