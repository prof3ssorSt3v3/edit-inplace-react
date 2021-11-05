import ListItem from './ListItem';
import EditItem from './EditItem';
import { useState } from 'react';

export default function List({ data, updateData }) {
  //the list {data} holds the data in state in App.js
  //the colorId is the id of the currently selected item for editing
  //empty string is the value if NOTHING is selected for editing
  const [colorId, setColorId] = useState('');
  const [originalColor, setOriginal] = useState('');

  function editClick(ev) {
    ev.preventDefault();
    console.log('clicked edit');
    const id = ev.target.getAttribute('data-id');
    //save the id of the item whose edit button was clicked
    setColorId(id);
    const colorTitle = data.find((obj) => obj.id === id)['title'];
    setOriginal(colorTitle);
  }

  function doSave(ev) {
    ev.preventDefault();
    const id = ev.target.getAttribute('data-id');
    let obj = data.find((obj) => {
      console.log(obj.id, id);
      return obj.id === id;
    });
    console.log('clicked save', obj);
    //state has already been updated
    //the method to update state has to be in the component that holds the state variable
    setColorId('');
    setOriginal('');
    //clear the id so we go back to the ListItem version
  }

  function doCancel(ev) {
    ev.preventDefault();
    //put the input/text back to the original color.
    console.log(`Put color back to ${originalColor}`);
    const id = ev.target.getAttribute('data-id');
    let obj = {
      id: id,
      title: originalColor,
    };
    //pass the new data back up to App.js to merge with the state list
    updateData(obj);
    //set the currently selected id back to nothing
    setColorId('');
    setOriginal('');
  }

  function doChange(ev) {
    //gets called as the user types in the color input
    ev.preventDefault();
    //we have to update state as they type or the display can't change
    let obj = {
      id: ev.target.getAttribute('data-id'),
      title: ev.target.value,
    };
    //pass the new data back up to App.js to merge with the state list
    updateData(obj);
    //state is changing as we type.
    //if the user cancels the edit then we need to put the color back to originalColor
  }

  const Items = data.map((item) => {
    if (item.id === colorId) {
      return (
        <EditItem
          key={item.id}
          item={item}
          cancel={doCancel}
          save={doSave}
          change={doChange}
        />
      );
    } else {
      return <ListItem key={item.id} item={item} edit={editClick} />;
    }
  });

  return <ul className="mylist">{Items}</ul>;
}
