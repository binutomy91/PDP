import React from "react";

import Question from "./components/Question.jsx";
import Answer from "./components/Answer.jsx";
import config from '../config.json';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            quiz: config.quiz,
            index: 0,
            numberOfQuestions: config.quiz.length,
            answers : [],
            score : 0,
            completed: false
        }

        this._handleLogic = this._handleLogic.bind(this);
    }

    _handleLogic() {
        
    }


    render() {
        
        const quizCompleted =   <div>
                                    <h1> Quiz completed ! </h1>
                                </div>;
        const quizStage = !this.state.completed ? quiz : quizCompleted ;
        const quiz = <div className="questionWrapper" >
                        <Question quiz={this.state.quiz} index={this.state.index} />
                        <Answer options={this.state.quiz[this.state.index].options} />
                    </div>;

        return(
            <div className="QuizWrapper" >
                <h1>React Quiz</h1>
                {quiz}
            </div>
        )
    }
}

export default App;