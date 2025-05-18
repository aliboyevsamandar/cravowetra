import Service from "../components/Service";
import About from "../components/About";
import Menu from "../components/Menu";
import Reservation from "../components/Service";
import Team from "../components/Team";
import IndexMain from "../components/IndexMain";

export default function Index() {
  return (
    <div>
      <IndexMain />
      <Service />
      <About />
      <Menu />
      <Reservation />
      <Team />
    </div>
  );
}
