import { useState, useEffect } from "react";
import { firebase } from "../lib/firebase.prod";

const useProjects = () => {
	const [projects, setProjects] = useState([]);
	useEffect(() => {
		firebase
			.firestore()
			.collection("projects")
			.onSnapshot(snapshot => {
				const listProjects = snapshot.docs.map(doc => ({
					id: doc.id,
					...doc.data(),
				}));
				setProjects(listProjects);
			});

		return () => {
			null;
		};
	}, [firebase]);
	return projects;
};

export default useProjects;
