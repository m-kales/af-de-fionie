import React from "react";
import FaceBook from "../assets/facebook-alt.svg";
import config from "../lib/config";

export function SocialList({}) {
  return (
    <div>
      <a
        title="Facebook"
        href={`https://facebook.com/${config.facebook_account}`}
        target="_blank"
        rel="noopener"
      >
        <FaceBook width={24} height={24} fill={"#222"} />
      </a>
      <style jsx>{`
        a {
          display: inline-block;
        }
        a:not(:last-child) {
          margin-right: 2em;
        }
      `}</style>
    </div>
  );
}
