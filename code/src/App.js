import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { tasks } from 'reducers/tasks';
import TaskList from 'components/tasklist';
import NewTask from 'components/newTask';

export const App = () => {
  const reducer = combineReducers({
    tasks: tasks.reducer
  });

  const store = configureStore({
    reducer
  });

  return (
    <Provider store={store}>
      <NewTask />
      <TaskList />
    </Provider>
  );
};
