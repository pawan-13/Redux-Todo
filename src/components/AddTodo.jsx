import { useState } from "react"
import { addTodo } from "../features/todo/todo";
import { useDispatch } from "react-redux";
const AddTodo = () => {
    const [user, setUser] = useState('');
    const dispatch = useDispatch();
    const handleClick = (e) => {
        e.preventDefault();
        if (user.length > 0) {
            dispatch(addTodo(user));
            setUser('');
        }
    }
    return (
        <>
            <form onSubmit={handleClick}>
                <div className="text-center text-red-600 text-3xl mt-5 mb-4">AddTodo</div>
                <div className="flex items-center justify-between w-96 m-auto">
                    <input type="text" name="user" id="user" value={user} onChange={(e) => setUser(e.target.value)} placeholder="Enter a Todo.." className="px-2 mx-4 py-3 w-100 text-base text-grey-500 outline-none border-red-600 border-solid rounded-md border-2 w-3/4" />
                    <button className="border-0 bg-red-500 text-white text-sm outline-none px-4 w-28 py-3 rounded-md">Add Todo</button>
                </div>
            </form>
        </>
    )
}
export default AddTodo