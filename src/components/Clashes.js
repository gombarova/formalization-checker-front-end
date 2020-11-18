import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import {
  selectLanguage
} from '../redux/languageSlice';

function Clashes(props) {
  return props.error ? (
    <Row className="Clashes">
      <Col>
        <p className="Error">
          {props.error}
        </p>
      </Col>
    </Row>
  )
  : null;
}

const mapStateToProps = (state) => {
  return {
    error: selectLanguage(state).error
  };
};

export default connect(mapStateToProps)(Clashes);