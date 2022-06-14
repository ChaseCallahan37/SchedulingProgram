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

export const addResource = (newResourceJson) => {
  const newResource = new Resource(newResourceJson);
  resources.push(newResource);
  console.log("Back end", resources);
};
