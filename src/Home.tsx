import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="titles">
        <h1 className="header">Welcome To Our Wedding!</h1>
        <h2 className="names">Marina & Daryl</h2>
      </div>
      <div className="cards">
        <a href="/photos">
          <div className="card gallery">
            <h3>Share the craic!</h3>
            <div>
              We&apos;d love to see the moments you captured on our special day.
              Click below to upload your photos and explore the memories shared
              by everyone.
            </div>
            <div className="img"></div>
          </div>
        </a>
        <div className="card table-plan">
          <h3>Find your seat</h3>
          <div>
            Wondering where to sit? Use our handy table plan to find your seat
            and join in the celebration.
          </div>
          <div className="img"></div>
        </div>
      </div>
    </div>
  );
}
