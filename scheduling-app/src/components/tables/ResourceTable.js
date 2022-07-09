import React, { useState, useEffect } from "react";
import {
  getResources,
  sendResource,
  removeResource,
} from "../../AppInfo/ResourceInfo";
import Card from "../Common/Card";
import ShowAvailability from "../Common/ShowAvailability";
import { v4 as uuidv4 } from "uuid";
import BlankAvailability from "../Common/BlankAvailability";
import Time from "../../Classes/TimeClass";
import { getCourses } from "../../AppInfo/CourseInfo";
import Resource from "./../../Classes/ResourceClass";

const ResourceTable = () => {
  const [resources, setResources] = useState(null);
  const [showBlank, setShowBlank] = useState(false);
  const [blankResource, setBlankResource] = useState(new Resource());

  useEffect(() => {
    if (resources === null) {
      const pulledResources = getResources();
      setResources(pulledResources);
    }
  });
  const handleUpdates = ({ name, value }) => {
    const copyBlankResource = { ...blankResource };
    if (name.includes(".")) {
      const path = name.split(".");
      copyBlankResource[path[0]][path[1]] = value;
    } else {
      copyBlankResource[name] = value;
      setBlankResource(copyBlankResource);
    }
  };
  const handleSaveResource = () => {
    sendResource({ ...blankResource });
    setBlankResource(new Resource());
    setShowBlank(false);
    const pulledResources = getResources();
    setResources(pulledResources);
  };
  const handleEditResource = (id) => {
    if (!showBlank) {
      const copyResources = [...resources];
      const index = copyResources.findIndex((resource) => resource.id === id);
      const newBlankResource = copyResources.splice(index, 1)[0];
      setBlankResource(newBlankResource);
      setShowBlank(true);
      setResources(copyResources);
    }
  };
  const copyBlankResource = { ...blankResource };
  const { type, name, availability, constraints } = copyBlankResource;

  return (
    <div>
      <div className="d-md-flex justify-content-md-end">
        <button
          className="button"
          onClick={() => {
            !showBlank && setShowBlank(true);
          }}
        >
          Add Resource
        </button>
      </div>
      <div className="row row-cols-1 row-cols-md-4 g-0">
        {resources !== null &&
          resources.map((resource) => {
            return (
              <Card
                key={resource.id}
                content={{
                  header: [<h1 key="head-1">{resource.name}</h1>],
                  body: [
                    <label key="label-1">Type: {resource.type}</label>,
                    <ShowAvailability
                      key={`showavailability${resource.id}`}
                      availability={resource.availability}
                    />,
                    <label key="label-2">
                      Class Size: {resource.constraints.classSize}
                    </label>,
                    <br key="break-em"></br>,
                    <label key="label-3">
                      Teaching Style: {resource.constraints.teachingStyle}
                    </label>,
                  ],
                  footer: [
                    <button
                      className="button"
                      id={resource.id}
                      onClick={(e) => handleEditResource(e.target.id)}
                      key="footer-1"
                    >
                      Edit
                    </button>,
                  ],
                }}
              />
            );
          })}
        {showBlank && (
          <Card
            key={blankResource.id}
            content={{
              header: [
                <input
                  className="col-md-8"
                  id="resource-name-box"
                  onChange={(e) => handleUpdates(e.target)}
                  value={name}
                  name="name"
                  placeholder="Name"
                  key="head-1"
                />,
                <select
                  onChange={(e) => handleUpdates(e.target)}
                  value={type}
                  name="type"
                  placeholder="Type"
                  key="head-2"
                >
                  <option></option>
                  <option>Tenure Track</option>
                  <option>Non-Tenure Track</option>
                  <option>PhD. Student</option>
                </select>,
              ],
              body: [
                <BlankAvailability
                  key="body-1"
                  availability={availability}
                  update={(e) => handleUpdates(e.target)}
                />,
                <div key="body-2">
                  <h2>Constraints</h2>
                  <label id="constraints-list">Class Size Allowed</label>
                  <select
                    id="constraints-select"
                    name="constraints.classSize"
                    onChange={(e) => handleUpdates(e.target)}
                  >
                    <option></option>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                  </select>
                  <label id="constraints-list">Teaching Method</label>
                  <select
                    id="constraints-select"
                    name="constraints.teachingStyle"
                    onChange={(e) => handleUpdates(e.target)}
                  >
                    <option></option>
                    <option>Online</option>
                    <option>In-Person</option>
                    <option>Hybrid</option>
                    <option>All</option>
                  </select>
                  <label id="constraints-list">Classes Per Year</label>
                  <select
                    id="constraints-select"
                    name="constraints.classesPerYear"
                    onChange={(e) => handleUpdates(e.target)}
                  >
                    <option></option>
                    <option></option>
                    <option>In-Person</option>
                    <option>Hybrid</option>
                    <option>All</option>
                  </select>
                </div>,
              ],
              footer: [
                <button
                  key="foot-1"
                  className="button"
                  onClick={handleSaveResource}
                >
                  Save
                </button>,
              ],
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ResourceTable;
