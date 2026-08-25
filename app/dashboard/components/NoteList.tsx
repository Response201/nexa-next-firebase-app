"use client";

import styles from "../dashboard.module.css";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { title } from "process";

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

	useEffect(() => {
		const fetchNotes = async () => {
			const snapshot = await getDocs(collection(db, "notes"));

			const documents = snapshot.docs.map((doc) => {
				return {
					id: doc.id,
					...(doc.data() as NoteData),
				};
			});

			setNotes(documents);

			try {
			} catch (error) {
				console.log(error);
			}
		};

		fetchNotes();
	}, []);

	return (
		<div className={styles.noteList}>
			{notes.map((note) => (
				<div key={note.id} className={styles.noteCard}>
					<h3 className={styles.noteCardTitle}>{note.title}</h3>
					<p className={styles.noteCardContent}>{note.content}</p>
				</div>
			))}
		</div>
	);
}
