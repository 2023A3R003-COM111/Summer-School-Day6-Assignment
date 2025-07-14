function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="flex items-center justify-between border-b pb-2">
      <div
        onClick={() => onToggle(todo.id)}
        className={`flex-1 cursor-pointer ${
          todo.completed ? 'line-through text-gray-400' : ''
        }`}
      >
        {todo.text}
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="ml-4 text-red-500 hover:text-red-700"
      >
        ✕
      </button>
    </li>
  )
}

export default TodoItem
