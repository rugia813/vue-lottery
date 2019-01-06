import axios from 'axios'
import httpAdapter from 'axios'
import timerFixture from "@/fixtures/timer";

const instance = axios.create({
    baseURL: '/',
    adapter: httpAdapter,
})

export default {
    timer() {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res({
                    endTime: Date.now() + 30000
                })
            }, 1000);
        })
        return instance
            .get('/timer')
            .then(result => result.data)
    }
}