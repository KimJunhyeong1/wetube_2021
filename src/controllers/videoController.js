let videos = [
  {
    title: "First Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 1,
  },
  {
    title: "Second Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 2,
  },
  {
    title: "Third Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 3,
  },
];

export const watch = (request, response) => {
  const { id } = request.params;
  const video = videos[id - 1];
  response.render("watch", { pageTitle: `Watch`, video });
};

export const trending = (request, response) => {
  response.render("home", { pageTitle: "Home", videos });
};

export const getEdit = (request, response) => {
  const { id } = request.params;
  const video = videos[id - 1];
  response.render("edit", { pageTitle: "Edit", video });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};
