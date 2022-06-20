import { ContainerBotoes, BotaoStart, BotaoStop, BotaoClear } from "./style";

export function ContadorBotoes({
  StartButton,
  Stopbutton,
  ClearButton,
  StartContador,
  StopContador,
  ClearContador,
}) {
  return (
    <ContainerBotoes>
      <BotaoStart onClick={() => StartContador()} disable={StartButton}/>
      <BotaoStop onClick={() => StopContador()} disable={Stopbutton}/>
      <BotaoClear onClick={() => ClearContador()} disable={ClearButton}/>
    </ContainerBotoes>
  );
}
