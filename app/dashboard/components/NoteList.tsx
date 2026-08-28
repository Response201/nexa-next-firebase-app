"use client";

import styles from "../dashboard.module.css";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, where } from "firebase/firestore";
import { title } from "process";
import { Trash2 } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

interface NoteData {
	title: string;
	content: string;
	uid: string;
}
interface Note extends NoteData {
	id: string;
}

export default function NoteList() {
	const [notes, setNotes] = useState<Note[]>([]);
 const {user} = useAuth()
	useEffect(() => {
		// Filter out notes that belong to the current user and match Firestore rules
		const q = query(collection( db, "notes"), where("uid","==", user?.uid))
		const unsub = onSnapshot(q, (snapshot) => {
			const documents = snapshot.docs.map((doc) => {
				return {
					id: doc.id,
					...(doc.data() as NoteData),
				};
			});

			setNotes(documents);
		});

		return unsub;
	}, []);

	const handleDelete = async (id: string) => {
		try {
			await deleteDoc(doc(db, "notes", id));
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className={styles.noteList}>
			{notes.map((note) => (
				<div key={note.id} className={styles.noteCard}>
					<h3 className={styles.noteCardTitle}>{note.title}</h3>
					<p className={styles.noteCardContent}>{note.content}</p>

					<div className={styles.noteCardFooter}>
						<button className={styles.deleteButton} onClick={() => handleDelete(note.id)}>
							<Trash2 size={15} />
						</button>
					</div>
				</div>
			))}
		</div>
	);
}
