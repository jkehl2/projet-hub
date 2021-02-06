// == IMPORT PACKAGES
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// == IMPORTS COMPONENTS
import {
  Accordion,
  Checkbox,
  Grid,
  Header,
  Icon,
  Label,
} from 'semantic-ui-react';

// == IMPOTS STYLES
import './needs.scss';

// == COMPONENTS
const Needs = ({ isCheckEnable, needs, updateNeedIdCompleted }) => {
  const [state, setState] = useState({ activeIndex: -1 });

  const handleClick = (e, itemProps) => {
    const { index } = itemProps;
    const newIndex = state.activeIndex === index ? -1 : index;
    setState({ activeIndex: newIndex });
  };

  return (
    <Accordion className="needs" styled exclusive={false} fluid>
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
                {isCheckEnable
                  ? (
                    <Checkbox
                      checked={need.completed}
                      onChange={() => {
                        updateNeedIdCompleted(need.id, !need.completed);
                      }}
                    />
                  )
                  : (
                    <>
                      {need.completed
                        ? <Icon className="needs--icon--filled" size="large" name="check" title="Besoin couvert" />
                        : <Icon className="needs--icon--unfulfilled" size="large" name="window minimize outline" title="Besoin non couvert" />}
                    </>
                  )}
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
  );
};
// == PROP TYPES
Needs.propTypes = {
  isCheckEnable: PropTypes.bool.isRequired,
  needs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
  updateNeedIdCompleted: PropTypes.func.isRequired,
};

// == Export
export default Needs;
