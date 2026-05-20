import React from "react";

const FormSelect = ({ label, name, list,size,defaultValue }) => {
    return (
        <div className="form-control">
            <label htmlFor={name} className="label">
                {label}
            </label>
            <select
            className={`select select-bordered ${size}`}
                name={name}
                id={name}
                defaultValue={defaultValue}
            >
                {
                    list.map((item) => <option key={item} value={item}>
                        {item}
                    </option>)
                }
            </select>
        </div>
    )
}

export default FormSelect;