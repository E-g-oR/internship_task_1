import React, { useState } from 'react';
import { makeAutoObservable } from 'mobx';
import { postType } from './components/ui/Post/Post';

import AllCardsContainer from './components/AllCardsContainer/AllCardsContainer';
import FavoriteCardsContainer from './components/FavoriteCardsContainer/FavoriteCardsContainer';
import CardDetails from './components/CardDetails/CardDetails';
import { Button } from './components/ui/Button/Button';
import { NewPostForm } from './components/NewPostForm/NewPostForm';

import './App.scss';

export interface IStore {
  allPosts: postType[],
  getPosts: () => void,
  putPosts: (data: postType[]) => void,
  togglePost: (id: number) => void,
  addNewPost: (newPost: postType) => void
}

class PostsStore {
  allPosts: postType[] = []
  constructor() {
    makeAutoObservable(this)
  }
  getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(resp => resp.json())
      .then((data: postType[]) => this.putPosts(data))
  }

  putPosts(data: postType[]) {
    this.allPosts = data
  }

  togglePost(id: number) {
    this.allPosts.map(post => post.id === id ? post.isFavorite = !post.isFavorite : post)
  }

  addNewPost(newPost: postType) {
    this.allPosts.unshift(newPost)
  }
}
const store = new PostsStore()

const App = () => {
  const [isModalActive, setIsModalActive] = useState<boolean>(false)
  const showPopup = () => setIsModalActive(true)

  return (
    <div className="app" data-testid="app">
      <Button text="add new post" type="button" onClick={showPopup} styles="indigo darken-3" btnType="btn" />
      {/* <Counter counter={myCounter} /> */}
      <div className="app__containers">
        <AllCardsContainer store={store} />
        <FavoriteCardsContainer store={store} />
        <CardDetails />
      </div>
      <NewPostForm store={store} isActive={isModalActive} setIsActive={setIsModalActive} />
    </div>
  );
}

export default App;
