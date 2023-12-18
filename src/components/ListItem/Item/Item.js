import './Item.css';

function Item({ id, name, status, onCheck, onRemove }) {
  function handleCheck() {
    onCheck(id);
  }
  function handleRemove(event) {
    event.stopPropagation();
    onRemove(id);
  }
  return (
    <li className={`${status ? 'checked' : ''}`} onClick={handleCheck}>
      {name}
      <span onClick={handleRemove}>x</span>
    </li>
  );
}

export default Item;
