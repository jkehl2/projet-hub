// == Import npm
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// == IMPORTS COMPOSANTS
import {
  Accordion,
  Checkbox,
  Grid, Header, Icon, Progress,
} from 'semantic-ui-react';

// == IMPORTS CONTAINERS

// == STYLES
import './needs.scss';

// == Functions

// == Composant
const Project = () => {
  const [state, setState] = useState({ activeIndex: -1 });

  const handleClick = (e, itemProps) => {
    const { index } = itemProps;
    const newIndex = state.activeIndex === index ? -1 : index;
    setState({ activeIndex: newIndex });
  };

  return (
    <>
      <Progress value="1" total="2" progress="ratio" size="medium" indicating>Couverture des besoins</Progress>
      <Accordion styled exclusive={false} fluid>
        <Accordion.Title
          active={state.activeIndex === 0}
          index={0}
          onClick={handleClick}
          as="h2"
        >
          <Icon name="dropdown" />
          Liste des besoins
        </Accordion.Title>
        <Accordion.Content active={state.activeIndex === 0}>
          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column width={2} verticalAlign="middle" textAlign="center">
                <Checkbox readOnly />
              </Grid.Column>
              <Grid.Column width={14}>
                <Header as="h3">Titre de besoin</Header>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam praesentium non enim eligendi sapiente atque.
                  Sit impedit modi voluptates sequi ex iste, amet,
                  reiciendis ab vero corrupti est porro laboriosam?
                </p>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={2} verticalAlign="middle" textAlign="center">
                <Checkbox readOnly checked />
              </Grid.Column>
              <Grid.Column width={14}>
                <Header as="h3">Titre de besoin</Header>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam praesentium non enim eligendi sapiente atque.
                  Sit impedit modi voluptates sequi ex iste, amet,
                  reiciendis ab vero corrupti est porro laboriosam?
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Accordion.Content>
      </Accordion>
    </>
  );
};
// == PROP TYPES
Project.propTypes = {
};

// == Export
export default Project;
