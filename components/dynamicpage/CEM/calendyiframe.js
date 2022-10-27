import React from "react";
import { InlineWidget, CalendlyEventListener } from "react-calendly";

const CalendlyIframe = () => {

  const toggleButton = () => {
    console.log("button");
  };


  return (
    <>
    <CalendlyEventListener onEventScheduled={toggleButton}>
      <InlineWidget
        pageSettings={{
          hideEventTypeDetails: true
        }}
        styles={{ width: "100%", height: "700px" }}
        url="https://calendly.com/barmertherp2/intro-call"
        prefill={{
          email: "3mail",
          name: "name"
        }}
        utm={{
          utmTerm: "userid",
          utmContent: "content"
        }}
      />
    </CalendlyEventListener>
    </>
  );
};

export default CalendlyIframe;
