import React from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/Link';
import { renderRoutes } from 'react-router-config';
import Head from '../components/Head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import './MainTemplate.css';
import navStyles from '../components/Navbar.css';

const MainTemplate = ({ route }) => (
  <div>
    <Head />
    <Navbar
      brand={
        <Link to="/">
          <h1 className="sr-only">Grace Covenant Church</h1>
          <img id="logo" src="/static/images/gcclogo.png" alt="Grace Covenant Church" />
        </Link>
      }
      links={[
        <Link to="/welcome">I&apos;m New</Link>,
        <Link to="/pages">About</Link>,
        <Link to="/familygroup">Family Groups</Link>,
        <Link to="/ministries">Ministries</Link>,
        <Link to="/page">Giving</Link>,
        <Link to="/pages">Multimedia</Link>,
        <Link to="/pages">Events</Link>,
      ]}
      className={`navbar-transparent navbar-dark ${navStyles['navbar-transparent']}`}
    />
    <main>{renderRoutes(route.routes)}</main>
    <Footer />
  </div>
);

MainTemplate.propTypes = {
  route: PropTypes.shape({
    routes: PropTypes.array,
  }).isRequired,
};

export default MainTemplate;
