const { Note } = require('../models');

const all = async (req, res) => {
    try {
        const notes = await Note.findAll();
        
        res.status(200).json({
            success: true,
            message: 'success get note data',
            data: notes
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            errors: 'something went wrong'
        })
    }
}

const detail = async (req, res) => {
    try {
        let id = req.params.id
        
        const note = await Note.findByPk(id)
        if (!note) {
            throw new Error('404')
        }
    
        res.status(200).json({
            success: true,
            message: 'success get note data',
            data: note
        })
    } catch (err) {
        if (err.message === '404') {
            res.status(404).json({
                success: false,
                errors: 'note data not found'
            })
        } else {
            res.status(500).json({
                success: false,
                errors: 'something went wrong'
            })
        }
    }
}

const create = async (req, res) => {
    try {
        let { title, content } = req.body
    
        const note = Note.create({title, content})
    
        res.status(200).json({
            success: true,
            message: 'success create note data',
            data: note
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            errors: 'something went wrong'
        })
    }
}

const update = async (req, res) => {
    try {
        let { id, title, content } = req.body
    
        const note = Note.update(
            { title, content }, 
            { where: { id } }
        );
    
        res.status(200).json({
            success: true,
            message: 'success update note data',
            data: note
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            errors: 'something went wrong'
        })
    }
}

const remove = async (req, res) => {
    try {
        let { id } = req.body
    
        await Note.destroy({
            where: { id }
        })
    
        res.status(200).json({
            success: true,
            message: 'success delete note data',
            data: null
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            errors: 'something went wrong'
        })
    }
}

module.exports = { all, detail, create, update, remove }