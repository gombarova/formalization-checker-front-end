import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import Proposition from './Proposition';
import {
  addNewProposition,
  selectPropositions
} from '../redux/newExerciseSlice';

function PropositionsSection({ propositions, add }) {
  const propositions_list = propositions.map((x, i) => (
    <Proposition key={i} i={i} />
  ));

  return (
    <div className="mt-3 mb-4 clearfix">
      <h2>Propositions</h2>
      {propositions_list}
      <Button
        className="mt-2 float-right"
        variant="primary"
        size="sm"
        onClick={() => add()}
      >
        Add proposition
      </Button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    propositions: selectPropositions(state)
  };
};

const mapDispatchToProps = { add: addNewProposition };

export default connect(mapStateToProps, mapDispatchToProps)(PropositionsSection);
