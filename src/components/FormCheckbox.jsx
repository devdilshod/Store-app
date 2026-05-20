import React from "react";

const FormCheckbox = ({ label, name, size, defaultValue }) => {
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
                defaultChecked={defaultValue}
            />
        </div>
    )
}

export default FormCheckbox;