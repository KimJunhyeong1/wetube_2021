export const see = (request, response) => {
  response.render("watch", { pageTitle: "Watch" });
};

export const trending = (request, response) => {
  response.render("home", { pageTitle: "Home" });
};

export const edit = (request, response) => {
  response.render("edit", { pageTitle: "Edit" });
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
