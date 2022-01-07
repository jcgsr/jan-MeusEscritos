import React, { useState } from "react";

import app from "gatsby-plugin-firebase-v9.0";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

import { navigate } from "gatsby";

import { toast, Toaster } from "react-hot-toast";

import Layout from "../components/layout";
import Seo from "../components/seo";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = async e => {
		e.preventDefault();
		const auth = getAuth(app);
		try {
			await signInWithEmailAndPassword(auth, email, password);

			navigate("/edit");
			toast.success("Logado com sucesso!");
		} catch (error) {
			console.log(error);
			toast.error("Erro no login: " + error);
		}
	};
	return (
		<Layout>
			<Seo title="Login" />
			<Toaster />
			<h2>Login</h2>

			<form className="form-login">
				<input
					placeholder="e-mail"
					type="text"
					value={email}
					onChange={e => setEmail(e.target.value)}
				/>

				<input
					placeholder="senha"
					type="password"
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
				<button id="login" onClick={handleLogin}>
					login
				</button>
			</form>
		</Layout>
	);
};

export default Login;
