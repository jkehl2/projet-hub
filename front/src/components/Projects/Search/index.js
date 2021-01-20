// == Import npm
import React from 'react';

// == IMPORTS COMPOSANTS
import {
  Container, Header, Button, Form, Grid,
} from 'semantic-ui-react';
// == IMPORTS CONTAINERS

// == STYLES
import './search.scss';

// == Composant
const Search = () => (
  <Container className="search" />
    {/* titre */}
    <Header as="h1">Effectuer une recherche</Header>
      {/* localité search bar*/}
        <FormField>
          <Input action={{ icon: 'search' }} placeholder='Search...' />
        </FormField>
          {/* range */}
            <Grid columns={2}>
              <Grid.Column as={Form}>
                <Form.Input
                  label={`Range: ${distance}km`}
                  min={1}
                  max={10}
                  name='distance'
                  onChange={this.handleChange}
                  step={1}
                  type='range'
                  value={distance}
                  />
                    <Form.Button
                      content={visible ? 'Unmount' : 'Mount'}
                        onClick={this.handleVisibility}
                    />
              </Grid.Column>
            </Grid>
                          {/* button Include archives */}
                            <div>
                              Inclure les projets archivés:
                              <Button toggle active={active} onClick={this.handleClick}>
                                Toggle
                              </Button>
                            </div>
                                {/* bouton valider */}
                                
                                  <Button positive>Valider</Button>
  </Container>
);

// == Export
export default Search;
