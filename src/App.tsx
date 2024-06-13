import { Input } from "@nextui-org/react";
import "./App.css";
import Redirect from "./components/redirect";

function App() {
  return (
    <div className="w-full h-screen flex flex-col items-center gap-14 pt-28 bg-slate-500">
      <h1 className="text-8xl text-white">Google</h1>
      <Input
        className="w-[700px]"
        type="text"
        label="Search Google or type a URL"
      />
      <div>
        <Redirect />
      </div>
    </div>
  );
}

export default App;
