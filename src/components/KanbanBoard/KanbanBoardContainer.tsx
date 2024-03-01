import { useCallback, useEffect, useState } from "react";
import { Item } from "../../types/Item";
import ApiService from "../../services/api.service";
import { User } from "../../types/User";
import KanbanBoard from ".";

type KanbanBoardContainerProps = {
  api: ApiService;
};

export default function KanbanBoardContainer(props: KanbanBoardContainerProps) {
  const { api } = props;

  const [loading, setLoading] = useState<boolean>(true);
  const [items, setItems] = useState<Item[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    setLoading(true);

    Promise.all([api.getItems(), api.getUsers()])
      .then(([items, users]) => {
        setItems(items);
        setUsers(users);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [api]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <KanbanBoard items={items} users={users} />;
}
