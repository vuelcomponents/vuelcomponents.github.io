
export default () => {
  return [
    {
      headerName: 'Type',
      field: 'type',
      minWidth:160,
      width:160,

    },
    {
      headerName: 'Structure',
      field: 'structure',
      width:400,
      flex:1,
      wrapText:true,
      autoHeight:true,
      cellRenderer:'TypesRenderer'
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

