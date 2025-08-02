import Loading from "./components/Loading";
import NextMatches from "./components/NextMatches";
import PastMatches from "./components/PastMatches";
import SelectTeam from "./components/SelectTeam";
import TeamInfo from "./components/TeamInfo";
import { useLoading } from "./context/loading.contect";
import { useMatch } from "./context/matches.context";
import { useNextMatches } from "./context/nextMatches.context";
import { useTeam } from "./context/team.context";
import { Container, Matches } from "./styles/app";

function App() {
  const { team } = useTeam();
  const { isLoading } = useLoading();
  const { match } = useMatch();
  const { nextMatch } = useNextMatches();

  return (
    <Container>
      <header>
        <h1>⚽ Futebol Brasil - EDGE</h1>
        <p>Acompanhe seus times favoritos</p>
      </header>
      <SelectTeam />
      {team && (
        <>
          <TeamInfo logo={team?.escudo} teamName={team?.nome} />
          <Matches>
            <NextMatches matches={nextMatch ?? []} />
            <PastMatches matches={match ?? []} />
          </Matches>
        </>
      )}
      {isLoading && <Loading />}
    </Container>
  );
}

export default App;
