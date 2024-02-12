import { forwardRef } from 'react'
import '@vaadin/grid/vaadin-grid';
import '@vaadin/grid/vaadin-grid-selection-column';
import '@vaadin/grid/vaadin-grid-sort-column';

export default MyGrid = forwardRef((props, ref) => {

    return (
        <vaadin-grid ref={ref} theme="row-dividers" column-reordering-allowed multi-sort>
            <vaadin-grid-selection-column auto-select frozen></vaadin-grid-selection-column>
            <vaadin-grid-sort-column width="9em" path="firstName"></vaadin-grid-sort-column>
            <vaadin-grid-sort-column width="9em" path="lastName"></vaadin-grid-sort-column>
            <vaadin-grid-column width="9em" path="city"></vaadin-grid-column>
        </vaadin-grid>
    )
})