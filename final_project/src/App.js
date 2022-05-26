import { UserContextProvider } from "./context/UserInfo";
import RoutesPath from "./Routes";


function App() {
  return (
    <>
    <UserContextProvider>
    <RoutesPath />
    </UserContextProvider>
    </>
  );
}

export default App;
