import React from 'react';
import { Todo } from '../models/models';
import { XCircleIcon, PencilIcon, CheckCircleIcon } from '@heroicons/react/solid';

type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
    return (
        <form className="flex w-1/3	rounded-md p-[20px] mt-[15px] mx-1 bg-green-600">
            <span className="flex-1 p-[5px] text-[20px]  focus:outline-none">{todo.todo}</span>
            <div>
                <span className="ml-[10px] text-[25px] cursor-pointer">
                    <XCircleIcon />
                </span>
                <span className="ml-[10px] text-[25px] cursor-pointer">
                    <PencilIcon />
                </span>
                <span className="ml-[10px] text-[25px] cursor-pointer">
                    <CheckCircleIcon />
                </span>
            </div>
        </form>
    );
};

export default SingleTodo;
