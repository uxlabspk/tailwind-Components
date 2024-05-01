
import Notifications from "./Components/Notifications"
import Navigation from "./Components/Navigation"
import AppNotification from "./Components/AppNotification"

function App() {
  return (
    <>
    <div className="flex flex-col items-center justify-center h-screen">
      <Notifications />
      <Navigation />
      <AppNotification />
    </div>
    </>
  )
}

export default App
