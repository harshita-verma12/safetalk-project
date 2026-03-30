import { useParams } from 'react-router-dom';

const posts = {
  '1': {
    title: 'Managing Anxiety with Gentle Techniques',
    body: `Anxiety can feel overwhelming, but remember that it's a natural response to stress and uncertainty. The key is learning to respond with compassion rather than resistance.

Start with your breath. Try the 4-7-8 technique: inhale for 4 counts, hold for 7, exhale for 8. This simple practice can activate your body's relaxation response.

Ground yourself in the present moment. Name 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, and 1 you can taste. This brings your awareness back to the here and now.

Be kind to yourself. Anxiety doesn't make you weak - it makes you human. Treat yourself with the same understanding you'd offer a friend in distress.

Remember, you are not your anxiety. You are the observer, capable of choosing how to respond. Each moment of awareness brings you closer to peace.`,
    image: '🧘'
  },
  '2': {
    title: 'Understanding Your Emotional Landscape',
    body: `Emotions are messengers, each carrying important information about your needs and values. Learning to listen to them is a powerful act of self-care.

Sadness might be telling you to rest and grieve. Anger could be signaling a boundary that needs protection. Joy reminds you of what brings meaning to your life.

There's no "good" or "bad" emotions - they all serve a purpose. Even difficult feelings are trying to guide you toward healing and growth.

Practice emotional awareness by naming your feelings without judgment. "I feel anxious" rather than "I am anxious." This creates space between you and the emotion.

Your emotional world is vast and beautiful, full of wisdom waiting to be discovered. Approach it with curiosity and compassion.`,
    image: '🌤️'
  },
  '3': {
    title: 'Cultivating Emotional Resilience',
    body: `Resilience isn't about never falling - it's about learning to rise again with grace. It's the quiet strength that develops through consistent self-care and compassion.

Build your support network. Surround yourself with people who see your worth and encourage your growth. Connection is the foundation of resilience.

Practice self-compassion daily. When you stumble, treat yourself with kindness. "This is hard, and I'm doing my best" can transform your relationship with challenges.

Develop coping skills that work for you. Whether it's walking in nature, journaling, or creative expression, find what helps you return to center.

Remember that resilience grows through experience. Each difficulty you navigate adds to your inner strength. You are becoming more capable with every step.`,
    image: '🌱'
  },
  '4': {
    title: 'The Power of Self-Compassion',
    body: `In our achievement-oriented world, self-compassion can feel radical. Yet it's the foundation of true emotional well-being.

Self-compassion means treating yourself with the same kindness you'd extend to a loved one. When you're struggling, ask: "What would I say to a friend in this situation?"

Practice mindfulness without judgment. Notice your thoughts and feelings without trying to change them. Awareness creates space for compassion.

Forgive yourself for being human. You will make mistakes, feel uncertain, and have difficult days. These don't define your worth.

Self-compassion is not self-indulgence - it's self-respect. It allows you to acknowledge your pain while also recognizing your strength and potential.`,
    image: '💝'
  },
  '5': {
    title: 'Finding Peace in Daily Life',
    body: `Peace is not a distant goal but a present possibility. It exists in the spaces between our thoughts, in the rhythm of our breath, in moments of simple presence.

Create rituals of calm in your day. A morning cup of tea sipped mindfully, an evening walk without purpose, a few minutes of deep breathing before sleep.

Let go of the need to control everything. Some things are beyond your influence, and that's okay. Focus on what you can nurture and change.

Practice gratitude for small things. The warmth of sunlight, the sound of rain, the comfort of a soft blanket. These simple joys are portals to peace.

Peace grows when you stop fighting against reality and start flowing with it. In acceptance, you find the calm you've been seeking.`,
    image: '🌸'
  },
  '6': {
    title: 'Building Healthy Boundaries',
    body: `Boundaries are loving limits we set to protect our energy and well-being. They allow us to show up fully for what matters most.

Recognize your limits. Pay attention to when you feel drained, resentful, or overwhelmed. These are signals that boundaries need attention.

Practice saying no with love. "I appreciate you asking, but I need to decline" honors both your needs and the other person's.

Set boundaries around your time, energy, and emotional space. Communicate them clearly and kindly, then follow through with consistency.

Remember that boundaries are an act of self-love. They create space for healthy relationships and authentic connection. You deserve to protect your peace.`,
    image: '🛡️'
  }
};

export default function BlogPost() {
  const { id } = useParams();
  const post = posts[id];

  if (!post) return <section className="page"><h2>Article not found</h2></section>;

  return (
    <section className="page blog-post">
      <div className="illustration" style={{ fontSize: '4rem', textAlign: 'center', marginBottom: '2rem' }}>{post.image}</div>
      <h2>{post.title}</h2>
      <div style={{ whiteSpace: 'pre-line', fontSize: '1.1rem', lineHeight: '1.8' }}>{post.body}</div>
      <div className="illustration" style={{ fontSize: '3rem', textAlign: 'center', marginTop: '2rem' }}>💙</div>
    </section>
  );
}
