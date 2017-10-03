import React from 'react';
import Link from 'react-router-dom/Link';
import { renderRoutes } from 'react-router-config';
import Head from '../../client/components/Head';
import Navbar from '../../client/components/Navbar';
const styles = (typeof CSS !== 'undefined') && require('./AdminTemplate.css');

const MainTemplate = ({route}) => {
  return (
    <div>
      <Head />
      <Navbar
        brand={
          <Link to="/">
            <h1 className="sr-only">Grace Covenant Church Admin Panel</h1>
            <img src="/static/images/gcclogo.jpg" />
          </Link>
        }
        links = {[
          <Link to="/announcements">Announcements</Link>,
          <a href="/logout">Log Out</a>,
        ]}
      />
      <main>{renderRoutes(route.routes)}</main>
      <footer>
        <div className="container">
          <p>&copy; Grace Covenant Church</p>
        </div>
      </footer>
    </div>
  );
};

export default MainTemplate;
