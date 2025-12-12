const SymptomInput = ({ onSubmit }) => {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [selected, setSelected] = React.useState([]);

    const toggleSymptom = (symptomId) => {
        if (selected.includes(symptomId)) {
            setSelected(selected.filter(id => id !== symptomId));
        } else {
            setSelected([...selected, symptomId]);
        }
    };

    const filteredSymptoms = window.SYMPTOMS_DB.filter(s =>
        s.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="glass-panel" style={{ padding: '2rem', maxWidth: '800px', margin: '2rem auto' }}>
            <h2 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Describe Your Symptoms</h2>

            <div style={{ marginBottom: '2rem' }}>
                <input
                    type="text"
                    placeholder="Search symptoms (e.g., Headache, Fever)..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                        width: '100%',
                        padding: '1rem',
                        borderRadius: '12px',
                        border: '1px solid rgba(255,255,255,0.1)',
                        background: 'rgba(255,255,255,0.05)',
                        color: 'white',
                        fontSize: '1rem',
                        outline: 'none'
                    }}
                />
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginBottom: '2rem' }}>
                {filteredSymptoms.map(symptom => (
                    <button
                        key={symptom.id}
                        onClick={() => toggleSymptom(symptom.id)}
                        style={{
                            padding: '0.5rem 1rem',
                            borderRadius: '20px',
                            border: `1px solid ${selected.includes(symptom.id) ? 'var(--color-accent-primary)' : 'rgba(255,255,255,0.2)'}`,
                            background: selected.includes(symptom.id) ? 'var(--color-accent-primary)' : 'transparent',
                            color: 'white',
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                            fontSize: '0.9rem'
                        }}
                    >
                        {symptom.label}
                    </button>
                ))}
                {filteredSymptoms.length === 0 && (
                    <p style={{ color: 'var(--color-text-muted)' }}>No symptoms found matching "{searchTerm}"</p>
                )}
            </div>

            <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '2rem' }}>
                <h3 style={{ marginBottom: '1rem' }}>Selected ({selected.length})</h3>
                <div style={{ minHeight: '50px', marginBottom: '2rem' }}>
                    {selected.length === 0 ? (
                        <p style={{ color: 'var(--color-text-muted)', fontStyle: 'italic' }}>No symptoms selected yet.</p>
                    ) : (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                            {selected.map(id => {
                                const s = window.SYMPTOMS_DB.find(db => db.id === id);
                                return (
                                    <span key={id} style={{
                                        background: 'rgba(255,255,255,0.1)',
                                        padding: '0.4rem 0.8rem',
                                        borderRadius: '8px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        fontSize: '0.9rem'
                                    }}>
                                        {s.label}
                                        <span onClick={() => toggleSymptom(id)} style={{ cursor: 'pointer', opacity: 0.7 }}>×</span>
                                    </span>
                                );
                            })}
                        </div>
                    )}
                </div>

                <button
                    className="btn-primary"
                    style={{ width: '100%', opacity: selected.length === 0 ? 0.5 : 1, pointerEvents: selected.length === 0 ? 'none' : 'auto' }}
                    onClick={() => onSubmit(selected)}
                >
                    Analyze Symptoms
                </button>
            </div>
        </div>
    );
};

window.SymptomInput = SymptomInput;
