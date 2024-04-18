
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Body from './Components/Body';
import Head from './Components/Head';
import store from './Components/utils/Store';
import { Provider } from 'react-redux';
import MainContainer from './Components/MainContainer'
import WatchPage from './Components/WatchPage';

function App() {
   const appRouter=createBrowserRouter([
    {
      path:"/",
      element: <Body/>,
      children:[
        {
          path:"/",
          element: <MainContainer/>
        },
        {
          path:"/watch",
          element: <WatchPage/>
        }

      ]
    }
   ])




  return (
   <Provider store={store}>
   <div className='text-3xl font-bold'>
    
    <Head/>
    <RouterProvider router={appRouter}/>
    
   </div>
   </Provider>
  );
}

export default App;
