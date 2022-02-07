import React from 'react';
import InputFeild from './components/InputField';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App w-full h-[100vh] flex flex-col items-center bg-green-200 sm md lg xl 2xl">
      <span className="text-[40px] my-28 z-10 text-center text-green-800 text-bold">
        TASKIFY
      </span>
      <InputFeild />
      <TodoList />
    </div>
  );
}

export default App;
