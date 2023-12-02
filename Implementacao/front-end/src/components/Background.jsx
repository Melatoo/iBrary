const Background = ({ children }) => {
  return (
    <div
      style={{
        background: "linear-gradient(71deg, #FEAF00 19.35%, #F8D442 90.12%)",
        width: "100%",
        height: "100vh",
      }}
    >
      {children}
    </div>
  );
};

export default Background;
