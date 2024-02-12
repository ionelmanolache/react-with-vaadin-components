import { useRef, useEffect } from 'react'

import '@vaadin/grid/vaadin-grid';
import '@vaadin/grid/vaadin-grid-selection-column';
import '@vaadin/grid/vaadin-grid-sort-column';

import { MyButton } from './components/MyButton';

const MyGrid = ({ data }) => {
  const grid = useRef(null);

  useEffect(() => {
    if (grid.current) {

      // grid.current.columns = [
      //   { name: "firstName" },
      //   { name: "lastName" },
      //   { name: "city" }
      // ];

      grid.current.items = data;

      console.log('useEffect, grid.current.items', grid.current.items);
    }
  }, []);


  return (
    <vaadin-grid ref={grid} theme="row-dividers" column-reordering-allowed multi-sort>
      <vaadin-grid-selection-column auto-select frozen></vaadin-grid-selection-column>
      <vaadin-grid-sort-column width="9em" path="firstName"></vaadin-grid-sort-column>
      <vaadin-grid-sort-column width="9em" path="lastName"></vaadin-grid-sort-column>
      <vaadin-grid-column width="9em" path="city"></vaadin-grid-column>
    </vaadin-grid>
  )
}

function App() {
  const data = JSON.parse('[{  "firstName": "firstName",  "lastName": "lastName",  "city": "city" }]');

  return (
    <><p>Hello</p>
      <p><MyButton /></p>
      <div>
        <MyGrid data={data} />
      </div>
    </>
  )

}

export default App
