import Countdown from "./components/countdown";
import EventTimeline from "./components/eventTimeline";
import Footer from "./components/footer";
import HeroImage from "./components/heroImage";
import Introduction from "./components/introduction";
import SpecialRequests from "./components/specialRequests";

function App() {
  return (
    <>
      <HeroImage />
      <Introduction />
      <Countdown date="06/22/2022, 23:59:59" />
      <EventTimeline />
      <SpecialRequests />
      <Footer />
    </>
  );
}

export default App;
