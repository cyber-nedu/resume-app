import "./Background.css";

const Background = () => {
  return (
    <div className="background">
      <div className="background-grid"></div>

      <div className="background-glow background-glow-one"></div>
      <div className="background-glow background-glow-two"></div>
      <div className="background-glow background-glow-three"></div>

      <div className="background-vignette"></div>
      <div className="background-noise"></div>
    </div>
  );
};

export default Background;