const router = require("express").Router();

//import the todo model
const todoItemsModel = require("../models/todoItems");

//Add Item
router.post("/api/item", async (req, res) => {
  try {
    // create the item
    const newItem = new todoItemsModel({
      item: req.body.item,
    });

    // and save it
    const saveItem = await newItem.save();

    // return the saved item with 200 status code
    res.status(200).json(saveItem);
  } catch (err) {
    res.json(err);
  }
});

//Get item
router.get("/api/items", async (req, res) => {
  try {
    const allTodoItems = await todoItemsModel.find({});

    // return all found items with 200 status code
    res.status(200).json(allTodoItems);
  } catch (err) {
    res.json(err);
  }
});

//Update Item
router.put("/api/item/:id", async (req, res) => {
  try {
    //find the item by its id and update it
    const updateItem = await todoItemsModel.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json(updateItem);
  } catch (err) {
    res.json(err);
  }
});

//Delete Item
router.delete("/api/item/:id", async (req, res) => {
  try {
    //find the item by its id and delete it
    const deleteItem = await todoItemsModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Item Deleted");
  } catch (err) {
    res.json(err);
  }
});

//export router
module.exports = router;
