import Image from "../assets/social.jpg";
import {
  BioProps,
  ImageType,
  MenuProps,
  FeatureProps,
  TimelineProps,
} from "../types/types";

export const URL = "https://bardar.lambdaconsulting.com.au";
export const NAME = "BARDAR";

export const SECTIONS = ["Welcome", "Timeline", "Features", "Bios"];
export const HERO_IMAGE = "https://picsum.photos/id/1005/1600/1400";
export const CTA_TEXT = "Know More";
export const MENU: MenuProps[] = [
  { key: 1, route: "home", name: SECTIONS[0] },
  { key: 2, route: "timeline", name: SECTIONS[1] },
  { key: 3, route: "features", name: SECTIONS[2] },
  { key: 4, route: "bios", name: SECTIONS[3] },
];

export const GREETING_TEXT = "Bardar.";
export const GREETING_DESCRIPTION =
  "The next level of nightlife.";

export const KEYWORDS = [
  "BARDAR",
  "find bars",
  "canberra startup",
  "oliver bagin",
  "paras stefanopoulos",
  "dexter todd",
];
export const IMAGE: ImageType = {
  src: Image,
  height: "600",
  width: "314",
};

export const TIMELINE: TimelineProps[] = [
  {
    id: 1,
    name: "f",
    date: "1/1/1111",
    description: [
      `fd`,

    ],
  },
];

export const FEATURES: FeatureProps[] = [
  {
    id: 0,
    name: "a",
    description: ["f"],
  },
]

export const BIOS: BioProps[] = [
  {
    id: 0,
    name: "Dexter Todd",
    description: [`Dexter is the Buisness Lead at Bardar. He primary reponsiblity
    most is curating the project's vision and direction. He is also in charge of
    out reach and investment.`,
      `Dexter skills include project managment, design and public speaking.`
    ],
    image: "paras.jpeg",
    tags: ["Developer", "Founder"]
  },
  {
    id: 1,
    name: "Paras Stefanopoulos",
    description: [`Dexter is the Buisness Lead at Bardar. He primary reponsiblity
    most is curating the project's vision and direction. He is also in charge of
    out reach and investment.`,
      `Dextor skills include project managment, design and public speaking.`
    ],
    image: "paras.jpeg",
    tags: ["Developer", "Founder"]
  },
  {
    id: 2,
    name: "Oliver Bagin",
    description: [`Paras is a software developer and `,
      `Dextor skills include project managment, design and public speaking.`
    ],
    image: "paras.jpeg",
    tags: ["Developer", "Founder"]
  },
  {
    id: 3,
    name: "Heath Manning",
    description: [`Paras is a software developer and `,
      `Dextor skills include project managment, design and public speaking.`
    ],
    image: "paras.jpeg",
    tags: ["Developer", "Founder"]
  },
  {
    id: 4,
    name: "Rory Furbank",
    description: ['Rory is a dickhead'],
    image: "paras.jpeg",
    tags: ["Dickhead"]

  }
];
