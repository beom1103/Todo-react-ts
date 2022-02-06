import React, { useRef } from 'react';

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputFeild: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form
            className="relative flex items-center w-9/12"
            onSubmit={e => {
                handleAdd(e);
                inputRef.current?.blur();
            }}
        >
            <input
                className="w-full py-5 rounded-full px-15 text-[25px] border-none text-center ease-in-out duration-300 shadow-inner focus:shadow-slate-500 focus:outline-none"
                ref={inputRef}
                type="input"
                value={todo}
                onChange={e => setTodo(e.target.value)}
                placeholder="할 일을 입력하세요."
            />
            <button className="absolute w-[50px] h-[50px] m-12 rounded-full text-[15px] bg-blue-300 text-white ease-in duration-300 shadow-black right-0 hover:scale-125 hover:shadow-lg" type="submit">
                GO
            </button>
        </form>
    );
};

export default InputFeild;
