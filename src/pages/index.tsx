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
          <div className="hero" title="Photo by Antony BEC on unsplash.com">
            <h1>
              Alliance Française <br />
              de Fionie.
            </h1>
          </div>
          <h2>Formål — hvem er vi?</h2>
          <p>Der findes uafhængige afdelinger af Alliance Française over hele verden. Vi arbejder alle med at
          fremme fransk kultur og sprog, og i nogle lande står alliancerne også for undervisning i det franske
          sprog.</p>
          <p>
          Foreningen har hjemsted i Odense, men kommer gerne rundt på Fyn med foredrag mv., hvis der er
          mulighed for det. Via foredrag, koncerter og andre arrangementer prøver vi at udbrede
          kendskabet til Frankrig, det franske sprog og ikke mindst den franske kultur - og kulturen i andre
          fransksprogede lande. Vi arbejder med kultur i bred forstand, fra sprog, litteratur, kunst og musik
          til samfundsforhold, historie og det franske erhvervsliv. Også emner som mode, vin og mad kan
          være at finde i vores program. Vi har jævnligt besøg af danske og franske kunstnere og
          kulturpersonligheder. Vi tilbyder ikke sprogundervisning, da det i Danmark hører under
          oplysningsforbundene.
          </p>
          <SocialList />
        </div>
      </div>
      <style jsx>{`
        .hero {
          padding: 3rem 0;
          background-image: url('images/antony-bec-nD9tEn63suc-unsplash_medium.jpg');
          background-position: center;
          background-size: cover;
        }
        h1 {
          font-size: 2.5rem;
          margin: 0;
          color: LavenderBlush;
          margin-left: 1rem;
          margin-right: 1rem;
          margin-top: 1rem;
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.25;
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 4rem;
          }
          h2 {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </Layout>
  );
}
