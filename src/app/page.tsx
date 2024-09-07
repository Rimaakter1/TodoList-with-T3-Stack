
import { HydrateClient } from "~/trpc/server";
import TodoList from "./_components/TodoList";

export default async function Home() {


  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-pink-100 via-blue-100 to-purple-100">
        <TodoList />
      </main>
    </HydrateClient>
  );
}
