import React from "react";

function Todo(props) {
    // const arr = (props.p)
  return (
    <div>
      <li className="shadow p-2 my-2 col-sm-9">{props.value}ss</li>

      <button className="btn btn-danger my-2 col-sm-2 offset-1" onClick={() => { props.sendData(props.id) }}>X</button>
    
    </div>
  );
}

export default Todo;
