import type {
  IVuelCalendarApi,
  IVuelCalendarOptions,
  VuelCalendarOptions,
} from "vuelcalendar";

export const monthView = (
  setApi: (api: IVuelCalendarApi) => void,
): VuelCalendarOptions => {
  const options: IVuelCalendarOptions = {
    height: 500,
    theme: "light",
    startDate: new Date(),
    endDate: new Date(new Date().setDate(new Date().getDate() + 4)),
    startHour: 0,
    endHour: 24,
    draggableEvents: false,
    resizableEvents: false,
    showCursorTime: true,
    throwErrors: false,
    renderer: "CustomRenderer",
    lockResize: true,
    onVuelCalendarApiReady(api: IVuelCalendarApi) {
      setApi(api);
      api.setEvents([
        {
          id: 1,
          label: "Switchable View Event #1",
          data: {
            color: "#7c3981",
            icon: "mdi mdi-variant",
          },
          start: new Date(new Date().setHours(8, 0)),
          end: new Date(new Date().setHours(23, 0)),
        },
        {
          id: 2,
          label: "Switchable View Event #2",
          data: {
            color: "#7c3981",
            icon: "mdi mdi-variant",
          },
          start: new Date(new Date().setHours(4, 0)),
          end: new Date(new Date().setHours(8, 0)),
        },
      ]);
    },
  };
  return options;
};
