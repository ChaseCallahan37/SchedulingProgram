import Resource from "../Classes/resources-class";

let resources = [
  new Resource({
    type: "Teacher",
    name: "Jeff",
    availability: "8-5 MWF",
    constraints: ["MIS 221", "MIS 321"],
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

export const createBlankResource = () => {
  return new Resource();
};
