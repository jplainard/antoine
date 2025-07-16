
'use client';


import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

export default function Home( ) {
  return (
    <>
      <Head>
        <title>ÉlecRochelais Services</title>
      </Head>
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
              <Link href="/about" className="text-slate-700 hover:text-blue-800 font-medium">À propos</Link>
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
        className="relative h-screen flex items-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.75), rgba(30, 58, 138, 0.5)), url('/la-rochelle-bg.jpg')`
        }}
      >
        <div className="w-full px-6">
          {/* Bandeau urgence */}
          <div className="absolute top-0 left-0 w-full flex justify-center z-10">
            <div className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-b-xl shadow-lg flex items-center gap-3 animate-pulse font-bold text-lg">
              <i className="ri-flashlight-line text-2xl"></i>
              Urgence électricité à La Rochelle : intervention rapide 24h/7j !
              <a href="tel:0687654321" className="ml-4 bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Appelez le 06 87 65 43 21</a>
            </div>
          </div>
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
            <div className="max-w-2xl relative">
              <div className="absolute inset-0 -left-6 -right-6 -top-6 -bottom-6 bg-blue-900/50 rounded-2xl z-0"></div>
              <div className="relative z-10 p-8 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <Image
                    src="/antoine.png"
                    alt="Antoine souriant sur fond blanc"
                    width={120}
                    height={160}
                    className="rounded-xl shadow-lg object-cover border-4 border-yellow-400"
                    priority
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-4">
                    <i className="ri-map-pin-line text-yellow-400 text-xl"></i>
                    <span className="text-yellow-400 font-semibold">La Rochelle - Ville des tours</span>
                  </div>
                  <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
                    Votre électricien de confiance au cœur de La Rochelle
                  </h1>
                  <p className="text-xl text-gray-100 mb-8 drop-shadow-xl">
                    Installation, rénovation et dépannage électrique dans la cité rochelaise et sa région. 
                    Service d'urgence disponible 24h/7j pour votre sécurité.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="tel:0546123456" className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 text-center whitespace-nowrap">
                      <i className="ri-phone-line mr-2"></i>Appeler maintenant
                    </a>
                    <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-800 text-center whitespace-nowrap">
                      Devis gratuit
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section réalisations à La Rochelle */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Nos réalisations à La Rochelle</h2>
            <p className="text-xl text-slate-600">Quelques exemples de chantiers électriques réalisés dans la ville et ses environs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-xl shadow-lg flex flex-col items-center">
              <Image src="/antoine.png" alt="Antoine sur chantier" width={120} height={160} className="rounded-lg mb-4 object-cover" />
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Rénovation d'appartement - Vieux Port</h3>
              <p className="text-slate-600 text-center">Remise aux normes et installation d'éclairage LED dans un appartement avec vue sur les tours.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl shadow-lg flex flex-col items-center">
              <i className="ri-building-line text-blue-800 text-5xl mb-4"></i>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Commerce - Quartier Saint-Nicolas</h3>
              <p className="text-slate-600 text-center">Installation complète d'un système de sécurité et interphonie pour un commerce local.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl shadow-lg flex flex-col items-center">
              <i className="ri-home-heart-line text-blue-800 text-5xl mb-4"></i>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Maison individuelle - Les Minimes</h3>
              <p className="text-slate-600 text-center">Modernisation du tableau électrique et installation de prises connectées.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Nos services électriques</h2>
            <p className="text-xl text-slate-600">Des solutions complètes pour tous vos besoins électriques à La Rochelle</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-home-line text-blue-800 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Installation électrique neuve</h3>
              <p className="text-slate-600 mb-4">Installation complète pour constructions neuves et extensions selon les normes NF C 15-100.</p>
              <Link href="/services" className="text-blue-800 font-medium hover:text-blue-600">En savoir plus →</Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-tools-line text-blue-800 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Rénovation électrique</h3>
              <p className="text-slate-600 mb-4">Modernisation de votre installation électrique pour améliorer sécurité et performance.</p>
              <Link href="/services" className="text-blue-800 font-medium hover:text-blue-600">En savoir plus →</Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-alarm-warning-line text-red-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Dépannage d'urgence 24h/7j</h3>
              <p className="text-slate-600 mb-4">Intervention rapide pour tous vos problèmes électriques urgents, jour et nuit.</p>
              <a href="tel:0687654321" className="text-red-600 font-medium hover:text-red-500">Urgence: 06 87 65 43 21 →</a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-shield-check-line text-green-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Mise aux normes</h3>
              <p className="text-slate-600 mb-4">Diagnostic et mise en conformité de votre installation électrique selon la réglementation.</p>
              <Link href="/services" className="text-blue-800 font-medium hover:text-blue-600">En savoir plus →</Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-lightbulb-line text-yellow-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Éclairage LED</h3>
              <p className="text-slate-600 mb-4">Installation d'éclairage LED économique et écologique pour tous vos espaces.</p>
              <Link href="/services" className="text-blue-800 font-medium hover:text-blue-600">En savoir plus →</Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-camera-line text-purple-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Interphonie & vidéophonie</h3>
              <p className="text-slate-600 mb-4">Installation de systèmes d'interphone et vidéophone pour sécuriser vos accès.</p>
              <Link href="/services" className="text-blue-800 font-medium hover:text-blue-600">En savoir plus →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <i className="ri-home-heart-line text-blue-800 text-xl"></i>
                <span className="text-blue-800 font-semibold">Rochelais d'origine</span>
              </div>
              <h2 className="text-4xl font-bold text-slate-800 mb-6">Antoine Lainard, votre électricien rochelais</h2>
              <p className="text-lg text-slate-600 mb-6">
                Né et élevé à La Rochelle, je connais parfaitement notre belle ville des tours et ses spécificités. 
                Avec plus de 15 ans d'expérience, je mets mon expertise au service des Rochelais et de la région.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <i className="ri-check-line text-green-600 text-xl"></i>
                  <span className="text-slate-700">Certifié Qualibat RGE</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-check-line text-green-600 text-xl"></i>
                  <span className="text-slate-700">Assurance décennale</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-check-line text-green-600 text-xl"></i>
                  <span className="text-slate-700">Habilitation électrique</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-check-line text-green-600 text-xl"></i>
                  <span className="text-slate-700">Intervention rapide dans toute la région</span>
                </div>
              </div>
              <Link href="/about" className="bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 whitespace-nowrap">
                En savoir plus sur nous
              </Link>
            </div>
            <div className="relative">
              <Image
                src="/antoine.png"
                alt="Antoine Lainard, électricien rochelais"
                width={300}
                height={400}
                className="rounded-xl shadow-lg object-cover w-full h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - La Rochelle Focus */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Pourquoi choisir ÉlecRochelais Services ?</h2>
            <p className="text-xl text-slate-600">Votre électricien de confiance dans la cité des tours</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-time-line text-white text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Intervention rapide</h3>
              <p className="text-slate-600">Dépannage d'urgence 24h/7j dans toute La Rochelle et sa région</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-shield-star-line text-white text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Expertise rochelaise</h3>
              <p className="text-slate-600">Connaissance parfaite du patrimoine et des spécificités locales</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-anchor-line text-white text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Ancrage local</h3>
              <p className="text-slate-600">Basé à La Rochelle, au cœur de la ville des tours</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-customer-service-line text-white text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Service personnalisé</h3>
              <p className="text-slate-600">Écoute, conseil et suivi adapté à chaque Rochelais</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-blue-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Besoin d'un électricien à La Rochelle ?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Contactez votre électricien rochelais dès maintenant pour un devis gratuit et sans engagement
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0546123456" className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 whitespace-nowrap">
              <i className="ri-phone-line mr-2"></i>05 46 12 34 56
            </a>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-800 whitespace-nowrap">
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
                  <span>contact@elecrochelais.fr</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Zone d'intervention</h4>
              <p className="text-slate-400">
                La Rochelle - Ville des tours<br/>
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
    </>
  );
}
