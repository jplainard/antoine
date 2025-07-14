
'use client';

import Link from 'next/link';

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center">
                <i className="ri-flashlight-line text-white text-lg"></i>
              </div>
              <h1 className="text-xl font-semibold text-blue-800">ElectroRochelle</h1>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-slate-700 hover:text-blue-800 font-medium">Accueil</Link>
              <Link href="/services" className="text-blue-800 font-medium">Services</Link>
              <Link href="/about" className="text-slate-700 hover:text-blue-800 font-medium">À propos</Link>
              <Link href="/contact" className="text-slate-700 hover:text-blue-800 font-medium">Contact</Link>
              <a href="tel:0546123456" className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 whitespace-nowrap">
                <i className="ri-phone-line mr-2"></i>05 46 12 34 56
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Page Header */}
      <section 
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.8), rgba(30, 58, 138, 0.6)), url('https://readdy.ai/api/search-image?query=Professional%20electrical%20work%20in%20La%20Rochelle%20with%20medieval%20towers%20in%20background%2C%20electrician%20installing%20modern%20electrical%20systems%2C%20electrical%20tools%20and%20equipment%2C%20safety%20measures%2C%20Tour%20Saint-Nicolas%20and%20Tour%20de%20la%20Chaine%20visible%2C%20maritime%20heritage%20architecture%2C%20bright%20professional%20lighting%2C%20technical%20expertise%20demonstration&width=1920&height=600&seq=services-la-rochelle-header&orientation=landscape')`
        }}
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Nos services électriques</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Des solutions complètes et professionnelles pour tous vos besoins électriques à La Rochelle et sa région
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Installation Électrique Neuve */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <i className="ri-home-line text-blue-800 text-2xl"></i>
                  </div>
                  <h2 className="text-3xl font-bold text-slate-800">Installation électrique neuve</h2>
                </div>
                <p className="text-lg text-slate-600 mb-6">
                  Installation complète pour constructions neuves et extensions selon les normes NF C 15-100. 
                  Nous concevons et réalisons votre installation électrique de A à Z.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-3">
                    <i className="ri-check-line text-green-600"></i>
                    <span>Étude et conception personnalisée</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <i className="ri-check-line text-green-600"></i>
                    <span>Installation complète aux normes</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <i className="ri-check-line text-green-600"></i>
                    <span>Tableau électrique moderne</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <i className="ri-check-line text-green-600"></i>
                    <span>Prises et éclairages optimisés</span>
                  </li>
                </ul>
                <Link href="/contact" className="bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 whitespace-nowrap">
                  Demander un devis
                </Link>
              </div>
              <div>
                <img 
                  src="https://readdy.ai/api/search-image?query=Modern%20electrical%20installation%20in%20new%20construction%2C%20professional%20electrician%20installing%20electrical%20panel%2C%20clean%20wiring%20system%2C%20bright%20workshop%20lighting%2C%20safety%20equipment%2C%20professional%20electrical%20work%2C%20construction%20site%20background&width=600&height=400&seq=installation-neuve&orientation=landscape"
                  alt="Installation électrique neuve"
                  className="rounded-xl shadow-lg object-cover w-full h-80"
                />
              </div>
            </div>
          </div>

          {/* Rénovation Électrique */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <i className="ri-tools-line text-green-600 text-2xl"></i>
                  </div>
                  <h2 className="text-3xl font-bold text-slate-800">Rénovation électrique</h2>
                </div>
                <p className="text-lg text-slate-600 mb-6">
                  Modernisation de votre installation électrique existante pour améliorer sécurité, 
                  performance et conformité aux normes actuelles.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-3">
                    <i className="ri-check-line text-green-600"></i>
                    <span>Diagnostic complet de l'existant</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <i className="ri-check-line text-green-600"></i>
                    <span>Remplacement du tableau électrique</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <i className="ri-check-line text-green-600"></i>
                    <span>Rénovation du réseau électrique</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <i className="ri-check-line text-green-600"></i>
                    <span>Ajout de prises et interrupteurs</span>
                  </li>
                </ul>
                <Link href="/contact" className="bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 whitespace-nowrap">
                  Demander un devis
                </Link>
              </div>
              <div className="lg:order-1">
                <img 
                  src="https://readdy.ai/api/search-image?query=Electrical%20renovation%20work%20in%20residential%20home%2C%20electrician%20upgrading%20old%20electrical%20system%2C%20modern%20electrical%20panel%20installation%2C%20renovation%20tools%20and%20equipment%2C%20professional%20work%20environment%2C%20safety%20measures&width=600&height=400&seq=renovation-electrique&orientation=landscape"
                  alt="Rénovation électrique"
                  className="rounded-xl shadow-lg object-cover w-full h-80"
                />
              </div>
            </div>
          </div>

          {/* Dépannage d'Urgence */}
          <div className="mb-20">
            <div className="bg-red-50 rounded-2xl p-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                      <i className="ri-alarm-warning-line text-red-600 text-2xl"></i>
                    </div>
                    <h2 className="text-3xl font-bold text-slate-800">Dépannage d'urgence 24h/7j</h2>
                  </div>
                  <p className="text-lg text-slate-600 mb-6">
                    Intervention rapide pour tous vos problèmes électriques urgents. Notre équipe est disponible 
                    24 heures sur 24, 7 jours sur 7 pour votre sécurité.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center space-x-3">
                      <i className="ri-check-line text-green-600"></i>
                      <span>Intervention en moins de 30 minutes</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <i className="ri-check-line text-green-600"></i>
                      <span>Diagnostic rapide et précis</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <i className="ri-check-line text-green-600"></i>
                      <span>Réparation immédiate si possible</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <i className="ri-check-line text-green-600"></i>
                      <span>Sécurisation de l'installation</span>
                    </li>
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="tel:0687654321" className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 text-center whitespace-nowrap">
                      <i className="ri-phone-line mr-2"></i>Urgence: 06 87 65 43 21
                    </a>
                    <a href="tel:0546123456" className="border-2 border-red-600 text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white text-center whitespace-nowrap">
                      Standard: 05 46 12 34 56
                    </a>
                  </div>
                </div>
                <div>
                  <img 
                    src="https://readdy.ai/api/search-image?query=Emergency%20electrical%20repair%20service%2C%20electrician%20with%20flashlight%20working%20at%20night%2C%20electrical%20fault%20diagnosis%2C%20emergency%20van%20with%20tools%2C%20urgent%20electrical%20intervention%2C%20professional%20emergency%20response&width=600&height=400&seq=depannage-urgence&orientation=landscape"
                    alt="Dépannage électrique d'urgence"
                    className="rounded-xl shadow-lg object-cover w-full h-80"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Autres Services */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-shield-check-line text-green-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Mise aux normes</h3>
              <p className="text-slate-600 mb-6">
                Diagnostic et mise en conformité de votre installation électrique selon la réglementation NF C 15-100.
              </p>
              <ul className="space-y-2 text-sm text-slate-600 mb-6">
                <li>• Diagnostic électrique complet</li>
                <li>• Mise en conformité</li>
                <li>• Certificat de conformité</li>
                <li>• Conseil personnalisé</li>
              </ul>
              <Link href="/contact" className="text-blue-800 font-medium hover:text-blue-600">
                En savoir plus →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-lightbulb-line text-yellow-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Éclairage LED</h3>
              <p className="text-slate-600 mb-6">
                Installation d'éclairage LED économique et écologique pour réduire votre consommation d'énergie.
              </p>
              <ul className="space-y-2 text-sm text-slate-600 mb-6">
                <li>• Éclairage intérieur et extérieur</li>
                <li>• Solutions domotiques</li>
                <li>• Économies d'énergie</li>
                <li>• Éclairage décoratif</li>
              </ul>
              <Link href="/contact" className="text-blue-800 font-medium hover:text-blue-600">
                En savoir plus →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-camera-line text-purple-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Interphonie & vidéophonie</h3>
              <p className="text-slate-600 mb-6">
                Installation de systèmes d'interphone et vidéophone pour sécuriser et moderniser vos accès.
              </p>
              <ul className="space-y-2 text-sm text-slate-600 mb-6">
                <li>• Interphone audio et vidéo</li>
                <li>• Contrôle d'accès</li>
                <li>• Installation résidentielle</li>
                <li>• Maintenance et dépannage</li>
              </ul>
              <Link href="/contact" className="text-blue-800 font-medium hover:text-blue-600">
                En savoir plus →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-dashboard-line text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Tableau électrique</h3>
              <p className="text-slate-600 mb-6">
                Installation et modernisation de tableaux électriques pour une distribution sécurisée de l'électricité.
              </p>
              <ul className="space-y-2 text-sm text-slate-600 mb-6">
                <li>• Remplacement de tableau</li>
                <li>• Ajout de circuits</li>
                <li>• Protection différentielle</li>
                <li>• Disjoncteurs modulaires</li>
              </ul>
              <Link href="/contact" className="text-blue-800 font-medium hover:text-blue-600">
                En savoir plus →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-plug-line text-indigo-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Prises & interrupteurs</h3>
              <p className="text-slate-600 mb-6">
                Installation et remplacement de prises et interrupteurs selon vos besoins et préférences esthétiques.
              </p>
              <ul className="space-y-2 text-sm text-slate-600 mb-6">
                <li>• Prises standards et spécialisées</li>
                <li>• Interrupteurs et va-et-vient</li>
                <li>• Prises USB intégrées</li>
                <li>• Design moderne</li>
              </ul>
              <Link href="/contact" className="text-blue-800 font-medium hover:text-blue-600">
                En savoir plus →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-flashlight-line text-teal-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Autres services</h3>
              <p className="text-slate-600 mb-6">
                Nous proposons également d'autres prestations électriques selon vos besoins spécifiques.
              </p>
              <ul className="space-y-2 text-sm text-slate-600 mb-6">
                <li>• Domotique et automatisation</li>
                <li>• Bornes de recharge véhicule</li>
                <li>• Chauffage électrique</li>
                <li>• Conseil et expertise</li>
              </ul>
              <Link href="/contact" className="text-blue-800 font-medium hover:text-blue-600">
                Nous consulter →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-blue-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Prêt à commencer votre projet ?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Contactez-nous pour discuter de vos besoins électriques et obtenir un devis personnalisé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0546123456" className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 whitespace-nowrap">
              <i className="ri-phone-line mr-2"></i>Appeler maintenant
            </a>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-800 whitespace-nowrap">
              Demander un devis gratuit
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <i className="ri-flashlight-line text-white"></i>
                </div>
                <h3 className="text-lg font-semibold">ElectroRochelle</h3>
              </div>
              <p className="text-slate-400 mb-4">
                Votre électricien de confiance à La Rochelle pour tous vos travaux électriques.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Installation électrique</li>
                <li>Rénovation</li>
                <li>Dépannage d'urgence</li>
                <li>Mise aux normes</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-slate-400">
                <div className="flex items-center space-x-2">
                  <i className="ri-phone-line"></i>
                  <span>05 46 12 34 56</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="ri-smartphone-line"></i>
                  <span>06 87 65 43 21</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="ri-mail-line"></i>
                  <span>contact@electrorachelle.fr</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Zone d'intervention</h4>
              <p className="text-slate-400">
                La Rochelle et sa région<br/>
                Charente-Maritime (17)
              </p>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 ElectroRochelle. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
