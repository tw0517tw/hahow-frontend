import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

export type HeroCardHero = {
  id: string;
  name: string;
  image: string;
};

interface CardProps {
  readonly isActive: boolean;
}

const Card = styled.div<CardProps>`
  max-width: 120px;
  padding: 8px;
  margin: 12px 24px;

  display: flex;
  flex-direction: column;
  text-align: center;

  border-style: solid;
  border-width: 2px;
  border-color: ${(props) => (props.isActive ? "#5555FF" : "#000000")};
  border-radius: 8px;
`;

const HeroCard = ({ hero }: { hero: HeroCardHero }) => {
  const router = useRouter();
  const { heroId } = router.query;

  return (
    <Link href={`/heroes/${hero.id}`} passHref scroll={false}>
      <a>
        <Card isActive={heroId === hero.id}>
          <Image
            alt={`${hero.name} image`}
            src={hero.image}
            width="100px"
            height="100px"
          ></Image>
          {hero.name}
        </Card>
      </a>
    </Link>
  );
};

export default HeroCard;
