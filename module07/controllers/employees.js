import { connectDB } from '../db/connect.js';
import { ObjectId } from 'mongodb';

export const getAllEmployees = async (req, res) => {
  try {
    const db = await connectDB();
    const filter = {};

    if (req.query.employed === 'true') filter.currentlyEmployed = true;
    else if (req.query.employed === 'false') filter.currentlyEmployed = false;

    const employees = await db.collection('employees').find(filter).toArray();
    res.status(200).json({ employees, count: employees.length });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const getEmployee = async (req, res) => {
  try {
    const db = await connectDB();
    const employee = await db.collection('employees').findOne({ _id: new ObjectId(req.params.id) });
    res.status(200).json({ employee });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const createEmployee = async (req, res) => {
  try {
    const db = await connectDB();
    const result = await db.collection('employees').insertOne(req.body);
    const employee = await db.collection('employees').findOne({ _id: result.insertedId });
    res.status(201).json({ employee });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const updateEmployee = async (req, res) => {
  try {
    const db = await connectDB();
    await db.collection('employees').updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: req.body }
    );
    res.status(200).json({ msg: 'Employee updated successfully' });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const deleteEmployee = async (req, res) => {
  try {
    const db = await connectDB();
    await db.collection('employees').deleteOne({ _id: new ObjectId(req.params.id) });
    res.status(200).json({ msg: 'Employee deleted successfully' });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
