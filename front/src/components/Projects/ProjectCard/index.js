// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == IMPORTS COMPOSANTS
import {
  Grid, Header, Segment, Image, Label, Icon, Divider,
} from 'semantic-ui-react';

// == Composant
const ProjectCard = ({ project }) => (
  <Segment>
    { project.isArchived && <Label color="blue" corner="right" icon="archive" size="big"/> }
    <Grid divided stretched stackable padded="vertically">
      <Grid.Row only="mobile">
        <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
      </Grid.Row>
      <Grid.Row>
        <Grid.Column computer={3} only="computer">
          <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
        </Grid.Column>
        <Grid.Column computer={13} mobile={16}>
          <Header as="h3">
            {!project.isAuthor && (project.isFavorite ? <Icon name="star" color="yellow" /> : <Icon name="star outline" color="yellow" />)}
            <Header.Content>{`${project.title} `}</Header.Content>
          </Header>
          <p><Image avatar spaced="right" src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />{`${project.author}`}</p>
          <p><Icon name="target" />{`${project.adress}`}</p>
          <Divider />
          <Label.Group>
            <Label basic color="green" content="Créé le" detail={`${project.createDate}`} />
            <Label basic color="red" content="Expire le" detail={`${project.expireDate}`} />
            <Label as="a" basic href={`mailto:${project.authorEmail}`} content={`${project.authorEmail}`} icon="mail" />
          </Label.Group>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
);

// == PROP TYPES
ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    authorEmail: PropTypes.string.isRequired,
    expireDate: PropTypes.string.isRequired,
    createDate: PropTypes.string.isRequired,
    isAuthor: PropTypes.bool.isRequired,
    adress: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    isArchived: PropTypes.bool.isRequired,
  }).isRequired,
};
// == Export
export default ProjectCard;
