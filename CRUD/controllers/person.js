const Person = require("../models/person");

const getAllPeople = async (req, res) => {
    await Person.find().then(people => {
        res.status(200).json(people);
    }).catch(err => {
        res.status(500).json({ message: "Something went wrong" })
    });
};

const getPerson = async (req, res) => {
    await Person.findById(req.params.id).then(person => {
        res.status(200).json(person);
    }).then(err => {
        res.status(500).json({ message: "Something went wrong" })
    });
};

const addPerson = async (req, res) => {
    const { name, age, gender, email } = req.body;
    try {
        let person = await Person.findOne({ email });
        if (person) {
            res.status(500).json({ message: "This email already exists" });
        } else {
            let newPerson = new Person({ name, age, gender, email });
            await newPerson.save();
            res.status(200).json({ message: "Added Successfully" });
        }
    } catch (err) {
        res.status(500).json({ message: "Sonthing went wrong" });
    }
};

const updatePerson = async (req, res) => {
    const { name, age, gender } = req.body;
    const { id } = req.params;
    const person = await Person.findById({ _id: id }).catch(err => { return });
    if (!person) {
        res.status(500).json({ message: "Please enter a valid ID" });
    } else {
        await Person.findByIdAndUpdate({ _id: id }, { name, age, gender }).then(data => {
            res.status(200).send({ message: "Updated Successfully" })
        }).catch(err => {
            res.status(500).json({ message: "Something went wrong" })
        });
    }
};

const deletePerson = async (req, res) => {
    const { id } = req.params;
    const person = await Person.findById({ _id: id }).catch(err => { return });
    if (!person) {
        res.status(400).json({ message: "Please enter a valid ID" });
    } else {
        await Person.findByIdAndRemove({ _id: id }).then(data => {
            res.status(200).send({ message: "Deleted Successfully" })
        }).catch(err => {
            res.status(500).json({ message: "Something went wrong" })
        });
    }
};

module.exports = {
    getAllPeople,
    getPerson,
    addPerson,
    updatePerson,
    deletePerson
}