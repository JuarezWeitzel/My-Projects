import { LoadingProvider } from "./context/loading/loadingContext"
import RoutesComponent from "./routes"

function App() {

  return (
    <LoadingProvider>
      <RoutesComponent/>
    </LoadingProvider>
    )
}

export default App
