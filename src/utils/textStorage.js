const slug = require('slug')

class TextStorage {
    constructor() {
        if(!TextStorage.instance) {
            this.texts = []
            TextStorage.instance = this
        }
        return TextStorage.instance
    }

    add(text) {
        this.texts.push(text)
    }

    getAll() {
        return this.texts
    }

    getById(id) {
        return this.texts.find(text => text.id === id)
    }

    updateById(id, changes) {
        const text = this.getById(id)
        text.title = changes.title;
        text.content = changes.content;
        text.status = changes.status;
        text.author = changes.author;

        text.slug = slug(text.content);
        text.changedAt = new Date().toLocaleString('pt-br');

        return text;
    }
}

module.exports = new TextStorage()