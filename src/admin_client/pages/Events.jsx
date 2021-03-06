import path from 'path';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import classnames from 'classnames';
import asyncComponent from '../../client/hoc/asyncComponent';
import TextDisplay from '../components/displayFields/TextDisplay';
import BooleanDisplay from '../components/displayFields/BooleanDisplay';
import DateDisplay from '../components/displayFields/DateDisplay';
import TextField from '../components/editFields/TextField';
import DateField from '../components/editFields/DateField';
import BooleanField from '../components/editFields/BooleanField';

const EventDisplay = ({ datum, ...props }) => (
  <div className="card" {...props}>
    <div className={classnames('card-body', {
      'text-secondary': !datum.published,
    })}>
      <h5 className="card-title">{datum.title}</h5>
      <h6 className="card-subtitle mb-2 text-muted">
        {datum.startDate ? <DateDisplay value={datum.startDate} /> : null}
        {datum.endDate ? ' - ' : null}
        {datum.endDate ? <DateDisplay value={datum.endDate} /> : null}
      </h6>
      <p className="card-text">{datum.content}</p>
      <a href={datum.link} className="card-link">{datum.link}</a>
      {datum.expiration ?
        <p className="card-text">
          <small className="text-muted">Expires <DateDisplay value={datum.expiration} /></small>
        </p>
      : null}
    </div>
  </div>
);

EventDisplay.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  datum: PropTypes.object.isRequired,
};

const EventDisplayWrapper = ({ children }) => <div className="card-columns">{children}</div>;

EventDisplayWrapper.propTypes = {
  children: PropTypes.node,
};

EventDisplayWrapper.defaultProps = {
  children: null,
};

export default class Events extends Component {
  componentWillMount() {
    this.ModelPage = asyncComponent(path.resolve(__dirname, './ModelPage'), () => import('./ModelPage'));
  }

  render() {
    return (
      <this.ModelPage
        modelName="Event"
        sort={(a, b) => moment(a.startDate) - moment(b.startDate)}
        modelFields={[
          {
            key: 'published',
            initialSize: '5%',
            displayComponent: BooleanDisplay,
            editorComponent: BooleanField,
          },
          {
            key: 'title',
            initialSize: '15%',
            displayComponent: TextDisplay,
            editorComponent: TextField,
          },
          {
            key: 'content',
            initialSize: '20%',
            displayComponent: TextDisplay,
            editorComponent: TextField,
          },
          {
            key: 'link',
            initialSize: '15%',
            displayComponent: TextDisplay,
            editorComponent: TextField,
          },
          {
            key: 'startDate',
            initialSize: '15%',
            displayComponent: DateDisplay,
            editorComponent: DateField,
          },
          {
            key: 'endDate',
            initialSize: '15%',
            displayComponent: DateDisplay,
            editorComponent: DateField,
          },
          {
            key: 'expiration',
            initialSize: '15%',
            displayComponent: DateDisplay,
            editorComponent: DateField,
          },
        ]}
        ModelDisplayWrapper={EventDisplayWrapper}
        ModelDisplay={EventDisplay}
      />
    );
  }
}
