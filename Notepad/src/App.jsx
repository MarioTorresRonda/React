
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import DefaultPage from "./components/DefaultPage";
import CreateProject from "./components/CreateProject";

function App() {

  const DefaultPageVar = <DefaultPage onOpenProject={openProject} />
  const CreateProjectVar = <CreateProject onCancel={openDefaultPage} onSave={saveProject} />

  const [ projects, setProjects ] = useState([{ name: "prueba", descripcion: "patata", fecha: "2023/12/11", id: 1 }, { name: "prueba 2", descripcion: "patata", fecha: "2023/12/11", id: 2 }])
  const [ mainPage, setMainPage ] = useState( DefaultPageVar );

  function openProject() {
    setMainPage( CreateProjectVar );
  }

  function saveProject( newProject ) {
      setProjects( prevProjects => {
        return [...prevProjects, newProject];
      } )
      setMainPage( DefaultPageVar );
  }

  function openDefaultPage() {
    setMainPage( DefaultPageVar );
  }

  console.log( projects )

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar projects={projects} onOpenProject={openProject} />
      {mainPage}
    </main >
  );
}

export default App;
