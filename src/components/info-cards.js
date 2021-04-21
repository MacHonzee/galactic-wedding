import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import InfoCard from "./info-card";
import Corona from "../assets/corona.jpg";

function Covid19() {
  return (
    <InfoCard header={"COVID-19 varování"} img={Corona}>
      <Card.Text>
        Vzhledem k nestále situaci a počtu hostů si vás dovolujeme upozornit, že
        se datum svatby ještě může změnit. O finálním termínu bychom však měli
        mít rozhodnuto nejpozději v půlce května.
      </Card.Text>
      <Card.Text>
        Na celé svatbě budou samozřejmě dodržována platná pravidla a hygienická
        doporučení, testy budou nepovinné.
      </Card.Text>
    </InfoCard>
  );
}

function Accomodation() {
  return (
    <InfoCard header={"Ubytování"}>
      <Card.Text>
        Ubytování je možné v penzionech či hotelech v okolí v Lázních Libverda,
        vše je krásně dostupné pěšky. Nebo ve stanu na louce. Nebo se jen tak
        vyvalit na louku a doufat, že nezaprší.
      </Card.Text>
      <Card.Text>
        Pro méně odvážné a nedůvěřivé červnovému počasí lze využít například
        tyto penziony:
      </Card.Text>
      <ul>
        <li>
          <Card.Link href={"http://www.piktych.cz/"}>Chata Piktych</Card.Link>
        </li>
        <li>
          <Card.Link href={"https://areal-vzlet.cz/"}>Areál Vzlet</Card.Link>
        </li>
      </ul>
    </InfoCard>
  );
}

function FoodAndDrinks() {
  return (
    <InfoCard header={"Občerstvení a nápoje"}>
      <Card.Text>
        Během dne, večera a noci se o vás bude starat veganský catering{" "}
        <Card.Link href={"https://www.greenleaves.cz/"} target={"_blank"}>
          Green Leaves
        </Card.Link>
        .
      </Card.Text>
      <Card.Text>
        K dispozici tedy bude raut se slaným i sladkým občerstvením, hlavní
        jídlo, snacky, dezerty i dorty budou zajištěny.
      </Card.Text>
      <Card.Text>
        Samozřejmostí jsou i nápoje. Pivo, víno, nealko zajištěno a hrazeno.
        Pokud chcete pít panáky, doneste si prosím vlastní zásoby. Nejde o
        restauraci, nebude to tedy problém.
      </Card.Text>
    </InfoCard>
  );
}

function GalacticTheme() {
  return (
    <InfoCard header={"Galaktické téma"}>
      <Card.Text>
        Celá svatba bude laděna do galaktického stylu a bude neformální, friday
        casual.
      </Card.Text>
      <Card.Text>
        Čekejte světélka, hvězdné koruny, blikající kšandy, možná i kostýmy a
        masky. Neklademe žádné hranice kreativitě, i Stormtroopeři jsou vítáni.
      </Card.Text>
    </InfoCard>
  );
}

function Dresscode() {
  return (
    <InfoCard header={"Dresscode"}>
      <Card.Text>
        Neformální styl, preferované barvy jako galaxie - černá, fialová, modrá,
        růžová, hvězdičková, stříbrná.
      </Card.Text>
      <Card.Text>
        Konzervatitní varianta jsou kalhoty, košile a VANSky, nebo sukně a
        Conversky.
      </Card.Text>
      <Card.Text>
        Vítaná varianta jsou tykadla, svítící bambule, světelný meč nebo helma
        Stormtroopera.
      </Card.Text>
    </InfoCard>
  );
}

function WeddingGift() {
  return (
    <InfoCard header={"Svatební dar"}>
      <Card.Text>
        Nenoste nám prosím věcné a jiné hmotné dary (leda tekuté). Oceníme
        mnohem více klidný průběh svatby a bujarou veselku, než odnášet domů 10
        kávovarů a 500 talířů.
      </Card.Text>
      <Card.Text>Prachy jsou ale ok 😁 💲 💲 💲</Card.Text>
    </InfoCard>
  );
}

function InfoCards() {
  return (
    <div id={"info"}>
      <Row className={"justify-content-center"}>
        <Covid19 />
        <Accomodation />
        <FoodAndDrinks />
      </Row>
      <Row className={"justify-content-center"}>
        <GalacticTheme />
        <Dresscode />
        <WeddingGift />
      </Row>
    </div>
  );
}

export default InfoCards;
