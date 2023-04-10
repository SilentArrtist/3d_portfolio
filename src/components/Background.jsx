
import "../background.scss";

const Background = ({ blobRef }) => {
  return (
    <div id="background">
      <div ref={blobRef} id="blob"></div>
      <div id="blur"></div>
    </div>
  );
};

export default Background;
