// == Import npm
import React from 'react';

// == IMPORTS COMPOSANTS
import { Segment } from 'semantic-ui-react';

// == Composant
const DescriptionHome = () => (
  <>
    <Segment className="description-home" inverted color='blue' padded="very" textAlign='center'>
      <p><strong>Local-Hub</strong> s'adresse aux particuliers, aux associations et aux entreprises.</p>
      <p>Il vise à favoriser le lien social, mutualiser les moyens et les savoir-faire, mais aussi entreprendre des actions collectives
        à l'échelle locale.
      </p>
      <p>Notre but est de faire connaître vos idées de projets ainsi que leurs besoins.
        Vous serez mis en relation grâce à un système de géolocalisation qui vous permettra
        de participer ou proposer vos services afin que ces initiatives se concrétisent.
      </p>
      <br />
      <p><strong>L'équipe Local Hub.</strong></p>
    </Segment>
  </>
);

// == Export
export default DescriptionHome;
