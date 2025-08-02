import { MatchesCardContainer, Match, MatchTeams, MatchInfo } from "./styles";

type NextMatchesProps = {
  matches: {
    time_mandante: { nome_popular: string };
    time_visitante: { nome_popular: string };
    data_realizacao: string;
    hora_realizacao: string;
    estadio: { nome_popular: string };
  }[];
};

const NextMatches = ({ matches }: NextMatchesProps) => {
  return (
    <MatchesCardContainer>
      <h3>🔮 Próximas Partidas</h3>

      {matches?.map((match) => (
        <Match>
          <MatchTeams>
            <span>{match.time_mandante.nome_popular}</span>
            <span>vs</span>
            <span>{match.time_visitante.nome_popular}</span>
          </MatchTeams>
          <MatchInfo>
            {match.data_realizacao} - {match.hora_realizacao} |{" "}
            {match.estadio.nome_popular}
          </MatchInfo>
        </Match>
      ))}
    </MatchesCardContainer>
  );
};

export default NextMatches;
