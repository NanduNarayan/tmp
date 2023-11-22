import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './redux/reducer'
import initialState from './redux/initialState';
//Router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
//styling
import './App.css';
import { WelcomePage } from "./routes/WelcomePage";
import  TaskPage  from './routes/TaskPage';

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  preloadedState: initialState,
})


const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,

  },
  {
    path: "/tasks/:taskTitle",
    element: <TaskPage />,
  }
])



function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
