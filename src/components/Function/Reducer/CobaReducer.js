import React, { useReducer } from "react";

const initialState = [
  {
    id: 1,
    nama: "Bastian Sweinsteiger",
    umur: 40,
    isMarried: true,
  },
  {
    id: 2,
    nama: "Frank Lampard",
    umur: 41,
    isMarried: true,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, isMarried: !todo.isMarried };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

const Todos = () => {
  const [todos, dispatch] = useReducer(reducer, initialState);

  const handleMarried = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  const [...obj] = todos;
  console.log(obj);
  return (
    <>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.isMarried}
                onChange={() => handleMarried(todo)}
              />
              {todo.nama}
              {/* <p>state redux = {state.value}</p> */}
            </label>
          </div>
        );
      })}
    </>
  );
};

export default Todos;
