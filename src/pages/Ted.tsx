import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Importando as fotos do Ted
import tedWantsToWalk from "../assets/images/ted/ted-wants-to-go-for-a-walk.jpg";
import tedWalking from "../assets/images/ted/ted-walking.jpg";
import tedIsBack from "../assets/images/ted/ted-is-back.jpg";

interface TedPhoto {
  id: number;
  image: string;
  caption?: string;
  date: string;
}

const tedPhotos: TedPhoto[] = [
  {
    id: 1,
    image: tedWantsToWalk,
    caption: "Ted querendo ir passear! 🐾",
    date: "2024-03-20",
  },
  {
    id: 2,
    image: tedWalking,
    caption: "Ted durante o passeio 🦮",
    date: "2024-03-20",
  },
  {
    id: 3,
    image: tedIsBack,
    caption: "Ted voltou do passeio 🏠",
    date: "2024-03-20",
  },
];

const Ted: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<TedPhoto | null>(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Galeria do Ted</h1>
        <p className="text-lg text-muted-foreground">
          Momentos especiais do Ted, o cachorro.
        </p>
      </div>

      {/* Grade de Fotos */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {tedPhotos.map((photo) => (
          <div
            key={photo.id}
            className="group relative bg-card rounded-lg overflow-hidden shadow-lg cursor-pointer"
            onClick={() => setSelectedPhoto(photo)}
          >
            <div className="aspect-square">
              <img
                src={photo.image}
                alt={photo.caption || "Foto do Ted"}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            {photo.caption && (
              <div className="p-3">
                <p className="text-sm text-center">{photo.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal de Visualização */}
      <Dialog
        open={!!selectedPhoto}
        onOpenChange={() => setSelectedPhoto(null)}
      >
        {selectedPhoto && (
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>
                {selectedPhoto.caption || "Foto do Ted"}
              </DialogTitle>
            </DialogHeader>
            <div className="mt-2">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.caption || "Foto do Ted"}
                className="w-full h-auto rounded-lg"
              />
              {selectedPhoto.caption && (
                <p className="mt-4 text-center text-lg">
                  {selectedPhoto.caption}
                </p>
              )}
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
};

export default Ted;
 