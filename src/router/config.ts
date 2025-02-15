const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/donation_confirmation"],
    exact: true,
    component: "DonationConfirmation",
  },
  {
    path: ["/gallery"],
    exact: true,
    component: "GalleryPage",
  },
];

export default routes;
