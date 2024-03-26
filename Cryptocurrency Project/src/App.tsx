import { RouterProvider } from "react-router-dom"
import { LoadingProvider } from "./context/loading/loadingContext"
import { router } from "./routes"

function App() {

  return (
    <LoadingProvider>
      <RouterProvider router={router} />
    </LoadingProvider>
    )
}

export default App
