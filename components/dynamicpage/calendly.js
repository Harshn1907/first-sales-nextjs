import React from "react";
// import Calendar from "react-calendar";
// import PopupWidget from "react-calendly";
import  PopupWidget from "react-calendly";

const calendly = () => {
  return (
    <div>
    {/* <Calendar/> */}
    <div PopupWidget
      url="https://calendly.com/your_scheduling_page"
      /*
       * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
       * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
       */
      rootElement={document.getElementById("root")}
      text="Click here to Book Demo!"
      textColor="#ffffff"
      color="#00a2ff"
    />
    
    </div>
    //calendy-app.js
    

  );
};

export default calendly

// import React from "react";

// https://calendly.com/harshnigam19/30min


// import { InlineWidget, CalendlyEventListener } from "react-calendly";
// const toggleButton = () => {
//   console.log("button");
// };

// const CalendlyIframe = () => {
//   return (
//     <CalendlyEventListener onEventScheduled={toggleButton}>
//       <InlineWidget
//         pageSettings={{
//           hideEventTypeDetails: true
//         }}
//         styles={{ width: "100%", height: "700px" }}
//         url="https://calendly.com/barmertherp2/intro-call"
//         prefill={{
//           email: "3mail",
//           name: "name"
//         }}
//         utm={{
//           utmTerm: "userid",
//           utmContent: "content"
//         }}
//       />
//     </CalendlyEventListener>
//   );
// };

// export default CalendlyIframe;
