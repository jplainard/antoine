
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    service: '',
    urgence: 'non',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.message.length > 500) {
      alert('Le message ne peut pas dépasser 500 caractères.');
      return;
    }

    try {
      const response = await fetch('https://readdy.ai/api/form-submission', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          ...formData,
          form_id: 'contact-electrorachelle'
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          nom: '',
          email: '',
          telephone: '',
          service: '',
          urgence: 'non',
          message: ''
        });
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
    }
  };

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
              <Link href="/services" className="text-slate-700 hover:text-blue-800 font-medium">Services</Link>
              <Link href="/about" className="text-slate-700 hover:text-blue-800 font-medium">À propos</Link>
              <Link href="/contact" className="text-blue-800 font-medium">Contact</Link>
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
          backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.8), rgba(30, 58, 138, 0.6)), url('https://readdy.ai/api/search-image?query=Beautiful%20contact%20and%20communication%20concept%20with%20La%20Rochelle%20towers%20in%20background%2C%20professional%20business%20setting%2C%20phone%20and%20email%20communication%20symbols%2C%20modern%20office%20environment%20with%20view%20of%20Tour%20Saint-Nicolas%20and%20harbor%2C%20welcoming%20atmosphere%2C%20maritime%20heritage%20backdrop%2C%20bright%20natural%20lighting&width=1920&height=600&seq=contact-la-rochelle-header&orientation=landscape')`
        }}
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Contactez-nous</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Besoin d'un électricien à La Rochelle ? Contactez-nous pour un devis gratuit ou une intervention d'urgence
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-blue-50 rounded-xl">
              <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-phone-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Téléphone</h3>
              <p className="text-slate-600 mb-4">Appelez-nous pour un devis ou des conseils</p>
              <a href="tel:0546123456" className="text-blue-800 font-semibold text-lg hover:text-blue-600">
                05 46 12 34 56
              </a>
            </div>

            <div className="text-center p-8 bg-red-50 rounded-xl">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-alarm-warning-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Urgence 24h/7j</h3>
              <p className="text-slate-600 mb-4">Dépannage électrique d'urgence</p>
              <a href="tel:0687654321" className="text-red-600 font-semibold text-lg hover:text-red-500">
                06 87 65 43 21
              </a>
            </div>

            <div className="text-center p-8 bg-green-50 rounded-xl">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-mail-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Email</h3>
              <p className="text-slate-600 mb-4">Écrivez-nous pour toute demande</p>
              <a href="mailto:contact@electrorachelle.fr" className="text-green-600 font-semibold hover:text-green-500">
                contact@electrorachelle.fr
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Demander un devis gratuit</h2>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <i className="ri-check-circle-line text-green-600 text-4xl mb-4"></i>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Message envoyé avec succès !</h3>
                  <p className="text-green-700">Nous vous recontacterons dans les plus brefs délais.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} id="contact-electrorachelle" className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Votre nom et prénom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="votre@email.fr"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="06 12 34 56 78"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Type de service
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-8"
                      >
                        <option value="">Sélectionnez un service</option>
                        <option value="installation">Installation électrique neuve</option>
                        <option value="renovation">Rénovation électrique</option>
                        <option value="depannage">Dépannage</option>
                        <option value="normes">Mise aux normes</option>
                        <option value="eclairage">Éclairage LED</option>
                        <option value="interphonie">Interphonie/Vidéophonie</option>
                        <option value="tableau">Tableau électrique</option>
                        <option value="prises">Prises et interrupteurs</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      S'agit-il d'une urgence ?
                    </label>
                    <div className="flex space-x-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="urgence"
                          value="oui"
                          checked={formData.urgence === 'oui'}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        Oui, c'est urgent
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="urgence"
                          value="non"
                          checked={formData.urgence === 'non'}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        Non, pas urgent
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Description de votre projet (max. 500 caractères)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      maxLength={500}
                      rows={4}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Décrivez votre besoin en électricité..."
                    ></textarea>
                    <div className="text-right text-sm text-slate-500 mt-1">
                      {formData.message.length}/500 caractères
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-800 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap"
                  >
                    <i className="ri-send-plane-line mr-2"></i>
                    Envoyer ma demande
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info & Map */}
            <div>
              <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Informations de contact</h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="ri-map-pin-line text-blue-800 text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">Adresse</h4>
                      <p className="text-slate-600">
                        15 Avenue Michel Crépeau<br/>
                        17000 La Rochelle<br/>
                        Charente-Maritime
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="ri-time-line text-blue-800 text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">Horaires d'ouverture</h4>
                      <div className="text-slate-600 space-y-1">
                        <p>Lundi - Vendredi: 8h00 - 18h00</p>
                        <p>Samedi: 8h00 - 12h00</p>
                        <p>Dimanche: Urgences uniquement</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="ri-map-2-line text-blue-800 text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">Zone d'intervention</h4>
                      <p className="text-slate-600">
                        La Rochelle, Périgny, Lagord, Aytré, Châtelaillon-Plage, 
                        Nieul-sur-Mer, Marsilly, Saint-Xandre, Dompierre-sur-Mer 
                        et toute la Charente-Maritime (17)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="bg-white p-4 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Nous localiser</h3>
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.123456789!2d-1.151139!3d46.160329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDA5JzM3LjIiTiAxwrAwOScwNC4xIlc!5e0!3m2!1sfr!2sfr!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-20 bg-red-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <i className="ri-alarm-warning-line text-white text-5xl"></i>
            <h2 className="text-4xl font-bold text-white">Urgence électrique ?</h2>
          </div>
          <p className="text-xl text-red-100 mb-8">
            Panne de courant, court-circuit, problème électrique dangereux ? 
            Appelez notre service d'urgence disponible 24h/7j
          </p>
          <a href="tel:0687654321" className="bg-white text-red-600 px-8 py-4 rounded-lg text-xl font-bold hover:bg-red-50 whitespace-nowrap">
            <i className="ri-phone-line mr-2"></i>06 87 65 43 21
          </a>
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
