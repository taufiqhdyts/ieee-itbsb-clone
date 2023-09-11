export interface responsiveImage {
  src: string;
  srcSet: string;
  webpSrcSet: string;
  sizes: string;
  title: string | null;
  width: number;
  height: number;
  aspectRatio: number;
  alt: string;
  base64: string;
  bgColor: string;
}

export interface Image {
  id: string;
  width: number;
  height: number;
  alt: string;
  url: string;
  responsiveImage?: responsiveImage;
}

export interface EventCardProps {
  image: string;
  title: string;
  description: string;
}

export interface NewsLetterCardProps {
  slug:string
  title: string;
  _firstPublishedAt: string;
  summary: string;
  image: Image[];
}

export interface OrganogramCardsProps {
  position: string;
  name: string;
  url: string;
  linkedin: string;
}

export interface Speaker {
  id: string;
  name: string;
  image: {
    url: string;
  };
}

export interface Timeline {
  id: string;
  date: string;
  description: string;
  title: string;
}