import React, { useState } from "react";
// import axios from 'axios';

function Form2() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    lga: "",
    town: "",
    message: "",
    location: "",
    category: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) {
      errors.phone = "phone is required";
    }
    if (!formData.state.trim()) {
      errors.state = "state is required";
    }
    if (!formData.lga.trim()) {
      errors.lga = "lga is required";
    }
    if (!formData.town.trim()) {
      errors.town = "town is required";
    }
    if (!formData.location.trim()) {
      errors.location = "location is required";
    }
    if (!formData.category.trim()) {
      errors.category = "category is required";
    }
    if (!formData.message.trim()) {
      errors.message = "message is required";
    }
    // You can add more validation rules for other fields as needed
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post(
          "http://localhost:8000/postcontact/",
          formData
        );
        console.log("Form submitted:", response.data);
        // Assuming the form submission was successful, you can handle it here
        alert("Message sent Successfully");
        // page reload
        window.location.reload();
      } catch (error) {
        console.error("Error submitting form:", error);
        // Handle error accordingly
      }
    }
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div className="d-flex mt-3">
          <div className="flex-grow-1 me-2">
            <input
              type="text"
              name="name"
              value={formData.name}
              className={`form-control ${errors.name && "is-invalid"}`}
              placeholder="Name"
              onChange={handleChange}
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name}</div>
            )}
          </div>
          <div className="flex-grow-1 ms-2">
            <input
              type="email"
              name="email"
              value={formData.email}
              className={`form-control ${errors.email && "is-invalid"}`}
              placeholder="Email"
              onChange={handleChange}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </div>
        </div>

        <div className="d-flex mt-3">
          <div className="flex-grow-1 me-2">
            <input
              type="number"
              className={`form-control ${errors.phone && "is-invalid"}`}
              name="phone"
              value={formData.phone}
              placeholder="Phone"
              onChange={handleChange}
            />
            {errors.phone && (
              <div className="invalid-feedback">{errors.phone}</div>
            )}
          </div>
          <div className="flex-grow-1 ms-2">
            <input
              type="text"
              className={`form-control ${errors.state && "is-invalid"}`}
              onChange={handleChange}
              name="state"
              value={formData.state}
              placeholder="State"
            />
            {errors.state && (
              <div className="invalid-feedback">{errors.state}</div>
            )}
          </div>
        </div>

        <div className="d-flex mt-3">
          <div className="flex-grow-1 me-2">
            <input
              type="text"
              className={`form-control ${errors.lga && "is-invalid"}`}
              name="lga"
              value={formData.lga}
              placeholder="Enter your LGA"
              onChange={handleChange}
            />
            {errors.lga && <div className="invalid-feedback">{errors.lga}</div>}
          </div>
          <div className="flex-grow-1 ms-2">
            <input
              type="text"
              className={`form-control ${errors.town && "is-invalid"}`}
              onChange={handleChange}
              name="town"
              value={formData.town}
              placeholder="Town"
            />
            {errors.town && (
              <div className="invalid-feedback">{errors.town}</div>
            )}
          </div>
        </div>

        <div className="d-flex mt-3">
          <div className="flex-grow-1 me-2">
            <input
              type="text"
              className={`form-control ${errors.location && "is-invalid"}`}
              name="location"
              value={formData.location}
              placeholder="Exact Location"
              onChange={handleChange}
            />
            {errors.location && (
              <div className="invalid-feedback">{errors.location}</div>
            )}
          </div>

          <div className="flex-grow-1 ms-2">
            <select
              id=""
              type="select"
              className={`form-control ${errors.category && "is-invalid"}`}
              onChange={handleChange}
              name="category"
              value={formData.category}
              placeholder=""
            >
              <option value="">Select a category</option>
              <option value="infrastructure">Infrastructure</option>
              <option value="healthcare">Healthcare</option>
              <option value="education">Education</option>
              <option value="security">Security</option>
              <option value="others">Others</option>
            </select>
            {errors.category && (
              <div className="invalid-feedback">{errors.category}</div>
            )}
          </div>
        </div>

        <textarea
          name="message"
          id=""
          className={`form-control mt-3 ${errors.message && "is-invalid"}`}
          placeholder="Describe your report in detail here"
          cols="30"
          rows="8"
          onChange={handleChange}
          value={formData.message}
        ></textarea>
        {errors.message && (
          <div className="invalid-feedback">{errors.message}</div>
        )}
        <div className="mt-3">
          <button className="btn btn-danger">Submit</button>
        </div>
      </form>
    </>
  );
}

export default Form2;