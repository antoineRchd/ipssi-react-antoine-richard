const Information = ({nom, prenom, age, photo, adresse, tel, permis}) => {
    return (
        <div>
            <h2>Informations personnelles</h2>
            <img src={photo} alt="Photo de profil" />
            <p>Nom : {nom + " " + prenom}</p>
            <p>Âge : {age} ans</p>
            <p>Adresse : {adresse}</p>
            <p>Tel : {tel}</p>
            <p>Permis : {permis}</p>
        </div>
    );
    }
export default Information;