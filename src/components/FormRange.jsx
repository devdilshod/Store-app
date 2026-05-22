import React, { useState } from "react";
import { formatPrice } from '../utils'

const FormRange = ({ label, name, size, price }) => {
    const maxPrice = 100000;
    const step = 1000;
    const [selectedPrice, setSelectedPrice] = useState(price || maxPrice);
    return (
        <div className="form-control">
            <label htmlFor={name} className="label flex">
                <span className="label-text">
                    {label}
                </span>
                <span className="ml-auto">
                    {formatPrice(selectedPrice)}
                </span>
            </label>
            <input
                type="range"
                min={0}
                max={maxPrice}
                step={step}
                id={name}
                name={name}
                className={`range range-primary ${size}`}
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(e.target.value)}
            />
            <div className="w-full flex justify-between text-xs px-2 mt-1">
                <span className="font-bold text-md">0</span>
                <span className="font-bold text-md">
                    Max:
                    {formatPrice(maxPrice)}
                </span>
            </div>
        </div>
    )
}

export default FormRange;