import React from 'react';

export default function EditItem({ item, save, cancel, change }) {
  return (
    <li>
      <input
        data-id={item.id}
        value={item.title}
        type="text"
        onChange={change}
      />
      <div>
        <button className="cancel" onClick={cancel} data-id={item.id}>
          Cancel
        </button>
        <button className="save" onClick={save} data-id={item.id}>
          Save
        </button>
      </div>
    </li>
  );
}
