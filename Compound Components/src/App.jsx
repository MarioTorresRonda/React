import Accordion from "./components/Accordion/Accordion";
import SearchableList from "./components/SearchableList/SearchableList";

import savannaImg from './assets/african-savanna.jpg';
import amazonImg from './assets/amazon-river.jpg';
import caribbeanImg from './assets/caribbean-beach.jpg';
import desertImg from './assets/desert-dunes.jpg';
import forestImg from './assets/forest-waterfall.jpg';
import Place from "./components/SearchableList/Place";

const PLACES = [
  {
    id: 'african-savanna',
    image: savannaImg,
    title: 'African Savanna',
    description: 'Experience the beauty of nature.',
  },
  {
    id: 'amazon-river',
    image: amazonImg,
    title: 'Amazon River',
    description: 'Get to know the largest river in the world.',
  },
  {
    id: 'caribbean-beach',
    image: caribbeanImg,
    title: 'Caribbean Beach',
    description: 'Enjoy the sun and the beach.',
  },
  {
    id: 'desert-dunes',
    image: desertImg,
    title: 'Desert Dunes',
    description: 'Discover the desert life.',
  },
  {
    id: 'forest-waterfall',
    image: forestImg,
    title: 'Forest Waterfall',
    description: 'Listen to the sound of the water.',
  },
];

function App() {
  return (
    <>
      <h1>React Patterns & Practices</h1>
      <main>
        <section>
          <h2> Why work with us?</h2>
          <Accordion className="accordion">
            <Accordion.Item className="accordion-item" id="experience">
              <Accordion.Title>We got 20 years of exprience</Accordion.Title>
              <Accordion.Content className="accordion-item-content">
                <article>
                  <p>You can't go wrong with us</p>
                  <p>
                    We are in the business of planning hightly individualized
                    vacation trips
                  </p>
                </article>
              </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item className="accordion-item" id="localguides">
              <Accordion.Title>We're working with local guides</Accordion.Title>
              <Accordion.Content className="accordion-item-content">
                <article>
                  <p>You can't go wrong with us</p>
                  <p>
                    We are in the business of planning hightly individualized
                    vacation trips
                  </p>
                </article>
              </Accordion.Content>
            </Accordion.Item>
          </Accordion>
        </section>
        <section>
          <SearchableList items={PLACES} itemKeyFn={(item) => item.id}>
            {(item) => <Place item={item}></Place>}
          </SearchableList>
          <SearchableList items={['item1', 'item2']} itemKeyFn={(item) => item}>
            {(item) => item}
          </SearchableList>
        </section>
      </main>
    </>
  );
}

export default App;
