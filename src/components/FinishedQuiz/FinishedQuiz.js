import React from 'react';
import { withRouter } from 'react-router';
import './FinishedQuiz.css';
import Button from '../UI/Button/Button';

const FinishedQuiz = props => {
    const counterSuccess = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success') {
            total++;
        }
        return total
    }, 0);
    return (
        <div className="FinishedQuiz">
            <ul>
                { props.quiz.map((quizItem, index) => {
                    const classes = [
                        'fa',
                        props.results[quizItem.id] === 'error' ? 'fa-times error' : 'fa-check success'
                    ];
                    return (
                        <li
                            key={index}

                        >
                            <strong>{index + 1}. </strong>
                            { quizItem.question }
                            <i className={classes.join(' ')}/>

                        </li>
                    )
                })}
            </ul>

            <p>Правильно {counterSuccess} из { props.quiz.length }</p>

            <div>
                <Button onClick={props.onRetry} type="primary">Повторить</Button>
                <Button type="success" onClick={() => props.history.push('/')}>Перейти в список тестов</Button>
            </div>
        </div>
    )
}

export default withRouter(FinishedQuiz)