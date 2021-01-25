// == Import npm
import React, { useState } from 'react';
import PropTypes, { shape } from 'prop-types';

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
const Needs = ({ needs }) => {
  const checkArr = needs.map((need) => (need.completed ? 1 : 0));
  const checkCount = checkArr.reduce((a, b) => a + b, 0);

  const [state, setState] = useState({ activeIndex: -1 });

  const handleClick = (e, itemProps) => {
    const { index } = itemProps;
    const newIndex = state.activeIndex === index ? -1 : index;
    setState({ activeIndex: newIndex });
  };

  return (
    <>
      <Progress value={checkCount} total={needs.length} progress="ratio" size="medium" indicating>Couverture des besoins</Progress>
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
            {needs.map((need) => (
              <Grid.Row key={need.id}>
                <Grid.Column width={2} verticalAlign="middle" textAlign="center">
                  <Checkbox readOnly checked={need.completed} />
                </Grid.Column>
                <Grid.Column width={14}>
                  <Header as="h3">{`${need.title}`}</Header>
                  <p>{`${need.description}`}</p>
                </Grid.Column>
              </Grid.Row>
            ))}
          </Grid>
        </Accordion.Content>
      </Accordion>
    </>
  );
};
// == PROP TYPES
Needs.propTypes = {
  needs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
};

// == Export
export default Needs;
