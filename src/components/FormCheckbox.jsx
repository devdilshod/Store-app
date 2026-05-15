import React from "react";

const FormCheckbox = ({ label, name, size }) => {
    return (
        <div className="form-control flex flex-col gap-t-2 items-center">
            <label htmlFor={name} className="label">
                {label}
            </label>
            <input
                type="checkbox"
                name={name}
                id={name}
                className={`checkbox checkbox-primary ${size}`}
            />
        </div>
    )
}

export default FormCheckbox;