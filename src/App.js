import logo from './logo.svg';
import './App.css';
import PostList from './features/posts/PostList';
import {store} from "../src/app/store"
import AddPostForm from './features/posts/AddPostForm';
import { fetchUsers } from './features/users/usersSlice';

store.dispatch(fetchUsers())

function App() {
  return (
    <div className="App">
      <AddPostForm/>
      <PostList/>
    </div>
  );
}

export default App;
