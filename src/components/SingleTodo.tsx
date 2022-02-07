import React, { useEffect, useRef, useState } from 'react';
import { Todo } from '../models/models';
import {
  XCircleIcon,
  PencilIcon,
  CheckCircleIcon,
} from '@heroicons/react/solid';

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const handleDone = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
      ),
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map(todo => (todo.id === id ? { ...todo, todo: editTodo } : todo)),
    );
    setEdit(false);
  };

  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form
      className="flex w-1/3	rounded-md p-[20px] mt-[15px] mx-1 bg-green-600 md:w-full"
      onSubmit={e => handleEdit(e, todo.id)}
    >
      {edit ? (
        <input
          ref={inputRef}
          type="text"
          value={editTodo}
          className="flex-1 p-[5px] text-[20px]  focus:outline-none"
          onChange={e => setEditTodo(e.target.value)}
        />
      ) : todo.isDone ? (
        <s className="flex-1 p-[5px] text-[20px]  focus:outline-none">
          {todo.todo}
        </s>
      ) : (
        <span className="flex-1 p-[5px] text-[20px]  focus:outline-none">
          {todo.todo}
        </span>
      )}

      <div>
        <span
          className="ml-[10px] text-[25px] cursor-pointer"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <PencilIcon />
        </span>
        <span
          className="ml-[10px] text-[25px] cursor-pointer"
          onClick={() => handleDelete(todo.id)}
        >
          <XCircleIcon />
        </span>
        <span
          className="ml-[10px] text-[25px] cursor-pointer"
          onClick={() => handleDone(todo.id)}
        >
          <CheckCircleIcon />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
