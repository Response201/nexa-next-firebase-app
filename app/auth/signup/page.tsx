"use client";

import Link from "next/link";
import { SubmitEvent, useState } from "react";
import styles from "../auth.module.css";
import { auth } from "@/lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const passwordsDoNotMatch =
    confirmPassword.length > 0 && password !== confirmPassword;

  async function handleSubmit(event: SubmitEvent) {
    event.preventDefault();

    if (passwordsDoNotMatch) {
      return;
    }

    try {

     const result = await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error)
    }
   
  }

  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.title}>Sign up</h1>
        <p className={styles.subtitle}>
          Create your account and make room for the next page.
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

        <label className={styles.field}>
          <span className={styles.label}>Confirm password</span>
          <input
            aria-describedby={
              passwordsDoNotMatch ? "password-match-error" : undefined
            }
            aria-invalid={passwordsDoNotMatch}
            className={styles.input}
            name="confirmPassword"
            onChange={(event) => setConfirmPassword(event.target.value)}
            type="password"
            value={confirmPassword}
            required
          />
          {passwordsDoNotMatch ? (
            <span className={styles.error} id="password-match-error">
              Passwords do not match.
            </span>
          ) : null}
        </label>

        <button
          className={styles.button}
          disabled={passwordsDoNotMatch}
          type="submit"
        >
          Sign up
        </button>
      </form>

      <p className={styles.footer}>
        Already have an account?{" "}
        <Link href="/auth/login" className={styles.link}>
          Log in
        </Link>
      </p>
    </>
  );
}
