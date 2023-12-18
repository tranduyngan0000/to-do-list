import { useState } from 'react';
import AddBox from './components/AddBox/AddBox';
import ListItem from './components/ListItem/ListItem';
import Modal from './components/Modal/Modal';
import { todoListInit } from './constant/TodoList';

function App() {
  const [todoList, setTodoList] = useState(todoListInit);
  const [indexList, setIndexList] = useState(3);

  function handleAddTodoList(name) {
    const beforeList = [...todoList];
    beforeList.push({
      id: indexList,
      name,
      isComplete: false
    });
    setTodoList(beforeList);
    setIndexList(indexList + 1);
  }

  function handleCheck(id) {
    const beforeList = [...todoList];
    const removeItem = beforeList.find((e) => e.id === id);
    removeItem.isComplete = !removeItem.isComplete;
    setTodoList(beforeList);
  }
  function handleRemove(id) {
    const beforeList = [...todoList];
    const removeIndex = beforeList.findIndex((e) => e.id === id);
    beforeList.splice(removeIndex, 1);
    setTodoList(beforeList);
  }
  return (
    <Modal title='To-do app'>
      <AddBox onAddTodoList={handleAddTodoList} />
      <ListItem list={todoList} onCheck={handleCheck} onRemove={handleRemove} />
    </Modal>
  );
}

export default App;
