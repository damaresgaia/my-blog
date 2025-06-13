import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

enum BreathState {
  INHALE = "Inspire pelo nariz",
  HOLD_FULL = "Segure o ar",
  EXHALE = "Expire pela boca",
  HOLD_EMPTY = "Mantenha vazio",
  PAUSED = "Pausado",
}

const BreathingTimer = () => {
  const [duration, setDuration] = useState(3); // Minutos
  const [timeLeft, setTimeLeft] = useState(duration * 60); // Segundos
  const [isActive, setIsActive] = useState(false);
  const [breathState, setBreathState] = useState<BreathState>(
    BreathState.PAUSED
  );
  const [scale, setScale] = useState(1);
  const [phaseTimer, setPhaseTimer] = useState(0);
  const breathCircleRef = useRef<HTMLDivElement>(null);
  
  const breathingPhases = [
    { state: BreathState.INHALE, duration: 4 },
    { state: BreathState.HOLD_FULL, duration: 4 },
    { state: BreathState.EXHALE, duration: 4 },
    { state: BreathState.HOLD_EMPTY, duration: 4 },
  ];
  
  useEffect(() => {
    setTimeLeft(duration * 60);
  }, [duration]);
  
  useEffect(() => {
    let timerInterval: number | null = null;
    let phaseInterval: number | null = null;
    let animationInterval: number | null = null;

    const updatePhase = () => {
      const totalDuration = breathingPhases.reduce(
        (sum, phase) => sum + phase.duration,
        0
      );
      const currentTime = phaseTimer % totalDuration;

      let accumulatedTime = 0;
      for (let i = 0; i < breathingPhases.length; i++) {
        accumulatedTime += breathingPhases[i].duration;
        if (currentTime < accumulatedTime) {
          const previousAccumulatedTime =
            accumulatedTime - breathingPhases[i].duration;
          const phaseProgress =
            (currentTime - previousAccumulatedTime) /
            breathingPhases[i].duration;

          setBreathState(breathingPhases[i].state);

          // Atualizar escala baseado na fase e progresso
          if (breathingPhases[i].state === BreathState.INHALE) {
            setScale(1 + 0.5 * phaseProgress); // De 1 até 1.5
          } else if (breathingPhases[i].state === BreathState.HOLD_FULL) {
            setScale(1.5); // Mantém em 1.5
          } else if (breathingPhases[i].state === BreathState.EXHALE) {
            setScale(1.5 - 0.5 * phaseProgress); // De 1.5 até 1
          } else if (breathingPhases[i].state === BreathState.HOLD_EMPTY) {
            setScale(1); // Mantém em 1
          }
          break;
        }
      }
    };
    
    if (isActive && timeLeft > 0) {
      // Timer principal para contagem regressiva
      timerInterval = window.setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearAllIntervals();
            setIsActive(false);
            setBreathState(BreathState.PAUSED);
            setScale(1);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      // Controle das fases de respiração
      phaseInterval = window.setInterval(() => {
        setPhaseTimer((prev) => prev + 1);
      }, 1000);

      // Atualização mais frequente para animação mais suave
      animationInterval = window.setInterval(updatePhase, 50);
    }

    const clearAllIntervals = () => {
      if (timerInterval) clearInterval(timerInterval);
      if (phaseInterval) clearInterval(phaseInterval);
      if (animationInterval) clearInterval(animationInterval);
    };

    if (!isActive) {
      clearAllIntervals();
      setScale(1);
    } else {
      updatePhase();
    }

    return clearAllIntervals;
  }, [isActive, timeLeft, phaseTimer]);
  
  const toggleTimer = () => {
    if (timeLeft === 0) {
      setTimeLeft(duration * 60);
    }
    setIsActive(!isActive);
    setPhaseTimer(0);
    setBreathState(isActive ? BreathState.PAUSED : BreathState.INHALE);
    setScale(1);
  };
  
  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(duration * 60);
    setBreathState(BreathState.PAUSED);
    setPhaseTimer(0);
    setScale(1);
  };
  
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-heading font-medium">
          🧘‍♀️ Respiração em Caixa
        </h2>
      </div>
      
      <div className="w-full space-y-4">
        <div className="flex items-center justify-between">
          <span>
            Duração: {duration} {duration === 1 ? "minuto" : "minutos"}
          </span>
          <span className="text-xl font-medium">
            {minutes.toString().padStart(2, "0")}:
            {seconds.toString().padStart(2, "0")}
          </span>
        </div>
        
        <Slider 
          value={[duration]} 
          onValueChange={([value]) => {
            setDuration(value);
            if (!isActive) {
              setTimeLeft(value * 60);
            }
          }}
          disabled={isActive}
          min={1}
          max={10}
          step={1}
          className="my-6"
        />
      </div>
      
      <div className="relative flex items-center justify-center w-60 h-60">
        {/* Background circle */}
        <div className="absolute w-60 h-60 rounded-full bg-accent/10"></div>
        
        {/* Breathing circle */}
        <div 
          ref={breathCircleRef}
          style={{ 
            transform: `scale(${scale})`,
            opacity: 0.4 + (scale - 1) * 0.4,
            transition: "all 50ms linear",
          }}
          className="w-40 h-40 rounded-full bg-accent/40 flex items-center justify-center"
        >
          <span className="text-center text-xl font-medium z-10 px-4">
            {breathState}
          </span>
        </div>
      </div>
      
      <div className="flex space-x-4">
        <Button onClick={toggleTimer} className="w-32" variant="default">
          {isActive ? "Pausar" : timeLeft === 0 ? "Reiniciar" : "Iniciar"}
        </Button>
        
        <Button 
          onClick={resetTimer} 
          variant="outline" 
          className="w-32"
          disabled={timeLeft === duration * 60 && !isActive}
        >
          Reiniciar
        </Button>
      </div>
    </div>
  );
};

export default BreathingTimer;
