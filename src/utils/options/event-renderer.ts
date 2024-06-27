import type { IVuelCalendarApi, IVuelCalendarOptions } from "vuelcalendar";
import fruit1 from "../../assets/oranges.jpg";
import fruit2 from "../../assets/fruit2.jpg";
export const eventRenderer = (
  setApi: (api: IVuelCalendarApi) => void,
  initialRenderer: string,
): IVuelCalendarOptions => {
  const options: IVuelCalendarOptions = {
    height: 200,
    theme: "light",
    startDate: new Date(),
    endDate: new Date(new Date().setDate(new Date().getDate() + 1)),
    startHour: 8,
    endHour: 16,
    draggableEvents: false,
    resizableEvents: false,
    showCursorTime: true,
    throwErrors: false,
    lockResize: true,
    renderer: initialRenderer,
    onVuelCalendarApiReady(api: IVuelCalendarApi) {
      setApi(api);
      api.setEvents([
        {
          id: 1,
          label: "Event Rendered #1",
          data: {
            color: "#cfb841",
            color2: "#df8351",
            title1: "Prepare lemon juice",
            title2: "# Prepare lemon juice",
            description1: "Buy ingredients, squeeze, serve",
            description2: "1. Buy ingredients 2. squeeze 3. serve",
            img1: fruit1,
          },
          start: new Date(new Date().setHours(8, 0)),
          end: new Date(new Date().setHours(12, 0)),
        },
        {
          id: 2,
          label: "Event Rendered #2",
          data: {
            color: "#72c768",
            color2: "#95c390",
            title1: "Green Grape Salad",
            title2: "# Green Grape Salad",
            description1:
              "Pick fruit from the garden, give it to Kasia to make",
            description2:
              "1. Pick fruit from the garden 2. give it to Kasia to make",
            img1: fruit2,
          },
          start: new Date(
            new Date(new Date().setHours(10, 0)).setDate(
              new Date().getDate() + 1,
            ),
          ),
          end: new Date(
            new Date(new Date().setHours(14, 0)).setDate(
              new Date().getDate() + 1,
            ),
          ),
        },
      ]);
    },
  };
  return options;
};
