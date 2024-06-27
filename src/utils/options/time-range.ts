import type { IVuelCalendarApi, IVuelCalendarOptions } from "vuelcalendar";

export const timeRange = (setApi: (api: IVuelCalendarApi) => void) => {
  const options: IVuelCalendarOptions = {
    height: 200,
    theme: "light",
    startDate: new Date(),
    endDate: new Date(new Date().setDate(new Date().getDate() + 1)),
    startHour: 8,
    endHour: 16,
    draggableEvents: false,
    lockResize: true,
    resizableEvents: false,
    showCursorTime: true,
    throwErrors: false,
    renderer: "CustomRenderer",
    onVuelCalendarApiReady(api: IVuelCalendarApi) {
      setApi(api);
      api.setEvents([
        {
          id: 1,
          label: "Adjust Time Event #1",
          data: {
            color: "#95c390",
            icon: "mdi mdi-clock",
          },
          start: new Date(new Date().setHours(8, 0)),
          end: new Date(new Date().setHours(23, 0)),
        },
        {
          id: 2,
          label: "Adjust Time Event #2",
          data: {
            color: "#95c390",
            icon: "mdi mdi-clock",
          },
          start: new Date(new Date().setHours(4, 0)),
          end: new Date(new Date().setHours(8, 0)),
        },
      ]);
    },
  };
  return options;
};
