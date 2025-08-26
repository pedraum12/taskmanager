import { useNavigate, useSearchParams } from "react-router-dom"
import { ChevronLeftIcon } from "lucide-react";
function TaskPage() {
    const [searchParams] = useSearchParams();
    const title = searchParams.get("nomeDaTarefa");
    const description = searchParams.get("descricao");
    const navigate = useNavigate();
    return (

        <>
            <div className='h-screen w-screen bg-gray-800 flex justify-center p-6'>
                <div className='flex flex-col w-sm gap-4'>
                    <div className="flex justify-center items-center text-center w-full">
                    <button className="cursor-pointer absolute left-0 top-0 bottom-0" >
                        <ChevronLeftIcon color="white" 
                        onClick={() => navigate(-1)}/>
                        </button>
                    <h1 className='text-3xl text-slate-50 font-bold text-center'>
                        Detalhes da tarefa
                    </h1>
                    </div>
                    <div className="flex flex-col w-sm gap4 bg-slate-200 rounded-md p-4">
                        <h1 className="text-slate-600 font-bold text-xl">{title}</h1>
                        <p className="text-slate-600">{description}</p>
                    </div>
                </div>

            </div>
        </>
    )
}


export default TaskPage