import Resource from "../Classes/ResourceClass";
import Time from "../Classes/TimeClass";

let resources = [];

const jeff = new Resource();
jeff.updateFileds({
  name: "Jeff",
  type: "Instructor",
  availability: [],
  constraints: [{ TeachingStyle: ["InPerson", "Hybrid"] }],
});

resources.push(jeff);

export const getResources = () => {
  return [...resources];
};

export const sendResource = (newResource) => {
  const index = resources.findIndex((res) => res.id === newResource.id);
  if (index === -1) {
    resources.push(new Resource(newResource));
  } else {
    const test = new Resource(newResource);
    resources[index] = test;
  }
};

export const removeResource = (id) => {
  const index = resources.findIndex((resource) => resource.id === id);
  resources.splice(index, 1);
};
