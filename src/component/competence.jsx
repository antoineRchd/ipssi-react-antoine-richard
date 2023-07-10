const Competence = ({ competences }) => {
    return (
      <div>
        <h2>Compétences en développement</h2>
        <ul>
          {competences.map((competence, index) => (
            <li key={index}>
              {competence.nom}
              <span className="skill-level">{competence.niveau}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Competence;
  