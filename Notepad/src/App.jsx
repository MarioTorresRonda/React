
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import DefaultPage from "./components/DefaultPage";
import CreateProject from "./components/CreateProject";
import Project from "./components/Project";
import { getSelectedProject } from "./Utils";

let id = 0;

function App() {
  
  const [ projects, setProjects ] = useState([{ name: "prueba", descripcion: "patata", fecha: "2023/12/11", id: 101 }, { name: "prueba 2", descripcion: "patata", fecha: "2023/12/11", id: 102 }])
  const [ mainPage, setMainPage ] = useState( "default" );

  function saveProject( newProject ) {
      id++;
      setProjects( prevProjects => {
        return [...prevProjects, newProject];
      } )
      openDefaultPage();
  }

  function saveTask( task ) {
    setProjects( prevProjects => {
      var newProjects = [...prevProjects];
      newProjects.forEach( ( item ) => {
        if ( item.active ) {
          if ( !item.tasks ) {
            item.tasks = [];
            item.tasksId = 0;
          }
          item.tasks.push( { name : task, id: item.tasksId } )
          item.tasksId = item.tasksId + 1;
        }
      });      
      return newProjects;
    } )
  }

  function removeTask( id ) {
    setProjects( prevProjects => {
      var newProjects = [...prevProjects];
      newProjects.forEach( ( item ) => {
        if ( item.active ) {
          var taskIndex = -1;
          item.tasks.forEach( (task, index) => {
            if ( task.id == id ) {
              taskIndex = index;
              return;
            }
          } )
          if ( taskIndex != -1 ) {
            item.tasks.splice( taskIndex, 1 );
          }
        }
      });      
      return newProjects;
    } )
  }

  function selectProject( id ) {
    setProjects( prevProjects => {
      let newProjects = [...prevProjects];
      newProjects.forEach( (item) => {
        item.active = item.id == id;
      } )
      return newProjects;
    } )
  }

  function removeProject() {
    setProjects( prevProjects => {
      let newProjects = [...prevProjects];
      var projectIndex = -1;
      newProjects.forEach( (item, index) => {
        if ( item.active ) {
          projectIndex = index;
        }
      } )
      if ( projectIndex != -1 ) {
        newProjects.splice( projectIndex, 1);
      }
      setMainPage( "default" );
      return newProjects;
    } )
  }

  if ( mainPage != "project" &&  getSelectedProject( projects ) != null ) {
    openProjectPage();
  }

  function createProject() {
    selectProject( -1 );
    setMainPage( "create" );
  }

  function openDefaultPage() {
    setMainPage( "default" );
  }

  function openProjectPage() {
    setMainPage( "project" );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar projects={projects} onOpenProject={createProject} onSelectProject={selectProject} />
      { mainPage === "default" && <DefaultPage onOpenProject={createProject} /> }
      { mainPage === "create" && <CreateProject onCancel={openDefaultPage} onSave={saveProject} id={id} /> }
      { mainPage === "project" && <Project onHandleAddTask={saveTask} onHandleRemoveTask={removeTask} projects={projects} onRemoveProject={removeProject} /> }
    </main >
  );
}

export default App;
