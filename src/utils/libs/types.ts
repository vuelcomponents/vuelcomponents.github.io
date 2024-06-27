const types = [
  {
    id: 3,
    type: "VuelCalendarDrop",
    structure:
      "clickEvent:MouseEvent;\n" +
      "    newStartDateTime:Date;\n" +
      "    oldStartDateTime:Date;\n" +
      "    newEndDateTime:Date;\n" +
      "    oldEndDateTime:Date;\n" +
      "    event:VuelCalendarEvent;\n" +
      "    accept:()=>void;\n" +
      "    decline:()=>void;",
  },
  {
    id: 6,
    type: "VuelCalendarResize",
    structure:
      "    event:VuelCalendarEvent;\n" +
      "    newDateTime:Date;\n" +
      "    oldDateTime:Date;\n" +
      "    accept:()=>void;\n" +
      "    decline:()=>void;",
  },
  {
    id: 1,
    type: "VuelCalendarDay",
    structure:
      "    clickEvent?:MouseEvent;\n" +
      "    date?:Date;\n" +
      "    time?:string;\n" +
      "    events?:Array<VuelCalendarEvent>",
  },
  {
    id: 2,
    type: "VuelCalendarEvent",
    structure:
      "    id?:string|number;\n" +
      "    label?:string;\n" +
      "    start:Date;\n" +
      "    end:Date;\n" +
      "    data?:any;",
  },
  {
    id: 5,
    type: "VuelCalendarEventConfigure",
    structure:
      "    id?:string|number;\n" +
      "    label?:string;\n" +
      "    start?:Date;\n" +
      "    end?:Date;\n" +
      "    data?:any;",
  },
  {
    id: 4,
    type: "Colors",
    structure:
      "   surface?:string;\n" +
      "    primary?:string\n" +
      "    event?:string\n" +
      "    highlight?:string\n" +
      "    textPrimary?:string\n" +
      "    menuBg?:string,\n" +
      "    dragging?:string",
  },
  {
    id: 7,
    type: "EventTemplate",
    structure: "(event:VuelCalendarEvent) => HTML:String",
  },
];
const getTypesMenu = (router: any) => {
  const menu = [];
  for (const type of types) {
    menu.push({
      label: type.type,
      icon: "mdi mdi-language-typescript",
      command: () => router.push({ name: "Types", query: { docs: type.type } }),
    });
  }
  return menu;
};
export { types, getTypesMenu };
