
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  const featuredPosts = [
    {
      title: "O futuro da inteligência artificial",
      description: "Como a IA está transformando diversos setores e o que esperar nos próximos anos.",
      category: "Tecnologia",
      date: "10/05/2025",
      link: "/tecnologia/futuro-ia"
    },
    {
      title: "Técnicas de leitura eficiente em inglês",
      description: "Aprenda a melhorar sua compreensão e velocidade de leitura com exercícios práticos.",
      category: "Treino de Leitura",
      date: "08/05/2025",
      link: "/treino-leitura/tecnicas-leitura"
    },
    {
      title: "Resenha: 'Projeto Hail Mary' de Andy Weir",
      description: "Uma aventura espacial surpreendente que mistura ciência e humanidade.",
      category: "Avaliações de Livros",
      date: "05/05/2025",
      link: "/livros/projeto-hail-mary"
    },
    {
      title: "Como a meditação mudou minha relação com a tecnologia",
      description: "Experiências pessoais sobre o equilíbrio entre vida digital e bem-estar.",
      category: "Blog Pessoal",
      date: "03/05/2025",
      link: "/blog/meditacao-tecnologia"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      <section className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
          Bit & Big Bang
        </h1>
        <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
          Um blog sobre tecnologia, literatura e estilo de vida.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Artigos Recentes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="text-sm text-muted-foreground">{post.category} • {post.date}</div>
                <CardTitle className="text-xl">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/80">{post.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Link to={post.link} className="text-primary hover:text-primary/80 text-sm font-medium">
                  Leia mais →
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-4">Treino de Leitura</h2>
          <p className="text-muted-foreground mb-4">
            Aprimore seu inglês com textos interativos que permitem visualizar a tradução de
            palavras individuais ao passar o mouse sobre elas.
          </p>
          <Link to="/treino-leitura" className="text-primary hover:text-primary/80 text-sm font-medium">
            Explore exercícios →
          </Link>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Timer de Respiração</h2>
          <p className="text-muted-foreground mb-4">
            Ferramenta interativa para guiar exercícios de respiração consciente e ajudar a
            melhorar seu foco e reduzir o estresse.
          </p>
          <Link to="/timer-respiracao" className="text-primary hover:text-primary/80 text-sm font-medium">
            Experimente agora →
          </Link>
        </div>
      </section>

      <section className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Sobre o Blog</h2>
        <p className="text-muted-foreground mb-6">
          Este espaço reúne minhas paixões por tecnologia, literatura, aprendizado contínuo e desenvolvimento pessoal.
          Sinta-se à vontade para explorar os diferentes temas e entrar em contato comigo.
        </p>
        <Link to="/sobre" className="text-primary hover:text-primary/80 text-sm font-medium">
          Conheça mais sobre mim →
        </Link>
      </section>
    </div>
  );
};

export default Index;
