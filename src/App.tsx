import { Input } from "@nextui-org/react";
import "./App.css";
import Redirect from "./components/redirect";
import AddShortcut from "./components/add-shortcut";

function App() {
  return (
    <div className="w-full h-screen flex flex-col items-center gap-14 pt-28 bg-slate-500">
      <h1 className="text-8xl text-white">Google</h1>
      <Input
        className="w-[700px]"
        type="text"
        label="Search Google or type a URL"
      />
      <div className="flex">
        <Redirect />
        <AddShortcut />
      </div>
    </div>
  );
}

// const frutas = [
//   {
//     id: 1,
//     nombre: "frutilla",
//     foto: "https://lh6.googleusercontent.com/proxy/GTE7Ybjq9M3n4YurpOT-8QZPBbXaKY5-gOeTEBir-Ml6gZyb5MdwkiSTcw0B1xSw2--HaGHPomPWLu-yiFu_gjC-V_W3ADRPzMvgmsaZGBx3GnEGIBG3B6us3OkAkfDHKA",
//   },
//   {
//     id: 2,
//     nombre: "platano",
//     foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGzVJUw8ro13TNu2-dzpIMvYz1i9jnP8YApQ&s",
//   },
//   {
//     id: 3,
//     nombre: "pera",
//     foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRguxl-UsyxTA5RoygS5nszPIDRrPGKZamnXw&s",
//   },
//   {
//     id: 4,
//     nombre: "frutilla",
//     foto: "https://lh6.googleusercontent.com/proxy/GTE7Ybjq9M3n4YurpOT-8QZPBbXaKY5-gOeTEBir-Ml6gZyb5MdwkiSTcw0B1xSw2--HaGHPomPWLu-yiFu_gjC-V_W3ADRPzMvgmsaZGBx3GnEGIBG3B6us3OkAkfDHKA",
//   },
//   {
//     id: 5,
//     nombre: "platano",
//     foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGzVJUw8ro13TNu2-dzpIMvYz1i9jnP8YApQ&s",
//   },
//   {
//     id: 6,
//     nombre: "pera",
//     foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRguxl-UsyxTA5RoygS5nszPIDRrPGKZamnXw&s",
//   },
// ];

export default App;
