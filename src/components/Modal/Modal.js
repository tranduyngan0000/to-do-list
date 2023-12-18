import './Modal.css';

export default function Modal(props) {
  return (
    <div className='container'>
      <div className='todo-app'>
        <div className='app-title'>
          <h2>{props.title}</h2>
        </div>
        {props.children}
      </div>
    </div>
  );
}
