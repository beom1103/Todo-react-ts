import { atom } from 'recoil';

export interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}

export const todoAtom = atom<string>({
  key: 'todoAtom',
  default: '',
});

export const todosAtom = atom<Todo[]>({
  key: 'todosAtom',
  default: [],
});

// type Actions =
//   | { type: 'ADD'; payload: string }
//   | { type: 'REMOVE'; payload: number }
//   | { type: 'DONE'; payload: number };

// export const todoReducer = (state: Todo[], action: Actions) => {
//   switch (action.type) {
//     case 'ADD':
//       return [
//         ...state,
//         { id: Date.now(), todo: action.payload, isDone: false },
//       ];
//     case 'REMOVE':
//       return [state.filter(todo => todo.id !== action.payload)];
//     case 'DONE':
//       return [
//         state.map(todo =>
//           todo.id !== action.payload ? { ...todo, isDone: !todo.isDone } : todo,
//         ),
//       ];
//   }
// };
