/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';

const NewTask = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTask = {
      text: input,
      isComplete: false
    };

    dispatch(tasks.actions.addTask(newTask));
    setInput('');
  };
  console.log(input);
  return (
    <form onSubmit={onFormSubmit}>
      <label>
        New task:
        <input
          className="text-input"
          type="text"
          value={input}
          placeholder="enter new task"
          onChange={(event) => setInput(event.target.value)}
        />
      </label>
      <button type="submit"> Add </button>
    </form>
  );
};

export default NewTask;