import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import { SocialList } from "../components/SocialList";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />

      <div className="container">
        <div>
          <h2>Bliv medlem</h2>
          <p>Hvis du har lyst til at blive medlem, kan du henvende dig til formand eller kasserer i Alliance
            Française:</p>
          <p>Formand: Helle Andersen, tlf. 23928154, mail: <a href="mailto:helle@helandcom.dk">helle@helandcom.dk</a></p>
          <p>Kasserer: Carsten Rosendal, mail: <a href="mailto:c.rosendal@mail.tele.dk">c.rosendal@mail.tele.dk</a></p>
          <span>Kontingent:</span>
          <ul>
              <li>200 kr årligt</li>
              <li>Studerende: gratis</li>
              <li>Par: 240 kr</li>
              <li>Institutioner, firmaer: 400 kr.</li>
          </ul>
          <SocialList />
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          padding: 0 1.5rem;
          max-width: 72ch;
        }
        h1 {
          font-size: 2.5rem;
          margin: 0;
          font-weight: 500;
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.25;
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </Layout>
  );
}
