const express = require("express");

const NoteController = require("../controllers/note-controller");


const router = express.Router();

router.post('/note', NoteController.createNote) ;
router.put('/note/:id', NoteController.updateNote)
router.delete('/note/:id', NoteController.deleteNote)
router.get('/note/:id', NoteController.getNoteById)
router.get('/notes', NoteController.getNotes)


module.exports = router;
