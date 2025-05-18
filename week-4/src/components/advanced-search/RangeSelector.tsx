import RangeSlider, { type InputEvent } from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import "./RangeSelector.css"
import { useState } from "react";

interface RangeSelectorProps {
    label: string;
    min: number;
    max: number;
    defaultLower: number;
    defaultUpper: number;
    step?: number;
    floatingPoints?: number;
}

const RangeSelector = ({ label, min, max, defaultLower, defaultUpper, step, floatingPoints }: RangeSelectorProps) => {
    const [lower, setLower] = useState(defaultLower);
    const [upper, setUpper] = useState(defaultUpper);

    function onInput(inputEvent: InputEvent) {
        const [newLower, newUpper] = inputEvent;
        setLower(newLower);
        setUpper(newUpper);
    }

    return (
        <div className="flex flex-col gap-1">
            <div className="flex justify-between">
                <span className="text-white text-sm">{label}</span>
                <span className="text-primary text-sm">
                    {upper.toFixed(floatingPoints || 0)} - {lower.toFixed(floatingPoints || 0)}
                </span>
            </div>
            <RangeSlider min={min} max={max} step={step || 1} className="range-selector bg-secondary2" value={[lower, upper]} onInput={onInput} />
        </div>
    )
}

export default RangeSelector;