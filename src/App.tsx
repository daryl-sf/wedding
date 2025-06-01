import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PhotoGallery from "./PhotoGallery";
import Home from "./Home";
import ErrorPage from "./Error";

const router = createBrowserRouter([
  {
    path: "/photos",
    element: <PhotoGallery />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
