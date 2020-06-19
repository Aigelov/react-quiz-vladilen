import React, { Component } from 'react'
import classes from './QuizList.module.css'
import { NavLink } from 'react-router-dom';

export default class QuizList extends Component {
  renderQuizzes() {
    return [1, 2, 3].map((quizItem, index) => {
      return (
        <li
          key={index}
        >
          <NavLink to={`/quiz/${quizItem}`}>
            Test {quizItem}
          </NavLink>
        </li>
      )
    })
  }
  render() {
    return (
      <div className={classes.QuizList}>
        <div>
          <h1>Test list</h1>

          <ul>
            { this.renderQuizzes() }
          </ul>
        </div>
      </div>
    );
  }
}