import axios from 'axios'

const baseURL = '/contact'

const contactService = axios.create({
  baseURL,
  withCredentials: true
})

export const contactFn = values => 
contactService.post('/', values)