import labModel from "../models/labModels.js";

const addLab = async (req, res) => {
    const {labName, labType, mainCategory, subCategory,labCode, price} = req.body

    try {
        const lab = new labModel({
            labName, labType, mainCategory, subCategory,labCode, price
        });

        const result = await lab.save();
        if (result) {
            res.status(201).send(result)
        }
    } catch (error) {
        console.log('erroradding', error)
        res.status(500).send(error)
    }
}


//Getting all
const getLabs = async (req, res) => {
    try {
        const labs = await labModel.find();
        
        if (labs) {
            res.status(200).send(labs)
        }
    } catch (error) {
        console.log( error)
        res.status(500).json({ msg: "error getting", error: error });
    }
};


//Getting one by id
const getLab = async (req, res) => {
    const {id} = req.params;

    try {
        const lab = await labModel.findById({_id: id})

        if (lab) {
            res.status(200).send(lab)
        } else {
            res.status(404).send("lab item not found")
        }
    } catch (error) {
        console.log('error', error)
    }
};


//Updating by id
const updateLab = async (req, res) => {
    const {id} = req.params;

    try {
       const {labName, labType, mainCategory, subCategory,labCode, price} = req.body;

       const updated = await labModel.findByIdAndUpdate({_id: id}, {$set:{labName, labType, mainCategory, subCategory,labCode, price}},);
       
       if(updated) {
        res.status(200).send(updated)
       }
    } catch (error) {
        console.log('error', error)
        res.status(500).json({ msg: "error updating", error: error });
    }
};


//deleting by id
const deleteLab = async (req, res) => {
    const {id} = req.params;

    try {
        
    const lab = await labModel.findByIdAndDelete({_id: id});
    res.status(200).json({ msg: "deleted successfully" });
    } catch (error) {
        console.log(error);
        res.status(404).send("drug not found");
    }
}

export default {
    addLab,
    getLabs,
    getLab,
    updateLab,
    deleteLab
}