
export default () => {
  return [
    {
      headerName: 'Param',
      field: 'param',
      minWidth:160,
      width:160,

    },
    {
      headerName: 'Type',
      field: 'type',
      width:160,
      minWidth:160,
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
      headerName:'Description',
      field:'description',
      flex:1,
      wrapText:true,
      autoHeight:true,
    }
  ]

};

