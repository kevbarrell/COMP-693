const getAllEmployees = async (req, res) => {
  try {
    res.status(200).json({ employees, count: employees.length });
  } catch (err) {
    res.status(500).json ({ msg : err });
  }
}

const getEmployee = async (req, res) => {
  try {
    res.status(200).json({ employee });
  } catch (err) {
    res.status(500).json ({ msg : err });
  }
}

const createEmployee = async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(201).json({ employee });
  } catch (err) {
    res.status(500).json ({ msg : err });
  }
}

const updateEmployee = (req, res) => {
  res.send('Update an existing employee')
}

const deleteEmployee = (req, res) => {
  res.send('Delete an employee')
}

export {
  getAllEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee
}