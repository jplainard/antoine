
'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-4">
              {/* Nouveau logo maison + prise */}
              <div className="w-12 h-12 bg-gradient-to-br from-blue-800 via-blue-500 to-yellow-400 rounded-xl flex items-center justify-center shadow-lg">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="10" y="18" width="20" height="14" rx="3" fill="#fff" stroke="#1e3a8a" strokeWidth="2"/>
                  <polygon points="8,18 20,8 32,18" fill="#facc15" stroke="#1e3a8a" strokeWidth="2"/>
                  <rect x="17" y="26" width="6" height="4" rx="1" fill="#1e3a8a"/>
                  <circle cx="19" cy="28" r="0.7" fill="#fff"/>
                  <circle cx="21" cy="28" r="0.7" fill="#fff"/>
                  <circle cx="23" cy="28" r="0.7" fill="#fff"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-800 via-blue-500 to-yellow-400 bg-clip-text text-transparent tracking-tight" style={{fontFamily: 'Montserrat, Pacifico, sans-serif', letterSpacing: '-1px'}}>ÉlecRochelais Services</span>
                <span className="text-xs text-blue-800 font-medium mt-1">Votre électricien rochelais de confiance</span>
              </div>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-slate-700 hover:text-blue-800 font-medium">Accueil</Link>
              <Link href="/services" className="text-slate-700 hover:text-blue-800 font-medium">Services</Link>
              <Link href="/about" className="text-blue-800 font-medium">À propos</Link>
              <Link href="/contact" className="text-slate-700 hover:text-blue-800 font-medium">Contact</Link>
              <a href="tel:0546123456" className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 whitespace-nowrap">
                <i className="ri-phone-line mr-2"></i>05 46 12 34 56
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.8), rgba(30, 58, 138, 0.6)), url('/la-rochelle-tours.jpg')`
        }}
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <i className="ri-anchor-line text-yellow-400 text-2xl"></i>
            <span className="text-yellow-400 font-semibold text-lg">Fier d'être rochelais</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">À propos d'ÉlecRochelais Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Votre partenaire électricien de confiance, ancré dans le patrimoine rochelais depuis plus de 15 ans
          </p>
        </div>
      </section>

      {/* Antoine Lainard Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <i className="ri-home-heart-line text-blue-800 text-xl"></i>
                <span className="text-blue-800 font-semibold">Rochelais de cœur et d'origine</span>
              </div>
              <h2 className="text-4xl font-bold text-slate-800 mb-6">Antoine Lainard</h2>
              <h3 className="text-xl text-blue-800 font-semibold mb-6">Électricien expert - Fondateur d'ÉlecRochelais Services</h3>
              <p className="text-lg text-slate-600 mb-6">
                Né dans la cité des tours, j'ai grandi en admirant les majestueux phares de La Rochelle. 
                Passionné par mon métier depuis plus de 15 ans, j'ai fondé ÉlecRochelais Services avec une mission claire : 
                offrir des services électriques de qualité supérieure aux Rochelais et aux habitants de notre belle région.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                Formé dans les meilleures écoles techniques et constamment à jour des dernières normes et technologies, 
                je mets mon expertise au service de votre sécurité et votre confort électrique, avec cette connaissance 
                intime de notre patrimoine architectural rochelais.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <i className="ri-graduation-cap-line text-blue-800 text-xl"></i>
                  <span className="text-slate-700">Diplômé en électrotechnique</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-award-line text-blue-800 text-xl"></i>
                  <span className="text-slate-700">15+ années d'expérience rochelaise</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-team-line text-blue-800 text-xl"></i>
                  <span className="text-slate-700">500+ clients rochelais satisfaits</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-building-line text-blue-800 text-xl"></i>
                  <span className="text-slate-700">Spécialiste du patrimoine local</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-start">
              <div className="relative max-w-[220px] w-full aspect-[3/4] h-[320px] md:h-[400px]">
                <Image
                  src="/antoine.png"
                  alt="Antoine souriant sur fond blanc"
                  fill
                  className="rounded-xl shadow-lg object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Nos valeurs rochelaises</h2>
            <p className="text-xl text-slate-600">Les principes qui guident notre travail au quotidien, inspirés de l'esprit rochelais</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-shield-check-line text-white text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Sécurité maritime</h3>
              <p className="text-slate-600">
                Comme les phares guident les marins, la sécurité de nos clients rochelais est notre priorité absolue. 
                Chaque intervention respecte scrupuleusement les normes de sécurité électrique.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-anchor-line text-white text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Solidité rochelaise</h3>
              <p className="text-slate-600">
                Comme les tours de La Rochelle qui défient le temps, nous garantissons la durabilité de nos travaux 
                avec du matériel de qualité professionnelle et notre assurance décennale.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-customer-service-line text-white text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Hospitalité charentaise</h3>
              <p className="text-slate-600">
                L'accueil chaleureux légendaire des Rochelais guide notre approche : écoute, conseil personnalisé 
                et suivi attentionné de chaque projet dans notre belle région.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Commitment - Enhanced La Rochelle Focus */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-6">
                <i className="ri-heart-line text-red-500 mr-2"></i>
                Ancrage dans La Rochelle
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Né et élevé à l'ombre des Tours médiévales, je connais chaque quartier de notre belle cité : 
                du Vieux-Port aux Minimes, de Tasdon à Laleu. Cette connaissance intime de La Rochelle 
                nous permet d'adapter parfaitement nos services aux spécificités de l'habitat rochelais.
              </p>
              <div className="bg-blue-800 text-white p-6 rounded-lg mb-8">
                <h3 className="font-semibold mb-4 flex items-center">
                  <i className="ri-map-pin-line mr-2"></i>
                  Spécialiste du patrimoine rochelais
                </h3>
                <ul className="space-y-2 text-blue-100">
                  <li>• Maisons à colombages du centre historique</li>
                  <li>• Immeubles hausmanniens du 19ème siècle</li>
                  <li>• Villas balnéaires des Minimes</li>
                  <li>• Constructions contemporaines des nouveaux quartiers</li>
                </ul>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <i className="ri-building-2-line text-blue-800 text-xl"></i>
                  <span className="text-slate-700">Expert du centre historique protégé</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-ship-line text-blue-800 text-xl"></i>
                  <span className="text-slate-700">Connaissance du milieu maritime</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-time-line text-blue-800 text-xl"></i>
                  <span className="text-slate-700">Intervention rapide dans toute l'agglomération</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-team-line text-blue-800 text-xl"></i>
                  <span className="text-slate-700">Réseau d'artisans rochelais partenaires</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/la-rochelle-bg.jpg"
                alt="Vue panoramique de La Rochelle au coucher du soleil"
                className="rounded-xl shadow-lg object-cover w-full h-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications with La Rochelle touch */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Certifications & qualifications</h2>
            <p className="text-xl text-slate-600">Nos garanties professionnelles pour la tranquillité des Rochelais</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center border">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-award-line text-blue-800 text-2xl"></i>
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Qualibat RGE</h3>
              <p className="text-sm text-slate-600">Certification qualité reconnue pour les travaux électriques</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center border">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-green-600 text-2xl"></i>
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Assurance Décennale</h3>
              <p className="text-sm text-slate-600">Garantie de 10 ans sur tous nos travaux rochelais</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center border">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-flashlight-line text-yellow-600 text-2xl"></i>
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Habilitation Électrique</h3>
              <p className="text-sm text-slate-600">Autorisation légale pour tous travaux électriques</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center border">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-graduation-cap-line text-purple-600 text-2xl"></i>
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Formation Continue</h3>
              <p className="text-sm text-slate-600">Mise à jour régulière des compétences techniques</p>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers with La Rochelle pride */}
      <section className="py-20 bg-blue-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">ÉlecRochelais Services en chiffres</h2>
            <p className="text-xl text-blue-100">Notre expérience au service de la satisfaction rochelaise</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-2">15+</div>
              <div className="text-blue-100 text-lg">Années à La Rochelle</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-blue-100 text-lg">Rochelais satisfaits</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-2">1200+</div>
              <div className="text-blue-100 text-lg">Interventions réalisées</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-2">24h/7j</div>
              <div className="text-blue-100 text-lg">Service d'urgence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Zone d'intervention with La Rochelle districts */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Notre zone d'intervention</h2>
            <p className="text-xl text-slate-600">Au service de La Rochelle et de toute la Charente-Maritime</p>
          </div>
          
          <div className="bg-blue-50 p-8 rounded-xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
                  <i className="ri-building-line text-blue-800 mr-2"></i>
                  La Rochelle - Tous quartiers
                </h3>
                <div className="grid grid-cols-2 gap-2 text-slate-600">
                  <span>• Vieux-Port</span>
                  <span>• Centre historique</span>
                  <span>• Les Minimes</span>
                  <span>• Tasdon</span>
                  <span>• Laleu</span>
                  <span>• Port-Neuf</span>
                  <span>• Fétilly</span>
                  <span>• Villeneuve</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
                  <i className="ri-map-pin-line text-blue-800 mr-2"></i>
                  Agglomération rochelaise
                </h3>
                <div className="grid grid-cols-2 gap-2 text-slate-600">
                  <span>• Périgny</span>
                  <span>• Lagord</span>
                  <span>• Aytré</span>
                  <span>• Châtelaillon-Plage</span>
                  <span>• Nieul-sur-Mer</span>
                  <span>• Marsilly</span>
                  <span>• Saint-Xandre</span>
                  <span>• Dompierre-sur-Mer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-800 mb-6">Prêt à travailler ensemble ?</h2>
          <p className="text-xl text-slate-600 mb-8">
            Contactez votre électricien rochelais pour discuter de votre projet et découvrir comment nous pouvons vous aider
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0546123456" className="bg-blue-800 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 whitespace-nowrap">
              <i className="ri-phone-line mr-2"></i>Appeler maintenant
            </a>
            <Link href="/contact" className="border-2 border-blue-800 text-blue-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 hover:text-white whitespace-nowrap">
              Demander un devis
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg flex items-center justify-center transform rotate-12">
                    <i className="ri-flashlight-line text-yellow-400 transform -rotate-12"></i>
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full flex items-center justify-center">
                    <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold" style={{fontFamily: '"Pacifico", serif'}}>ÉlecRochelais Services</h3>
                  <p className="text-xs text-slate-400 -mt-1">Ville des tours</p>
                </div>
              </div>
              <p className="text-slate-400 mb-4">
                Votre électricien rochelais de confiance pour tous vos travaux électriques.
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
                La Rochelle - Ville des Tours<br/>
                Charente-Maritime (17)
              </p>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 ÉlecRochelais Services. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
