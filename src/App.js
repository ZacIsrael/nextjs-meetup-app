// React 6
import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";
import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";
 
function App() {
  return (
    <Layout>
      {/* <MainNavigation /> */}
      {/* Routers */}
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupPage />}/>
        <Route path="/favorites" element={<FavoritesPage />}/>
      </Routes>
    </Layout>
  );
}

export default App;

//React 5 below

// import { Route, Switch } from "react-router-dom";
// import AllMeetupsPage from "./pages/AllMeetups";
// import FavoritesPage from "./pages/Favorites";
// import NewMeetupPage from "./pages/NewMeetup";
 
// function App() {
//   return (
//     <div>
//       <Switch>
//         <Route path='/' exact> <AllMeetupsPage /> </Route>
//         <Route path='/new-meetup'> <NewMeetupPage/> </Route> 
//         <Route path='/favorites'> <FavoritesPage /> </Route> 
//       </Switch>
//     </div>
//   );
// }

// export default App;