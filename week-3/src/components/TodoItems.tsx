import { useState } from "react"
import TodoItem from "./TodoItem";
import { Button } from "@/components/ui/button";
import TodoItemForm from "./TodoItemForm";

interface Todo {
    id: string;
    text: string;
    checked: boolean;
    isEditing: boolean;
}

export default function TodoItems() {
    const [todos, setTodos] = useState<Record<string, Todo>>({
        "1": { id: "1", text: "Todo 1", checked: false, isEditing: false },
        "2": { id: "2", text: "Todo 2", checked: true, isEditing: false },
    });
    const [showAddItemInput, setShowAddItemInput] = useState(false)

    const handleItemChecked = (id: string, checked: boolean) => {
        setTodos((prevTodos) => {
            const updatedTodos = { ...prevTodos };
            if (updatedTodos[id]) updatedTodos[id].checked = checked;
            return updatedTodos;
        });
    }

    const setItemEditing = (id: string) => {
        setTodos((prevTodos) => ({
            ...prevTodos,
            [id]: { ...prevTodos[id], isEditing: true }
        }))
    }

    const addTodoItem = (text: string) => {
        if (!text) return;

        const newId = (Math.random() * 1000).toString();
        const newTodo: Todo = { id: newId, text, checked: false, isEditing: false };
        setTodos((prevTodos) => ({ ...prevTodos, [newId]: newTodo }));
        setShowAddItemInput(false);
    }

    const handleItemUpdated = (id: string, text: string) => {
        if (!text) return;

        setTodos((prevTodos) => {
            const updatedTodos = { ...prevTodos };
            if (updatedTodos[id]) {
                updatedTodos[id].text = text;
                updatedTodos[id].isEditing = false;
            }
            return updatedTodos;
        });
    }

    const handleItemDeleted = (id: string) => {
        setTodos((prevTodos) => {
            const updatedTodos = { ...prevTodos };
            delete updatedTodos[id];
            return updatedTodos;
        });
    }

    return (
        <div className="flex flex-col">
            {Object.values(todos).map(({ id, text, checked, isEditing }) =>
                isEditing ? (
                    <TodoItemForm
                        id={id}
                        key={id}
                        text={text}
                        className="self-start"
                        itemFormSubmit={handleItemUpdated} />
                ) : (
                    <TodoItem
                        id={id}
                        key={id}
                        className="mb-1" text={text} checked={checked}
                        handleItemChecked={handleItemChecked}
                        handleItemUpdate={setItemEditing}
                        handleItemDeleted={handleItemDeleted} />)
            )}

            {showAddItemInput && <TodoItemForm className="self-start" itemFormSubmit={(id, text) => addTodoItem(text)} />}

            <Button className="bg-zinc-950 text-white mt-2 self-start cursor-pointer" onClick={() => setShowAddItemInput(true)}>
                Add Item
            </Button>
        </div>
    )
}
