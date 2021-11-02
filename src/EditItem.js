import React from 'react';

export default function EditItem({ item, save, clearEdit }) {
  return (
    <li>
      <input data-id={item.id} value={item.title} type="text" onChange={save} />
      <div>
        <button className="save" onClick={clearEdit}>
          Save
        </button>
      </div>
    </li>
  );
}
