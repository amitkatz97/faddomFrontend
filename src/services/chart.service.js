import Axios from "axios";


const axios = Axios.create({
    withCredentials: true
})

const BASE_URL = (process.env.NODE_ENV !== 'development') ?
    '/api/cpu/' :
    '//localhost:3030/api/cpu/'

export const chartService = {
    query
}




async function query(ip, period, timePeriod) {
    const querySearch = { ip, period, timePeriod }
    try {
        const { data: chartDetailes } = await axios.get(BASE_URL, { params: querySearch })
        return chartDetailes

    } catch (err) {
        console.log("cant get detailes",err);
    }
}