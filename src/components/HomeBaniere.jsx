import myImage from '../assets/images/capture.jpg'; // Importez votre image ici

// Créez un composant fonctionnel pour l'image
const Baniere = () => {
  return (
    <img src={myImage} alt="baniere" />
  );
};

export default Baniere;