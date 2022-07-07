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
  const index = resources.findIndex((res) => res.id === newResource.id);
  if (index === -1) {
    resources.push(new Resource(newResource));
  } else {
    const test = new Resource(newResource);
    resources[index] = test;
  }
};

export const removeResource = (id) => {
  const index = resources.findIndex((resource) => resource.id === id)
  resources.splice(index, 1)
};
