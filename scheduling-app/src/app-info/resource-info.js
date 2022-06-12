import Resource from "../Classes/resources-class";

let resources = [
  new Resource("Teacher", "Jeff", "8-5 MWF", ["MIS 221", "MIS 321"]),
];

export const getResources = () => {
  return [...resources];
};

export const addResource = ({ type, name, availability, constraints }) => {
  const newResource = new Resource(type, name, availability, constraints);
  resources.push(newResource);
  console.log("Back end", resources);
};
