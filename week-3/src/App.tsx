'use client'
import TodoItems from "./components/TodoItems";


export default function App() {
  return (
    <section className="flex flex-col mt-5 ms-5">
      <h1 className="mb-3 text-2xl">Todo List</h1>
      <div className="items">
        <TodoItems />
      </div>
    </section>
  )
}
