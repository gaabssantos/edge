import {
  MatchesCardContainer,
  Match,
  MatchTeams,
  MatchInfo,
  Score,
  TeamName,
} from "./styles";

type PastMatchesProps = {
  matches: {
    time_mandante: { nome_popular: string };
    time_visitante: { nome_popular: string };
    data_realizacao: string;
    hora_realizacao: string;
    estadio: { nome_popular: string };
    placar_mandante: number;
    placar_visitante: number;
  }[];
};

const PastMatches = ({ matches }: PastMatchesProps) => {
  return (
    <MatchesCardContainer>
      <h3>📊 Partidas Anteriores</h3>

      {matches?.map((match, index) => (
        <Match key={index} className="past">
          <MatchTeams>
            <TeamName>{match.time_mandante.nome_popular}</TeamName>
            <Score>
              {match.placar_mandante} x {match.placar_visitante}
            </Score>
            <TeamName>{match.time_visitante.nome_popular}</TeamName>
          </MatchTeams>
          <MatchInfo>
            {match.data_realizacao} - {match.estadio.nome_popular} |{" "}
            {match.hora_realizacao}
          </MatchInfo>
        </Match>
      ))}
    </MatchesCardContainer>
  );
};

export default PastMatches;
