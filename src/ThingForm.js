import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { createThing } from "./store";

const ThingForm = ({ createThing }) => {
  return (
    <div>
      <button onClick={createThing}>+</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createThing: async () => {
      dispatch(createThing({ name: Math.random() }));
    },
  };
};

export default connect(null, mapDispatchToProps)(ThingForm);
