import styles from "../styles/style.module.css";
import ImageSlider from "../components/ImageSlider";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>Image Slider</h1>
      <ImageSlider />
    </main>
  );
}
