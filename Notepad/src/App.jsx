import React from "react";
import Sidebar from "./components/Sidebar";
import DefaultPage from "./components/DefaultPage";
import CreateProject from "./components/CreateProject";

function App() {

  const DefaultPageVar = <DefaultPage onOpenProject={openProject} />
  const CreateProjectVar = <CreateProject onCancel={openDefaultPage} />

  const [ projects, setProjects ] = React.useState([{ name: "prueba", descripcion: "patata", fecha: "2023/12/11", id: 1 }, { name: "prueba 2", descripcion: "patata", fecha: "2023/12/11", id: 2 }])
  const [ mainPage, setMainPage ] = React.useState( DefaultPageVar );

  function openProject() {
    setMainPage( CreateProjectVar );
  }

  function openDefaultPage() {
    setMainPage( DefaultPageVar );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar projects={projects} onOpenProject={openProject} />
      {mainPage}
    </main >
  );
}

export default App;
