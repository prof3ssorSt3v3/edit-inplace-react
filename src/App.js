import List from './List';
import { data } from './data';
import { useState } from 'react';

function App() {
  //colors is the list of data from ./data.js (could be from an api or localStorage)
  const [colors, setColors] = useState(data);

  function updateData(obj) {
    //for editing the list
    const newList = colors.map((item) => {
      if (obj.id === item.id) {
        return obj;
      } else {
        return item;
      }
    });
    setColors(newList);
  }

  return (
    <div className="App">
      <List data={colors} updateData={updateData} />
    </div>
  );
}

export default App;
