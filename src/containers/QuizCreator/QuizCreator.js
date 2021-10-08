import React from 'react';
import './QuizCreator.css';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import { createControl, validate, validateForm } from '../../form/formFremework';
import Select from '../../components/UI/Select/Select';

function createOptionControl (num) {
    return createControl({
        label: `Вариант ${num}`,
        errorMessage: 'Значение не может быть пустым',
        id: num
    }, {required: true})
}

function createFormControls () {
    return {
        question: createControl({
            label: 'Введите вопрос',
            errorMessage: 'Вопрос не может быть пустым',
        }, {required: true}),
        option1: createOptionControl(1),
        option2: createOptionControl(2),
        option3: createOptionControl(3),
        option4: createOptionControl(4),
    }
}

class QuizCreator extends React.Component {

    state = {
        quiz: [],
        rightAnswerId: 1,
        formControls: createFormControls(),
        isFormValid: false
    }

    submitHandler = event => {
        event.preventDefault();
    }

    addQuestionHandler = () => {
        const quiz = this.state.quiz.concat();
        const index = quiz.length + 1;
        const { question, option1, option2, option3, option4 } = this.state.formControls;

        const quizQuestion = {
            question: question.value,
            id: index,
            rightAnswerId: this.state.rightAnswerId,
            answers: [
                { text:option1.value, id:option1.id },
                { text:option2.value, id:option2.id },
                { text:option3.value, id:option3.id },
                { text:option4.value, id:option4.id },
            ]
        }

        quiz.push(quizQuestion);
        this.setState({
            quiz,
            rightAnswerId: 1,
            formControls: createFormControls(),
            isFormValid: false
        })
    }
    
    createQuizHandler = () => {
        console.log(this.state.quiz);

    }

    changeHandler(value, controlName) {
        const formControls = {...this.state.formControls};
        const control = {...formControls[controlName]};

        control.value = value;
        control.touched = true;
        control.valid = validate(control.value, control.validation);
        formControls[controlName] = control;

        this.setState({formControls, isFormValid: validateForm(formControls)});
    }

    renderInputs() {
        return Object.keys(this.state.formControls).map((controlName, ind) => {
            const control = this.state.formControls[controlName];
            return (
                <React.Fragment key={controlName + ind}>
                    <Input
                        label={control.label}
                        value={control.value}
                        valid={control.valid}
                        shouldValidate={!!control.validation}
                        touched={control.touched}
                        errorMessage={control.errorMessage}
                        onChange={event => this.changeHandler(event.target.value, controlName)}
                    />
                    { ind === 0 ? <hr/> : null }
                </React.Fragment>
            )
        })
    }

    selectChangeHandler = event => {
        this.setState({
            rightAnswerId: +event.target.value
        })
    }

    render() {
        return (
            <div className="QuizCreator">
                <div>
                    <h1>Создание тестов</h1>
                    <form onSubmit={this.submitHandler}>

                        { this.renderInputs() }

                        <Select
                            label="Выберите правильный ответ"
                            value={this.state.rightAnswerId}
                            onChange={this.selectChangeHandler}
                            options={[
                                {text: 1, value: 1},
                                {text: 2, value: 2},
                                {text: 3, value: 3},
                                {text: 4, value: 4},
                            ]}
                        />
                        <Button
                            type="primary"
                            onClick={this.addQuestionHandler}
                            disabled={!this.state.isFormValid}
                        >
                            Добавить вопрос
                        </Button>
                        <Button
                            type="success"
                            onClick={this.createQuizHandler}
                            disabled={!this.state.quiz.length}
                        >
                            Создать тест
                        </Button>
                    </form>
                </div>
            </div>
        );
    }
}
 
export default QuizCreator;