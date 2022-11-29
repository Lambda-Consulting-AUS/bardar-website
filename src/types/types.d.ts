type ImageType = {
  src: string;
  width: string;
  height: string;
};

export type SEOProps = {
  lang: string;
  url: string;
  title: string;
  metaDescription: string;
  keywords: string[];
  author: string;
  image: ImageType;
  theme: string;
};
export type MenuProps = {
  key: number;
  route: string;
  name: string;
};

export type DrawerProps = {
  menuShow: boolean;
};
export type HeadingProps = {
  heading: string;
  id?: string;
  illustration?: unknown;
};

export type HeroProps = {
  image: string;
  greetingText: string;
  greetingDescription: string;
  buttonText: string;
};

export type NavbarProps = {
  menuShow: unknown;
  showMenu: (e: boolean) => void;
};

export type TimelineProps = {
  id: number;
  name: string;
  date: string;
  description: string[];
};

export type FeatureProps = {
  id: number;
  name: string;
  description: string[];
};

enum Socials {
  LinkedIn,
  GitHub
}

export type BioProps = {
  id: number;
  name: string;
  image: string;
  description: string[];
  tags: string[];
  links?: Record<keyof typeof Socials, string>;
};
