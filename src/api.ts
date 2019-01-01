import axios from 'axios'
import httpAdapter from 'axios'

const instance = axios.create({
    baseURL: '/',
    adapter: httpAdapter,
})

export default {
    timer() {
        return {
            endTime: Date.now() + 30000
        }
        return instance
            .get('/timer')
            .then(result => result.data)
    }
}