import { i18n } from '@/plugins/i18n';
import type { RowNode, CellClassParams, ITooltipParams} from 'ag-grid-community';

export default () => {
  return [
    {
      headerCheckboxSelection: true,
      checkboxSelection: true,
      showDisabledCheckboxes: true,
      filter: false,
      width: 55,
      editable: false,
      minWidth: 55
    },
    {
      headerName: i18n.global.t('id'),
      field: 'to_nag_id',
      minWidth:120,
      width:120,
      cellStyle: { display: 'flex', gap: '4px' }
    },
    {
      headerName: i18n.global.t('description'),
      field: 'to_nag_opis',
      minWidth:140,
      flex: 1
    },
    {
      headerName: i18n.global.t('date'),
      field: 'to_data',

      minWidth:200,
      width:200,
      headerClass: 'ag-right-aligned-header',
      cellStyle:{textAlign:'right'},
      cellClass:'ag-right-aligned-cell',
      valueGetter:(params:any)=> new Date(params.data.to_data).toLocaleDateString()
    },
    {
      headerName: i18n.global.t('preview'),
      field: 'preview',
      minWidth:150,
      headerClass:'centered',
      cellStyle:{display:'flex', justifyContent:'center'},
      cellRenderer:'PreviewButtonRenderer'
    },
    {
      headerName: i18n.global.t('begin'),
      field: 'takeOrder',
      label:'Podejmij zamówienie',
      minWidth:150,
      headerClass:'centered',
      cellStyle:{display:'flex', justifyContent:'center'},
      cellRenderer:'TakeOrderButtonRenderer'
    },
  ];
};

