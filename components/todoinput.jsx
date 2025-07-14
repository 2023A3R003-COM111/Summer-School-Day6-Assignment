import { useState } from 'react'

function TodoInput({ onAdd }) {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text.trim()) return
    onAdd(text.trim())
    setText('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        className="flex-1 border border-gray-300 rounded-l px-3 py-2 focus:outline-none"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
      >
        Add
      </button>
    </form>
  )
}

export default TodoInput
