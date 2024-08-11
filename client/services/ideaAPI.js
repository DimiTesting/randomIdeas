import axios from 'axios'

class ideaAPI{
    constructor () {
        this._URL = 'http://localhost:5000/api/ideas'
    }

    getIdeas() {
        return axios.get(this._URL)
    }

    createIdea(data) {
        return axios.post(this._URL, data)
    }
}

export default ideaAPI