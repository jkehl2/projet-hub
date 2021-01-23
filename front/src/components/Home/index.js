// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == IMPORTS CONTAINERS
import SearchProjects from 'src/containers/SearchProjects';
// == IMPORTS COMPOSANTS
import {
  Container,
} from 'semantic-ui-react';
import HeaderHome from './HeaderHome';
import DescriptionHome from './DescriptionHome';

// == STYLES
import './home.scss';

// == Composant
const Home = ({cleanAppParams}) => {
  useEffect(()=>()=>{cleanAppParams();},[]);
  return (
  <Container className="home">
    {/** Page top with pictures */}
    <HeaderHome />

    {/** Page header with Local Hub presentation */}
    <DescriptionHome />

    {/** Search Bar */}
    <SearchProjects />
  </Container>
)};

Home.propTypes = {
  cleanAppParams: PropTypes.func.isRequired,
};

// == Export
export default Home;
