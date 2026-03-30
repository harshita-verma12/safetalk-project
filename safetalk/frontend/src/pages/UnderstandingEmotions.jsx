export default function UnderstandingEmotions() {
  const emotionColors = {
    'Joy': '#FFD93D',
    'Sadness': '#74B9FF',
    'Anger': '#FF6B6B',
    'Fear': '#A29BFE',
    'Disgust': '#FD79A8',
    'Surprise': '#FDCB6E',
    'Anxiety': '#E17055',
    'Grief': '#636E72',
    'Disappointment': '#B2BEC3',
    'Frustration': '#FF7675',
    'Contentment': '#55EFC4',
    'Love': '#FD79A8',
    'Confusion': '#FDCB6E',
    'Exhaustion': '#A29BFE',
    'Hope': '#74B9FF',
    'Confidence': '#FFD93D',
    'Guilt': '#E17055',
    'Shame': '#636E72',
    'Empathy': '#55EFC4',
    'Determination': '#FF7675'
  };

  return (
    <section className="page understanding">
      <h2>Understanding Your Emotions</h2>
      <p>Emotions are natural responses that help us navigate life. Each feeling serves a purpose and deserves our attention with compassion.</p>

      <h3>Primary Emotions</h3>
      <div className="emotion-grid">
        <div className="emotion-card" style={{ background: `linear-gradient(135deg, ${emotionColors['Joy']} 0%, #fff8e1 100%)` }}>
          <div className="illustration">😊</div>
          <h4>Joy</h4>
          <p>A feeling of great pleasure and happiness. It reminds us of what brings meaning to our lives.</p>
        </div>
        <div className="emotion-card" style={{ background: `linear-gradient(135deg, ${emotionColors['Sadness']} 0%, #e3f2fd 100%)` }}>
          <div className="illustration">😢</div>
          <h4>Sadness</h4>
          <p>A natural response to loss or disappointment. It invites us to grieve and seek comfort.</p>
        </div>
        <div className="emotion-card" style={{ background: `linear-gradient(135deg, ${emotionColors['Anger']} 0%, #ffebee 100%)` }}>
          <div className="illustration">😠</div>
          <h4>Anger</h4>
          <p>An energy that signals when boundaries need protection. It can motivate positive change.</p>
        </div>
        <div className="emotion-card" style={{ background: `linear-gradient(135deg, ${emotionColors['Fear']} 0%, #f3e5f5 100%)` }}>
          <div className="illustration">😨</div>
          <h4>Fear</h4>
          <p>A protective response to perceived threats. It helps us stay safe and prepare for challenges.</p>
        </div>
        <div className="emotion-card" style={{ background: `linear-gradient(135deg, ${emotionColors['Disgust']} 0%, #fce4ec 100%)` }}>
          <div className="illustration">🤢</div>
          <h4>Disgust</h4>
          <p>A reaction to something unpleasant. It guides us away from harmful situations.</p>
        </div>
        <div className="emotion-card" style={{ background: `linear-gradient(135deg, ${emotionColors['Surprise']} 0%, #fff8e1 100%)` }}>
          <div className="illustration">😲</div>
          <h4>Surprise</h4>
          <p>A response to unexpected events. It keeps us alert and adaptable.</p>
        </div>
      </div>

      <h3>Complex Emotions & Feelings</h3>
      <div className="emotion-grid">
        <div className="emotion-card" style={{ background: `linear-gradient(135deg, ${emotionColors['Anxiety']} 0%, #ffebee 100%)` }}>
          <div className="illustration">😰</div>
          <h4>Anxiety</h4>
          <p>Worry about future uncertainties. Practice grounding techniques and self-compassion.</p>
        </div>
        <div className="emotion-card" style={{ background: `linear-gradient(135deg, ${emotionColors['Grief']} 0%, #e8f5e8 100%)` }}>
          <div className="illustration">😔</div>
          <h4>Grief</h4>
          <p>Deep sorrow from loss. Allow yourself time to mourn and seek support.</p>
        </div>
        <div className="emotion-card" style={{ background: `linear-gradient(135deg, ${emotionColors['Disappointment']} 0%, #f3e5f5 100%)` }}>
          <div className="illustration">😞</div>
          <h4>Disappointment</h4>
          <p>When expectations aren't met. Practice acceptance and focus on what you can control.</p>
        </div>
        <div className="emotion-card" style={{ background: `linear-gradient(135deg, ${emotionColors['Frustration']} 0%, #ffebee 100%)` }}>
          <div className="illustration">😤</div>
          <h4>Frustration</h4>
          <p>When obstacles block your path. Channel this energy into problem-solving.</p>
        </div>
        <div className="emotion-card" style={{ background: `linear-gradient(135deg, ${emotionColors['Contentment']} 0%, #e8f5e8 100%)` }}>
          <div className="illustration">😌</div>
          <h4>Contentment</h4>
          <p>A peaceful satisfaction with the present moment. Cultivate gratitude for simple joys.</p>
        </div>
        <div className="emotion-card" style={{ background: `linear-gradient(135deg, ${emotionColors['Love']} 0%, #fce4ec 100%)` }}>
          <div className="illustration">🥰</div>
          <h4>Love</h4>
          <p>Deep affection and care for others and yourself. Nurture meaningful connections.</p>
        </div>
        <div className="emotion-card" style={{ background: `linear-gradient(135deg, ${emotionColors['Confusion']} 0%, #fff8e1 100%)` }}>
          <div className="illustration">🤔</div>
          <h4>Confusion</h4>
          <p>When things don't make sense. Be patient with yourself as you seek clarity.</p>
        </div>
        <div className="emotion-card" style={{ background: `linear-gradient(135deg, ${emotionColors['Exhaustion']} 0%, #f3e5f5 100%)` }}>
          <div className="illustration">😴</div>
          <h4>Exhaustion</h4>
          <p>Physical or emotional depletion. Prioritize rest and self-care.</p>
        </div>
        <div className="emotion-card" style={{ background: `linear-gradient(135deg, ${emotionColors['Hope']} 0%, #e3f2fd 100%)` }}>
          <div className="illustration">✨</div>
          <h4>Hope</h4>
          <p>Optimism for the future. Hold onto possibilities while staying grounded in reality.</p>
        </div>
        <div className="emotion-card" style={{ background: `linear-gradient(135deg, ${emotionColors['Confidence']} 0%, #fff8e1 100%)` }}>
          <div className="illustration">😎</div>
          <h4>Confidence</h4>
          <p>Belief in your abilities. Build this through small successes and positive self-talk.</p>
        </div>
        <div className="emotion-card" style={{ background: `linear-gradient(135deg, ${emotionColors['Guilt']} 0%, #ffebee 100%)` }}>
          <div className="illustration">😕</div>
          <h4>Guilt</h4>
          <p>Regret over actions or inactions. Practice forgiveness and learn from experiences.</p>
        </div>
        <div className="emotion-card" style={{ background: `linear-gradient(135deg, ${emotionColors['Shame']} 0%, #e8f5e8 100%)` }}>
          <div className="illustration">😇</div>
          <h4>Shame</h4>
          <p>Feeling unworthy or flawed. Remember that everyone makes mistakes and deserves compassion.</p>
        </div>
        <div className="emotion-card" style={{ background: `linear-gradient(135deg, ${emotionColors['Empathy']} 0%, #fce4ec 100%)` }}>
          <div className="illustration">🤗</div>
          <h4>Empathy</h4>
          <p>Understanding others' feelings. This strengthens connections and builds compassion.</p>
        </div>
        <div className="emotion-card" style={{ background: `linear-gradient(135deg, ${emotionColors['Determination']} 0%, #ffebee 100%)` }}>
          <div className="illustration">🎯</div>
          <h4>Determination</h4>
          <p>Commitment to goals despite challenges. Use this to fuel positive action.</p>
        </div>
      </div>

      <h3>How to Work with Your Emotions</h3>
      <div className="tips-grid">
        <div className="tip-card">
          <h4>Name Your Feelings</h4>
          <p>Simply identifying "I feel anxious" creates space between you and the emotion.</p>
        </div>
        <div className="tip-card">
          <h4>Practice Self-Compassion</h4>
          <p>Treat yourself with the same kindness you'd offer a friend in distress.</p>
        </div>
        <div className="tip-card">
          <h4>Express Through Creativity</h4>
          <p>Draw, write, or move to process emotions in healthy ways.</p>
        </div>
        <div className="tip-card">
          <h4>Seek Support</h4>
          <p>Share your feelings with trusted people who can offer understanding.</p>
        </div>
      </div>

      <p className="quote">"Your emotions are valid messengers. Listen to them with curiosity and respond with kindness."</p>
    </section>
  );
}
