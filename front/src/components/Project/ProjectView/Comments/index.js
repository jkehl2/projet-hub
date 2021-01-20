// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == IMPORTS COMPOSANTS
import {
  Button, Comment, Form, Header,
} from 'semantic-ui-react';

// == IMPORTS CONTAINERS

// == STYLES
import './comments.scss';

// == Composant
const Comments = ({ isArchived }) => (
  <Comment.Group>
    <Header as="h1" dividing>Commentaires</Header>
    <Comment>
      <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
      <Comment.Content>
        <Comment.Author as="h2">Matt</Comment.Author>
        <Comment.Metadata>
          <div>Today at 5:42PM</div>
        </Comment.Metadata>
        <Comment.Text>How artistic!</Comment.Text>
      </Comment.Content>
    </Comment>
    <Comment>
      <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/joe.jpg" />
      <Comment.Content>
        <Comment.Author as="h2">Joe Henderson</Comment.Author>
        <Comment.Metadata>
          <div>5 days ago</div>
        </Comment.Metadata>
        <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
      </Comment.Content>
    </Comment>
    {!isArchived && (
    <Form reply>
      <Form.TextArea />
      <Button content="Add Reply" labelPosition="left" icon="edit" primary />
    </Form>
    )}
  </Comment.Group>
);

// == PROP TYPES
Comments.propTypes = {
  isArchived: PropTypes.bool.isRequired,
};

// == Export
export default Comments;
