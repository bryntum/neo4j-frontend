import { Gantt } from "@bryntum/gantt";
import "./style.css";

const gantt = new Gantt({
  appendTo: "app",
  startDate: new Date(2022, 0, 1),
  endDate: new Date(2022, 0, 10),
  columns: [{ type: "name", width: 160 }],
  project: {
    tasksData: [
      {
        id: 1,
        name: "Write docs",
        expanded: true,
        children: [
          {
            id: 2,
            name: "Proof-read docs",
            startDate: "2022-01-02",
            endDate: "2022-01-09",
          },
          {
            id: 3,
            name: "Release docs",
            startDate: "2022-01-09",
            endDate: "2022-01-10",
          },
        ],
      },
    ],

    dependenciesData: [{ fromTask: 2, toTask: 3 }],
  },
});
