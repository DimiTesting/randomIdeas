class IdeaList {
    constructor() {
        this._list = document.getElementById('idea-list')
        this._ideas = [
            {
                id: 1,
                username: 'Idea1Creator',
                text: 'First Idea',
                tag: 'technology',
                date: new Date()
            },
            {
                id: 2,
                username: 'Idea2Creator',
                text: 'Second Idea',
                tag: 'business',
                date: new Date()
            },
            {
                id: 3,
                username: 'Idea3Creator',
                text: 'Third Idea',
                tag: 'education',
                date: new Date()
            }
        ]
    }

    render() {
        this._ideas.map((idea)=> {
            const card = document.createElement('div')
            card.classList.add('card')
            card.innerHTML = `
            <div class="card">
                <button class="delete"><i class="fas fa-times"></i></button>
                <h3> ${idea.text}</h3>
                <p class="tag tag-${idea.tag.toLowerCase()}">${idea.tag.toUpperCase()}</p>
                <p>
                    Posted on <span class="date">${idea.date}</span> by
                <span class="author">${idea.username}</span>
                </p>
            </div>    
        `
        this._list.append(card)
        }
    )
    }
}

export default IdeaList