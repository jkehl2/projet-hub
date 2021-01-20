// == Import npm
import React from 'react';

// == IMPORTS COMPOSANTS
import { Container, Header, Item } from 'semantic-ui-react';

// == IMPORTS CONTAINERS

// == STYLES
import './project.scss';

// == Composant
const Project = () => (
  <Container className="project">
    {/* Titre page */}
    <Header as="h1">Détails du projet</Header>

    {/* Image projet titre et description */}
    <Item.Group>
      <Item>
        <Item.Image size="small" src="https://react.semantic-ui.com/images/wireframe/image.png" />
        <Item.Content>
          <Item.Header as="h1">Un super projet</Item.Header>
          <Item.Meta>
            <Label as="a" image href="mailto:george.orwell@localhub.fr">
              <img src="https://react.semantic-ui.com/images/avatar/small/joe.jpg" />
              George ORWEL
              <Label.Detail>george.orwell@localhub.fr</Label.Detail>
            </Label>
          </Item.Meta>
          <Item.Description>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam praesentium non enim eligendi sapiente atque. Sit impedit modi voluptates sequi ex iste, amet, reiciendis ab vero corrupti est porro laboriosam?</p>
          </Item.Description>
          <Item.Extra>
            
          </Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>
  </Container>
);

// == Export
export default Project;
