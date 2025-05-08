import { Checkbox } from "@/components/ui/checkbox";
import { CheckedState } from "@radix-ui/react-checkbox";
import React from "react";
import { LuPencil, LuTrash2 } from "react-icons/lu"

const TodoItem: React.FC<TodoItemProps> = ({ id, text, checked, className, handleItemChecked, handleItemUpdate, handleItemDeleted }) => {
    const [showButtons, setShowButtons] = React.useState(false);

    return (
        <div className={`flex items-center gap-2 ${className}`} onMouseEnter={() => setShowButtons(true)} onMouseLeave={() => setShowButtons(false)}>
            <Checkbox id={id} checked={checked} onCheckedChange={(e) => handleItemChecked(id, e)} />
            <label htmlFor={id} className={checked ? "line-through" : ""}>{text}</label>
            {showButtons && <span className="flex gap-2">
                <LuPencil className="cursor-pointer" onClick={() => handleItemUpdate(id)} />
                <LuTrash2 className="cursor-pointer" onClick={() => handleItemDeleted(id)} />
            </span>
            }
        </div>
    )
}

type TodoItemProps = React.HTMLAttributes<HTMLDivElement> & {
    id: string;
    text: string;
    checked: CheckedState;
    handleItemChecked(id: string, checked: CheckedState): void;
    handleItemUpdate(id: string): void;
    handleItemDeleted(id: string): void;
}

export default TodoItem;