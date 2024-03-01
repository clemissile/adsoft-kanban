import { useCallback, useState } from "react";
import { Item } from "../../types/Item";
import { User } from "../../types/User";
import "./KanbanBoard.scss";
import KanbanCard from "../KanbanCard";

type KanbanBoardProps = {
  items: Item[];
  users: User[];
};

const states = ["Backlog", "Todo", "Doing", "Done"];

export default function KanbanBoard(props: KanbanBoardProps) {
  const { items, users } = props;

  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const handleItemClick = (item: Item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const getUser = useCallback((id: number): User | null => {
    const user = users.find((user) => user.id === id);
    if (!user) return null;
    return user;
  }, []);

  return (
    <div className="kanban-board">
      {states.map((state) => (
        <div key={state} className="kanban-column">
          <h2>{state}</h2>
          {items
            .filter((i) => i.state === state)
            .map((item) => (
              <KanbanCard
                item={item}
                user={getUser(item.affected_user_id)}
                onClick={() => handleItemClick(item)}
              />
            ))}
        </div>
      ))}

      {/* Modal */}
      {selectedItem && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <p>{selectedItem.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
