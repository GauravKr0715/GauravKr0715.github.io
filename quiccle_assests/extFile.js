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

// const font = "https://fonts.googleapis.com/css?family=Rubik&display=swap";
// const font = {
//   href: "https://fonts.googleapis.com/css2?family=Potta+One&display=swap",
//   fontFamily: "Potta One"
// };

const font = {
  href: "https://fonts.googleapis.com/css2?family=Hachi+Maru+Pop&display=swap",
  fontFamily: "Hachi Maru Pop"
};

// 3rd one
// const background = {
//   color: "#ff512f",
//   image: "linear-gradient(to right, #ff512f, #f09819)",
// };

const getAlertMsg = () => {
  alert("Hello from the alert msg");
};

const getBackground = () => {
  return background;
};

const getFont = () => {
  return font;
}
