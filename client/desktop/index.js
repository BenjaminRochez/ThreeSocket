window.onload = () => {
  let previousValue;
  const socket = io();

  socket.on("mobile orientation", function(data) {
    if (previousValue !== data) {
      console.log(data);
    }
    previousValue = data;
  });
};
