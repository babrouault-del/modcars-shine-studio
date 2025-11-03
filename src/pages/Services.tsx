import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Car, Droplets, Shield, CheckCircle2, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import volvoInterior from "@/assets/volvo-interior.jpg";
import renaultExterior from "@/assets/renault-exterior.jpg";
import motoDetail from "@/assets/moto-detail.jpg";
import cupraSeats from "@/assets/cupra-seats.jpg";

const Services = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Nettoyage Intérieur Complet",
      image: volvoInterior,
      description:
        "Un intérieur impeccable pour votre confort et votre bien-être au quotidien.",
      features: [
        "Aspiration complète de l'habitacle",
        "Nettoyage des sièges et tissus",
        "Nettoyage du tableau de bord",
        "Nettoyage des tapis et moquettes",
        "Désinfection et désodorisation",
        "Finitions soignées",
      ],
    },
    {
      icon: Droplets,
      title: "Nettoyage Extérieur et Carrosserie",
      image: renaultExterior,
      description:
        "Redonnez à votre carrosserie son éclat d'origine avec notre nettoyage professionnel.",
      features: [
        "Lavage haute pression de la carrosserie",
        "Nettoyage des jantes et pneumatiques",
        "Nettoyage des vitres extérieures",
        "Lustrage de la carrosserie",
        "Traitement des plastiques extérieurs",
        "Séchage minutieux",
      ],
    },
    {
      icon: Shield,
      title: "Lustrage des Phares",
      image: motoDetail,
      description:
        "Des phares comme neufs pour une visibilité optimale et une sécurité renforcée.",
      features: [
        "Ponçage des optiques ternies",
        "Polissage professionnel",
        "Application d'un vernis protecteur",
        "Résultat durable",
        "Amélioration de la visibilité",
        "Service disponible pour motos",
      ],
    },
    {
      icon: Car,
      title: "Prestations Spécifiques",
      image: cupraSeats,
      description:
        "Des services personnalisés pour répondre à tous vos besoins en matière de nettoyage automobile.",
      features: [
        "Nettoyage de sièges en cuir",
        "Traitement des taches difficiles",
        "Rénovation de plastiques intérieurs",
        "Nettoyage de véhicules utilitaires",
        "Forfaits sur mesure",
        "Intervention à domicile",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Nos Prestations
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Des services professionnels de nettoyage automobile pour véhicules de
            tourisme et utilitaires. Tarifs sur mesure selon le type de véhicule et la
            prestation.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <Card className="border-2 hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="w-16 h-16 mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                        <service.icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-3xl mb-4">{service.title}</CardTitle>
                      <p className="text-muted-foreground text-lg">
                        {service.description}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-foreground/80">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div
                  className={`${
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <div className="relative group">
                    <div className="absolute inset-0 bg-primary/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300" />
                    <img
                      src={service.image}
                      alt={service.title}
                      className="relative rounded-lg shadow-2xl w-full h-[400px] object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Info */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-2">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Tarifs Personnalisés
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Chaque véhicule est unique. Nous établissons un devis sur mesure en
                fonction de vos besoins spécifiques, du type de véhicule et des
                prestations souhaitées.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/contact">
                    Demander un Devis Gratuit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:0680542288">Appeler: 06 80 54 22 88</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Intervention Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              À Domicile ou à l'Atelier
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Nous nous adaptons à vos besoins : intervention à notre atelier à
              Binic-Étables-sur-Mer ou directement à votre domicile pour votre plus
              grand confort.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">À l'Atelier</h3>
                  <p className="text-muted-foreground">
                    Déposez votre véhicule à notre atelier équipé, situé 15 Rue du Vau
                    Chaperon à Binic-Étables-sur-Mer.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">À Domicile</h3>
                  <p className="text-muted-foreground">
                    Nous venons directement chez vous avec notre matériel professionnel
                    pour un service sur place.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
