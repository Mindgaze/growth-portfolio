/* Design Philosophy: Organic Data Visualization
   Floating header with backdrop blur and subtle border */

import { Button } from "@/components/ui/button";

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Filipe Rodrigues
          </button>

          <nav className="hidden md:flex items-center gap-8">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("sobre")}
              className="text-foreground/80 hover:text-foreground hover:bg-transparent"
            >
              Sobre
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("skills")}
              className="text-foreground/80 hover:text-foreground hover:bg-transparent"
            >
              Skills
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("projetos")}
              className="text-foreground/80 hover:text-foreground hover:bg-transparent"
            >
              Projetos
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("contato")}
              className="text-foreground/80 hover:text-foreground hover:bg-transparent"
            >
              Contato
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
