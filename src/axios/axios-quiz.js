import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-vladilen-b95f7.firebaseio.com/'
})