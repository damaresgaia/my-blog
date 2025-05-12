
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <div className="space-y-6 max-w-md">
        <h1 className="text-4xl md:text-6xl font-bold text-primary">404</h1>
        <div className="relative w-32 h-32 mx-auto">
          <div className="absolute inset-0 rounded-full bg-accent/20 animate-pulse"></div>
          <div className="absolute inset-4 rounded-full bg-accent/40"></div>
          <div className="absolute inset-8 rounded-full bg-accent/60"></div>
          <div className="absolute inset-12 rounded-full bg-accent"></div>
        </div>
        <h2 className="text-2xl md:text-3xl font-medium">Planeta não encontrado</h2>
        <p className="text-lg text-muted-foreground">
          Parece que você se aventurou muito longe no espaço. Esta página não existe em nossa galáxia.
        </p>
        <Button asChild size="lg">
          <Link to="/">Voltar à órbita principal</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
