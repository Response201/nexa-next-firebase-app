import { BookOpenCheck, MessageSquareText, PenLine, TrendingUp } from "lucide-react";
import Link from "next/link";
import styles from "./page.module.css";

const highlights = [
	{
		title: "Keep a rhythm",
		description:
			"Settle into regular sessions that make writing feel less solitary and more sustainable.",
		Icon: PenLine,
	},
	{
		title: "Share drafts",
		description:
			"Bring rough pages, polished scenes, or a single stubborn paragraph for thoughtful feedback.",
		Icon: MessageSquareText,
	},
	{
		title: "Build momentum",
		description:
			"Leave each meet-up with clearer next steps, fresh energy, and people expecting your next page.",
		Icon: TrendingUp,
	},
];

export default function Home() {
	return (
		<main className={styles.page}>
			<section className={styles.hero}>
				<div className={styles.heroContent}>
					<p className={styles.brand}>Nexa</p>
					<h1 className={styles.heading}>Write more. Share sooner.</h1>
					<p className={styles.intro}>
						A calm writing group for steady sessions, generous feedback, and the momentum to keep
						turning up for the page.
					</p>
					<Link href="/auth/login" className={styles.button}>
						Get started
					</Link>
				</div>

				<div className={styles.visualPanel} aria-hidden="true">
					<div className={styles.visualAccentOne} />
					<div className={styles.visualAccentTwo} />
					<div className={styles.document}>
						<div className={styles.documentTitleLine} />
						<div className={styles.lineStack}>
							<div className={styles.documentLine} />
							<div className={styles.documentLine} />
							<div className={styles.documentLineShort} />
						</div>
						<div className={styles.note}>
							<div className={styles.noteTitleLine} />
							<div className={styles.noteLines}>
								<div className={styles.noteLine} />
								<div className={styles.noteLineShort} />
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className={styles.highlightsSection}>
				<div className={styles.highlightsGrid}>
					{highlights.map(({ title, description, Icon }) => (
						<article className={styles.card} key={title}>
							<div className={styles.cardIcon} aria-hidden="true">
								<Icon size={22} strokeWidth={2} />
							</div>
							<h2 className={styles.cardTitle}>{title}</h2>
							<p className={styles.cardDescription}>{description}</p>
						</article>
					))}
				</div>
			</section>

			<section className={styles.showcaseSection}>
				<div className={styles.showcase}>
					<div className={styles.showcaseIcon} aria-hidden="true">
						<BookOpenCheck size={24} strokeWidth={2} />
					</div>
					<h2 className={styles.showcaseTitle}>A generous room for unfinished work.</h2>
					<p className={styles.showcaseText}>
						Come with a project, a question, or just the wish to write more often. Nexa gives each
						member space to make progress and a steady circle to return to.
					</p>
				</div>
			</section>

			<section className={styles.closing}>
				<h2 className={styles.closingTitle}>Ready for the next page?</h2>
				<p className={styles.closingText}>
					Join the group, settle in, and start building a writing habit with people who will notice
					when you keep going.
				</p>
				<Link href="/auth/login" className={styles.button}>
					Get started
				</Link>
			</section>
		</main>
	);
}
