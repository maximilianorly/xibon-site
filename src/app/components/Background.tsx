"use client";
const Background: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  console.log("a client background");
  return (
    <div className="bg-fixed bg-sys-dark">
      <div
        style={{
          background: `url(/backgrounds/snow--light.png) no-repeat center/cover`,
          height: "100%",
          width: "100%",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Background;
