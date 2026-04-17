import React from "react";

const FormInput = ({ label, type, name, defaultValue }) => {
    return (
        <div className="form-control">
            <label className="label flex">Username</label>
            <input
                type={type}
                defaultValue={defaultValue}
                name={name}
                className="input" />
        </div>
    )
}

export default FormInput;