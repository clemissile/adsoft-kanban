export type Item = {
  id: number;
  affected_user_id: number;
  state: "Backlog" | "Todo" | "Doing" | "Done";
  title: string;
  description: string;
  tags: Array<string>;
};
