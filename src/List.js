import ListItem from './ListItem';
import EditItem from './EditItem';
import { useState } from 'react';

export default function List({ data, updateData }) {
  //the list will hold the data in state
  const [colorId, setColorId] = useState('');

  function editClick(ev) {
    ev.preventDefault();
    console.log('clicked edit');
    setColorId(ev.target.getAttribute('data-id'));
  }
  function saveClick(ev) {
    ev.preventDefault();
    console.log('clicked save');
    let obj = {
      id: ev.target.getAttribute('data-id'),
      title: ev.target.value,
    };
    updateData(obj);
  }

  function clearEdit(ev) {
    ev.preventDefault();
    setColorId('');
  }

  const Items = data.map((item) => {
    if (item.id === colorId) {
      return (
        <EditItem
          key={item.id}
          item={item}
          clearEdit={clearEdit}
          save={saveClick}
        />
      );
    } else {
      return <ListItem key={item.id} item={item} edit={editClick} />;
    }
  });

  return <ul className="mylist">{Items}</ul>;
}
