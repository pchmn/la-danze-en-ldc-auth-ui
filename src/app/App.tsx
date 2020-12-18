import React from 'react';
import { Redirect } from "react-router-dom";
import './App.scss';
import { withInitApp } from './core/initApp/withInitApp';
import { Auth } from './features/Auth/Auth';
import Home from './features/Home/Home';
import { useAnimatedRouter } from './shared/AnimatedRouter/AnimatedRouter.hooks';
import { AnimatedRoute, AnimatedSwitch } from './shared/AnimatedRouter/RouteTransition';


function AppComponent() {
  const { switchKey } = useAnimatedRouter();

  return (
    <AnimatedSwitch switchKey={switchKey}>
      <AnimatedRoute path="/(signin|signup)" fullHeight={true}>
        <Auth />
      </AnimatedRoute>
      <AnimatedRoute path="/(my-account|settings)" fullHeight={true}>
        <Home />
      </AnimatedRoute>
      <AnimatedRoute exact path="/">
        <Redirect to="/my-account" />
      </AnimatedRoute>
    </AnimatedSwitch>
  );
}


export default withInitApp(AppComponent) as React.ElementType;