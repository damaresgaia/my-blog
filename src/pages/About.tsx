import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import minhaFoto from "../assets/images/my-photo.jpg";

const Sobre = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Sobre Mim</h1>

        <div className="md:flex gap-8 mb-12">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <div className="rounded-2xl overflow-hidden bg-accent/10 aspect-square relative">
              <img
                src={minhaFoto}
                alt="Foto de perfil"
                className="absolute inset-0 w-full object-cover"
              />
            </div>
          </div>

          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold mb-4">
              Olá, sou Damares Gaia
            </h2>
            <p className="text-muted-foreground mb-4">
              Sou estudante de Análise e Desenvolvimento de Sistemas pelo Instituto Federal de Santa Catarina (IFSC), com formação técnica em Programação de Sistemas e Programação Web pelo SENAC. Antes de ingressar na área de tecnologia, atuei como advogada, o que me proporcionou uma boa base em pensamento crítico, resolução de problemas e comunicação clara. Essas habilidades hoje aplico no desenvolvimento de soluções digitais.
            </p>
            <p className="text-muted-foreground">
              Sou apaixonada por programação, computação quântica, astronomia e tudo que envolve inovação tecnológica. Acredito que a tecnologia tem o poder de transformar vidas e impactar positivamente o mundo ao nosso redor.
            </p>

            <div className="flex gap-4 mt-6">
              <a href="https://www.linkedin.com/in/damaresgaia" className="text-primary hover:text-primary/80">
                LinkedIn
              </a>
              <a href="https://github.com/damaresgaia" className="text-primary hover:text-primary/80">
                GitHub
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Minha História</h2>
            <Card>
              <CardContent className="p-6 space-y-4">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolorem, harum iure odit velit cumque esse illo quos molestias
                  officia excepturi eligendi amet praesentium doloribus ut
                  magni. Aut repellat tenetur nobis?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat et deserunt quia dolorum, iste qui eaque dolor illum
                  eveniet laboriosam consequatur odit numquam maxime. Atque iste
                  nostrum eaque tempora libero!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis nobis aut corrupti totam? In, odit reprehenderit?
                  Perferendis nihil, qui libero optio consequuntur magni amet
                  voluptas nemo repellendus, doloremque veritatis saepe.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Iure, fuga quidem. Facilis, debitis. Cupiditate, sit eaque
                  omnis qui sequi reprehenderit quos numquam at, dolorum,
                  dolores a velit obcaecati distinctio consectetur.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Por que "Bit & Big Bang"?
            </h2>
            <Card>
              <CardContent className="p-6">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Excepturi, molestias nemo omnis ducimus iste commodi, fugiat
                  dolor, quis maiores autem expedita totam consequatur vero rem
                  officia quasi nostrum dignissimos hic?
                </p>
                <p className="mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores minus possimus labore, accusamus ducimus incidunt
                  magni fugit voluptas eligendi distinctio, earum dolorem
                  voluptatem delectus officiis facere rem ea. Ut, eius.
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
