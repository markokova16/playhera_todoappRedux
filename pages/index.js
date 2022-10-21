import Head from "next/head";
import Title from "../components/Title";
import Main from "../components/Main";
import { Provider } from "react-redux";

const Index = () => {
	return (
		<div className="h-screen bg-black">
			<Head>
				<title>ToDo App</title>
				<meta property="og:title" content="My page title" key="title" />
			</Head>
			<Title />
			<Main />
		</div>
	);
};

export default Index;
