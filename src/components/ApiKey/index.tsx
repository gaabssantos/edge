import { useApiKey } from "../../context/apikey.context";
import { Container } from "../SelectTeam/styles";

const ApiKey = () => {
  const { setApiKey } = useApiKey();

  const handleTeamName = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;

    const apiKey = (e.target as HTMLInputElement).value;

    if (!apiKey.startsWith("live_")) {
      alert("Esta API Key está inválida!");
      return;
    }

    setApiKey((e.target as HTMLInputElement).value);
    alert("API Key setada com sucesso!");
  };

  return (
    <Container>
      <h2>Digite a chave da API</h2>
      <input
        type="text"
        placeholder="Digite a Chave da API"
        onKeyDown={handleTeamName}
      />
    </Container>
  );
};

export default ApiKey;
