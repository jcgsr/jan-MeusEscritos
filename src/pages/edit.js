import React, { useState, useEffect } from "react";

import { RiDeleteBin6Fill } from "react-icons/ri";

import app from "gatsby-plugin-firebase-v9.0";
import { signOut, getAuth } from "firebase/auth";
import {
	collection,
	getDocs,
	doc,
	deleteDoc,
	getFirestore,
	orderBy,
	query,
} from "firebase/firestore";

import { navigate } from "gatsby";

import PulseLoader from "react-spinners/PulseLoader";

import { toast, Toaster } from "react-hot-toast";

import Layout from "../components/layout";
import Seo from "../components/seo";

const Edit = () => {
	const [escritos, setEscritos] = useState([]);
	const [loading, setLoading] = useState(true);
	const db = getFirestore(app);
	const escritosColRef = collection(db, "escritos");
	const q = query(escritosColRef, orderBy("autor"));

	useEffect(() => {
		const getEscritos = async () => {
			const escritosData = await getDocs(q);
			setEscritos(
				escritosData.docs.map(doc => ({ ...doc.data(), id: doc.id }))
			);
			setLoading(false);
		};
		getEscritos();
	}, []);

	const handleLogout = async () => {
		const auth = getAuth(app);
		await signOut(auth);
		navigate("/");
	};
	const handleDelete = async id => {
		const escritoDoc = doc(db, "escritos", id);
		await deleteDoc(escritoDoc);
		toast.success("Escrito excluído!");
	};
	if (loading) {
		return (
			<div className="spinner">
				<PulseLoader color="grey" />
			</div>
		);
	}
	return (
		<Layout>
			<Seo title="Editar" />
			<Toaster />
			<h2>Editar</h2>
			<section className="edit">
				<button id="logout" onClick={handleLogout}>
					sair
				</button>
				<section className="escritos">
					{escritos.map(escrito => {
						return (
							<div>
								<p>
									Autor: <strong>{escrito.autor}</strong>
								</p>
								<p>
									{" "}
									Título: <strong>{escrito.titulo}</strong>
								</p>
								<button
									onClick={() => {
										handleDelete(escrito.id);
									}}
									id="excluir"
								>
									<RiDeleteBin6Fill />
								</button>

								<hr />
							</div>
						);
					})}
				</section>
			</section>
		</Layout>
	);
};

export default Edit;
