import HomePage from "./pages/Home";
import SearchPage from "./pages/Search";
import PetDetailsPage from "./pages/Detail";
import PetDetailsNotFound from "./pages/PetDetailsNotFound";
import Root from "./components/Root";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<HomePage />} />
      <Route path=":type" element={<HomePage />} />
      <Route path=":type/:id" element={<PetDetailsPage />} />
      <Route path="search" element={<SearchPage />} />
      <Route path="pet-details-not-found" element={<PetDetailsNotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
