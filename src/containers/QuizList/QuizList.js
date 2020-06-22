import React, { Component } from 'react'
import classes from './QuizList.module.css'
import { NavLink } from 'react-router-dom'
import Loader from '../../components/UI/Loader/Loader';
import axios from '../../axios/axios-quiz'

export default class QuizList extends Component {

  state = {
    quizzes: [],
    loading: true
  }

  renderQuizzes() {
    return this.state.quizzes.map(quizItem => {
      return (
        <li
          key={quizItem.id}
        >
          <NavLink to={`/quiz/${quizItem.id}`}>
            {quizItem.name}
          </NavLink>
        </li>
      )
    })
  }

  async componentDidMount() {
    try {
      const response = await axios.get('quizzes.json')
      const quizzes = []

      Object.keys(response.data).forEach((key, index) => {
        quizzes.push({
          id: key,
          name: `Test #${index + 1}`
        })
      })

      this.setState({
        quizzes,
        loading: false
      })
    } catch (err) {
      console.error(err)
    }
  }

  render() {
    return (
      <div className={classes.QuizList}>
        <div>
          <h1>Test list</h1>

          {
            this.state.loading
            ? <Loader />
            : <ul>
                { this.renderQuizzes() }
              </ul>
          }
        </div>
      </div>
    );
  }
}