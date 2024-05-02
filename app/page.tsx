"use client"

import styles from "./page.module.css";
import ProductGrid from "@/components/ProductGrid";

export default function Home() {
  return (
    <main className={styles.main}>
      <ProductGrid />
    </main>
  );
}
