import ListItem from './ListItem';
import EditItem from './EditItem';
import { useState } from 'react';

export default function List({ data, updateData }) {
  //the list {data} holds the data in state in App.js
  //the colorId is the id of the currently selected item for editing
  //empty string is the value if NOTHING is selected for editing
  const [colorId, setColorId] = useState('');

  function editClick(ev) {
    ev.preventDefault();
    console.log('clicked edit');
    //save the id of the item whose edit button was clicked
    setColorId(ev.target.getAttribute('data-id'));
  }
  function saveClick(ev) {
    ev.preventDefault();
    console.log('clicked save');
    let obj = {
      id: ev.target.getAttribute('data-id'),
      title: ev.target.value,
    };
    //pass the new data back up to App.js to merge with the state list
    updateData(obj);
    //the method to update state has to be in the component that holds the state variable
  }

  function clearEdit(ev) {
    ev.preventDefault();
    //set the currently selected id back to nothing
    //this could be for the cancel button
    setColorId('');
    //if there is a cancel button then our submit button would do the update of state
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
