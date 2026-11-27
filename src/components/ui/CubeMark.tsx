// Served as rendered: Next/Image's lossy re-encode blurs the small 3D mark.
const SIZES = [22, 24, 28, 30, 32] as const;

export default function CubeMark({ size, className, alt = "", priority }: { size: number; className?: string; alt?: string; priority?: boolean }) {
  const art = SIZES.find((s) => s >= size) ?? 32;
  const src = (n: number) => `/images/cube/awesoon-cube-${art}@${n}x.png`;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src(1)} srcSet={`${src(1)} 1x, ${src(2)} 2x, ${src(3)} 3x`} width={size} height={size} alt={alt} className={className} decoding="async" loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : "auto"} />
  );
}
