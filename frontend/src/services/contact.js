import axios from 'axios'

const baseURL = process.env.NODE_ENV === 'development' ?
'http://localhost:3001/contact' : 'https://tomiscattini.herokuapp.com/contact'

const contactService = axios.create({
  baseURL,
  withCredentials: true
})

export const contactFn = values => 
contactService.post('/', values)