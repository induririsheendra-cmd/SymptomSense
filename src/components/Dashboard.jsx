const Dashboard = ({ history }) => {
    return (
        <div className="fade-in" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ marginBottom: '2rem' }}>Health History</h2>

            {history.length === 0 ? (
                <div className="glass-panel" style={{ padding: '4rem', textAlign: 'center' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem', opacity: 0.5 }}>📂</div>
                    <h3>No Records Yet</h3>
                    <p style={{ color: 'var(--color-text-muted)' }}>Complete an assessment to see your history here.</p>
                </div>
            ) : (
                <div style={{ display: 'grid', gap: '1rem' }}>
                    {history.map((entry, i) => (
                        <div key={i} className="glass-panel" style={{
                            padding: '1.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            transition: 'transform 0.2s'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                <div style={{
                                    width: '50px', height: '50px',
                                    borderRadius: '12px',
                                    background: 'rgba(255,255,255,0.05)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '1.5rem'
                                }}>
                                    {entry.urgency === 'high' ? '🔴' : entry.urgency === 'moderate' ? '🟠' : '🟢'}
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem' }}>{entry.topCondition}</h4>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                                        {new Date(entry.date).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                                    </p>
                                </div>
                            </div>

                            <div style={{ textAlign: 'right' }}>
                                <span style={{
                                    fontSize: '0.8rem',
                                    background: 'rgba(255,255,255,0.1)',
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '20px'
                                }}>
                                    {entry.symptoms.length} Symptoms
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Placeholder for chart */}
            {history.length > 2 && (
                <div className="glass-panel" style={{ marginTop: '2rem', padding: '2rem', textAlign: 'center', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <p style={{ color: 'var(--color-text-muted)', marginBottom: '1rem' }}>Activity Trend</p>
                    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '10px', height: '100px' }}>
                        {history.slice(0, 5).map((_, i) => (
                            <div key={i} style={{
                                width: '30px',
                                height: `${30 + Math.random() * 70}%`,
                                background: 'var(--color-accent-primary)',
                                opacity: 0.5,
                                borderRadius: '4px'
                            }}></div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

window.Dashboard = Dashboard;
