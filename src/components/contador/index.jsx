import {
  ContainerContador,
  ContainerHoras,
  ContainerMinutos,
  ContainerSegundos,
} from "./style";

export function Contador({ time }) {
  return (
    <ContainerContador>
      <ContainerHoras>
        <span>{time.hours}</span>
      </ContainerHoras>
      <ContainerMinutos>
        <span>{time.minutes}</span>
      </ContainerMinutos>
      <ContainerSegundos>
        <span>{time.seconds}</span>
      </ContainerSegundos>
    </ContainerContador>
  );
}
