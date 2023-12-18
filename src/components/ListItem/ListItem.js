import './ListItem.css';
import Item from './Item/Item';
export default function ListItem({ list, onCheck, onRemove }) {
  return (
    <ul>
      {list.map((e, index) => {
        return (
          <Item
            key={index}
            id={e.id}
            name={e.name}
            status={e.isComplete}
            onCheck={onCheck}
            onRemove={onRemove}
          />
        );
      })}
    </ul>
  );
}
