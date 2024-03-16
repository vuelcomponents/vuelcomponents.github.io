
import m1 from "@/assets/m1.png";
import m2 from "@/assets/m2.png";
import m3 from "@/assets/m3.png";

export default [

    {
        id: 3,
        label: 'Alan Fabric',
        data: {
            img:m1,
            color:'#454a89'
        },
        start: new Date(new Date().setHours(8, 0)),
        end: new Date(new Date().setHours(23, 0)),
    },
    {
        id: 4,
        label: 'Chris Cock',
        data: {
            img:m2,
            color:'#56a36b'
        },
        start: new Date(new Date().setHours(8, 0)),
        end: new Date(new Date().setHours(23, 0)),
    },
    {
        id: 5,
        label: 'Krzysiek Jerzyna ze Szczecina',
        data: {
            img:m3,
            color:'#438789'
        },
        start: new Date(new Date().setHours(8, 0)),
        end: new Date(new Date().setHours(23, 0)),
    },
]