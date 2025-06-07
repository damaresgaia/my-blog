import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const blogPosts = {
  todos: [
    {
      title: "Como a meditação mudou minha relação com a tecnologia",
      description:
        "Experiências pessoais sobre o equilíbrio entre vida digital e bem-estar.",
      date: "03/05/2025",
      category: "Reflexões",
      link: "/blog/meditacao-tecnologia",
    },
    {
      title: "Minha primeira experiência cultivando suculentas",
      description:
        "Aprendizados, desafios e a satisfação de ver as plantas crescerem.",
      date: "25/04/2025",
      category: "Plantas",
      link: "/blog/cultivando-suculentas",
    },
    {
      title: "Treino de força",
      description: "Como a musculação transformou minha saúde física e mental.",
      date: "15/04/2025",
      category: "Fitness",
      link: "/blog/jornada-musculacao",
    },
    {
      title: "Organizando minha biblioteca pessoal",
      description:
        "Como cataloguei e organizei anos de acúmulo de livros físicos e digitais.",
      date: "08/04/2025",
      category: "Organização",
      link: "/blog/organizando-biblioteca",
    },
    {
      title: "Reflexões após uma semana sem redes sociais",
      description:
        "O que aprendi ao me desconectar temporariamente do mundo digital.",
      date: "28/03/2025",
      category: "Digital Detox",
      link: "/blog/semana-sem-redes",
    },
    {
      title: "Receita: pão caseiro para iniciantes",
      description: "Minha jornada aprendendo a fazer pão durante a pandemia.",
      date: "15/03/2025",
      category: "Culinária",
      link: "/blog/pao-caseiro",
    },
  ],
  plantas: [
    {
      title: "Minha primeira experiência cultivando suculentas",
      description:
        "Aprendizados, desafios e a satisfação de ver as plantas crescerem.",
      date: "25/04/2025",
      category: "Plantas",
      link: "/blog/cultivando-suculentas",
    },
    {
      title: "Como salvei minha samambaia moribunda",
      description:
        "Dicas práticas que aprendi para recuperar plantas em estado crítico.",
      date: "10/02/2025",
      category: "Plantas",
      link: "/blog/samambaia-recuperada",
    },
    {
      title: "Jardim vertical na varanda pequena",
      description: "Como criei um espaço verde mesmo com limitações de espaço.",
      date: "05/01/2025",
      category: "Plantas",
      link: "/blog/jardim-vertical",
    },
  ],
  fitness: [
    {
      title: "Minha jornada no treino de força",
      description: "Como a musculação transformou minha saúde física e mental.",
      date: "15/04/2025",
      category: "Fitness",
      link: "/blog/jornada-musculacao",
    },
    {
      title: "5 exercícios essenciais para iniciantes",
      description: "Um guia básico para quem está começando na academia.",
      date: "10/03/2025",
      category: "Fitness",
      link: "/blog/exercicios-iniciantes",
    },
  ],
  reflexoes: [
    {
      title: "Como a meditação mudou minha relação com a tecnologia",
      description:
        "Experiências pessoais sobre o equilíbrio entre vida digital e bem-estar.",
      date: "03/05/2025",
      category: "Reflexões",
      link: "/blog/meditacao-tecnologia",
    },
    {
      title: "Reflexões após uma semana sem redes sociais",
      description:
        "O que aprendi ao me desconectar temporariamente do mundo digital.",
      date: "28/03/2025",
      category: "Digital Detox",
      link: "/blog/semana-sem-redes",
    },
    {
      title: "O que aprendi observando o céu noturno",
      description:
        "Como a astronomia amadora me ensinou sobre paciência e perspectiva.",
      date: "15/12/2024",
      category: "Reflexões",
      link: "/blog/observando-ceu",
    },
  ],
  outros: [
    {
      title: "Organizando minha biblioteca pessoal",
      description:
        "Como cataloguei e organizei anos de acúmulo de livros físicos e digitais.",
      date: "08/04/2025",
      category: "Organização",
      link: "/blog/organizando-biblioteca",
    },
    {
      title: "Receita: pão caseiro para iniciantes",
      description: "Minha jornada aprendendo a fazer pão durante a pandemia.",
      date: "15/03/2025",
      category: "Culinária",
      link: "/blog/pao-caseiro",
    },
  ],
};

const Blog = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Blog Pessoal</h1>
        <p className="text-lg mb-10 text-muted-foreground">
          Um espaço mais livre e pessoal, onde compartilho histórias, reflexões
          e experiências sobre diversos temas do meu dia a dia.
        </p>

        <Tabs defaultValue="todos" className="mb-8">
          <TabsList className="mb-8 w-full justify-start overflow-x-auto">
            <TabsTrigger value="todos">Todos</TabsTrigger>
            <TabsTrigger value="plantas">Plantas</TabsTrigger>
            <TabsTrigger value="fitness">Fitness</TabsTrigger>
            <TabsTrigger value="reflexoes">Reflexões</TabsTrigger>
            <TabsTrigger value="outros">Outros</TabsTrigger>
          </TabsList>

          {(Object.keys(blogPosts) as Array<keyof typeof blogPosts>).map(
            (category) => (
              <TabsContent
                key={category}
                value={category}
                className="space-y-6"
              >
                {blogPosts[category].map((post, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardHeader>
                      <div className="text-sm text-muted-foreground mb-1">
                        {post.date} • {post.category}
                      </div>
                      <CardTitle className="text-2xl">
                        <Link to={post.link} className="hover:text-primary">
                          {post.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="text-base text-foreground/80">
                        {post.description}
                      </CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Link
                        to={post.link}
                        className="text-primary hover:underline"
                      >
                        Leia mais →
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </TabsContent>
            )
          )}
        </Tabs>
      </div>
    </div>
  );
};

export default Blog;
