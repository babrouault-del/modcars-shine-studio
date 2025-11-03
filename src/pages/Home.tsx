import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Car, Droplets, Shield, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-car.jpg";
import volvoInterior from "@/assets/volvo-interior.jpg";
import renaultInterior from "@/assets/renault-interior.jpg";
import cupraInterior from "@/assets/cupra-interior.jpg";
import workshopImage from "@/assets/workshop.jpg";

const Home = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Nettoyage Intérieur",
      description: "Nettoyage complet de l'habitacle, sièges, tapis et tableau de bord",
    },
    {
      icon: Droplets,
      title: "Nettoyage Extérieur",
      description: "Lavage carrosserie, jantes et finitions extérieures",
    },
    {
      icon: Shield,
      title: "Lustrage des Phares",
      description: "Rénovation et protection de vos optiques pour une visibilité optimale",
    },
    {
      icon: Car,
      title: "Prestations Sur Mesure",
      description: "Services personnalisés selon vos besoins spécifiques",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/80" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Redonnez Tout Son Éclat
            <br />
            <span className="text-accent">À Votre Véhicule</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto animate-fade-in delay-100">
            Nettoyage automobile professionnel à domicile ou à l'atelier
            <br />
            Binic-Étables-sur-Mer, Bretagne
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-200">
            <Button size="lg" variant="default" asChild className="shine-effect">
              <Link to="/contact">
                Demander un Devis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/services">Nos Prestations</Link>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Nos Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Des prestations de qualité pour redonner à votre véhicule tout son éclat
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild className="border-foreground text-foreground hover:bg-foreground/10 hover:text-foreground">
              <Link to="/services">
                Voir Toutes Nos Prestations
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Notre Savoir-Faire
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Découvrez la qualité de nos prestations à travers nos réalisations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-lg aspect-video shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src={volvoInterior}
                alt="Intérieur Volvo nettoyé"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-primary-foreground font-semibold">
                  Nettoyage Intérieur Premium
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg aspect-video shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src={renaultInterior}
                alt="Intérieur Renault nettoyé"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-primary-foreground font-semibold">
                  Habitacle Comme Neuf
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg aspect-video shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src={cupraInterior}
                alt="Intérieur Cupra nettoyé"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-primary-foreground font-semibold">
                  Finitions Soignées
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Mod'Cars, Votre Spécialiste
                <br />
                <span className="text-primary">du Nettoyage Auto</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Chez Mod'Cars, nous croyons qu'un véhicule propre, c'est bien plus qu'une
                question d'esthétique. C'est aussi du confort, de la sécurité et du
                plaisir de conduite.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Depuis Binic-Étables-sur-Mer, nous intervenons avec professionnalisme et
                rigueur, que ce soit à notre atelier ou directement chez vous.
              </p>
              <Button size="lg" asChild>
                <Link to="/about">
                  En Savoir Plus
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="order-1 lg:order-2">
              <img
                src={workshopImage}
                alt="Atelier Mod'Cars"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à Redonner Vie à Votre Véhicule ?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Contactez-nous dès maintenant pour un devis personnalisé et gratuit
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="shine-effect">
              <Link to="/contact">Demander un Devis</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground">
              <a href="tel:0680542288">Appeler: 06 80 54 22 88</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
