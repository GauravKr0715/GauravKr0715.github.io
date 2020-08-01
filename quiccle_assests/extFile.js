// This file will be available on an extenal server.
// Import it in our local files and use it for additional functionality

// New
// const background = {
//   color: "#4cb8c4",
//   image: "linear-gradient(to right, #4cb8c4, #3cd3ad)",
// };

// old
const background = {
  color: "#182b3a",
  image: "linear-gradient(315deg, #182b3a 0%, #20a4f3 74%)",
};

const getAlertMsg = () => {
  alert("Hello from the alert msg");
};

const getBackground = () => {
  return background;
};

alert("hello...");
