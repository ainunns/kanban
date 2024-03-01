export const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("id-ID", options);
};

export const randomColor = () => {
  const colors = ["primary", "success", "warning", "danger"];
  return colors[Math.floor(Math.random() * colors.length)];
};
