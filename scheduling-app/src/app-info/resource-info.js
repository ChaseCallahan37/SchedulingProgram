import Resource from "../Classes/resources-class";
import Availability from "./../Classes/availability-class";
import Time from "../Classes/TimeClass";

let resources = [
  new Resource({
    type: "Teacher",
    name: "Jeff",
    availability: [
      {
        title: "wednesday",
        times: {
          start: new Time({
            hour: "8",
            minute: "30",
          }),
          end: new Time({
            hour: "5",
            minute: "45",
          }),
        },
      },
    ],
    constraints: {
      classSize: "Large",
      teachingStyle: "In-Person",
    },
  }),
];

export const getResources = () => {
  return [...resources];
};

export const saveResource = (newResource) => {
  const duplicate = resources.find((r) => r.id === newResource.id);
  if (!duplicate) {
    resources.push(new Resource(newResource));
  }
};
