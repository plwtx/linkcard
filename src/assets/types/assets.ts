export type FaviconLink = {
  rel: string;
  href: string;
  type?: string;
  sizes?: string;
};

export type ManifestIcon = {
  src: string;
  sizes: string;
  type: string;
};

export type FaviconConfig = {
  links: FaviconLink[];
  manifestIcons: ManifestIcon[];
};

export type AssetsConfig = {
  card: { front: string; back: string; qr: string };
  profilePicture: string;
  art: { left: string; right: string };
  background: { tile: string; tilePx: number };
  favicon: FaviconConfig;
};
