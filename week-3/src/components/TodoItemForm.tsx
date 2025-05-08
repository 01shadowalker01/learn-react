import { Input } from "@/components/ui/input"
import { Button } from "./ui/button"
import React, { useEffect, useRef } from "react"
import { LuCheck } from "react-icons/lu";

const TodoItemForm: React.FC<TodoItemFormProps> = ({ id = "", text = "", itemFormSubmit, className }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const handleClick = () => {
        const value = inputRef.current?.value;
        itemFormSubmit(id, value || "")
    };

    const handleKeyUp = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            const value = inputRef.current?.value;
            itemFormSubmit(id, value || "")
        }
    }

    return (
        <div className={`flex items-center gap-2 mb-1 ${className}`}>
            <Input ref={inputRef} onKeyUp={handleKeyUp} defaultValue={text} />
            <Button variant="outline" className="cursor-pointer" onClick={handleClick}>
                <LuCheck />
            </Button>
        </div>
    )
}

type TodoItemFormProps = React.HTMLAttributes<HTMLDivElement> & {
    id?: string;
    text?: string;
    itemFormSubmit: (id: string, text: string) => void;
}

export default TodoItemForm