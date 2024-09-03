const {v4: uuidv4} = require('uuid')
const slug = require('slug')
const Text = require('../models/Text')

module.exports = {
    create: ({title, content, status, author}) => {
        return new Text({
            id: uuidv4(),
            title: title,
            content: content,
            slug: slug(title),
            createdAt: new Date().toLocaleString('pt-BR'),
            status: status,
            author: author
        })
    }
}