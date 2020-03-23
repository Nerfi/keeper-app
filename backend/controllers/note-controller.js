const Note = require('../models/note-model');
//CRUD operations

 createNote = (req, res) => {
  //in case something fails this might be the reason why, do not know how
  //the app knows that the body contains the name and content of the note component!
  const {title, content} = req.body;

// chech the github repo of this tutorial in case i need to change something
 if(!title &&  !content){
  return res.status(400).json({
    success: false,
    error: 'You must provide a note',
  });

 }

  const note = new Note({title, content});

  if(!note) {
    return res.status(400).json({success: false, error: "and erro has happened"});
  }

  note
  .save()
  .then((response) => {

    return res.status(201).json({
      success: true,
      id: response.id,
      message: 'Note created' // the example added here a comma, not sure If i should do so.
    });

  })
  .catch(err => {
    return res.status(400).json({
      err,
      message: 'Note not created'

    });
  })



}


//update action


updateNote = async (req,res) => {
  const boy = req.body;

  if(!body) {
    return res.status(400).json({
        success: false,
        error: "you must provide a body to update"
    });
  }
    //calling the model in order to find the note we want
    Note.findOne({_id: req.params.id}, (err,note) => {
      if(err){
        return res.status(404).json({
          err,
          message: "Note not found!"
        })
      }

      note.title = body.title
      note.content = body.content
      note
      .save()
      .then((note_response) => {
        return res.status(200).json({
          success: true,
          id: note_response.id,
          message: "note updated!"
        })
      })
      .catch(error => {
        return res.status(400).json({
          err,
          message: "Note not updated!"
        })
      })


    })


}



//Detele action

deleteNote = async (req, res) => {

  await Note.findOneAndDelete({_id: req.params.id}, (err, note) => {

    if(err) {
      return res.status(400).json({success: false, error: err})
    }

    if(!note) {
      return res.status(404).json({success: false, message: "note not found"})
    } else {
      return res.status(200).json({success: true, data: note})
    }

  }).catch(err => console.log(err))
}


//get note by ID, maybe I'll not need this one since I dont really want to see a specific note

getNoteById = async (req,res) => {

  await Note.findOne({_id: req.params.id}, (err, note) => {
    if(err) {
      return res.status(400).json({success: false, error: err})
    }

    return res.status(200).json({success: true, data: note})

  }).catch(err => console.log(err))
}


//getting all the notes

getNotes = async (req, res) => {

  await Note.find({}, (err, notes) => {
    if(err) {
      return res.status(400).json({success: false, error: err})
    }

    if(!notes.length){
      return res.status(404).json({success: false, error:"Note not found"})
    }else {
      return res.status(200).json({success: true, data: notes})
    }

  }).catch(err => console.log(err))

}


module.exports = {
  createNote,
  updateNote,
  deleteNote,
  getNoteById,
  getNotes
}
