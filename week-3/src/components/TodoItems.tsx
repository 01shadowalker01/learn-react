import { useState } from "react"
import TodoItem from "./TodoItem";
import { Button } from "@/components/ui/button";
import AddTodoItem from "./AddTodoItem";

interface Todo {
    id: string;
    text: string;
    checked: boolean;
}

export default function TodoItems() {
    const [todos, setTodos] = useState<Record<string, Todo>>({
        "1": { id: "1", text: "Todo 1", checked: false },
        "2": { id: "2", text: "Todo 2", checked: true },
    });
    const [showAddItemInput, setShowAddItemInput] = useState(false)

    const onItemStatusChange = (id: string, checked: boolean) => {
        setTodos((prevTodos) => {
            const updatedTodos = { ...prevTodos };
            if (updatedTodos[id]) {
                updatedTodos[id].checked = checked;
            }
            return updatedTodos;
        });
    }

    const addTodoItem = (text: string) => {
        const newId = (Math.random() * 1000).toString();
        const newTodo: Todo = { id: newId, text, checked: false };
        setTodos((prevTodos) => ({ ...prevTodos, [newId]: newTodo }));
        setShowAddItemInput(false);
    }

    return (
        <div className="flex flex-col">
            {Object.values(todos).map(({ id, text, checked }) => {

                return (
                    <TodoItem key={id} id={id} className="mb-1" text={text} checked={checked} onCheckedChange={onItemStatusChange} />
                )
            })}
            {showAddItemInput && <AddTodoItem className="self-start" addTodoItemSubmit={addTodoItem} />}
            <Button className="bg-zinc-950 text-white mt-2 self-start" onClick={() => setShowAddItemInput(true)}>Add Item</Button>
        </div>
    )
}
