import React from "react";
import { Transition } from "react-transition-group";

function WitchTransition(WrappedComponent) {
  return props => (
    <Transition timeout={500}>{state => <WrappedComponent {...props} state={state} />}</Transition>
  );
}

export default WitchTransition;
