import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Award, Users, Clock, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import workshopImage from "@/assets/workshop.jpg";
import cupraInterior from "@/assets/cupra-interior.jpg";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Professionnalisme",
      description:
        "Un service de qualité avec des produits professionnels et des techniques éprouvées.",
    },
    {
      icon: Heart,
      title: "Passion Automobile",
      description:
        "Nous aimons les belles voitures et nous mettons tout notre cœur dans chaque prestation.",
    },
    {
      icon: Users,
      title: "Proximité",
      description:
        "Un service personnalisé et à l'écoute de vos besoins spécifiques.",
    },
    {
      icon: Clock,
      title: "Disponibilité",
      description:
        "Nous nous adaptons à vos horaires et intervenons à domicile ou à l'atelier.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            À Propos de Mod'Cars
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Votre spécialiste du nettoyage automobile à Binic-Étables-sur-Mer
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Notre Philosophie
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Chez Mod'Cars, nous croyons qu'un véhicule propre, c'est bien plus qu'une
                  question d'esthétique. C'est aussi du confort, de la sécurité et du
                  plaisir de conduite.
                </p>
                <p>
                  Que vous soyez un particulier soucieux de l'entretien de votre véhicule
                  ou un professionnel ayant besoin d'un service régulier pour votre flotte,
                  nous mettons notre expertise à votre service.
                </p>
                <p>
                  Depuis Binic-Étables-sur-Mer, nous intervenons avec professionnalisme et
                  rigueur, que ce soit à notre atelier ou directement chez vous. Chaque
                  véhicule bénéficie d'une attention particulière et d'un traitement adapté
                  à ses spécificités.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-lg blur-xl" />
              <img
                src={workshopImage}
                alt="Atelier Mod'Cars"
                className="relative rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nos Valeurs</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ce qui guide notre travail au quotidien
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-primary/20 rounded-lg blur-xl" />
              <img
                src={cupraInterior}
                alt="Qualité de nos prestations"
                className="relative rounded-lg shadow-2xl w-full"
              />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold mb-6">
                Un Engagement Qualité
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Nous utilisons exclusivement des produits professionnels adaptés à chaque
                  type de surface et de matériau. Notre matériel performant nous permet
                  d'obtenir des résultats impeccables tout en respectant votre véhicule.
                </p>
                <p>
                  Chaque prestation est réalisée avec soin et minutie. Nous prenons le
                  temps nécessaire pour garantir un résultat à la hauteur de vos attentes.
                </p>
                <p>
                  Que ce soit pour un nettoyage d'entretien régulier ou une remise en état
                  complète, nous adaptons nos interventions à vos besoins et à votre budget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à Confier Votre Véhicule ?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Contactez-nous pour un devis personnalisé et découvrez la différence Mod'Cars
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="shine-effect">
              <Link to="/contact">
                Nous Contacter
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/services">Voir Nos Prestations</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
