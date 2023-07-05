import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '9dd16c21d49a4b2197fcf33852549127'
    }
})