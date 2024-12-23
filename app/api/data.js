const data = [
  {
    id: 201,
    title: "Red jacket",
    images: [
      {
        url: require("../assets/jacket1_full.jpg"),
        thumbnailUrl: require("../assets/jacket1_thumb.jpg"),
      },
    ],
    price: 100,
    categoryId: 5,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 3,
    title: "Gray couch in a great condition",
    images: [
      {
        url: require("../assets/couch2_full.jpg"),
        thumbnailUrl: require("../assets/couch2_thumb.jpg"),
      },
    ],
    categoryId: 1,
    price: 1200,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 1,
    title: "Room & Board couch (great condition) - delivery included",
    description:
      "I'm selling my furniture at a discount price. Pick up at Venice. DM me asap.",
    images: [
      {
        url: require("../assets/couch1_full.jpg"),
        thumbnailUrl: require("../assets/couch1_thumb.jpg"),
      },
      {
        url: require("../assets/couch2_full.jpg"),
        thumbnailUrl: require("../assets/couch2_thumb.jpg"),
      },
      {
        url: require("../assets/couch3_full.jpg"),
        thumbnailUrl: require("../assets/couch3_thumb.jpg"),
      },
    ],
    price: 1000,
    categoryId: 1,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 2,
    title: "Designer wear shoes",
    images: [
      {
        url: require("../assets/shoes1_full.jpg"),
        thumbnailUrl: require("../assets/shoes1_thumb.jpg"),
      },
    ],
    categoryId: 5,
    price: 100,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 102,
    title: "Canon 400D (Great Condition)",
    images: [
      {
        url: require("../assets/camera1_full.jpg"),
        thumbnailUrl: require("../assets/camera1_thumb.jpg"),
      },
    ],
    price: 300,
    categoryId: 3,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 101,
    title: "Nikon D850 for sale",
    images: [
      {
        url: require("../assets/camera2_full.jpg"),
        thumbnailUrl: require("../assets/camera2_thumb.jpg"),
      },
    ],
    price: 350,
    categoryId: 3,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 4,
    title: "Sectional couch - Delivery available",
    description: "No rips no stains no odors",
    images: [
      {
        url: require("../assets/couch3_full.jpg"),
        thumbnailUrl: require("../assets/couch3_thumb.jpg"),
      },
    ],
    categoryId: 1,
    price: 950,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 6,
    title: "Brown leather shoes",
    images: [
      {
        url: require("../assets/shoes2_full.jpg"),
        thumbnailUrl: require("../assets/shoes2_thumb.jpg"),
      },
    ],
    categoryId: 5,
    price: 50,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
];

export default data;
