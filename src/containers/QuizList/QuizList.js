import React, { Component } from 'react'
import classes from './QuizList.module.css'
import { NavLink } from 'react-router-dom'
import Loader from '../../components/UI/Loader/Loader';
import { connect } from 'react-redux';
import { fetchQuizzes } from '../../store/actions/quiz';

class QuizList extends Component {

  renderQuizzes() {
    return this.props.quizzes.map(quizItem => {
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
    this.props.fetchQuizzes()
  }

  render() {
    return (
      <div className={classes.QuizList}>
        <div>
          <h1>Test list</h1>

          {
            this.props.loading && this.props.quizzes.length !== 0
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

function mapStateToProps(state) {
  return {
    quizzes: state.quiz.quizzes,
    loading: state.quiz.loading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchQuizzes: () => dispatch(fetchQuizzes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizList)