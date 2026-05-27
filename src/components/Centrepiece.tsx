export default function Centrepiece() {
  return (
    <section id="centrepiece">
      <div className="container">
        <div className="centrepiece-inner fade-up">
          <div className="ornament">
            <div className="ornament-line" style={{ background: 'linear-gradient(to right,transparent,rgba(200,159,86,.55))' }} />
            <span className="ornament-danda">॥</span>
            <div className="ornament-line" style={{ background: 'linear-gradient(to left,transparent,rgba(200,159,86,.55))' }} />
          </div>
          <p className="sanskrit">आत्मनो मोक्षार्थं जगद्धिताय च</p>
          <p className="translit">Ātmano mokṣārthaṃ jagadhitāya ca</p>
          <div className="gold-bar" />
          <p className="translation">"For one's own liberation<br />and for the welfare of the world."</p>
          <p className="source-label">Ramakrishna Mission Motto · Inspired by the Mahābhārata</p>
          <div className="ornament">
            <div className="ornament-line" style={{ background: 'linear-gradient(to right,transparent,rgba(200,159,86,.55))' }} />
            <span className="ornament-danda">॥</span>
            <div className="ornament-line" style={{ background: 'linear-gradient(to left,transparent,rgba(200,159,86,.55))' }} />
          </div>
        </div>
      </div>
      <div className="section-divider"><span className="section-divider-danda">॥</span></div>
    </section>
  );
}
