/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';
import { Task } from 'styledComponents/Task';
import { FaTrashAlt } from 'react-icons/fa';
import {
  DeleteButton,
  FilterContainer,
  Footer
} from 'styledComponents/Buttons';

import Header from './header';
import NewTask from './newTask';

const TaskList = () => {
  const [filter, setFilter] = useState('all');
  const taskList = useSelector((store) => store.tasks.items);

  const uncompletedTasks = taskList.filter((item) => !item.complete);
  const completedTasks = taskList.filter((item) => item.complete);

  const dispatch = useDispatch();

  const onCompleteToggle = (id) => {
    dispatch(tasks.actions.toggleItem(id));
  };

  const onDeleteTask = (id) => {
    dispatch(tasks.actions.deleteTask(id));
  };

  const onCompleteAll = () => {
    dispatch(tasks.actions.completeAll());
  };

  const getFilteredTask = () => {
    if (filter === 'all') {
      return taskList;
    } else if (filter === 'completed') {
      return completedTasks;
    } else if (filter === 'uncompleted') {
      return uncompletedTasks;
    }
  };

  const filteredTasks = getFilteredTask();

  const deleteALL = () => {
    if (window.confirm('Are you sure you want to delete all tasks?')) {
      dispatch(tasks.actions.clearAll());
    }
  };

  return (
    <div>
      <Header />

      <FilterContainer>
        <button type="button" onClick={() => setFilter('all')}>
          All: {taskList.length}
        </button>
        <button type="button" onClick={() => setFilter('uncompleted')}>
          Active: {uncompletedTasks.length}
        </button>
        <button type="button" onClick={() => setFilter('completed')}>
          Completed: {completedTasks.length}
        </button>
      </FilterContainer>
      <section>
        <div className="tasklist">
          <NewTask />
          {filteredTasks.map((singleTask) => {
            return (
              <Task key={singleTask.id}>
                <div className="check-task">
                  <label>
                    <input
                      type="checkbox"
                      checked={singleTask.complete}
                      onChange={() => onCompleteToggle(singleTask.id)}
                    />
                  </label>
                  <h2>{singleTask.text}</h2>
                </div>
                <DeleteButton
                  delete
                  className="delete"
                  type="button"
                  onClick={() => onDeleteTask(singleTask.id)}
                >
                  <FaTrashAlt />
                </DeleteButton>
              </Task>
            );
          })}
        </div>
      </section>
      <Footer>
        <button type="button" onClick={onCompleteAll}>
          Check all
        </button>
        <button type="button" onClick={deleteALL}>
          Clear all
        </button>
      </Footer>
    </div>
  );
};

export default TaskList;
