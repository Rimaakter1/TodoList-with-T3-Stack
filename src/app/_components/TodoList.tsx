"use client";
import { useState } from "react";

const TodoList = () => {

    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");
    const [editTask, setEditTask] = useState(null);

    // Add or Edit a Todo
    const addOrEditTodo = () => {
        if (!input.trim()) return;

        const newTodo = { text: input, completed: false };
        if (editTask !== null) {
            const updatedTodos = [...todos];
            updatedTodos[editTask] = { ...todos[editTask], text: input };
            setTodos(updatedTodos);
            setEditTask(null);
        } else {
            setTodos([...todos, newTodo]);
        }

        setInput("");
    };

    return (

        <div className="w-full max-w-4xl p-8 bg-white rounded-2xl shadow-xl">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                To-Do List
            </h1>

            <div className="flex mb-6">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Add a new task or edit"
                    className="input w-full py-3 px-4 border border-gray-300 rounded-l-full focus:outline-none focus:ring-0  "
                />
                <button
                    onClick={addOrEditTodo}
                    className="bg-purple-600 text-white px-6 py-3 rounded-r-full hover:bg-purple-600 transition duration-300 text-4xl"
                >
                    add
                </button>
            </div>

            <div className="flex space-x-8">
                {/* Incomplete Tasks Section */}
                <div className="w-1/2 p-4 bg-gray-100 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Tasks To Do</h2>
                    <ul className="list-none space-y-4">

                        <p className="text-center text-gray-600">No tasks to do!</p>

                    </ul>
                </div>

                {/* Completed Tasks Section */}
                <div className="w-1/2 p-4 bg-green-100 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Completed Tasks</h2>
                    <ul className="list-none space-y-4">


                        <p className="text-center text-gray-600">No completed tasks!</p>

                    </ul>
                </div>
            </div>
        </div>


    )
}

export default TodoList;
