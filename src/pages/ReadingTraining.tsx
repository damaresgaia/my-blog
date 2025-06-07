import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EnglishTooltip } from "@/components/EnglishTooltip";

const TreinoLeitura = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Treino de Leitura em Inglês
        </h1>
        <p className="text-lg text-muted-foreground">
          Passe o mouse sobre as palavras destacadas para ver sua tradução em
          português.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-10">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">
              The Benefits of Learning a Second Language
            </CardTitle>
            <CardDescription>Intermediate level • 5 min read</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-lg leading-relaxed">
            <p>
              Learning a second language offers numerous{" "}
              <EnglishTooltip english="benefits" portuguese="benefícios">
                benefits
              </EnglishTooltip>{" "}
              that extend far beyond the ability to{" "}
              <EnglishTooltip english="communicate" portuguese="comunicar-se">
                communicate
              </EnglishTooltip>{" "}
              with people from different countries. Research has{" "}
              <EnglishTooltip english="shown" portuguese="mostrado">
                shown
              </EnglishTooltip>{" "}
              that bilingualism can{" "}
              <EnglishTooltip english="enhance" portuguese="melhorar">
                enhance
              </EnglishTooltip>{" "}
              cognitive abilities and may even{" "}
              <EnglishTooltip english="delay" portuguese="atrasar">
                delay
              </EnglishTooltip>{" "}
              the onset of dementia.
            </p>
            <p>
              When you{" "}
              <EnglishTooltip english="learn" portuguese="aprende">
                learn
              </EnglishTooltip>{" "}
              a new language, your brain{" "}
              <EnglishTooltip english="creates" portuguese="cria">
                creates
              </EnglishTooltip>{" "}
              new neural pathways, which{" "}
              <EnglishTooltip english="improves" portuguese="melhora">
                improves
              </EnglishTooltip>{" "}
              memory, problem-solving skills, and{" "}
              <EnglishTooltip
                english="critical thinking"
                portuguese="pensamento crítico"
              >
                critical thinking
              </EnglishTooltip>
              . Additionally, exposure to different languages{" "}
              <EnglishTooltip english="fosters" portuguese="promove">
                fosters
              </EnglishTooltip>{" "}
              a deeper{" "}
              <EnglishTooltip english="understanding" portuguese="compreensão">
                understanding
              </EnglishTooltip>{" "}
              and appreciation of other cultures.
            </p>
            <p>
              In today's{" "}
              <EnglishTooltip
                english="interconnected"
                portuguese="interconectado"
              >
                interconnected
              </EnglishTooltip>{" "}
              world, being bilingual or multilingual can also{" "}
              <EnglishTooltip
                english="significantly"
                portuguese="significativamente"
              >
                significantly
              </EnglishTooltip>{" "}
              <EnglishTooltip english="enhance" portuguese="melhorar">
                enhance
              </EnglishTooltip>{" "}
              career prospects. Many employers{" "}
              <EnglishTooltip english="value" portuguese="valorizam">
                value
              </EnglishTooltip>{" "}
              candidates who can communicate with clients or partners from
              different regions.
            </p>
            <p>
              So, whether you're learning a language for personal{" "}
              <EnglishTooltip english="growth" portuguese="crescimento">
                growth
              </EnglishTooltip>
              , professional reasons, or simply for the joy of it, the{" "}
              <EnglishTooltip english="rewards" portuguese="recompensas">
                rewards
              </EnglishTooltip>{" "}
              are substantial and{" "}
              <EnglishTooltip english="long-lasting" portuguese="duradouros">
                long-lasting
              </EnglishTooltip>
              .
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">
              The Future of Artificial Intelligence
            </CardTitle>
            <CardDescription>Advanced level • 7 min read</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-lg leading-relaxed">
            <p>
              Artificial Intelligence (AI) has{" "}
              <EnglishTooltip english="undergone" portuguese="passado por">
                undergone
              </EnglishTooltip>{" "}
              remarkable{" "}
              <EnglishTooltip english="advancements" portuguese="avanços">
                advancements
              </EnglishTooltip>{" "}
              in recent years,{" "}
              <EnglishTooltip english="transforming" portuguese="transformando">
                transforming
              </EnglishTooltip>{" "}
              various industries and aspects of daily life. From{" "}
              <EnglishTooltip
                english="voice assistants"
                portuguese="assistentes de voz"
              >
                voice assistants
              </EnglishTooltip>{" "}
              to{" "}
              <EnglishTooltip
                english="autonomous vehicles"
                portuguese="veículos autônomos"
              >
                autonomous vehicles
              </EnglishTooltip>
              , AI technologies are becoming increasingly{" "}
              <EnglishTooltip english="sophisticated" portuguese="sofisticados">
                sophisticated
              </EnglishTooltip>
              .
            </p>
            <p>
              As AI continues to{" "}
              <EnglishTooltip english="evolve" portuguese="evoluir">
                evolve
              </EnglishTooltip>
              , experts predict that it will further{" "}
              <EnglishTooltip english="revolutionize" portuguese="revolucionar">
                revolutionize
              </EnglishTooltip>{" "}
              healthcare through improved diagnostic tools, personalized
              treatment plans, and{" "}
              <EnglishTooltip
                english="drug discovery"
                portuguese="descoberta de medicamentos"
              >
                drug discovery
              </EnglishTooltip>
              . In education, AI-powered systems can{" "}
              <EnglishTooltip english="adapt" portuguese="adaptar">
                adapt
              </EnglishTooltip>{" "}
              to individual learning styles, making education more{" "}
              <EnglishTooltip english="accessible" portuguese="acessível">
                accessible
              </EnglishTooltip>{" "}
              and effective for diverse learners.
            </p>
            <p>
              However, the rapid{" "}
              <EnglishTooltip english="advancement" portuguese="avanço">
                advancement
              </EnglishTooltip>{" "}
              of AI also raises important{" "}
              <EnglishTooltip
                english="ethical considerations"
                portuguese="considerações éticas"
              >
                ethical considerations
              </EnglishTooltip>{" "}
              regarding privacy, job displacement, and decision-making{" "}
              <EnglishTooltip
                english="accountability"
                portuguese="responsabilidade"
              >
                accountability
              </EnglishTooltip>
              . As we move forward, it's{" "}
              <EnglishTooltip english="crucial" portuguese="crucial">
                crucial
              </EnglishTooltip>{" "}
              to develop AI systems that are{" "}
              <EnglishTooltip english="transparent" portuguese="transparentes">
                transparent
              </EnglishTooltip>
              , fair, and aligned with human values.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TreinoLeitura;
