import React from 'react';
import './fcStyle.css';
function FileCard(props) {
  return (
    <div className="card" onClick={props.on}>
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <h5 className="card-title">{props.year}</h5>
            <p className="card-text">{props.remark}</p>
        </div>
    </div>
  );
}

export default FileCard;
