import React, { useState } from 'react';
import InputFeild from './components/InputField';
import { Todo } from './models/models';
import TodoList from './components/TodoList';

function App() {
    const [todo, setTodo] = useState<string>('');
    const [todos, setTodos] = useState<Todo[]>([]);

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();
        if (todo) {
            setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
        }
        setTodo('');
    };

    return (
        <div className="App w-full h-[100vh] flex flex-col items-center bg-green-200 sm md lg xl 2xl">
            <span className="text-[40px] my-28 z-10 text-center text-green-800 text-bold">TASKIFY</span>
            <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
            <TodoList todos={todos} setTodos={setTodos} />
        </div>
    );
}

export default App;
