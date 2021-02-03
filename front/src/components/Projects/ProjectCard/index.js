/* eslint-disable no-nested-ternary */
// == Import npm
import React from 'react';
import PropTypes, { shape } from 'prop-types';

// == IMPORTS COMPOSANTS
import {
  Grid, Header, Segment, Image, Label, Icon, Divider, Progress, Button,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// == IMPORT STYLES
import './projectCard.scss';

const HeaderStar = ({
  project, size, logged, addToFavorite, removeFromFavorite,
}) => (
  <>
    <Header as="h3" size={`${size}`}>
      <Header.Content><Link className="header-project-title" to={`/projet/${project.id}`}>{`${project.title} `}</Link></Header.Content>
    </Header>
    { (!project.isAuthor && logged && !project.isArchived)
      && (project.isFavorite
        ? (
          <Button
            icon={{
              name: 'star',
              color: 'yellow',
            }}
            size="mini"
            onClick={() => {
              removeFromFavorite(project.id);
            }}
            content="Retirer des favoris"
            labelPosition="left"
            basic
            compact
          />
        )
        : (
          <Button
            icon={{
              name: 'star outline',
              color: 'yellow',
            }}
            size="mini"
            onClick={() => {
              addToFavorite(project.id);
            }}
            content="Ajouter aux favoris"
            labelPosition="left"
            basic
            compact
          />
        )
      )}
  </>
);
HeaderStar.propTypes = {
  project: PropTypes.object.isRequired,
  size: PropTypes.string.isRequired,
  logged: PropTypes.bool.isRequired,
  addToFavorite: PropTypes.func.isRequired,
  removeFromFavorite: PropTypes.func.isRequired,
};

// == Composant
const ProjectCard = ({
  logged,
  project,
  addToFavorite,
  removeFromFavorite,
}) => {
  const checkArr = project.needs.map((need) => (need.completed ? 1 : 0));
  const checkCount = checkArr.reduce((a, b) => a + b, 0);
  return (
    <Segment compact className="project-card--fullwidth">
      { project.isArchived && <Label color="grey" corner="right" icon="archive" title="archivé" size="big" /> }
      <Grid divided stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column computer={4} only="computer">
            <Link to={`/projet/${project.id}`}><Image src={`${project.image}`} centered spaced rounded className="project-card--picture" /></Link>
          </Grid.Column>
          <Grid.Column computer={12} mobile={16}>
            <Grid centered>
              <Grid.Row>
                <Grid.Column only="mobile" width={4} className="project-card--padding-mobile">
                  <Link to={`/projet/${project.id}`}><Image src={`${project.image}`} centered spaced rounded className="project-card--picture" /></Link>
                </Grid.Column>
                <Grid.Column only="mobile" width={12} className="project-card--padding-mobile">
                  <HeaderStar
                    project={project}
                    size="small"
                    logged={logged}
                    addToFavorite={addToFavorite}
                    removeFromFavorite={removeFromFavorite}
                  />
                </Grid.Column>
                <Grid.Column only="computer" width={16}>
                  <HeaderStar
                    project={project}
                    size="small"
                    logged={logged}
                    addToFavorite={addToFavorite}
                    removeFromFavorite={removeFromFavorite}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <p className="project-card--marged-top"><Image avatar spaced="right" src={`${project.author.avatar}`} />{`${project.author.name}`}</p>
            <Segment basic compact>{`${project.description}`}</Segment>
            <p><Icon name="target" />{`${project.location}`}</p>
            <Divider />
            <Label.Group>
              <Label basic icon="star" content={`${project.followers.length}`} />
              <Label basic content="Créé le" detail={`${project.creation_date}`} />
              <Label basic content="Expire le" detail={`${project.expiration_date}`} />
              <Label as="a" basic href={`mailto:${project.author.email}`} content={`${project.author.email}`} icon="mail" />
            </Label.Group>
            <Progress value={checkCount} total={project.needs.length} size="small" indicating content="Couverture des besoins" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

// == PROP TYPES
ProjectCard.propTypes = {
  logged: PropTypes.bool.isRequired,
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    isArchived: PropTypes.bool.isRequired,
    isAuthor: PropTypes.bool.isRequired,
    followers: PropTypes.arrayOf(
      shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }),
    ).isRequired,
    needs: PropTypes.arrayOf(
      shape({
        id: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
      }),
    ).isRequired,
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
  addToFavorite: PropTypes.func.isRequired,
  removeFromFavorite: PropTypes.func.isRequired,
};
// == Export
export default ProjectCard;
