/* eslint-disable @typescript-eslint/no-explicit-any */
import { useApiKey } from "../../context/apikey.context";
import { useLoading } from "../../context/loading.contect";
import { useMatch } from "../../context/matches.context";
import { useNextMatches } from "../../context/nextMatches.context";
import { useTeam } from "../../context/team.context";
import { getMatches, getTeamById, getMatchById } from "../../services/routes";
import { Container } from "./styles";

const SelectTeam = () => {
  const { setTeam } = useTeam();
  const { setLoading } = useLoading();
  const { setMatch } = useMatch();
  const { setNextMatches } = useNextMatches();
  const {apiKey} = useApiKey();

  const handleTeamName = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;

    setTeam(undefined);

    const input = (e.target as HTMLInputElement).value.toLowerCase();

    setLoading(true);
    const matches = await getMatches(apiKey);
    setLoading(false);

    const rounds = matches.data.partidas["fase-unica"];
    const allPartidas: any[] = [];

    for (const rodadaKey in rounds) {
      allPartidas.push(...rounds[rodadaKey]);
    }

    let foundTeamId: number | null = null;

    for (const partida of allPartidas) {
      const { time_mandante, time_visitante } = partida;

      if (time_mandante.nome_popular.toLowerCase() === input) {
        foundTeamId = time_mandante.time_id;
        break;
      }

      if (time_visitante.nome_popular.toLowerCase() === input) {
        foundTeamId = time_visitante.time_id;
        break;
      }
    }

    if (!foundTeamId) {
      alert("Time não encontrado.");
      return;
    }

    setLoading(true);
    const team = await getTeamById(foundTeamId, apiKey);
    setTeam(team);
    setLoading(false);

    const agora = new Date();

    const partidasAnteriores = allPartidas
      .filter(
        (p) =>
          (p.time_mandante.time_id === foundTeamId ||
            p.time_visitante.time_id === foundTeamId) &&
          new Date(p.data_realizacao_iso) < agora
      )
      .sort(
        (a, b) =>
          new Date(b.data_realizacao_iso).getTime() -
          new Date(a.data_realizacao_iso).getTime()
      )
      .slice(0, 3); // últimas 3 partidas

    const proximasPartidas = allPartidas
      .filter(
        (p) =>
          (p.time_mandante.time_id === foundTeamId ||
            p.time_visitante.time_id === foundTeamId) &&
          new Date(p.data_realizacao_iso) > agora // <-- agora é futura
      )
      .sort(
        (a, b) =>
          new Date(a.data_realizacao_iso).getTime() -
          new Date(b.data_realizacao_iso).getTime()
      )
      .slice(0, 3); // próximas 3 partidas

    setLoading(true);

    // Carrega os detalhes de todas as 3 partidas anteriores
    const detalhesDasPartidas = await Promise.all(
      partidasAnteriores.map((p) =>
        getMatchById(p.partida_id, apiKey).then((res) => res)
      )
    );

    const proximasPartidasDetalhes = await Promise.all(
      proximasPartidas.map((p) =>
        getMatchById(p.partida_id, apiKey).then((res) => res)
      )
    );

    setLoading(false);

    setMatch(detalhesDasPartidas); // agora é um array de 3 partidas
    setNextMatches(proximasPartidasDetalhes); // agora é um array de 3 partidas
  };

  return (
    <Container>
      <h2>Digite um time</h2>
      <input
        type="text"
        placeholder="Digite um time para buscar"
        onKeyDown={handleTeamName}
      />
    </Container>
  );
};

export default SelectTeam;
