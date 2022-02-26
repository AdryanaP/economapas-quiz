import styles from './Cards.module.css'

export default function () {
  const cards = [
    {
      title: "Titulo",
      description: "lorem ajdijdiajd",
    },
    {
      title: "Titulo",
      description: "lorem ajdijdiajd",
    },
    {
      title: "Titulo",
      description: "lorem ajdijdiajd",
    },
    {
      title: "Titulo",
      description: "lorem ajdijdiajd",
    },
  ];
  const listCards = cards.map((card) => {
    return (
      <div className={styles.cardContent}>
        <p>{card.title}</p>
        <p>{card.description}</p>
      </div>
    );
  });

  return <section className={styles.card}>{listCards}</section>;
}
