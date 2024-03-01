import "./App.css";
import ApiService from "./services/api.service";
import KanbanContainer from "./components/KanbanBoard/KanbanBoardContainer";

function App() {
  const api = new ApiService(process.env.REACT_APP_API_URL as string);

  return (
    <div className="App">
      <KanbanContainer api={api} />
    </div>
  );
}

export default App;
