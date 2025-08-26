import { CheckCheckIcon, ChevronRightIcon, PencilIcon, XIcon } from "lucide-react"
import { useNavigate } from "react-router-dom"

function Tasks({ tasks , completedEvent, removeItem , editItem }){
    const navigate = useNavigate();

    function onSeeDetailsclick(task){

        const query = new URLSearchParams();
        query.set("nomeDaTarefa",task.minhaTarefa);
        query.set("descricao",task.descricaoDaTask);
        navigate(`/task?${query.toString()}`);

    }
    return(
        <>
        <ul className="w-[500-px] p-4 flex flex-col space-y-3 bg-gray-300 rounded-sm">
             <h1 className="text-center font-semibold text-gray-900 text-xl">Lista de Tarefas</h1>
            {tasks.map((task,index) =>
                <li className="flex justify-between space-x-1"key={index}>
                    <button 
                    type="submit" 
                    className={`p-2 flex bg-gray-400 rounded-md w-full text-white font-semibold ${task.isCompleted && `line-through`}`} 
                    onClick={(e) => completedEvent(e,index)}>
                        {task.isCompleted ? <CheckCheckIcon/>:``}
                        {task.minhaTarefa}  
                        </button>
                    <button type="submit" className="p-2 flex bg-gray-400 rounded-sm text-white cursor-pointer" 
                     onClick={() => onSeeDetailsclick(task)}>
                        <ChevronRightIcon/>
                    </button>

                    <button type="submit" className="p-2 flex bg-gray-400 rounded-sm text-white cursor-pointer" onClick={(e) => editItem(e,index)}>
                        <PencilIcon/>
                    </button>
                    <button type="submit" className="p-2 flex bg-gray-400 rounded-sm text-white cursor-pointer" onClick={() => removeItem(index)} >
                        <XIcon/>
                    </button>
                    </li>
                
              )}
        </ul>
        </>
    )
}

export default Tasks