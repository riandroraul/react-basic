import React, { useReducer } from "react";

const initialState = [
  {
    id: 1,
    nama: "Bastian Sweinsteiger",
    umur: 40,
    isMarried: false,
  },
  {
    id: 2,
    nama: "Frank Lampard",
    umur: 41,
    isMarried: false,
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
    console.log(dispatch({ isMarried: todo.isMarried }));
  };

  const [obj1, obj2] = todos;
  console.log(obj1);
  console.log(obj2);
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
            </label>
          </div>
        );
      })}
    </>
  );
};

export default Todos;
