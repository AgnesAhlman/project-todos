/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { tasks } from 'reducers/tasks';
import TaskList from 'components/tasklist';
import { Container, Wrapper } from 'styledComponents/Container';
// import BackgroundImage from './components/background.jpg';

export const App = () => {
  const reducer = combineReducers({
    tasks: tasks.reducer
  });

  const store = configureStore({
    reducer
  });

  return (
    <Provider store={store}>
      <Wrapper>
        <Container>
          <TaskList />
        </Container>
      </Wrapper>
    </Provider>
  );
};
