export type ConfigLink = {
  label: string;
  url: string;
};

export type WebsiteLink = {
  label: string;
  url: string;
};

export type SiteConfig = {
  username: string;
  description?: string;
  accentColor: string;
  linkStyle: string;
  website?: WebsiteLink;
  links: ConfigLink[];
};

export type ResolvedLink = {
  label: string;
  url: string;
  iconSrc?: string;
};
