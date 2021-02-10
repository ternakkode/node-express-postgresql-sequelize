const { check } = require('express-validator');

const { Note } = require('../../models');

const create = [
    check('title').notEmpty(),
    check('content').notEmpty()
];

const update = [
    check('id').notEmpty().custom(value => {
        if (value < 1) {
          throw new Error('id should not lower than 1')  
        }

        return Note.findByPk(value).then(note => {
            if (!note) {
                return Promise.reject('note not found')
            }
        })
    }),
    check('title').notEmpty(),
    check('content').notEmpty()
];

const remove = [
    check('id').notEmpty().custom(value => {
        if (value < 1) {
          throw new Error('id should not lower than 1')  
        }

        return Note.findByPk(value).then(note => {
            if (!note) {
                return Promise.reject('note not found')
            }
        })
    })
];

module.exports = {
    create, update, remove
}