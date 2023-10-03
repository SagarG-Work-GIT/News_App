import axios from "axios"
import config from "./config";

class BaseService {
    constructor() {
        this.#init()
    }

    #init = async () => {
        this.apiinstance = axios.create({
            baseURL: config.serviceUrl,
            timeout: config.apiTimeout
        });

        //d9bd23777d62485fa2ac9d5098a49200

        this.apiinstance.interceptors.request.use((config) => {
            return config
        }, (error) => {
            return Promise.reject(error)
        })

        this.apiinstance.interceptors.response.use((config) => {
            return config
        }, (error) => {
            return Promise.reject(error)
        })
    }

    get = async (slug) => {
       return await this.apiinstance.get(slug).then(response => {
            //    console.log(this.responseMessage(response, true));
            return Promise.resolve(this.responseMessage(response, true))
        }).catch(error => {
            return Promise.reject(this.responseMessage(error, false))
        })
    }

    responseMessage = (response, status) => {

        if (status && response?.status === 200) {

            if (response?.data) {
                return response?.data
            } else {
                return {
                    message: "Server response error."
                }
            }

        } else {
            var obj
            const error = response
            if (error.response) {
                // The request was made and the server responded with a status code               
                obj = {
                    data: error.response.data,
                    status: error.response.status
                }
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                obj = {
                    message: error?.request?._response ?? error?.message
                }
            } else {
                // Something happened in setting up the request that triggered an Error
                obj = {
                    message: error?.message ?? "Something happened in setting up the request that triggered an Error"
                }
            }

            return obj
        }
    }

}

export default BaseService