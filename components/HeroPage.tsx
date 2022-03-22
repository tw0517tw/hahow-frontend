import Link from "next/link";
import styled from "styled-components";
import { NextPage } from "next";
import { useRouter } from "next/router";

import Button from "./Button";
import HeroList from "./HeroList";
import ProfilePanel from "./ProfilePanel/ProfilePanel";

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
