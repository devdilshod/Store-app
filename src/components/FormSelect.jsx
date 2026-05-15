import React from "react";
import { ImTab } from "react-icons/im";
//[all , apple,windows]
const FormSelect = ({ label, name, list,size }) => {
    return (
        <div className="form-control">
            <label htmlFor={name} className="label">
                {label}
            </label>
            <select
            className={`select select-bordered ${size}`}
                name={name}
                id={name}
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