import React from 'react';
import '../style/App.css';
import Information from '../information';
import ExperiencePro from '../experiencePro';
import Formation from '../formation';
import Competence from '../competence';

function CV() {
  const competences = [
    { nom: "HTML5", niveau: "Avancé" },
    { nom: "CSS3", niveau: "Avancé" },
    { nom: "JavaScript", niveau: "Avancé" },
    { nom: "React.js", niveau: "Intermédiaire" },
    { nom: "Node.js", niveau: "Intermédiaire" },
    { nom: "Express.js", niveau: "Intermédiaire" },
    { nom: "MySQL", niveau: "Débutant" },
  ];
  return (
    <div className="container">
      <div>
      <h1 className="heading">Présentation de CV</h1>
      <Information
        nom="RICHARD"
        prenom="Antoine"
        age="21"
        adresse="1 rue de la paix"
        tel="06 06 06 06 06"
        permis="B"
        photo="https://s.hs-data.com/bilder/spieler/gross/284095.jpg"
      />
      <ExperiencePro
        poste="Développeur Web"
        entreprise="Planetic Lab"
        periode="Février 2021 - Juillet 2022"
        description="Développeur web full stack sur les projets Biota et EntrEd"
      />
      <Formation
        diplome="Baccalauréat Scientifique"
        universite="Institue St-Louis St-Clément"
        periode="septembre 2016 - juin 2019"
      />
      <Competence 
        competences={competences} 
      />
      
    </div>
    </div>
  );
}

export default CV;