function AddTasks({clickEvent,nomeChange ,descricaoChange,nomeValue,descricaoValue}){


    return (
        <div className="w-[500-px] p-4 flex flex-col gap-4 bg-gray-200 rounded-sm">
            <input type="text" 
            className="border w-full rounded-sm p-1.5 placeholder-gray-400 font-semibold outline-none" 
            placeholder="Titulo da Tarefa"
            value={nomeValue}
            onChange={nomeChange}/>
             <input type="text" 
            className="border rounded-sm p-1.5 placeholder-gray-400 font-semibold outline-none"
            value={descricaoValue}
             onChange={descricaoChange}
            placeholder="Descrição da Tarefa"/>
            <button type="submit" className="bg-gray-500 rounded-sm p-1 cursor-pointer text-white font-bold hover:bg-gray-700" onClick={clickEvent}>Adicionar</button>
        </div>
    )
}


export default AddTasks