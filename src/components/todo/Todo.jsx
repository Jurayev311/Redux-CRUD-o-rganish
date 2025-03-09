import { useSelector } from 'react-redux'
import AddModal from '../modal/Modal'

const Todo = () => {
    const todos = useSelector(state => state.todoReducer.value)

    return (
        <div>
            <div className='flex items-center justify-center mt-7'>
                <AddModal />
            </div>

            <div className='container mx-auto max-w-[1000px] flex flex-col gap-4 mt-16'>
                {
                    todos?.map((todo) => (
                        <div key={todo.id} className='w-full border p-4 rounded-md shadow-md bg-white flex justify-between items-center'>
                            <div className='flex flex-col'>
                                <h2 className='text-lg font-semibold text-gray-800'>{todo.title}</h2>
                                <p className='text-sm text-gray-600 mt-1 italic'>{todo.desc}</p>
                            </div>
                            <div className='flex gap-2.5'>
                                <button className='px-4 py-2 bg-amber-500 rounded text-white active:scale-95 duration-200'>Edit</button>
                                <button className='px-4 py-2 bg-green-500 rounded text-white active:scale-95 duration-200'>Complete</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Todo
