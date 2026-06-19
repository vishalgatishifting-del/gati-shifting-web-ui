import { useState } from "react";
import { createEmployee } from "../../../services/employeeService";

const AddEmployee = () => {
  const [formData, setFormData] = useState({
    employeeId: "",
    name: "",
    phone: "",
    email: "",
    designation: "",
    salary: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      await createEmployee(formData);

      alert("Employee Added Successfully");

      setFormData({
        employeeId: "",
        name: "",
        phone: "",
        email: "",
        designation: "",
        salary: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Add Employee</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="employeeId"
          placeholder="Employee ID"
          value={formData.employeeId}
          onChange={handleChange}
        />

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="designation"
          placeholder="Designation"
          value={formData.designation}
          onChange={handleChange}
        />

        <input
          type="number"
          name="salary"
          placeholder="Salary"
          value={formData.salary}
          onChange={handleChange}
        />

        <button type="submit">
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;