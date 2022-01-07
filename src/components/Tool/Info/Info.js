import React from "react";
import check from "../../../assets/check.svg";
import "./Info.css";

function Info() {
  return (
    <>
      <span className="tool-title">Work faster with powerful tools.</span>
      <ul>
        <li>
          <img src={check} className="check" alt="" />
          <p>
            Combined with a handful of model sentence structures looks
            reasonable.
          </p>
        </li>
        <li>
          <img src={check} className="check" alt="" />
          <p>
            Contrary to popular belief, Lorem ipsum is not simply randomtext.
          </p>
        </li>
        <li>
          <img src={check} className="check" alt="" />
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium.
          </p>
        </li>

        <li>
          <img src={check} className="check" alt="" />
          <p>
            Natus error sit voluptatem unde omnis iste natus error sit
            volupatatem accusantium.
          </p>
        </li>
        <li>
          <img src={check} className="check" alt="" />
          <p>
            All the Lorem Ipsum generators on the Internet tend to repeat
            necessary.
          </p>
        </li>
      </ul>
    </>
  );
}

export default Info;
