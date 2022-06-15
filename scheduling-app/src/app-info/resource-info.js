import Resource from "../Classes/resources-class";
import Availability from "./../Classes/availability-class";

let resources = [
  new Resource({
    type: "Teacher",
    name: "Jeff",
    availability: new Availability(),
    constraints: ["MIS 221", "MIS 321"],
  }),
];

export const getResources = () => {
  return [...resources];
};

export const saveResource = (newResource) => {
  debugger;
  const duplicate = resources.find((r) => r.id === newResource.id);
  if (!duplicate) {
    resources.push(new Resource(newResource));
  }
};

export const createBlankResource = () => {
  return new Resource();
};

export const createBlankAvailability = () => {
  return new Availability();
};
