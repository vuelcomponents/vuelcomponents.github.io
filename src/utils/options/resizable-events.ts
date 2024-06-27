import type {
  IVuelCalendarApi,
  IVuelCalendarOptions,
  VuelCalendarOptions,
  VuelCalendarResize,
} from "vuelcalendar";

export const resizableEvents = (
  getAllow: () => boolean,
  setResponse: (param: string, res: string) => void,
  setApi: (api: IVuelCalendarApi) => void,
): VuelCalendarOptions => {
  const options: IVuelCalendarOptions = {
    height: 200,
    theme: "light",
    startDate: new Date(),
    endDate: new Date(new Date().setDate(new Date().getDate() + 1)),
    startHour: 0,
    endHour: 24,
    draggableEvents: false,
    resizableEvents: true,
    showCursorTime: true,
    throwErrors: false,
    renderer: "CustomRenderer",
    lockResize: true,
    onEventStartResized(resized: VuelCalendarResize) {
      if (getAllow()) {
        resized.accept();
      } else {
        resized.decline();
      }
      setResponse("resize", JSON.stringify(resized));
    },
    onEventEndResized(resized: VuelCalendarResize) {
      if (getAllow()) {
        resized.accept();
      } else {
        resized.decline();
      }
      setResponse("resize", JSON.stringify(resized));
    },
    onVuelCalendarApiReady(api: IVuelCalendarApi) {
      setApi(api);
      api.setEvents([
        {
          id: 1,
          label: "Resizable Event #1",
          data: {
            color: "#394e81",
            icon: "mdi mdi-resize",
          },
          start: new Date(new Date().setHours(8, 0)),
          end: new Date(new Date().setHours(23, 0)),
        },
        {
          id: 2,
          label: "Resizable Event #2",
          data: {
            color: "#564589",
            icon: "mdi mdi-resize",
          },
          start: new Date(new Date().setHours(4, 0)),
          end: new Date(new Date().setHours(8, 0)),
        },
      ]);
    },
  };
  return options;
};
