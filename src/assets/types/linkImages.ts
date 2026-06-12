const ICON_MODULES = import.meta.glob<string>("@/assets/icons/*/*.webp", {
  eager: true,
  import: "default",
  query: "?no-inline",
});

export const LINK_IMAGES: Record<string, string> = Object.fromEntries(
  Object.entries(ICON_MODULES).flatMap(([path, src]) => {
    const match = path.match(/icons\/([^/]+)\/([^/]+)\.webp$/);
    return match ? [[`${match[2]}:${match[1]}`, src]] : [];
  }),
);

export function resolveLinkIcon(
  label: string | undefined,
  style: string,
): string | undefined {
  if (!label) return undefined;
  return LINK_IMAGES[`${label.toLowerCase()}:${style}`];
}
