// SPA
// SSR
// SSG

export default function Home(props) {
  console.log('lokinho meu ', props.episodes)
  return <h1>home</h1>;
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3333/episodes');
  const data = await res.json();

  console.log('data -> ', data);
  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8  // A cada 8 horas é realizada uma nova chamada pra API
  };
}
