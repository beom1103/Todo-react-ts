import React from 'react';
import SingleTodo from './SingleTodo';
import { todosAtom } from '../models/models';
import { useRecoilValue } from 'recoil';

const TodoList: React.FC = () => {
  const todos = useRecoilValue(todosAtom);

  return (
    <div className="flex flex-wrap w-11/12 justify-evenly md:flex-col md:w-11/12">
      {todos.map(todo => (
        <SingleTodo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
