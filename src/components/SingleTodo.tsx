import React, { useEffect, useRef, useState } from 'react';
import { todoAtom, todosAtom } from '../models/models';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Todo } from '../models/models';
import {
  XCircleIcon,
  PencilIcon,
  CheckCircleIcon,
} from '@heroicons/react/solid';

type Props = {
  todo: Todo;
};

const SingleTodo = ({ todo }: Props) => {
  const todoAt = useRecoilValue(todoAtom);
  const [todos, setTodos] = useRecoilState(todosAtom);

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
  const [editTodo, setEditTodo] = useState<string>(todoAt);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form
      className="flex w-1/3 rounded-md p-[20px] mt-[15px] bg-green-600 md:w-full"
      onSubmit={e => handleEdit(e, todo.id)}
    >
      {edit ? (
        <input
          ref={inputRef}
          type="text"
          value={editTodo}
          className="rounded-lg todo-text"
          onChange={e => setEditTodo(e.target.value)}
        />
      ) : todo.isDone ? (
        <s className="todo-text">{todo.todo}</s>
      ) : (
        <span className="todo-text">{todo.todo}</span>
      )}

      <div className="block">
        <span
          className="icon"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <PencilIcon />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <XCircleIcon />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <CheckCircleIcon />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
