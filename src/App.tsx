import { FC } from "react";
import { RouteNavigation } from "./routes/routes";

export const App: FC = () => {
  return (
    <>
      <div style={{ width: "100%", height: "100%" }}>
        <RouteNavigation />
      </div>
    </>
  );
};

export default App;
