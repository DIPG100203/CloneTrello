export interface TodoList {
    id: string;
    title: string
}

export interface Column {
    title: string;
    todos: TodoList[];
}
