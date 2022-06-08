import Resource from "../Classes/resources-class";

let resources = [];

const addResource = (type, name, availability, constraints) => {
  const newResource = new Resource(type, name, availability, constraints);
  resources.push(newResource);
};

const getResources = () => {
  return [...resources];
};
