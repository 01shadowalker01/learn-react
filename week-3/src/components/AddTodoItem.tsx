import { Input } from "@/components/ui/input"
import { Button } from "./ui/button"
import React, { useRef } from "react"

const AddTodoItem: React.FC<AddTodoItemProps> = ({ addTodoItemSubmit, className }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        const value = inputRef.current?.value;
        addTodoItemSubmit(value || "")
    };

    const handleKeyUp = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            const value = inputRef.current?.value;
            addTodoItemSubmit(value || "")
        }
    }

    return (
        <div className={`flex items-center gap-2 mb-1 ${className}`}>
            <Input ref={inputRef} onKeyUp={handleKeyUp} />
            <Button variant="outline" className="cursor-pointer" onClick={handleClick}>+</Button>
        </div>
    )
}

type AddTodoItemProps = React.HTMLAttributes<HTMLDivElement> & { addTodoItemSubmit: (text: string) => void }

export default AddTodoItem