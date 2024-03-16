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
      headerName: i18n.global.t('transportId'),
      field: 'transport_id',
      minWidth:140,
      width:140,
      cellStyle: { display: 'flex', gap: '4px' }
    },
    {
      headerName: i18n.global.t('transportCode'),
      field: 'transport_kod',
      flex: 1,
      minWidth:120,
      cellStyle: { display: 'flex', gap: '4px' }
    },
    {
      headerName: i18n.global.t('transportDescription'),
      field: 'transport_opis',
      minWidth:140,
      flex: 1
    },
    {
      headerName: i18n.global.t('transportStatus'),
      field: 'transport_status',
      cellRenderer:'TransportStatusRenderer',
      minWidth:180,
      flex: 1,
      headerClass:'centered',
      cellStyle:{display:'flex', justifyContent:'center', alignItems:'center'},
    },

    {
      headerName: i18n.global.t('chooseThisTransport'),
      field: 'chooseThisTransport',
      minWidth:150,
      headerClass:'centered',
      cellStyle:{display:'flex', justifyContent:'center'},
      cellRenderer:'ChooseTransportButtonRenderer'
    },
   
  ];
};

