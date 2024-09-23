import Axios from 'axios'
import {
	config,
	requestInterceptor,
	responseInterceptor
} from './config'

const Fetch = Axios.create(config)

Fetch.interceptors.request.use(...requestInterceptor)
Fetch.interceptors.response.use(...responseInterceptor)

export {
	Fetch,
}