
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface BookReview {
  title: string;
  author: string;
  cover: string;
  rating: number;
  genre: string[];
  review: string;
}

const bookReviews: BookReview[] = [
  {
    title: "Projeto Hail Mary",
    author: "Andy Weir",
    cover: "https://m.media-amazon.com/images/I/81uPCrYVwbL._AC_UF1000,1000_QL80_.jpg",
    rating: 5,
    genre: ["Ficção Científica", "Aventura"],
    review: "Uma jornada espacial fascinante que mistura ciência, humor e suspense de forma brilhante. Andy Weir consegue mais uma vez criar um protagonista cativante e situações científicas complexas de forma acessível."
  },
  {
    title: "Duna",
    author: "Frank Herbert",
    cover: "https://m.media-amazon.com/images/I/81ym3QUd3KL._AC_UF1000,1000_QL80_.jpg",
    rating: 5,
    genre: ["Ficção Científica", "Space Opera"],
    review: "A obra-prima de Herbert continua atual e impactante. Uma narrativa épica sobre política, religião, ecologia e o destino da humanidade, com personagens complexos e um universo ricamente detalhado."
  },
  {
    title: "O Problema dos Três Corpos",
    author: "Cixin Liu",
    cover: "https://m.media-amazon.com/images/I/91IlqCQkySL._AC_UF1000,1000_QL80_.jpg",
    rating: 4,
    genre: ["Ficção Científica", "Hard Sci-Fi"],
    review: "Uma visão única da ficção científica com perspectiva chinesa. O livro mistura física avançada, história e um primeiro contato alienígena de forma inovadora, desafiando as convenções do gênero."
  },
  {
    title: "Fundação",
    author: "Isaac Asimov",
    cover: "https://m.media-amazon.com/images/I/81sQN7OAM0L._AC_UF1000,1000_QL80_.jpg",
    rating: 4,
    genre: ["Ficção Científica", "Clássico"],
    review: "Um clássico que permanece relevante. Asimov cria um futuro distante onde a matemática pode prever o destino da humanidade, abordando temas como determinismo, livre arbítrio e ciclos históricos."
  },
  {
    title: "Admirável Mundo Novo",
    author: "Aldous Huxley",
    cover: "https://m.media-amazon.com/images/I/81P6L8iO6OL._AC_UF1000,1000_QL80_.jpg",
    rating: 5,
    genre: ["Ficção Científica", "Distopia"],
    review: "Uma distopia que se torna mais pertinente a cada ano. Huxley previu uma sociedade controlada não pela repressão, mas pelo prazer e distração constantes, oferecendo uma análise profunda sobre felicidade versus liberdade."
  },
  {
    title: "A Máquina do Tempo",
    author: "H.G. Wells",
    cover: "https://m.media-amazon.com/images/I/71Gc2BdHRtL._AC_UF1000,1000_QL80_.jpg",
    rating: 4,
    genre: ["Ficção Científica", "Clássico"],
    review: "O pioneiro das histórias de viagem no tempo, Wells usa essa premissa para explorar questões sobre evolução, classes sociais e o destino da humanidade em uma narrativa que permanece fascinante."
  }
];

const RatingStars = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={cn(
            "w-5 h-5",
            star <= rating ? "fill-primary text-primary" : "text-muted stroke-muted-foreground"
          )}
        />
      ))}
    </div>
  );
};

const Livros = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Avaliações de Livros</h1>
        <p className="text-lg mb-10 text-muted-foreground">
          Minhas resenhas, impressões e recomendações literárias, com foco em ficção científica,
          fantasia, tecnologia e desenvolvimento pessoal.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {bookReviews.map((book, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 h-40 md:h-auto relative">
                  <img
                    src={book.cover}
                    alt={`Capa de ${book.title}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 flex flex-col">
                  <CardHeader className="pb-2">
                    <h2 className="text-xl font-bold">{book.title}</h2>
                    <p className="text-muted-foreground">por {book.author}</p>
                  </CardHeader>
                  <CardContent className="pb-2 flex-grow">
                    <RatingStars rating={book.rating} />
                    <div className="flex flex-wrap gap-2 mt-2 mb-3">
                      {book.genre.map((genre, genreIndex) => (
                        <span
                          key={genreIndex}
                          className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
                        >
                          {genre}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm line-clamp-3">{book.review}</p>
                  </CardContent>
                  <CardFooter className="pt-2">
                    <button className="text-primary text-sm hover:underline">
                      Ler resenha completa
                    </button>
                  </CardFooter>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Livros;
