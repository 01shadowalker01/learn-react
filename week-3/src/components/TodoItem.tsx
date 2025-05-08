import { Checkbox } from "@/components/ui/checkbox";
import { CheckedState } from "@radix-ui/react-checkbox";
import React from "react";

const TodoItem: React.FC<TodoItemProps> = ({ id, text, checked, onCheckedChange, className }) => {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <Checkbox id={id} checked={checked} onCheckedChange={(e) => onCheckedChange(id, e)} />
            <label htmlFor={id} className={checked ? "line-through" : ""}>{text}</label>
        </div>
    )
}

type TodoItemProps = React.HTMLAttributes<HTMLDivElement> & {
    id: string;
    text: string;
    checked: CheckedState;
    onCheckedChange(id: string, checked: CheckedState): void;
}

export default TodoItem;