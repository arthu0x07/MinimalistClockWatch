import { useEffect, useState } from "react";

import { Contador } from "../../components/contador";
import { ContadorBotoes } from "../../components/contadorBotoes";

import { GlobalStyles } from "../../styles/GlobalStyles";

export function Home() {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [HoursTime, setHoursTime] = useState(23);
  const [MinutesTime, setMinutesTime] = useState(59);
  const [SecondTime, setSecondTime] = useState(55);

  // Atribuição Geral de Segundos
  useEffect(() => {
    var interval = setInterval(() => {
      setSecondTime(SecondTime + 1);
      clearInterval(interval);
    }, 1000);
  });

  // Resetando Segundos e somando minutos
  useEffect(() => {
    if (SecondTime == 60) {
      setSecondTime(0);
      setMinutesTime(MinutesTime + 1);
    }
  }, [SecondTime]);

  // Resetando Minutos e somando Horas
  useEffect(() => {
    if (MinutesTime == 60) {
      setMinutesTime(0);
      setHoursTime(HoursTime + 1);
      console.log("Passou um dia padrin, vai dormir.");
    }
  }, [SecondTime]);

  // Monitorando Alteração em todos os Tempos e atualizando o Time State.
  // Reformatar adicionando zeros...
  useEffect(() => {
    let time = {
      hours: HoursTime,
      minutes: MinutesTime,
      seconds: SecondTime,
    };

    console.log("Anithing is changed");

    setTime(time);
  }, [SecondTime, MinutesTime, HoursTime]);

  return (
    <>
      <Contador time={time} />
      <ContadorBotoes />
      <GlobalStyles />
    </>
  );
}
