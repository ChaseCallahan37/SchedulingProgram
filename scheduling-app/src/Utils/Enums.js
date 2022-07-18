const enums = {
  ClassSize: {
    Small: "small",
    Medium: "medium",
    Large: "large",
  },
  TeachingStyle: {
    Any: "any",
    InPerson: "inPerson",
    Hybrid: "hybrid",
    Online: "online",
  },
  Type: {
    TA: "ta",
    Instructor: "instructor",
  },
};

const getEnum = (field) => {
  const fieldNames = Object.keys(enums);
  let searchEnum;
  fieldNames.forEach((fieldName) => {
    if (fieldName.toLowerCase().trim() === field.toLowerCase().trim()) {
      searchEnum = enums[fieldName];
    }
  });
  return searchEnum ? searchEnum : {};
};

export default getEnum;