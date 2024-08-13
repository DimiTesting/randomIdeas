import ideaAPI from "../../services/ideaAPI"
import IdeaList from "./IdeaList"

const ideas = new ideaAPI

class IdeaForm {
    constructor() {
        this._formModal = document.getElementById('form-modal')
        this._ideaList = new IdeaList
    }

    async handleSubmit () {
        try {
            const idea = {
                username: this._form.elements.username.value,
                text: this._form.elements.text.value, 
                tag: this._form.elements.tag.value
            }

            if(!this._form.elements.username.value||!this._form.elements.text.value||!this._form.elements.tag.value) {
                alert('Please fill the form')
                return
            }

            localStorage.setItem('username', this._form.elements.username.value)
                        
            const newIdea = await ideas.createIdea(idea)
            this._ideaList.addIdeaToList(newIdea.data.data)
    
            this._form.elements.username.value = ''
            this._form.elements.text.value = ''
            this._form.elements.tag.value = ''

            this.render()
    
            document.dispatchEvent(new Event('closeModal'))
            
        } catch (error) {
            console.log(error)
        }
    }

    eventListeners (e) {
        e.preventDefault()
        this.handleSubmit()
    }

    render() {
        this._formModal.innerHTML = `
                <form id="idea-form">
                    <div class="form-control">
                        <label for="idea-text">Enter a Username</label>
                        <input type="text" name="username" id="username" value=${localStorage.getItem('username') ? localStorage.getItem('username') : ""}>
                    </div>
                    <div class="form-control">
                        <label for="idea-text">What's Your Idea?</label>
                        <textarea name="text" id="idea-text"></textarea>
                    </div>
                    <div class="form-control">
                        <label for="tag">Tag</label>
                        <input type="text" name="tag" id="tag" />
                    </div>
                    <button class="btn" type="submit" id="submit">Submit</button>
                </form>
        `
        this._form = document.getElementById('idea-form')
        this._form.addEventListener('submit', this.eventListeners.bind(this))
    }
}

export default IdeaForm