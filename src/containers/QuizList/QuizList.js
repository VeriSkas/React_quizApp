import React from 'react';
import './QuizList.css'
import { NavLink } from 'react-router-dom';

class QuizList extends React.Component {
    renderQizes = () => {
        return [1,2,3].map((quiz, index) => {
            return (
                <li key={index}>
                    <NavLink to={'/quiz/' + quiz}>
                        Тест {quiz}
                    </NavLink>
                </li>
            )
        })
    }

    render() {
        return (
            <div className="QuizList">
                <div>
                    <h1>Список тестов</h1>
                    <ul>
                        {this.renderQizes()}
                    </ul>

                </div>
            </div>
        );
    }
}
 
export default QuizList;