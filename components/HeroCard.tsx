import Link from "next/link";

type HeroCardHero = {
  id: string;
  name: string;
  image: string;
};

const HeroCard = ({ hero }: { hero: HeroCardHero }) => {
  return <Link href={`/heroes/${hero.id}`}>{hero.name}</Link>;
};

export default HeroCard;
