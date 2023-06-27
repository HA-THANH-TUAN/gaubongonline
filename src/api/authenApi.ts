import axiosClient from './axiosClient';
const authenApi={
    signUp(){
        const url=""
        return axiosClient.get(url)
    }
}

export default authenApi