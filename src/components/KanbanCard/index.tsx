import { useState } from "react";
import { Item } from "../../types/Item";
import { User } from "../../types/User";
import "./KanbanCard.scss";

type KanbanCardProps = {
  item: Item;
  user: User | null;
  onClick: () => void;
};

export default function KanbanCard(props: KanbanCardProps) {
  const { item, user, onClick } = props;
  return (
    <div key={item.id} className="kanban-card" onClick={onClick}>
      <h4>{item.title}</h4>
      {/* <p>{item.description}</p> */}
      <div className="kanban-card-footer">
        <div>
          {user ? (
            <div className="user-container">
              <img src={user.avatar_url} />
              <span>{user.username}</span>
            </div>
          ) : (
            "Non affecté"
          )}
        </div>
        <div className="chips">
          {item.tags.map((tag) => (
            <div className={`chip chip--${tag.toLowerCase()}`} key={tag}>
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
