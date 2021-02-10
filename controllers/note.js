const { Note } = require('../models');

const all = async (req, res) => {
    const notes = await Note.findAll();

    res.status(200).json({
        success: true,
        message: 'success get note data',
        data: notes
    })
}

const detail = async (req, res) => {
    let id = req.params.id
    
    const note = await Note.findByPk(id)

    res.status(200).json({
        success: true,
        message: 'success get note data',
        data: note
    })
}

const create = async (req, res) => {
    let { title, content } = req.body

    const note = Note.create({title, content})

    res.status(200).json({
        success: true,
        message: 'success get note data',
        data: note
    })
}

const update = async (req, res) => {
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
}

const remove = async (req, res) => {
    let { id } = req.body

    await Note.destroy({
        where: { id }
    })

    res.status(200).json({
        success: true,
        message: 'success delete note data',
        data: null
    })
}

module.exports = { all, detail, create, update, remove }