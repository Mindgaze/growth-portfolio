/* Design Philosophy: Organic Data Visualization
   Modal para visualizar detalhes de projetos e PDFs */

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface ProjectModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  pdfUrl?: string;
  colabUrl?: string;
}

export default function ProjectModal({
  open,
  onOpenChange,
  title,
  description,
  pdfUrl,
  colabUrl,
}: ProjectModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            {title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground whitespace-pre-wrap leading-relaxed">
              {description}
            </p>
          </div>

          {pdfUrl && (
            <div className="space-y-4">
              <h3 className="font-semibold text-lg" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Documentação Completa
              </h3>
              <div className="bg-card/50 rounded-lg p-4 border border-border/50">
                <iframe
                  src={pdfUrl}
                  className="w-full h-96 rounded-lg"
                  title={`${title} PDF`}
                />
              </div>
              <a
                href={pdfUrl}
                download
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-colors"
              >
                <span>Baixar PDF</span>
              </a>
            </div>
          )}

          {colabUrl && (
            <div className="space-y-4">
              <h3 className="font-semibold text-lg" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Notebook Colab
              </h3>
              <p className="text-sm text-muted-foreground">
                Acesse e execute o notebook completo no Google Colab
              </p>
              <a
                href={colabUrl}
                download
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <span>Baixar Notebook Colab</span>
              </a>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
