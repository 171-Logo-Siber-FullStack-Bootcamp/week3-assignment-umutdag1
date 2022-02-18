import axios from "axios";

const Jhr = class {
    #url = null;
    #method = null;
    #options = null;

    constructor(url, method) {
        this.#url = url;
        this.#method = method.toUpperCase();
        this.#options = {};
    }

    setData(data) {
        this.#options = {
            data : data,
            ...this.#options
        }
    }

    setOption(key, value) {
        this.#options[key] = value;
    }

    fetchResponse() {
        const requestConf = { 
            url: this.#url, 
            method: this.#method, 
            ...this.#options 
        };

        return axios.request(requestConf);
    }
}

export default Jhr;