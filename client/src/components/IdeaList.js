import ideaAPI from "../../services/ideaAPI"

const ideas = new ideaAPI()

class IdeaList {
    constructor() {
        this._list = document.getElementById('idea-list')
        this._ideas = []
        this.getIdeas()
    }

    async getIdeas() {
        try {
            const res = await ideas.getIdeas()
            this._ideas = res.data.data
            this.render()
        } catch (error) {
            console.log(error)
        }
    }

    addIdeaToList(idea) {
        this._ideas.push(idea)
        this.render()
    }

    render() {
        this._list.innerHTML = this._ideas.map((idea)=> {
            console.log(idea)
            return `<div class="card">
                <button class="delete"><i class="fas fa-times"></i></button>
                <h3> ${idea.text}</h3>
                <p class="tag tag-${idea.tag.toLowerCase()}">${idea.tag.toUpperCase()}</p>
                <p>
                    Posted on <span class="date">${idea.date}</span> by
                <span class="author">${idea.username}</span>
                </p></div>`
        }).join('')
    }
}

export default IdeaList