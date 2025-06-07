import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface NasaImage {
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}

const NASA_API_KEY = "DEMO_KEY"; // Você deve substituir por sua chave da API

const NasaGallery = () => {
  const [image, setImage] = useState<NasaImage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNasaImage = async () => {
      try {
        const response = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`
        );

        if (!response.ok) {
          throw new Error("Falha ao carregar imagem da NASA");
        }

        const data = await response.json();
        setImage(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro desconhecido");
      } finally {
        setLoading(false);
      }
    };

    fetchNasaImage();
  }, []);

  if (error) {
    return (
      <div className="container mx-auto px-4 py-10">
        <Card className="bg-destructive/10">
          <CardContent className="p-6">
            <p className="text-destructive">Erro: {error}</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        Imagem Astronômica do Dia
      </h1>
      <Card className="overflow-hidden">
        {loading ? (
          <div className="space-y-4 p-6">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-[400px] w-full" />
            <Skeleton className="h-20 w-full" />
          </div>
        ) : (
          image && (
            <>
              <CardHeader>
                <CardTitle>{image.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{image.date}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="text-muted-foreground">{image.explanation}</p>
              </CardContent>
            </>
          )
        )}
      </Card>
    </div>
  );
};

export default NasaGallery;
