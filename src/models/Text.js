class Text {
    constructor({id, title, content, slug, createdAt, status, author}) {
        this.id = id
        this.title = title
        this.content= content
        this.slug = slug
        this.createdAt = createdAt
        this.status = status
        this.author = author
    }
}

module.exports = Text