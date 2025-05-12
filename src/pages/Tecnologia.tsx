
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const posts = [
  {
    title: "O futuro da inteligência artificial",
    description: "Como a IA está transformando diversos setores e o que esperar nos próximos anos.",
    date: "10/05/2025",
    readTime: "8 min",
    link: "/tecnologia/futuro-ia",
    tags: ["IA", "Tecnologia", "Futuro"]
  },
  {
    title: "Segurança cibernética em 2025",
    description: "Os principais desafios e tendências em segurança digital que devemos ficar atentos.",
    date: "28/04/2025",
    readTime: "6 min",
    link: "/tecnologia/seguranca-cibernetica",
    tags: ["Segurança", "Hacking", "Proteção"]
  },
  {
    title: "Realidade Virtual: além dos games",
    description: "Como a VR está sendo aplicada em educação, saúde e treinamentos profissionais.",
    date: "15/04/2025",
    readTime: "5 min",
    link: "/tecnologia/realidade-virtual",
    tags: ["VR", "Metaverso", "Inovação"]
  },
  {
    title: "Linguagens de programação mais requisitadas",
    description: "Um panorama das linguagens mais valorizadas no mercado de trabalho atual.",
    date: "05/04/2025",
    readTime: "7 min",
    link: "/tecnologia/linguagens-programacao",
    tags: ["Desenvolvimento", "Carreira", "Código"]
  },
  {
    title: "Internet das Coisas no cotidiano",
    description: "Como os dispositivos conectados estão mudando a forma como vivemos e trabalhamos.",
    date: "22/03/2025",
    readTime: "6 min",
    link: "/tecnologia/iot-cotidiano",
    tags: ["IoT", "Smart Home", "Conectividade"]
  },
  {
    title: "Computação quântica explicada",
    description: "Entenda de forma simples os princípios básicos da revolução quântica na computação.",
    date: "10/03/2025",
    readTime: "9 min",
    link: "/tecnologia/computacao-quantica",
    tags: ["Quântica", "Ciência", "Inovação"]
  }
];

const Tecnologia = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Tecnologia</h1>
        <p className="text-lg mb-10 text-muted-foreground">
          Análises, tendências e novidades do mundo da tecnologia, explicadas de forma 
          acessível e com um olhar crítico sobre seus impactos na sociedade.
        </p>

        <div className="space-y-6">
          {posts.map((post, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-1">
                  <span>{post.date}</span>
                  <span>{post.readTime} de leitura</span>
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
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tecnologia;
