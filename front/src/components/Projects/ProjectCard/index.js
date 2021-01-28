// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == IMPORTS COMPOSANTS
import {
  Grid, Header, Segment, Image, Label, Icon, Divider,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// == IMPORT STYLES
import './projectCard.scss';

// == Composant
const ProjectCard = ({ logged, project }) => (
  <Segment>
    { project.isArchived && <Label color="blue" corner="right" icon="archive" size="big" /> }
    <Grid divided stackable verticalAlign="middle">
      <Grid.Row>
        <Grid.Column computer={4} only="computer">
          <Link to={`/projet/${project.id}`}><Image src={`${project.image}`} centered spaced rounded /></Link>
        </Grid.Column>
        <Grid.Column computer={12} mobile={16}>
          <Link to={`/projet/${project.id}`}>
            <Grid centered>
              <Grid.Row>
                <Grid.Column only="mobile" width={4} className="project-card--padding-mobile">
                  <Image src={`${project.image}`} centered spaced rounded />
                </Grid.Column>
                <Grid.Column only="mobile" width={12} className="project-card--padding-mobile">
                  <Header as="h3" size="small">
                    {(!project.isAuthor && logged) && (project.isFavorite ? <Icon name="star" color="yellow" /> : <Icon name="star outline" color="yellow" />)}
                    <Header.Content>{`${project.title} `}</Header.Content>
                  </Header>
                </Grid.Column>
                <Grid.Column only="computer" width={16}>
                  <Header as="h3">
                    {(!project.isAuthor && logged) && (project.isFavorite ? <Icon name="star" color="yellow" /> : <Icon name="star outline" color="yellow" />)}
                    <Header.Content>{`${project.title} `}</Header.Content>
                  </Header>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Link>
          <p><Image avatar spaced="right" src={`${project.author.avatar}`} />{`${project.author.name}`}</p>
          <p>{`${project.description}`}</p>
          <p><Icon name="target" />{`${project.location}`}</p>
          <Divider />
          <Label.Group>
            <Label basic content="Créé le" detail={`${project.creation_date}`} />
            <Label basic content="Expire le" detail={`${project.expiration_date}`} />
            <Label as="a" basic href={`mailto:${project.author.email}`} content={`${project.author.email}`} icon="mail" />
          </Label.Group>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
);

// == PROP TYPES
ProjectCard.propTypes = {
  logged: PropTypes.bool.isRequired,
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    isArchived: PropTypes.bool.isRequired,
    isAuthor: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    expiration_date: PropTypes.string.isRequired,
    creation_date: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
// == Export
export default ProjectCard;
