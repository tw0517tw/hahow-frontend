import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

import HeroList from "./HeroList";
import ProfilePanel from "./ProfilePanel/ProfilePanel";
import Button from "./Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 720px;
`;

const HeroPage: NextPage = () => {
  const router = useRouter();
  const { heroId } = router.query;

  return (
    <Container>
      <HeroList></HeroList>
      Hero id: {heroId || "None"}
      {typeof heroId === "string" && (
        <ProfilePanel heroId={heroId}></ProfilePanel>
      )}
      {heroId && (
        <Link href="/heroes" scroll={false}>
          <a>
            <Button>取消選擇</Button>
          </a>
        </Link>
      )}
    </Container>
  );
};

export default HeroPage;
