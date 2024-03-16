
import type { Service } from '@/services/Service';
import defaultColDef from '@/utils/grid/defaultColDef';
import addGridKeyListeners from '@/utils/grid/listeners/addGridKeyListeners';
import mainOnCellValueChanged from '@/utils/grid/mainOnCellValueChanged';
import type {
  CellClickedEvent,
  CellValueChangedEvent,
  GridApi,
  GridOptions,
  GridReadyEvent,
  RowNode,
  SelectionChangedEvent
} from 'ag-grid-community';
import type { TinyEmitter } from 'tiny-emitter';
export interface IGrid {
  service?: Service;
  api?: GridApi;
  selected: [];
  searchText: string;
  emitter?: TinyEmitter;
  onCellClicked: (params: CellClickedEvent) => void;
  onCellValueChanged: (params: CellValueChangedEvent) => void;
  onSelectionChanged: (params: SelectionChangedEvent) => void;
  emit: (summary: string, detail: string) => void;
  loadList: () => void;
  getAllRows: () => Array<RowNode>;
  deleteSelectedRows: () => void;
  updateDialog: () => void;
  options: GridOptions;
}
export class Grid implements IGrid {
  service?: Service;
  api?: GridApi;
  selected: any = [];
  searchText = '';
  emitter?: TinyEmitter;
  updateDialog = () => {
    console.warn('update dialog has not been implemented');
  };
  onCellClicked = (params: CellClickedEvent) => {
    console.warn('on cell clicked has not been implemented');
  };
  onCellValueChanged = (params: CellValueChangedEvent) => {
    console.warn('on cell value changed has not been implemented');
    console.warn('default update method has been triggered');
    if (this.service) {
      this.service.update(params.data, true).then((res) => {
        switch (res?.status) {
          case 200:
            params.node.setData(res.data);
            return;
          default:
            params.node.data[params.colDef.field!] = params.oldValue;
            params.node.setData(params.node.data);
            return;
        }
      });
    }
  };
  onSelectionChanged = (params: SelectionChangedEvent) => {
    this.selected = params.api.getSelectedRows();
  };

  emit = (summary: string, detail: string) => {
    if (this.emitter) {
      this.emitter.emit('error', { severity: 'error', summary, detail, life: 3000 });
    }
  };
  constructor(events: any, functions: any, $: any) {
    if (events?.updateDialog) {
      this.updateDialog = events.updateDialog;
    }
    if (events?.onCellValueChanged) {
      this.onCellValueChanged = events.onCellValueChanged;
    }
    if (events?.onCellClicked) {
      this.onCellClicked = events.onCellClicked;
    }
    if ($?.emitter) {
      this.emitter = $.emitter;
    }
    if (functions.loadList) {
      this.loadList = functions.loadList;
    }
    if (!$?.service) {
      console.error('Service has not been provided');
      this.emit('Service error', 'Service has not been provided to grid');
      return;
    }
    this.service = $.service;
  }

  loadList = async () => {
    const list = await this.service!.getAll();
    this.api!.setGridOption('rowData', list);
  };
  getAllRows = (): Array<RowNode> => {
    const rowData: any[] = [];
    this.api!.forEachNode((node) => rowData.push(node.data));
    return rowData;
  };
  deleteSelectedRows = () => {
    const data = this.getAllRows().filter((d) => !this.selected.some((r: any) => r.id === d.id));
    this.api!.setGridOption('rowData', data);
  };
  deleteRowsByIds = (idDtos:any) => {
    const data = this.getAllRows().filter((d) => !idDtos.some((r: any) => r.id === d.id));
    this.api!.setGridOption('rowData', data);
  };
  deleteRowsByParam = (param:string, value:any) => {
    const data = this.getAllRows().filter((d:any) =>  d[param] !== value );
    this.api!.setGridOption('rowData', data);
  };
  deleteManyApi = (noLoad?:boolean) => {
    if(noLoad){
      return  this.service!.deleteMany(this.selectedToIds())
    }
    return this.service!.deleteMany(this.selectedToIds()).then((res) => {
      this.loadList();
    });
  };
  updateRowById = (id: number, data: any) => {
    this.api!.forEachNode((node) => {
      if (node.data.id === id) {
        node.setData(data);
      }
    });
  };
  updateRowByParam = (param: any, value:any, data: any) => {
    this.api!.forEachNode((node) => {
      if (node.data[param] === value) {
        node.setData(data);
      }
    });
  };
  selectedToIds = (): Array<any> => {
    const ids: any[] = [];
    this.selected.forEach((s: any) => ids.push({ id: s.id }));
    return ids;
  };
  search = () => {
    this.api!.setQuickFilter(this.searchText);
  };

  options: GridOptions<any> = {
    pagination: true,
    paginationPageSize: 20,
    onGridReady: async (params: GridReadyEvent) => {
      this.api = params.api;
      addGridKeyListeners(params.api, this.updateDialog);
      await this.loadList();
      console.log('grid data', this.getAllRows());
    },
    onCellValueChanged: (params: CellValueChangedEvent) => {
      if (!params.data) {
        return;
      }
      if (this.onCellValueChanged) {
        this.onCellValueChanged(params);
        return;
      }
      if (this.service) {
        mainOnCellValueChanged(params, { service: this.service });
      }
    },
    onCellClicked: (params: CellClickedEvent) => {
      this.onCellClicked(params);
    },
    onSelectionChanged: (params: SelectionChangedEvent) => {
      this.onSelectionChanged(params);
    },
    getRowStyle: (params: any) => {
      if (params.node.rowIndex % 2 === 0) {
        return { background: '#27344b', color:'#fff' , borderBottom:'solid 2px #2e3c54'};
      } else {
        return { background: '#2a374f', color:'#fff', borderBottom:'solid 2px #2e3c54' };
      }
    },
    defaultColDef,
    sideBar: {
      toolPanels: ['filters']
    }
  };
  data = [];
}
