export type SiteLink = {
  label: string;
  url: string;
};

export type SiteConfig = {
  username: string;
  description?: string;
  accentColor: string;
  linkStyle: string;
  website?: SiteLink;
  links: SiteLink[];
};

export type ResolvedLink = SiteLink & {
  iconSrc?: string;
};
