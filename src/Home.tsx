export default function Home() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        Welcome to Marina and Daryls Wedding!
      </h1>
      <p style={{ textAlign: "center" }}>
        This is a photo gallery app where you can upload and view photos from
        the wedding.
      </p>
      <p style={{ textAlign: "center" }}>
        Please share your good times and memories with us!
      </p>
      <p style={{ textAlign: "center" }}>
        <a
          href="/photos"
          style={{ textDecoration: "underline", color: "#fa3636" }}
        >
          View Photos
        </a>
      </p>
    </div>
  );
}
