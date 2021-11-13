const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const todoSchema = require('../schemas/todoSchma');
const Todo = new mongoose.model("Todo", todoSchema);



// GET All  The Todos
router.get('/', async (req, res) => {
    await Todo.find({}, (err, data)=>{
        if(err){
            res.status(500).json({
                error: "error all todos"
            })
        }else{
            res.status(200).json({
                result: data
            })
        }
    })

});

// GET a todo by id 
router.get('/:id', async (req, res) => {
    await Todo.find({_id: req.params.id}, (err, data)=>{
        if(err){
            res.status(500).json({
                error: "error side",
            });

        }else{
            res.status(200).json({
                result: data,
                message: "success",
            })
        }
    })
   
});

// Post Todos
router.post('/', async (req, res) => {
    // const newTodo = new Todo(req.body);
    // await newTodo.save((err)=>{
    //     if(err){
    //         res.status(500).json({
    //             error:"there was a server side error!",
    //         })
    //     }else{
    //         res.status(200).json({
    //             message:"Todo was inserted successfully",
    //         })
    //     }
    // })
});

// Post Multiple Todos
router.post('/all', async (req, res) => {
    // await Todo.insertMany(req.body, (err) => {
    //     if (err) {
    //         res.status(500).json({
    //             error: "there was a server side error!",
    //         })
    //     } else {
    //         res.status(200).json({
    //             message: "Todo was all post successfully",
    //         })
    //     }
    // })
});

// Put Todos
router.put('/:id', async (req, res) => {
    // await Todo.updateOne({ _id: req.params.id }, {
    //     $set: {
    //         title: "mam",
    //         status: "it is a sneck",
    //     },
    // }, (err) => {
    //     if (err) {
    //         res.status(500).json({
    //             error: "there was a server side error!",
    //         })
    //     } else {
    //         res.status(200).json({
    //             message: "Todo was update successfully",
    //         })
    //     }
    // })

});

// Delete Todos
router.delete('/:id', async (req, res) => {
    await Todo.deleteOne({_id: req.params.id}, (err)=>{
        if(err){
            res.status(500).json({
                error: "error side",
            });

        }else{
            res.status(200).json({
                message: "success",
            })
        }
    })

});

module.exports = router;