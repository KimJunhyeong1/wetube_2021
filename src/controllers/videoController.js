export const see = (request, response) => {
  response.render("watch");
};

export const trending = (request, response) => {
  response.render("home");
};

export const edit = (request, response) => {
  response.render("edit");
};

export const search = (request, response) => {
  response.send("search Videos");
};

export const upload = (request, response) => {
  response.send("upload Videos");
};

export const deleteVideo = (request, response) => {
  response.send("deleteVideo Videos");
};
