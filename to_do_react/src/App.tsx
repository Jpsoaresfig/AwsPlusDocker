import { useEffect, useState } from "react";
import { api } from "./service/api";
import type { Todo } from "./types/Todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [preview, setPreview] = useState<string>("");

  const carregarTodos = async () => {
    const response = await api.get<Todo[]>("/tasks");
    setTodos(response.data);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;
    setImageUrl(url);
    setPreview(url); // pré-visualização
  };

  const adicionarTodo = async () => {
    if (!title.trim() || !description.trim()) return;

    const newTodo = {
      title,
      description,
      imageUrl, // garante que a imagem será exibida na lista
    };

    const response = await api.post("/tasks", newTodo);

    // adiciona na lista local já com a imagem
    setTodos([...todos, { ...response.data, imageUrl }]);

    setTitle("");
    setDescription("");
    setImageUrl("");
    setPreview("");
  };

  const removerTodo = async (id: number) => {
    await api.delete(`/tasks/${id}`);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    const loadTodos = async () => {
      await carregarTodos();
    };
    loadTodos();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // centraliza horizontalmente
        padding: 30,
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center" }}>📝 Minha Todo List</h1>

      <div
        style={{
          marginBottom: 20,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          width: "100%",
          maxWidth: 600,
          alignItems: "center",
        }}
      >
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título"
          style={{ padding: 10, fontSize: 16, width: "100%" }}
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descrição"
          style={{
            padding: 10,
            fontSize: 16,
            width: "100%",
            minHeight: 80, // altura mínima para ficar maior
            resize: "vertical", // permite o usuário redimensionar verticalmente
          }}
        />
        <input
          value={imageUrl}
          onChange={handleImageChange}
          placeholder="URL da imagem (opcional)"
          style={{ padding: 10, fontSize: 16, width: "100%" }}
        />

        {preview && (
          <img
            src={preview}
            alt="preview"
            style={{ maxWidth: 150, borderRadius: 5 }}
          />
        )}

        <button
          onClick={adicionarTodo}
          style={{
            padding: 10,
            fontSize: 16,
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            cursor: "pointer",
            width: "50%",
          }}
        >
          Adicionar
        </button>
      </div>

      <ul
        style={{ listStyle: "none", padding: 0, width: "100%", maxWidth: 600 }}
      >
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 15,
              padding: 10,
              border: "1px solid #ccc",
              borderRadius: 5,
              gap: 10,
            }}
          >
            {todo.imageUrl && (
              <img
                src={todo.imageUrl}
                alt={todo.title}
                style={{
                  width: 80,
                  height: 80,
                  objectFit: "cover",
                  borderRadius: 5,
                }}
              />
            )}
            <div style={{ flex: 1, textAlign: "left" }}>
              <h3 style={{ margin: 0 }}>{todo.title}</h3>
              <p style={{ margin: "5px 0" }}>{todo.description}</p>
            </div>
            <button
              onClick={() => removerTodo(todo.id)}
              style={{
                backgroundColor: "#f44336",
                color: "white",
                border: "none",
                padding: "5px 10px",
                cursor: "pointer",
                borderRadius: 3,
              }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
