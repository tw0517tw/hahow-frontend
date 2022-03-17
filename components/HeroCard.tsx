import Link from "next/link";
import styled from "styled-components";

type HeroCardHero = {
  id: string;
  name: string;
  image: string;
};

const Card = styled.a`
  max-width: 120px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const HeroCard = ({ hero }: { hero: HeroCardHero }) => {
  return (
    <Link href={`/heroes/${hero.id}`} passHref scroll={false}>
      <Card>
        <img alt={`${hero.name} image`} src={hero.image}></img>
        {hero.name}
      </Card>
    </Link>
  );
};

export default HeroCard;
