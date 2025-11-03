import { Link } from "react-router-dom";
import { Facebook, MapPin, Phone, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Mod'Cars</h3>
            <p className="text-primary-foreground/80 mb-4">
              Nettoyage automobile professionnel à Binic-Étables-sur-Mer.
              Service de qualité à domicile ou à l'atelier.
            </p>
            <a
              href="https://facebook.com/ModCars"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-primary-foreground/80 hover:text-accent transition-colors"
            >
              <Facebook className="h-5 w-5" />
              <span>Suivez-nous sur Facebook</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Nos Prestations
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  À Propos
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nous Contacter</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-accent" />
                <span className="text-primary-foreground/80">
                  15 Rue du Vau Chaperon
                  <br />
                  22680 Binic-Étables-sur-Mer
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-accent" />
                <a
                  href="tel:0680542288"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  06 80 54 22 88
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="h-5 w-5 mt-0.5 flex-shrink-0 text-accent" />
                <span className="text-primary-foreground/80">
                  Ouvert jusqu'à 19h
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Mod'Cars - Nettoyage Auto. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
