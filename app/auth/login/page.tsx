"use client";

import Link from "next/link";
import { SubmitEvent, useState } from "react";
import styles from "../auth.module.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    try {
      const result = await signInWithEmailAndPassword(auth, email, password)
      console.log("User signed in successfully", result);

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.title}>Log in</h1>
        <p className={styles.subtitle}>
          Welcome back. Pick up where your draft left off.
        </p>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.field}>
          <span className={styles.label}>Email</span>
          <input
            className={styles.input}
            name="email"
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            value={email}
            required
          />
        </label>

        <label className={styles.field}>
          <span className={styles.label}>Password</span>
          <input
            className={styles.input}
            name="password"
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            value={password}
            required
          />
        </label>

        <button className={styles.button} type="submit">
          Log in
        </button>
      </form>

      <p className={styles.footer}>
        Need an account?{" "}
        <Link href="/auth/signup" className={styles.link}>
          Sign up
        </Link>
      </p>
    </>
  );
}
