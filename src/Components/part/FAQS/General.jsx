import React from "react";
import "../../Style/faqs.css";
import { QAN } from "../../../data/academic_faq";

export default function General() {
  return (
    <div className="box">
      <div className="faqs_heading">General FAQs</div>
      <div>
        <div className="questio_diff" />
        {QAN.map((data, index) => {
          return (
            <div>
              <details>
                <summary>
                  Q.{data.id} {data.question}
                </summary>
                <div className="qan">A. {data.answer}</div>
              </details>
              <div className="questio_diff" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
