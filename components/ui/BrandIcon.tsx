import { siFacebook, siInstagram, siWhatsapp } from "simple-icons";

const symbols = {
  facebook: siFacebook,
  instagram: siInstagram,
  whatsapp: siWhatsapp,
} as const;

/** Official platform brand glyphs from Simple Icons. */
export function BrandIcon({
  name,
  size = 20,
  className = "",
}: {
  name: keyof typeof symbols;
  size?: number;
  className?: string;
}) {
  const icon = symbols[name];
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      role="presentation"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={icon.path} />
    </svg>
  );
}
