const AssessmentResult = ({ symptoms, onSave, onRetake }) => {
    const [results, setResults] = React.useState([]);
    const [saved, setSaved] = React.useState(false);

    React.useEffect(() => {
        // Use window.assessSymptoms
        const analysis = window.assessSymptoms(symptoms);
        setResults(analysis);
    }, [symptoms]);

    const handleSave = () => {
        onSave(results[0]);
        setSaved(true);
    };

    return (
        <div className="fade-in" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Assessment Complete</h2>
                <p style={{ color: 'var(--color-text-muted)' }}>Based on {symptoms.length} symptoms provided.</p>
            </div>

            {results.length > 0 ? (
                <div style={{ display: 'grid', gap: '1.5rem' }}>
                    {results.map((condition, index) => (
                        <div key={condition.id} className="glass-panel" style={{
                            padding: '2rem',
                            borderLeft: index === 0 ? '4px solid var(--color-accent-primary)' : '1px solid var(--glass-border)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            {index === 0 && <div style={{
                                position: 'absolute', top: 0, right: 0,
                                background: 'var(--color-accent-primary)', padding: '0.25rem 1rem',
                                borderBottomLeftRadius: '12px', fontSize: '0.8rem', fontWeight: 'bold'
                            }}>Top Match</div>}

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                <div>
                                    <h3 style={{ fontSize: '1.5rem' }}>{condition.name}</h3>
                                    <div style={{
                                        display: 'inline-block',
                                        marginTop: '0.5rem',
                                        padding: '0.25rem 0.75rem',
                                        borderRadius: '12px',
                                        background: getUrgencyColor(condition.urgency),
                                        fontSize: '0.8rem', fontWeight: '600', textTransform: 'uppercase'
                                    }}>
                                        {condition.urgency} Urgency
                                    </div>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--color-accent-primary)' }}>
                                        {Math.round(condition.confidence * 100)}%
                                    </div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Match Confidence</div>
                                </div>
                            </div>

                            <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>{condition.message}</p>

                            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '12px' }}>
                                <h4 style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <span>🩺</span> Recommendation
                                </h4>
                                <p style={{ color: 'var(--color-text-muted)' }}>{condition.recommendation}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center' }}>
                    <h3>No Specific Matches Found</h3>
                    <p style={{ color: 'var(--color-text-muted)', marginTop: '1rem' }}>
                        Your symptoms didn't strongly match our database conditions. Please consult a healthcare provider for a proper diagnosis.
                    </p>
                </div>
            )}

            <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                {!saved && (
                    <button className="btn-primary" onClick={handleSave}>
                        Save to History
                    </button>
                )}
                {saved && (
                    <button className="glass-panel" style={{ padding: '0.75rem 1.5rem', cursor: 'default', color: 'var(--color-success)', fontWeight: 'bold' }}>
                        ✓ Saved
                    </button>
                )}
                <button
                    onClick={onRetake}
                    style={{
                        background: 'transparent', border: '1px solid var(--glass-border)',
                        color: 'white', padding: '0.75rem 1.5rem', borderRadius: '12px', cursor: 'pointer'
                    }}
                >
                    Check Again
                </button>
            </div>

            <p style={{ marginTop: '2rem', textAlign: 'center', fontSize: '0.8rem', color: 'var(--color-text-muted)', opacity: 0.7 }}>
                Disclaimer: This is a preliminary assessment tool and does not replace professional medical advice.
            </p>
        </div>
    );
};

const getUrgencyColor = (level) => {
    switch (level) {
        case 'high': return 'rgba(239, 68, 68, 0.3)'; // Red
        case 'moderate': return 'rgba(245, 158, 11, 0.3)'; // Orange
        default: return 'rgba(16, 185, 129, 0.3)'; // Green
    }
};

window.AssessmentResult = AssessmentResult;
