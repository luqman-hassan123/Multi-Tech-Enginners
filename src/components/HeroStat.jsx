import useCountUp from "../hooks/useCountUp";

export default function HeroStat({ stat, start, delay = 0 }) {
  const count = useCountUp(stat.target, { start, delay, duration: 2200 });

  return (
    <div className="hero-stat">
      <div className="hero-stat__value" aria-label={`${stat.target}${stat.suffix}`}>
        {count}
        {stat.suffix}
      </div>
      <div className="hero-stat__label">{stat.label}</div>
    </div>
  );
}
