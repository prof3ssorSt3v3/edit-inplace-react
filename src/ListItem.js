import React from 'react';

export default function ListItem({ item, edit }) {
  return (
    <li>
      {item.title}
      <div>
        <button className="edit" data-id={item.id} onClick={edit}>
          Edit
        </button>
      </div>
    </li>
  );
}
