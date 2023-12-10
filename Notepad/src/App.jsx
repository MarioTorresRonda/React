import React from "react";
import Sidebar from "./components/Sidebar";

function App() {

  const [ projects, setProjects ] = React.useState([{ name: "prueba", descripcion: "patata", fecha: "2023/12/11", id: 1 }, { name: "prueba 2", descripcion: "patata", fecha: "2023/12/11", id: 2 }])

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar projects={projects}/>
      <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1>
    </main >
  );
}

export default App;
