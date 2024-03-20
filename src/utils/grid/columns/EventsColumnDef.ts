
export default () => {
  return [
    {
      headerName: 'Event',
      field: 'event',
      minWidth:160,
      width:160,

    },
    {
      headerName: 'Returns',
      field: 'args',
      minWidth:170,
      width:170,
    },
    {
      headerName:'Preview',
      field: 'preview',
      minWidth:100,
      width:100,
      headerClass:'centered text-ultra-100',
      cellStyle:{display:'flex', justifyContent:'center',alignItems:'center'},
      cellRenderer:'FunctionRenderer'

    },
    {
      headerName: 'Description',
      field: 'description',
      width:400,
      flex:1,
      wrapText:true,
      autoHeight:true,
    },
    // {
    //   headerName: '',
    //   field: 'transport_opis',
    //   minWidth:140,
    //   flex: 1
    // },
    // {
    //   headerName: i18n.global.t('transportStatus'),
    //   field: 'transport_status',
    //   cellRenderer:'TransportStatusRenderer',
    //   minWidth:180,
    //   flex: 1,
    //   headerClass:'centered',
    //   cellStyle:{display:'flex', justifyContent:'center', alignItems:'center'},
    // },
    //
    // {
    //   headerName: i18n.global.t('chooseThisTransport'),
    //   field: 'chooseThisTransport',
    //   minWidth:150,
    //   headerClass:'centered',
    //   cellStyle:{display:'flex', justifyContent:'center'},
    //   cellRenderer:'ChooseTransportButtonRenderer'
    // },
    //
  ];
};

