
import Notifications from "./Components/Notifications"
import Navigation from "./Components/Navigation"
import AppNotification from "./Components/AppNotification"
import AppCard from "./Components/AppCard"

function App() {
  return (
    <>
    <div className="py-5 mx-5">
      <Notifications />
      <Navigation />
      <AppNotification />
      <AppCard />
    </div>
    </>
  )
}

export default App
