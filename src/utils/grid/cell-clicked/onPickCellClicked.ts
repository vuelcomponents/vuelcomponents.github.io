import type { CellClickedEvent } from 'ag-grid-community';

export default (params: CellClickedEvent, options: any) => {
  if (params.colDef.field === 'preview') {
      options.setShowPreview(params.data.to_nag_id);
  }
};
