import { use3DTilt } from '../hooks/use3DTilt';
import PhotoCard from './PhotoCard';

export default function Lifestyle() {
  use3DTilt('#lifestyle .photo-card');

  return (
    <section id="lifestyle" className="section">
      <div className="container">
        <div className="section-header fade-up">
          <div>
            <span className="eyebrow" style={{ color: '#c89f56' }}>
              <span className="eyebrow-line" style={{ background: '#c89f56' }} />
              Learning Through Living
            </span>
            <h2 style={{ fontSize: 'clamp(2rem,4vw,3.4rem)', color: '#120c0b', marginTop: '1rem', letterSpacing: '-.02em', lineHeight: '1.08', fontWeight: 400 }}>
              Every moment<br />is a <span className="gold-metallic">classroom</span>
            </h2>
          </div>
          <p>Our programmes are woven into the fabric of daily life — not separate from it. Children learn by doing, feeling, and reflecting.</p>
        </div>
        <div className="grid-3">
          <PhotoCard
            imgSrc="/Public/images/ls-yoga.jpg"
            imgAlt="Morning yoga"
            fallbackText="Stillness + Breath"
            dotColor="#e07a5f"
            label="Stillness & Breath"
            labelColor="#e07a5f"
            caption="Morning yoga — finding peace before the day begins"
          />
          <PhotoCard
            imgSrc="/Public/images/ls-kitchen.jpg"
            imgAlt="Kitchen seva"
            fallbackText="Seva + Service"
            dotColor="#c89f56"
            label="Seva & Service"
            labelColor="#c89f56"
            caption="Learning generosity in the kitchen — together"
          />
          <PhotoCard
            imgSrc="/Public/images/ls-garden.jpg"
            imgAlt="Garden"
            fallbackText="Nature + Wonder"
            dotColor="#0f3b46"
            label="Nature & Wonder"
            labelColor="#0f3b46"
            caption="Growing roots — a child's curiosity meets the earth"
          />
        </div>
      </div>
      <div className="section-divider"><span className="section-divider-danda">॥</span></div>
    </section>
  );
}
