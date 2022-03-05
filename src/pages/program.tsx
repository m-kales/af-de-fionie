import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import Link from "next/link";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />

      <div className="container">
        <div>
          <h2>Program</h2>
          <ul>
            <li>
              <Link href="/pdf/af-foraar-2020-v2.pdf">
                <a>Forår 2020</a>
              </Link>
            </li>
            <li>
              <Link href="/pdf/af-efteraar-2020-v5.pdf">
                <a>Efterår 2020</a>
              </Link>
            </li>
            <li>
              <Link href="/pdf/af-foraar-2021-v5.pdf">
                <a>Forår 2021</a>
              </Link>
            </li>
            <li>
              <Link href="/pdf/af-efteraar-2021-v3.pdf">
                <a>Efterår 2021</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>{`
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

        li {
          list-style: none;
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
