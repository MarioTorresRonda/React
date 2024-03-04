import Accordion from "./components/Accordion/Accordion";

function App() {
  return (
    <>
      <h1>React Patterns & Practices</h1>
      <main>
        <section>
          <h2> Why work with us?</h2>
          <Accordion className="accordion">
            <Accordion.Item
              id="experience"
              className="accordion-item"
              title="We got 20 years of exprience"
            >
              <article>
                <p>You can't go wrong with us</p>
                <p>
                  We are in the business of planning hightly individualized
                  vacation trips{" "}
                </p>
              </article>
            </Accordion.Item>
            <Accordion.Item
              id="localguides"
              className="accordion-item"
              title="We're working with local guides"
            >
              <article>
                <p>You can't go wrong with us</p>
                <p>
                  We are in the business of planning hightly individualized
                  vacation trips{" "}
                </p>
              </article>
            </Accordion.Item>
          </Accordion>
        </section>
      </main>
    </>
  );
}

export default App;
