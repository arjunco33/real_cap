import React, { useState, } from "react";
import "./Page1.css";
import axios from "axios";

function Page1() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    gstNo: "",
    constitution: "Select a value",
  });

  const [file, setFile] = useState(null);
  //const fileInputRef = useRef(null); // Reference to the file input

  // Handle file input change
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Handle file upload submission
  const handleFileSubmit = async (e) => {
    e.preventDefault();
    const fileData = new FormData(); // Corrected to FormData
    fileData.append("file", file);

    try {
      const res = await axios.post(
        //"http://192.168.10.37:5000/upload",
        "http://127.0.0.1:8000/upload/",
        fileData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "Accept": "application/json",  // Add Accept header
          },
        }
      );
      alert("File uploaded successfully. Document ID: " + res.data.documentId);
      //fileInputRef.current.value = ""; // Reset the file input field
      //setFile(null); // Reset the file state
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Failed to upload file");
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //await axios.post("http://127.0.0.1:8000/api/users/", formData, {
        await axios.post('http://127.0.0.1:8000/save_userdata/', formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert("Data submitted successfully");
      setFormData({
        name: "",
        address: "",
        gstNo: "",
        constitution: "Select a value",
      });
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Failed to submit data");
    }
  };

  return (
    <div>
      <div className="form-container">
        <h2>Enter Your Details</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="gstNo">GST No:</label>
            <input
              type="text"
              id="gstNo"
              name="gstNo"
              placeholder="Enter your GST number"
              onChange={handleChange}
              value={formData.gstNo}
            />
          </div>
          <div className="form-group">
            <label htmlFor="constitution">Constitution:</label>
            <select
              id="constitution"
              name="constitution"
              value={formData.constitution}
              onChange={handleChange}
            >
              <option value="Select a value">Select a value</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
          </div>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
      <div className="form-container">
        <h2>Upload Documens</h2>
        <form>
          <input type="file" onChange={handleFileChange} />
          <button type="submit" onClick={handleFileSubmit}>
            Upload
          </button>
        </form>
      </div>
    </div>
  );
}

export default Page1;
