import { useSelector } from 'react-redux'
import AddModal from '../modal/Modal'

const Todo = () => {
    const todos = useSelector(state => state.todoReducer.value)
    console.log(todos);

    return (
        <div>
            <div className='flex items-center justify-center mt-7'>
                <AddModal />
            </div>

            <div className='container mx-auto max-w-[1000px] flex flex-col gap-4 mt-16'>
                {
                    todos?.map((todo) => (
                        <div key={todo.id} className='w-full border h-14 flex items-center justify-between px-4 rounded-md'>
                            <h2 className='text-lg font-semibold'>{todo.title}</h2>
                            <div className='flex gap-2.5'>
                                <button className='px-3.5 py-2 bg-amber-400 rounded text-white active:scale-95 duration-200'>Edit</button>
                                <button className='px-3.5 py-2 bg-red-600 rounded text-white active:scale-95 duration-200'>Delete</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Todo
