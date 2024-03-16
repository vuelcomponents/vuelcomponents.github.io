import { i18n } from '@/plugins/i18n';

export default () => {
  return [
    // {
    //   headerCheckboxSelection: true,
    //   checkboxSelection: true,
    //   showDisabledCheckboxes: true,
    //   filter: false,
    //   width: 55,
    //   editable: false,
    //   minWidth: 55
    // },
    {
      headerName: i18n.global.t('orderSpec'),
      field: 'to_obiekt_opis',
      flex: 1,
      minWidth:120,
      cellStyle: { display: 'flex', gap: '4px' }
    },
    {
      headerName: i18n.global.t('start'),
      field: 'strefa_z',
      minWidth:140,
      flex: 1,
      headerClass: 'ag-right-aligned-header',
      cellStyle:{textAlign:'right'},
      cellClass:'ag-right-aligned-cell',
    },
    {
      headerName: i18n.global.t('stop'),
      field: 'strefa_do',
      minWidth:180,
      flex: 1,
      headerClass: 'ag-right-aligned-header',
      cellStyle:{textAlign:'right'},
      cellClass:'ag-right-aligned-cell',
    },
    {
      headerName: i18n.global.t('status'),
      field: 'status',
      minWidth:150,
      cellRenderer:'OrderStatusRenderer'
    },
  ];
};

