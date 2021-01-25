// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == IMPORTS COMPOSANTS
import {
  Grid, Item,
} from 'semantic-ui-react';

// == IMPORTS CONTAINERS

// == STYLES
import './descriptionHome.scss';

// == Composant
const DescriptionHome = () => (
  <Item.Group relaxed="very">
    <Item>
      <Item.Content verticalAlign="middle">
        <Grid columns={1}>
          <Grid.Row centered>
            <Item.Header as="h1">Local Hub</Item.Header>
          </Grid.Row>
        </Grid>
      </Item.Content>
    </Item>
    <Item>
      <Item.Description>
        Local Hub s'adresse aux particuliers, aux associations et aux entreprises. Il vise à favoriser
        le lien social, mutualiser les moyens et les savoir-faire, mais aussi entreprendre des actions collectives
        à l'échelle locale.
        Notre but est de faire connaître vos idées de projets ainsi que leurs besoins.
        Vous serez mis en relation grâce à un système de géolocalisationqui vous permettra
        de participer ou proposer vos services afin que ces initiatives se concrétisent.
        L'équipe Local Hub.
      </Item.Description>
    </Item>
  </Item.Group>
);

// == Export
export default DescriptionHome;
