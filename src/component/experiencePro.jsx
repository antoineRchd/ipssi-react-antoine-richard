const ExperiencePro = ({poste, entreprise, periode, description}) => {
    return (
        <div>
            <h2>Expérience professionnelle</h2>
            <p>Poste : {poste}</p>
            <p>Entreprise : {entreprise}</p>
            <p>Période : {periode}</p>
            <p>Description : {description}</p>
        </div>
    );
    }
export default ExperiencePro;