import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from "./home";
import NotFound from "./notFound";

import Comic from "./comic";
import Comics from "./comics";
import ComicStories from "./comic/comicStories";
import Characters from "./characters";
import Character from "./character";
import CharacterStories from "./character/characterStories";
import Stories from "./stories";
import Story from "./story";
import StoryComics from "./story/storyComics";

export default () => (
  <Switch>

    <Route exact path="/home" component={Home}></Route>

    <Route path="/characters">
      <Switch>
        <Route exact path="/characters" component={Characters} />
        <Route exact path="/characters/:id" component={Character} />        
        <Route exact path="/characters/:id/stories" component={CharacterStories} />
      </Switch>
    </Route>

    <Route path="/comics">
      <Switch>
        <Route exact path="/comics" component={Comics} />
        <Route exact path="/comics/:id" component={Comic} />
        <Route exact path="/comics/:id/stories" component={ComicStories} />
      </Switch>
    </Route>

    <Route path="/stories">
      <Switch>
        <Route exact path="/stories" component={Stories} />
        <Route exact path="/stories/:id" component={Story} />        
        <Route path="/stories/:id/comics" component={StoryComics} />
      </Switch>
    </Route>

    <Route>
      <div className="text-center">
        <NotFound />
      </div>
    </Route>
  </Switch>
);
