import React from "react";

const FormInput = ({ label, type, name, defaultValue, size }) => {
    return (
        <div className="form-control">
            <label className="label flex">
                {label}
            </label>
            <input
                type={type}
                defaultValue={defaultValue}
                name={name}
                className={`input ${size}`} />
        </div>
    )
}

export default FormInput;