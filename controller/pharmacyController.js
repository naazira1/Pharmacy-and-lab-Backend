import pharmacyModel from "../models/pharmacyModel.js";
//import { ObjectId } from "mongodb";

const addDrug = async (req, res) => {
  const { drug_name, description, unit_pricing, drug_code, price } = req.body;

  try {
    const drug = new pharmacyModel({
      drug_name,
      description,
      unit_pricing,
      drug_code,
      price,
    });

    const result = await drug.save();
    if (result) {
      res.status(201).send(result);
    }
  } catch (error) {
    console.log("erroradding", error);
    res.status(500).send(error);
  }
};

const getDrugs = async (req, res) => {
  try {
    const drugs = await pharmacyModel.find();
    if (drugs) {
      res.status(200).send(drugs);
    } else {
      res.status(404).send("drug not found");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "error getting", error: error });
  }
};


//Getting one by id
const getDrug = async (req, res) => {
  const { id } = req.params;
  try {
    const drug = await pharmacyModel.findOne({_id: id});
   //const drug = await pharmacyModel.findOne({ _id: new ObjectId(id) });
    if (drug) {
      res.status(200).send(drug);
    } else {
      res.status(404).send("drug not found");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "error getting", error: error });
  }
};

const updateDrug = async (req, res) => {
    const {id} = req.params;
    try {
      
       //const drug = await pharmacyModel.findOne({id})
       const { drug_name, description, unit_pricing, drug_code, price } = req.body;
   
    // const updated = await pharmacyModel.findByIdAndUpdate({_id: new ObjectId(id)}, {$set:
       const updated = await pharmacyModel.findByIdAndUpdate({_id: id}, {$set:
        { drug_name, description, unit_pricing, drug_code, price } }, {returnDocument: "after"});
      
       if(updated) {
        res.status(200).send(updated)
       }
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "error updating", error: error });
    }
}



const deleteDrug = async (req, res) => {
  const { id } = req.params;

  try {
     const drug = await pharmacyModel.findByIdAndDelete({_id: id});
    //const drug = await pharmacyModel.findByIdAndDelete({_id: new ObjectId(id)});
      
    res.status(200).json({ msg: "deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(404).send("drug not found");
  }
};

export default {
  addDrug,
  getDrugs,
  getDrug,
  updateDrug,
  deleteDrug,
};
