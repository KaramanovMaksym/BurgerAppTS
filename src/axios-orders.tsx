import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://my-burger-react-ts.firebaseio.com/'
})

export default instance
