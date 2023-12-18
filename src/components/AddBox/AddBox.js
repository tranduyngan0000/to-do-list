import { useState } from 'react';
import './AddBox.css';

function AddBox({ onAddTodoList }) {
  const [task, setTask] = useState('');
  const [error, setError] = useState(false);
  function handleChangeInputBox(e) {
    const value = e.target.value;
    setTask(value);
  }

  function handleBlurInputBox() {
    validate();
  }

  function validate() {
    setError(!(task && task.trim() !== ''));
  }

  function handleAdd() {
    validate();
    if (task && task.trim() !== '') {
      onAddTodoList(task);
      setTask('');
    }
  }

  return (
    <div>
      <div className='row'>
        <input
          type='text'
          id='input-box'
          placeholder='Add your tasks'
          onChange={handleChangeInputBox}
          onBlur={handleBlurInputBox}
          value={task}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      {error && <p className='error'>Please input task</p>}
    </div>
  );
}

export default AddBox;
