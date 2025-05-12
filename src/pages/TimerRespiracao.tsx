
import BreathingTimer from "@/components/BreathingTimer";

const TimerRespiracao = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Timer de Respiração para Foco</h1>
          <p className="text-lg text-muted-foreground">
            Uma ferramenta para ajudar você a praticar a respiração consciente, melhorar seu foco 
            e reduzir o estresse do dia a dia.
          </p>
        </div>

        <div className="bg-card rounded-xl p-6 md:p-10 shadow-sm">
          <BreathingTimer />
        </div>

        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Benefícios da Respiração Consciente</h2>
          <ul className="list-disc list-inside space-y-3 text-lg text-muted-foreground">
            <li>Reduz os níveis de estresse e ansiedade</li>
            <li>Melhora a capacidade de concentração e foco</li>
            <li>Promove clareza mental e criatividade</li>
            <li>Ajuda a regular emoções intensas</li>
            <li>Pode baixar a pressão arterial e frequência cardíaca</li>
          </ul>

          <div className="pt-4">
            <h2 className="text-2xl font-bold mb-3">Como usar este timer</h2>
            <ol className="list-decimal list-inside space-y-3 text-lg text-muted-foreground">
              <li>Escolha a duração desejada para sua prática</li>
              <li>Encontre uma posição confortável, de preferência com a coluna ereta</li>
              <li>Clique em "Iniciar" e siga o ritmo da animação</li>
              <li>Inspire quando o círculo expandir, segure brevemente, e expire quando ele contrair</li>
              <li>Mantenha o foco na sua respiração durante toda a prática</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimerRespiracao;
