import connectDB from '../db/connect.js';
import { ObjectId } from 'mongodb';

const getAllEmployees = async (req, res) => {
  try {
    const db = await connectDB(process.env.MONGO_URI);
    const employees = await db.collection('employees').find({}).toArray();

    res.status(200).json({ employees, count: employees.length });
  } catch (err) {
    console.error('Error fetching employees:', err);
    res.status(500).json({ msg: err.message });
  }
};

const getEmployee = async (req, res) => {
  try {
    const db = await connectDB(process.env.MONGO_URI);
    const employee = await db.collection('employees').findOne({ _id: new ObjectId(String(req.params.id)) });

    if (!employee) {
      return res.status(404).json({ msg: 'Employee not found' });
    }

    res.status(200).json({ employee });
  } catch (err) {
    console.error('Error fetching employee:', err);
    res.status(500).json({ msg: err.message });
  }
};

const createEmployee = async (req, res) => {
  try {
    const db = await connectDB(process.env.MONGO_URI);
    const result = await db.collection('employees').insertOne(req.body);

    res.status(201).json({ employee: { ...req.body, _id: result.insertedId } });
  } catch (err) {
    console.error('Error creating employee:', err);
    res.status(500).json({ msg: err.message });
  }
};

const updateEmployee = async (req, res) => {
  try {
    const db = await connectDB(process.env.MONGO_URI);
    const result = await db.collection('employees').updateOne(
      { _id: new ObjectId(String(req.params.id)) },
      { $set: req.body }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ msg: 'Employee not found' });
    }

    res.status(200).json({ msg: 'Employee updated' });
  } catch (err) {
    console.error('Error updating employee:', err);
    res.status(500).json({ msg: err.message });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const db = await connectDB(process.env.MONGO_URI);
    const result = await db.collection('employees').deleteOne({ _id: new ObjectId(String(req.params.id)) });

    if (result.deletedCount === 0) {
      return res.status(404).json({ msg: 'Employee not found' });
    }

    res.status(200).json({ msg: 'Employee deleted' });
  } catch (err) {
    console.error('Error deleting employee:', err);
    res.status(500).json({ msg: err.message });
  }
};

export {
  getAllEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee
};
