import type { CellClassParams, ColDef, SuppressKeyboardEventParams } from 'ag-grid-community';

const colDef: ColDef = {
  // flex: 1,
  minWidth: 75,
  resizable: true,
  menuTabs: ['filterMenuTab'],
  filter: true,
  sortable: true,
  // headerClass:'grid-itm-header',
  editable: true,
  suppressKeyboardEvent:(params:SuppressKeyboardEventParams):any=>{
    if (params.event?.key === 'Enter') {
      return false;
    }
    return true;
  },
  // eslint-disable-next-line no-unused-vars
  cellStyle: (params: CellClassParams<any, any>): any => {
    return {
      textAlign: 'left'
    };
  }
};
export default colDef;
