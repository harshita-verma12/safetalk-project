export default function FAQs() {
  const items = [
    {
      q: 'What is SafeTalk?',
      a: 'SafeTalk is a compassionate mental health support platform designed to help you understand your emotions, connect with others, and access helpful resources. We provide tools for emotional awareness, community support, and guidance toward professional help when needed.'
    },
    {
      q: 'Is SafeTalk a replacement for professional therapy?',
      a: 'No, SafeTalk is not a substitute for professional mental health treatment. We are a supportive community and educational resource. If you are experiencing mental health challenges, we strongly recommend consulting licensed mental health professionals.'
    },
    {
      q: 'How secure is my personal information?',
      a: 'We take privacy seriously. User data is encrypted and stored securely. We never share personal information without consent. For detailed privacy information, please review our privacy policy.'
    },
    {
      q: 'Can I remain anonymous?',
      a: 'Yes, you can participate in most activities anonymously. However, some features like personalized journaling require account creation for data security.'
    },
    {
      q: 'What should I do in a mental health crisis?',
      a: 'If you or someone you know is in immediate danger, contact emergency services (911 in the US) or go to the nearest emergency room. For 24/7 crisis support, call the National Suicide Prevention Lifeline at 988 (US) or text HOME to 741741 for Crisis Text Line.'
    },
    {
      q: 'How can I support someone experiencing mental health challenges?',
      a: 'Listen without judgment, offer empathy, encourage professional help, and take care of yourself. Avoid giving unsolicited advice. Resources like NAMI (National Alliance on Mental Illness) offer excellent guides for supporting loved ones.'
    },
    {
      q: 'What are the signs of good mental health?',
      a: 'Good mental health includes emotional regulation, positive relationships, meaningful activities, resilience, self-awareness, and the ability to cope with stress. It is not the absence of difficulties but the presence of healthy coping strategies.'
    },
    {
      q: 'How does journaling help mental health?',
      a: 'Journaling promotes self-reflection, helps process emotions, reduces stress, and improves self-awareness. Regular journaling can help identify patterns, express gratitude, and track personal growth.'
    },
    {
      q: 'What role does sleep play in mental health?',
      a: 'Sleep is crucial for emotional regulation, memory consolidation, and stress management. Poor sleep can worsen anxiety, depression, and cognitive function. Aim for 7-9 hours of quality sleep per night.'
    },
    {
      q: 'How can I build emotional resilience?',
      a: 'Practice self-compassion, maintain social connections, develop healthy coping skills, stay physically active, and seek support when needed. Resilience grows through experience and learning from challenges.'
    },
    {
      q: 'What are healthy boundaries and why are they important?',
      a: 'Boundaries are limits we set to protect our emotional, physical, and mental well-being. They help maintain healthy relationships, prevent burnout, and ensure our needs are respected.'
    },
    {
      q: 'How do I know when to seek professional help?',
      a: 'Consider professional help when symptoms interfere with daily life, relationships, or work; when self-help strategies aren\'t sufficient; or when experiencing persistent sadness, anxiety, or other concerning symptoms.'
    },
    {
      q: 'What types of mental health professionals are there?',
      a: 'Common professionals include psychiatrists (medical doctors who can prescribe medication), psychologists (PhD-level therapists), licensed clinical social workers (LCSW), licensed professional counselors (LPC), and marriage/family therapists (MFT).'
    },
    {
      q: 'How can I find affordable mental health care?',
      a: 'Check with your insurance provider, community mental health centers, university counseling centers, or low-cost clinics. Many therapists offer sliding scale fees. Online platforms can help find affordable options in your area.'
    },
    {
      q: 'What is the difference between mental health and mental illness?',
      a: 'Mental health is a state of well-being where we can cope with life\'s challenges. Mental illness refers to diagnosable conditions that significantly impact functioning and may require treatment. Everyone experiences mental health challenges at times.'
    }
  ];

  return (
    <section className="page faqs">
      <h2>Frequently Asked Questions</h2>
      <p>Find answers to common questions about mental health, our platform, and getting support. If you don't find what you're looking for, feel free to contact us.</p>

      <div className="faq-grid">
        {items.map((item, index) => (
          <div key={index} className="faq-item">
            <h3>{item.q}</h3>
            <p>{item.a}</p>
          </div>
        ))}
      </div>

      <div className="additional-resources">
        <h3>Additional Resources</h3>
        <ul>
          <li><strong>National Alliance on Mental Illness (NAMI):</strong> Education, support, and advocacy</li>
          <li><strong>Mental Health America:</strong> Screening tools and local resources</li>
          <li><strong>Psychology Today:</strong> Find therapists in your area</li>
          <li><strong>Crisis Text Line:</strong> Text HOME to 741741 for 24/7 support</li>
          <li><strong>Substance Abuse and Mental Health Services Administration (SAMHSA):</strong> Treatment locator</li>
        </ul>
      </div>
    </section>
  );
}
