import React, { useRef } from 'react';
import { todoAtom, todosAtom } from '../models/models';
import { useRecoilState } from 'recoil';

const InputFeild: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [todo, setTodo] = useRecoilState(todoAtom);
  const [todos, setTodos] = useRecoilState(todosAtom);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
    }
    setTodo('');
  };

  return (
    <form
      className="relative flex items-center w-9/12 md:w-11/12"
      onSubmit={e => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        className="w-full py-[10px] rounded-full px-[15px] text-[25px] border-none text-center ease-in-out duration-300 shadow-inner focus:shadow-slate-500 focus:outline-none"
        ref={inputRef}
        type="input"
        value={todo}
        onChange={e => setTodo(e.target.value)}
        placeholder="할 일을 입력하세요."
      />
      <button
        className="absolute w-[50px] h-[50px] m-12 rounded-full text-[15px] bg-blue-300 text-white ease-in duration-300 shadow-black right-0 hover:scale-125 hover:shadow-lg"
        type="submit"
      >
        GO
      </button>
    </form>
  );
};

export default InputFeild;
