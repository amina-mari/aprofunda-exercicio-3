// respostas às requisições HTTP

const TextService = require('../services/textServices')



const createPost = (req, res) => {
    const {title, content, status, author} = req.body
    const newText = TextService.createText({title, content, status, author})
    res.status(201).json({message: `Texto ${newText.title} criado com sucesso`})
}

const listPosts = (req, res) => {
    const texts = TextService.getAllTexts()
    res.json(texts)
}

const listPost = (req, res) => {
    const { id } = req.query
    
    const text = TextService.getTextById(id)

    if(!text) {
        res.status(404).json({message: 'Text não encontrado'})
    }

    res.json(text)
}

const changePost = (req, res) => {
    const {id} = req.params;

    const text = TextService.getTextById(id)

    if(!text) res.status(404).json({message: "Texto não encontrado"})
    else {
        try{
            newText = TextService.updateTextById(id, req.body);
            res.status(200).json({message: "Texto atualizado com sucesso!", text: newText})
        } catch (err){
            res.status(502).json({message: `Erro: ${err}`})        
        }
    }

}

const deletePost = (req, res) => {
    const text = TextService.getTextById(req.params.id)

    if(!text) res.status(404).json({message: "Texto não encontrado"})
    else {
        try {
            TextService.deleteTextById(req.params.id)
            res.status(200).json({message: "Texto deletado com sucesso!", deletedPost: text})
        } catch(err) {
            res.status(502).json({message: `Erro: ${err}`})
        }
    }
}

module.exports = {
    createPost, listPosts, listPost, changePost, deletePost
}