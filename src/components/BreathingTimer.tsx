
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

enum BreathState {
  INHALE = 'Inspire',
  HOLD = 'Segure',
  EXHALE = 'Expire',
  PAUSED = 'Pausado'
}

const BreathingTimer = () => {
  const [duration, setDuration] = useState(3); // Minutos
  const [timeLeft, setTimeLeft] = useState(duration * 60); // Segundos
  const [isActive, setIsActive] = useState(false);
  const [breathState, setBreathState] = useState<BreathState>(BreathState.PAUSED);
  const [breathCycle, setBreathCycle] = useState(0);
  const breathCircleRef = useRef<HTMLDivElement>(null);
  
  const breathingCycle = {
    inhale: 4, // segundos
    hold: 4, // segundos
    exhale: 4, // segundos
  };
  
  const totalCycleTime = breathingCycle.inhale + breathingCycle.hold + breathingCycle.exhale;
  
  useEffect(() => {
    setTimeLeft(duration * 60);
  }, [duration]);
  
  useEffect(() => {
    let interval: number | null = null;
    
    if (isActive && timeLeft > 0) {
      interval = window.setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            if (interval) clearInterval(interval);
            setIsActive(false);
            setBreathState(BreathState.PAUSED);
            return 0;
          }
          return prevTime - 1;
        });
        
        // Atualizar estado de respiração
        const currentCycleSecond = breathCycle % totalCycleTime;
        
        if (currentCycleSecond < breathingCycle.inhale) {
          setBreathState(BreathState.INHALE);
          if (breathCircleRef.current) {
            breathCircleRef.current.classList.remove('animate-breathe-out');
            breathCircleRef.current.classList.add('animate-breathe-in');
          }
        } else if (currentCycleSecond < (breathingCycle.inhale + breathingCycle.hold)) {
          setBreathState(BreathState.HOLD);
        } else {
          setBreathState(BreathState.EXHALE);
          if (breathCircleRef.current) {
            breathCircleRef.current.classList.remove('animate-breathe-in');
            breathCircleRef.current.classList.add('animate-breathe-out');
          }
        }
        
        setBreathCycle(prev => prev + 1);
      }, 1000);
    } else if (!isActive && interval) {
      clearInterval(interval);
      if (breathCircleRef.current) {
        breathCircleRef.current.classList.remove('animate-breathe-in', 'animate-breathe-out');
      }
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeLeft, breathCycle, totalCycleTime]);
  
  const toggleTimer = () => {
    if (timeLeft === 0) {
      setTimeLeft(duration * 60);
    }
    setIsActive(!isActive);
    if (!isActive) {
      setBreathCycle(0);
    } else {
      setBreathState(BreathState.PAUSED);
      if (breathCircleRef.current) {
        breathCircleRef.current.classList.remove('animate-breathe-in', 'animate-breathe-out');
      }
    }
  };
  
  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(duration * 60);
    setBreathState(BreathState.PAUSED);
    setBreathCycle(0);
    if (breathCircleRef.current) {
      breathCircleRef.current.classList.remove('animate-breathe-in', 'animate-breathe-out');
    }
  };
  
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-heading font-medium">Timer de Respiração</h2>
        <p className="text-muted-foreground">Configure o tempo e siga a animação para respirar com calma e melhorar seu foco</p>
      </div>
      
      <div className="w-full space-y-4">
        <div className="flex items-center justify-between">
          <span>Duração: {duration} {duration === 1 ? 'minuto' : 'minutos'}</span>
          <span className="text-xl font-medium">
            {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
          </span>
        </div>
        
        <Slider 
          value={[duration]} 
          onValueChange={([value]) => setDuration(value)} 
          disabled={isActive}
          min={1}
          max={10}
          step={1}
          className="my-6"
        />
      </div>
      
      <div className="relative flex items-center justify-center w-60 h-60">
        {/* Background circle */}
        <div className="absolute w-60 h-60 rounded-full bg-accent/20"></div>
        
        {/* Breathing circle */}
        <div 
          ref={breathCircleRef}
          className="w-40 h-40 rounded-full bg-accent/40 flex items-center justify-center transition-transform duration-1000"
          style={{ 
            transformOrigin: 'center',
            transform: 'scale(1)',
          }}
        >
          <span className="text-2xl font-medium z-10">{breathState}</span>
        </div>
      </div>
      
      <div className="flex space-x-4">
        <Button 
          onClick={toggleTimer} 
          className="w-32"
          variant="default"
        >
          {isActive ? "Pausar" : timeLeft === 0 ? "Reiniciar" : "Iniciar"}
        </Button>
        
        <Button 
          onClick={resetTimer} 
          variant="outline" 
          className="w-32"
          disabled={!isActive && timeLeft === duration * 60}
        >
          Reiniciar
        </Button>
      </div>
    </div>
  );
};

export default BreathingTimer;
