import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface IHome {
	todos: { id: string; title: string }[];
}

export async function getServerSideProps() {
	const res = await fetch("https://jsonplaceholder.typicode.com/todos");
	const data = await res.json();

	return {
		props: {
			todos: data,
		},
	};
}

export default function Home({ todos }: IHome) {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div>
				{todos.length === 0 ? (
					<div>Loading...</div>
				) : (
					todos.map((todo) => (
						<div key={todo.id}>
							<p>
								{todo.id}: {todo.title}
							</p>
						</div>
					))
				)}
			</div>
		</main>
	);
}
