import logo from './logo.svg';
import './App.css';
function App() {
    return (
        <div className="App">
            <header>
                <h1>Bienvenue sur iMarketJ | </h1>
                <p>Nous vendons des produits Apple à des prix imbattables.</p>
            </header>
            <a href="https://www.apple.com/fr/">Site officiel d'Apple</a>
            <section>
                Créer un compte iMarketJ :
                <form>
                    <div>
                        <label htmlFor="nom">Nom :</label>
                        <input type="text" id="nom" name="nom" required />
                    </div>
                    <div>
                        <label htmlFor="prenom">Prénom :</label>
                        <input type="text" id="prenom" name="prenom" required />
                    </div>
                    <div>
                        <label htmlFor="email">Email :</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div>
                        <label htmlFor="tel">Téléphone :</label>
                        <input type="tel" id="tel" name="tel" required />
                    </div>
                    <button type="submit">Créer</button>
                </form>
            </section>
            <section>
                <div>
                    <h2>Nos Produits</h2>
                </div>
                <a href="#iphone">iPhone 16</a>
                <a href="#macbook">MacBook Air</a>
                <article>
                    <div id="iphone">
                        <h3>iPhone 16</h3>
                    </div>
                    <br />
                    <img src="iphone.jpg" alt="iPhone 16" />
                    <ul>
                        <li key="couleur"><strong>Couleur :</strong> Noir</li>
                        <li key="capacite"><strong>Capacité :</strong> 128GB</li>
                        <li key="prix"><strong>Prix :</strong> 799€</li>
                        <li key="quantite"><strong>Quantité :</strong> 10</li>
                        <li key="garantie"><strong>Garantie :</strong> 2 ans</li>
                        <li key="disponibilite"><strong>Disponibilité :</strong> Oui</li>
                    </ul>
                    <button onClick={() => alert('Vous avez acheté un iPhone 16 !')}>Acheter</button>
                </article>
                <article>
                    <div id="macbook">
                        <h4>MacBook Air</h4>
                    </div>
                    <br />
                    <img src="macbook.jpg" alt="MacBook Air" />
                    <ul>
                        <li key="couleur"><strong>Couleur :</strong> Gris sidéral</li>
                        <li key="capacite"><strong>Capacité :</strong> 256GB</li>
                        <li key="prix"><strong>Prix :</strong> 999€</li>
                        <li key="quantite"><strong>Quantité :</strong> 0</li>
                        <li key="garantie"><strong>Garantie :</strong> 2 ans</li>
                        <li key="disponibilite"><strong>Disponibilité :</strong> Non</li>
                    </ul>
                    <button onClick={() => alert('Désolé, cet article n\'est plus disponible')}>Acheter</button>
                </article>
            </section>
            <section>
                <div>
                    <h5>Contacts</h5>
                </div>
                <div>
                    Choisissez vos moyens de contact préférés :
                    <form>
                        <label htmlFor="contactMail">Contact par mail</label>
                        <input type="checkbox" id="contactMail" name="contactMail" />
                        <label htmlFor="contactTel">Contact par téléphone</label>
                        <input type="checkbox" id="contactTel" name="contactTel" />
                        <label htmlFor="contactPostal">Contact par courrier postal</label>
                        <input type="checkbox" id="contactPostal" name="contactPostal" />
                        <label htmlFor="homme">Homme</label>
                        <input type="radio" id="homme" name="genre" value="homme" />
                        <label htmlFor="femme">Femme</label>
                        <input type="radio" id="femme" name="genre" value="femme" />
                    </form>
                    <button type="submit">Envoyer</button>
                    <button type="reset">Réinitialiser</button>
                </div>
                <div>
                    <p><strong>David Cohen:</strong> Très satisfait de mon achat, service rapide et efficace !</p>
                    <p><strong>Sarah Levy:</strong> Les produits sont de très bonne qualité, je recommande !</p>
                    <p><strong>Isaac Goldstein:</strong> Excellent service client, très réactif et à l'écoute.</p>
                </div>
            </section>
            <footer>
                <p>Pour plus de disponibilités sur nos produits veuillez voter :</p>
                <button onClick={() => alert('Vous avez voté pour iPhone 16')}>iPhone 16</button>
                <button onClick={() => alert('Vous avez voté pour MacBook Air')}>MacBook Air</button>
                <br />
                <br />
                <span>
                    <a href="mailto:jeremyalezra@icloud.com">Contactez-nous</a>
                </span>
                <form>
                    <br />
                    <input placeholder="Votre nom" type="text" />
                    <br />
                    <input placeholder="Votre mail" type="email" required />
                    <br />
                    <textarea placeholder="Votre message" required></textarea>
                    <br />
                    <input type="text" placeholder="Enter Your First Name" id="firstName" />
                    <input type="text" placeholder="Enter Your Last Name" id="lastName" />
                    <br />
                    <input placeholder="Votre nom" type="text" required />
                    <br />
                </form>
            </footer>
        </div>
    );
}
export default App;