import { Container, LogoCircle, TeamName } from "./styles";

type TeamInfoProps = {
  logo: string | undefined;
  teamName: string | undefined;
};

const TeamInfo = ({ logo, teamName }: TeamInfoProps) => {
  return (
    <Container>
      <header>
        <LogoCircle>
          <img src={logo} alt="Logo do Time" />
        </LogoCircle>
        <TeamName>{teamName}</TeamName>
      </header>
    </Container>
  );
};

export default TeamInfo;
