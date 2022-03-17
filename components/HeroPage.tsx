import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import HeroList from "./HeroList";

const HeroPage: NextPage = () => {
  const router = useRouter();
  const { heroId } = router.query;
  console.log(heroId);

  return (
    <div>
      <HeroList></HeroList>
      Hero id: {heroId}
      <Link href="/heroes" scroll={false}>
        back to list
      </Link>
    </div>
  );
};

export default HeroPage;
