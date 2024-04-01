import type {GridApi,} from 'ag-grid-community';
export default (api:GridApi, updateDialog:Function)=>{
    document.addEventListener('keydown', (event:KeyboardEvent) => {
        const selected = api.getSelectedRows()
        switch(true){
            case event.key === 'W' && event.shiftKey && selected.length>0:
                updateDialog(selected[selected.length-1])
                break;
        }

    })

    window.addEventListener('resize', function () {
        setTimeout(function () {
            if (window.innerWidth <= 680) {
                api.sizeColumnsToFit();
            }
        })
    })
}