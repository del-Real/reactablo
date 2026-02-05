import "./SceneFrame.css";
import Scene from "./Scene";

function SceneFrame() {
  return (
    <div className="sceneframe-main">
      <div className="sceneframe-titles">
        <h1 className="scene-title">Slide title</h1>
        <h3 className="presentation-title">Introduction to React</h3>
      </div>
      <Scene />
    </div>
  );
}

export default SceneFrame;
