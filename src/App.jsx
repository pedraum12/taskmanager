

import { useEffect, useState } from 'react'
import './App.css'
import AddTasks from './components/AddTasks'
import Tasks from './components/tasks'
function App() {

  const [tasks, newTasks] = useState(JSON.parse(localStorage.getItem("tarefas")) || []);
  const [nomeTarefa, setNomeTarefa] = useState("");
  const [descricaoTarefa, setDescricaoTarefa] = useState("");


  useEffect(() => {
    localStorage.setItem("tarefas",JSON.stringify(tasks));
  },[tasks])

  function handleAdd() {
    if (nomeTarefa.trim() !== null && nomeTarefa.trim() !== "" && descricaoTarefa.trim() !== null && descricaoTarefa.trim() !== "") {
      const objeto = meuObjeto(nomeTarefa, descricaoTarefa);
      newTasks(t => [...t, objeto]);
    }else{
      alert("digite algo valido nos campos");
    }
    setNomeTarefa("");
    setDescricaoTarefa("");
  
  }

  function handleChangeTitle(e) {
    setNomeTarefa(e.target.value);
  }

  function handleChangeDescricao(e) {
    setDescricaoTarefa(e.target.value);
  }

  function meuObjeto(nomeTask, description) {
    return {
      minhaTarefa: nomeTask,
      descricaoDaTask: description,
      isCompleted: false,
    }
  }

  function handleRemove(i) {
    const filter = tasks.filter((_, index) => i !== index);
    newTasks(filter);

 
  }
  function handleTaskCompleted(e, index) {
    const novasTasks = tasks.map((item, i) => {
      if (i === index) {
        return { 
          ...item, isCompleted: !item.isCompleted
        };
      }

      return item;
    });
    newTasks(novasTasks);


  }

  function handleEdit(e,index){
    let y = "";
    const x = prompt("Digite o novo nome da tarefa:");
    const novasTasks = tasks.map((item,i) => {
      if(index === i){

        return{ 
          ...item, 
          minhaTarefa:x 
        }

        
      }
       return item;
    });
    newTasks(novasTasks);
    alert("Tarefa Editada!");
  }
  return (
    <>
    
      <div className='h-screen w-screen bg-gray-800 flex justify-center p-6'>
        <div className='flex flex-col w-sm gap-4'>
          <h1 className='text-3xl text-slate-50 font-bold text-center'>
            Gerenciador de Tarefas

          </h1>
          <AddTasks clickEvent={handleAdd}
            nomeChange={handleChangeTitle}
            descricaoChange={handleChangeDescricao}
            nomeValue={nomeTarefa}
            descricaoValue={descricaoTarefa}
          />
          <Tasks tasks={tasks}
            completedEvent={handleTaskCompleted}
            removeItem={handleRemove} 
            editItem={handleEdit} />
        </div>
      </div>
    </>
  )
}

export default App
