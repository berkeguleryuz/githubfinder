import Navbar from "./components/Navbar";
import UserList from "./components/UserList";
import Search from "./components/Search";
import Alert from "./components/Alert";
import UsersContextProvider from "./context/usersContext";
import AlertContextProvider from "./context/alertContext";

// 

const App = () => {

    return (
    <UsersContextProvider>
      <AlertContextProvider>
          <Navbar />
          <Search />
          <Alert />
          <UserList/>
      </AlertContextProvider>
    </UsersContextProvider>
    )
    }

export default App