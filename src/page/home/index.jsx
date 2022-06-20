import { useEffect, useState } from "react";

import { Contador } from "../../components/contador";
import { ContadorBotoes } from "../../components/contadorBotoes";
import { GlobalStyles } from "../../styles/GlobalStyles";

export function Home() {
  const [isActive, setIsActive] = useState(false);

  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [HoursTime, setHoursTime] = useState(0);
  const [MinutesTime, setMinutesTime] = useState(0);
  const [SecondTime, setSecondTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isActive) {
        setSecondTime(SecondTime + 1);
      }
      clearInterval(interval);
    }, 1000);
  });

  useEffect(() => {
    if (SecondTime == 60) {
      setSecondTime(0);
      setMinutesTime(MinutesTime + 1);
    }
  }, [SecondTime]);

  useEffect(() => {
    if (MinutesTime == 60) {
      setMinutesTime(0);
      setHoursTime(HoursTime + 1);
      console.log("Passou um dia padrin, vai dormir."); // kkkkkkkkkkk
    }
  }, [SecondTime]);

  useEffect(() => {
    let time = {
      hours: HoursTime,
      minutes: MinutesTime,
      seconds: SecondTime,
    };

    setTime(time);
  }, [SecondTime, MinutesTime, HoursTime]);

  const [StartButton, setStartButton] = useState(true);
  const [Stopbutton, setStopbutton] = useState(false);
  const [ClearButton, setClearButton] = useState(false);

  function StartContador() {
    if (StartButton) {
      setStartButton(false);
      setStopbutton(true);
      setIsActive(true);
    }
  }

  function StopContador() {
    if (Stopbutton) {
      setStartButton(true);
      setStopbutton(false);
      setIsActive(false);
      LiberaClearContador();
    }
  }

  function LiberaClearContador() {
    if (SecondTime > 0 || MinutesTime > 0 || HoursTime > 0) {
      setClearButton(true);
    }
  }

  function ClearContador() {
    if (ClearContador) {
      setTime({
        hours: 0,
        minutes: 0,
        seconds: 0,
      });

      setHoursTime(0);
      setMinutesTime(0);
      setSecondTime(0);

      setClearButton(false);
    }
  }

  useEffect(() => {
    document.title = `ClockWatch - ${time.hours}:${time.minutes}:${time.seconds}`;
  });

  return (
    <>
      <Contador time={time} />
      <ContadorBotoes
        StartButton={StartButton}
        Stopbutton={Stopbutton}
        ClearButton={ClearButton}
        StartContador={StartContador}
        StopContador={StopContador}
        ClearContador={ClearContador}
      />
      <GlobalStyles />
    </>
  );
}
