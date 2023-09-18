import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {Array.from({ length: 100 }).map((_, idx) => (
        <div
          key={idx}
          className="star"
          style={{
            top: `${Math.random() * 200}vh`,
            left: `${Math.random() * 100}vw`,
            animationDuration: `${0.5 + Math.random() * 2}s`, // random shine duration
            animationDelay: `${Math.random() * 1.5}s`, // random shine delay
          }}
        />
      ))}
      <Component {...pageProps} />
      </>
  );
}

export default MyApp;
