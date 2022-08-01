const enums = {
  TaConstraints: {
    Courses: [],
  },
  InstructorConstraints: {
    ClassSize: {
      Small: "small",
      Medium: "medium",
      Large: "large",
    },
    TeachingStyle: {
      InPerson: "inPerson",
      Hybrid: "hybrid",
      Online: "online",
    },
  },
  Type: {
    Instructor: "instructor",
    TA: "ta",
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
