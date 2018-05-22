import { shallow } from 'enzyme';
import React, { Component } from 'react';
import { compose } from 'redux';

import shallowUntilTarget from '../testHelpers/shallowUntilTarget';

describe('shallowUntilTarget', () => {
  function ExampleBase() {
    return <div>Example component</div>;
  }

  function wrapper() {
    return function Wrapper(WrappedComponent) {
      return function InnerWrapper(props) {
        return <WrappedComponent {...props} />;
      };
    };
  }

  it('requires a componentInstance', () => {
    expect(() => shallowUntilTarget(undefined, ExampleBase))
      .toThrow('componentInstance parameter is required');
  });

  it('requires a valid component instance', () => {
    expect(() => {
      shallowUntilTarget({ notAComponent: true }, ExampleBase);
    }).toThrow(/Invalid component element/);
  });

  it('requires a TargetComponent', () => {
    const Example = compose(
      wrapper(),
    )(ExampleBase);

    expect(() => shallowUntilTarget(<Example />, undefined))
      .toThrow('TargetComponent parameter is required');
  });

  it('lets you unwrap a component one level', () => {
    const Example = compose(
      wrapper(),
    )(ExampleBase);

    const root = shallowUntilTarget(<Example />, ExampleBase);
    expect(root.text()).toEqual('Example component');
  });

  it('lets you unwrap a component two levels', () => {
    const Example = compose(
      wrapper(),
      wrapper(),
    )(ExampleBase);

    const root = shallowUntilTarget(<Example />, ExampleBase);
    expect(root.text()).toEqual('Example component');
  });

  it('lets you unwrap a React class based component', () => {
    class ReactExampleBase extends Component {
      render() {
        return <div>example of class based component</div>;
      }
    }

    const Example = compose(
      wrapper(),
    )(ReactExampleBase);

    const root = shallowUntilTarget(<Example />, ReactExampleBase);
    expect(root.instance()).toBeInstanceOf(ReactExampleBase);
  });

  it('does not let you unwrap a component that is not wrapped', () => {
    expect(() => {
      shallowUntilTarget(<ExampleBase />, ExampleBase);
    }).toThrow(/Cannot unwrap this component because it is not wrapped/);
  });

  it('gives up trying to unwrap component after maxTries', () => {
    const Example = compose(
      wrapper(),
      wrapper(),
      wrapper(),
    )(ExampleBase);

    expect(() => {
      shallowUntilTarget(<Example />, ExampleBase, {
        maxTries: 2,
      });
    }).toThrow(/Could not find .*gave up after 2 tries/);
  });

  it('lets you pass options to shallow()', () => {
    const shallowStub = jest.fn(shallow);

    const Example = compose(
      wrapper(),
    )(ExampleBase);

    const shallowOptions = {
      lifecycleExperimental: true,
    };
    const instance = <Example />;
    shallowUntilTarget(instance, ExampleBase, {
      shallowOptions, _shallow: shallowStub,
    });

    expect(shallowStub).toBeCalledWith(instance, shallowOptions);
  });

  it('lets you pass options to the final shallow()', () => {
    const componentDidUpdate = jest.fn();

    class LifecyleExample extends Component {
      componentDidUpdate() {
        componentDidUpdate();
      }

      render() {
        return <div>example of using lifecycle methods</div>;
      }
    }

    const Example = compose(
      wrapper(),
    )(LifecyleExample);

    const root = shallowUntilTarget(<Example />, LifecyleExample, {
      shallowOptions: {
        lifecycleExperimental: true,
      },
    });
    root.setProps({ something: 'else' });

    expect(componentDidUpdate).toBeCalled();
  });
});
