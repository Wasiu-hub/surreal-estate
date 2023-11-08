/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-console */
import React, { useState } from "react";
import axios from "axios";
import "../styles/add-property.css";
import Alert from "./Alert";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      type: "Flat",
      bedroom: "",
      bathroom: "",
      price: "",
      city: "Manchester",
      email: "",
    },

    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const handleAddProperty = (event) => {
    event.preventDefault();
    console.log(fields);
    setAlert({ message: "", isSuccess: false });

    axios
      .post(`http://localhost:3000/api/v1/PropertyListing`, fields)
      .then(() =>
        // console.log("Poperty Added"));
        setAlert({
          message: "Property Added",
          isSuccess: true,
        })
      )
      .catch(() =>
        setAlert({
          message: "Server error. Please try again later.",
          isSuccess: false,
        })
      );
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="add-property">
      <Alert message={alert.message} success={alert.isSuccess} />
      Add Property Page
      <form onSubmit={handleAddProperty}>
        <label htmlFor="title">
          Property Title
          <input
            placeholder="Detached"
            id="title"
            name="title"
            value={fields.title}
            onChange={handleFieldChange}
          />
        </label>

        <label htmlFor="city">
          City
          <select
            id="city"
            name="city"
            value={fields.city}
            onChange={handleFieldChange}
          >
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Leeds">Sheffield</option>
            <option value="Leeds">Liverpool</option>
          </select>
        </label>

        <label htmlFor="type">
          Type
          <select
            id="type"
            name="type"
            value={fields.type}
            onChange={handleFieldChange}
          >
            <option value="Flat">Flat</option>
            <option value="Detached">Detached</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Terraced">Terraced</option>
            <option value="End-of-Terrace">End-of-Terrace</option>
            <option value="Cottage">Cottage</option>
            <option value="Bungalow">Bungalow</option>
          </select>
        </label>

        <label htmlFor="bedrooms">
          Bedrooms
          <input
            placeholder="2"
            id="bedroom"
            name="bedroom"
            value={fields.bedroom}
            onChange={handleFieldChange}
          />
        </label>

        <label htmlFor="bathrooms">
          Bathrooms
          <input
            placeholder="1"
            id="bathroom"
            name="bathroom"
            value={fields.bathroom}
            onChange={handleFieldChange}
          />
        </label>

        <label htmlFor="price">
          Price
          <input
            placeholder="amount"
            id="price"
            name="price"
            value={fields.price}
            onChange={handleFieldChange}
          />
        </label>

        <label htmlFor="email">
          Email
          <input
            placeholder="enter email address"
            id="email"
            name="email"
            value={fields.email}
            onChange={handleFieldChange}
          />
        </label>

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddProperty;
