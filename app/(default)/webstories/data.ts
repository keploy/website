import BunnyImage from "@/public/images/community-bunny.png";
export const dummyData = [
  {
    imageUrl:
      "https://i.pinimg.com/originals/df/6d/9b/df6d9b173e3e4b0521d5134548f3e4a5.jpg",
    text: "Story 1",
    swipeText: "Swipe to read more",
    swipeLink: "https://example.com/story1",
    CardImage: BunnyImage,
    CardDescription: "This is Story 1 text",
    Slug: "webstory-1",
  },
  {
    imageUrl: "https://example.com/image2.jpg",
    text: "Story 2",
    swipeText: "Swipe to read more",
    swipeLink: "https://example.com/story2",
    CardImage: BunnyImage,
    CardDescription: "This is Story 2 text",
    Slug: "webstory-2",
  },
  {
    imageUrl: "https://example.com/image3.jpg",
    text: "Story 3",
    swipeText: "Swipe to read more",
    swipeLink: "https://example.com/story3",
    CardImage: BunnyImage,
    CardDescription: "This is Story 3 text",
    Slug: "webstory-3",
  },
];

export const DummyData = [
  {
    CardImage: BunnyImage,
    CardDescription: "This is Story 1 text",
    Slug: "webstory-1",
    Story: [
      {
        imageUrl:
          "https://i.pinimg.com/originals/df/6d/9b/df6d9b173e3e4b0521d5134548f3e4a5.jpg",
        text: "Story 1",
        swipeText: "Swipe to read more",
        swipeLink: "https://example.com/story1",
      },
    ],
  },
  {
    CardImage: BunnyImage,
    CardDescription: "This is Story 2 text",
    Slug: "webstory-2",
    Story: [
      {
        imageUrl: "https://example.com/image3.jpg",
        text: "Story 3",
        swipeText: "Swipe to read more",
        swipeLink: "https://example.com/story3",
      },
    ],
  },
  {
    CardImage: BunnyImage,
    CardDescription: "This is Story 3 text",
    Slug: "webstory-3",
    Story: [
      {
        imageUrl: "https://example.com/image3.jpg",
        text: "Story 3",
        swipeText: "Swipe to read more",
        swipeLink: "https://example.com/story3",
      },
    ],
  },
];
