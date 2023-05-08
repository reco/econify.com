import { Project, Page } from "global";

const project: Project = {
  type: "project",
  id: "1",
  title: "Magnolia Network",
  image: {
    src: "/images/Home.png",
    width: 1500,
    height: 1085,
  },
  client: "Discovery",
  description: "This is a project",
};

export const home: Page = {
  id: "9",
  type: "page",
  title: "Welcome to Econify",
  description:
    "Econify builds the fastest websites and applications for the best media companies in the world.",
  assets: [
    {
      id: "1",
      type: "services",
      title: "Econify Services",
      description: "Econify Services",
    },
    {
      id: "2",
      type: "scroll",
      title: "Recent",
      description: "Recent Projects",
      direction: "horizontal",
      assets: [
        project,
        project,
        project,
        project,
        project,
        project,
        project,
        project,
        project,
        project,
      ],
    },
    {
      id: "3",
      type: "text",
      title: "About",
      description: "About Econify",
      text: `With over two decades in the industry, Econify is one of the most well-reputed tech consultancies in the media space. 
      
      Econify has managed to create substantial organization-changing infrastructure for clients, transforming them from the bottom up, leaving behind good code, motivated software engineers, and happy marketing departments. 
      
      To date, Econify has no investors and has grown solely through word-of-mouth referrals. With headquarters based in NYC, Econify has grown to include home-offices in Seattle, Austin, and the UK.`,
    },
  ],
};

export const contact: Page = {
  id: "9",
  type: "page",
  title: "Welcome to Econify",
  description:
    "Econify builds the fastest websites and applications for the best media companies in the world.",
  assets: [
    {
      id: "3",
      type: "text",
      title: "Contact",
      description: "About Econify",
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500`,
    },
    {
      id: "1",
      type: "services",
      title: "Econify Services",
      description: "Econify Services",
    },
    {
      id: "3",
      type: "text",
      title: "Lorem Ipsum",
      description: "Lorem Ipsum",
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500`,
    },
  ],
};

export const services: Page = {
  id: "9",
  type: "page",
  title: "Welcome to Econify",
  description:
    "Econify builds the fastest websites and applications for the best media companies in the world.",
  assets: [
    {
      id: "3",
      type: "text",
      title: "Services",
      description: "About Econify",
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500`,
    },
    {
      id: "1",
      type: "services",
      title: "Econify Services",
      description: "Econify Services",
    },
    {
      id: "3",
      type: "text",
      title: "Lorem Ipsum",
      description: "Lorem Ipsum",
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500`,
    },
  ],
};

export const work: Page = {
  id: "9",
  type: "page",
  title: "Welcome to Econify",
  description:
    "Econify builds the fastest websites and applications for the best media companies in the world.",
  assets: [
    {
      id: "3",
      type: "text",
      title: "Work",
      description: "About Econify",
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500`,
    },
    {
      id: "1",
      type: "services",
      title: "Econify Services",
      description: "Econify Services",
    },
    {
      id: "3",
      type: "text",
      title: "Lorem Ipsum",
      description: "Lorem Ipsum",
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500`,
    },
  ],
};

export const lab: Page = {
  id: "9",
  type: "page",
  title: "Welcome to Econify",
  description:
    "Econify builds the fastest websites and applications for the best media companies in the world.",
  assets: [
    {
      id: "3",
      type: "text",
      title: "Lab",
      description: "About Econify",
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500`,
    },
    {
      id: "1",
      type: "services",
      title: "Econify Services",
      description: "Econify Services",
    },
    {
      id: "3",
      type: "text",
      title: "Lorem Ipsum",
      description: "Lorem Ipsum",
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500`,
    },
  ],
};
