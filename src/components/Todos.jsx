import { deleteTodo } from "../features/todo/todo";
import { useSelector, useDispatch } from "react-redux";

const Todos = () => {
    const dispatch = useDispatch();
    const todoValue = useSelector(state => state.todos);

    return (
        <>
            <div className="text-center text-red-600 mt-5 mb-4 text-3xl">Welcome to the Todos!</div>
            {todoValue.length === 0 ? (
                <div className="text-center text-black text-xl">
                    There are no todos.
                </div>
            ) : (
                todoValue.map((todo) => (
                    <div key={todo.id} className="mb-4 w-2/4 text-white text-lg m-auto bg-black rounded-md px-4 py-3">
                        <ul className="flex items-center justify-between">
                            <li>{todo.text}</li>
                            <button className="border-0 bg-red-500 text-white text-sm outline-none px-5 py-2 rounded-md" onClick={() => dispatch(deleteTodo(todo.id))}>
                                Delete
                            </button>
                        </ul>
                    </div>
                ))
            )}
        </>
    );
}

export default Todos;
