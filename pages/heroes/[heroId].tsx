import { NextPage } from "next";
import { useRouter } from "next/router";
import HeroList from "../../components/HeroList";

const Hero: NextPage = () => {
  const router = useRouter();
  const { heroId } = router.query;

  return (
    <div>
      <HeroList></HeroList>
      Hero id: {heroId}
    </div>
  );
};

export default Hero;
