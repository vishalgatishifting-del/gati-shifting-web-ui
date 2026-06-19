import { useEffect, useState } from "react";
import {
  createEmployee,
  getEmployees,
} from "../../../services/employeeService";

interface Employee {
  _id: string;
  employeeId: string;
  name: string;
  phone: string;
  email: string;
  designation: string;
  salary: number;
  status: string;
}

const Employee = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  const [formData, setFormData] = useState({
    employeeId: "",
    name: "",
    phone: "",
    email: "",
    designation: "",
    salary: "",
  });

  const loadEmployees = async () => {
    try {
      const res = await getEmployees();

      setEmployees(res.data.data || []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadEmployees();
  }, []);

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

      loadEmployees();
    } catch (error) {
      console.error(error);
      alert("Failed to add employee");
    }
  };

  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <h2>Add Employee</h2>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "grid",
          gap: "10px",
          maxWidth: "500px",
        }}
      >
        <input
          type="text"
          name="employeeId"
          placeholder="Employee ID"
          value={formData.employeeId}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="designation"
          placeholder="Designation"
          value={formData.designation}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="salary"
          placeholder="Salary"
          value={formData.salary}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Add Employee
        </button>
      </form>

      <hr
        style={{
          margin: "30px 0",
        }}
      />

      <h2>Employee List</h2>

      <div
        style={{
          overflowX: "auto",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Designation</th>
              <th>Salary</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {employees.length > 0 ? (
              employees.map((employee) => (
                <tr key={employee._id}>
                  <td>{employee.employeeId}</td>
                  <td>{employee.name}</td>
                  <td>{employee.phone}</td>
                  <td>{employee.email}</td>
                  <td>{employee.designation}</td>
                  <td>₹{employee.salary}</td>
                  <td>{employee.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={7}
                  style={{
                    textAlign: "center",
                    padding: "20px",
                  }}
                >
                  No Employees Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employee;