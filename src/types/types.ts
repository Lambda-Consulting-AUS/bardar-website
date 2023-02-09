

export type ImageType = {
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
export type HeadingProps = {
  heading: string;
  id?: string;
  illustration?: unknown;
};

export type HeroProps = {
  image: string;
  greetingText: string;
  greetingDescription: string[];
  buttonText: string;
};

export type Link = {
  title: string;
  link: string;
};

export type EntryProps = {
  title: string;
  week: string;
  image?: string;
  body: string;
  date?: Date;
  links?: Link[];
};

export class MarkDown {
  name: string;
 
  constructor(name: string) {
    this.name = name;
  }
}