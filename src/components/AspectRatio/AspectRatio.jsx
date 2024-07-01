import "./AspectRatio.scss";

const AspectRatio = ({ ratio, children }) => {
  const aspectRatioStyle = {
    paddingTop: `${(1 / ratio) * 100}%`,
  };

  return (
    <div className="aspect-ratio-container" style={aspectRatioStyle}>
      {children}
    </div>
  );
};

export default AspectRatio;
