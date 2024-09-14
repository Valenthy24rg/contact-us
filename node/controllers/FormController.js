import FormModel from "../models/FormModel.js";

// CRUD Methods


// Show all records
export const getAllForms = async (req, res) => {
  try {
   const forms = await FormModel.findAll()
   res.json(forms)
  } catch (error) {
    res.json({message: error.message})
  }
}

 // Show a record
 export const getForm = async (req, res) => {
  try {
    const form = await FormModel.findAll({
      where: {
        id: req.params.id
      }
    })
    res.json(form[0])
  } catch (error) {
    res.json({message: error.message})
  }
 }

 // Create a record
 export const createForm = async (req, res) => {
  try {
    await FormModel.create(req.body)
    res.json({
      'message': 'Message sent successfully'
    })
  } catch (error) {
    res.json({message: error.message})
  }
 }

 // Update a record
 export const updateForm = async (req, res) => {
  try {
    await FormModel.update(req.body, {
      where: { id: req.params.id }
    })
    res.json({
      'message': 'Message updated successfully'
    })
  } catch (error) {
    res.json({message: error.message})
  }
 }

 // Delete a record

 export const deleteForm = (req, res) => {
  try {
    FormModel.destroy({
      where: {id: req.params.id}
    })
    res.json({
      'message': 'Successfully deleted message'
    })
  } catch (error) {
    res.json({message: error.message})
  }
 }


