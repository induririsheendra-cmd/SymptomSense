import React, { useState, useEffect } from 'react';
import SymptomInput from './components/SymptomInput';
import AssessmentResult from './components/AssessmentResult';
import Dashboard from './components/Dashboard';

const App = () => {
    const [view, setView] = useState('home');
    const [currentSymptoms, setCurrentSymptoms] = useState([]);
    const [assessmentHistory, setAssessmentHistory] = useState([]);

    useEffect(() => {
        // Load history from local storage
        const saved = localStorage.getItem('symptomSense_history');
        if (saved) {
            setAssessmentHistory(JSON.parse(saved));
        }
    }, []);

    const startAssessment = () => setView('assess');

    const handleSymptomSubmit = (symptoms) => {
        setCurrentSymptoms(symptoms);
        setView('results');
    };

    const saveResult = (result) => {
        const newEntry = {
            date: new Date().toISOString(),
            symptoms: currentSymptoms,
            topCondition: result ? result.name : 'Unknown',
            urgency: result ? result.urgency : 'low'
        };

        const newHistory = [newEntry, ...assessmentHistory];
        setAssessmentHistory(newHistory);
        localStorage.setItem('symptomSense_history', JSON.stringify(newHistory));
    };

    return (
        <div className="app-wrapper">
            <nav style={{ padding: '1.5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backdropFilter: 'blur(10px)', position: 'sticky', top: 0, zIndex: 100 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }} onClick={() => setView('home')}>
                    <div style={{ width: '30px', height: '30px', background: 'var(--color-accent-primary)', borderRadius: '8px' }}></div>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: '700', cursor: 'pointer' }}>SymptomSense</h2>
                </div>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <button className="nav-link" onClick={() => setView('home')} style={{ background: 'none', border: 'none', color: view === 'home' ? 'white' : 'var(--color-text-muted)', cursor: 'pointer' }}>Home</button>
                    <button className="nav-link" onClick={() => setView('assess')} style={{ background: 'none', border: 'none', color: view === 'assess' ? 'white' : 'var(--color-text-muted)', cursor: 'pointer' }}>Assess</button>
                    <button className="nav-link" onClick={() => setView('dashboard')} style={{ background: 'none', border: 'none', color: view === 'dashboard' ? 'white' : 'var(--color-text-muted)', cursor: 'pointer' }}>History</button>
                </div>
            </nav>

            <main className="container fade-in">
                {view === 'home' && (
                    <div style={{ textAlign: 'center', marginTop: '4rem', padding: '2rem' }}>
                        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: '1.1' }}>
                            Understand Your Health <br />
                            <span style={{ color: 'var(--color-accent-primary)' }}>In Seconds</span>
                        </h1>
                        <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
                            Advanced AI-powered symptom analysis to give you peace of mind and clear next steps.
                        </p>
                        <button className="btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2.5rem' }} onClick={startAssessment}>
                            Start Checkup
                        </button>

                        <div style={{ marginTop: '5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                            <FeatureCard title="Smart Analysis" desc="Instantly maps symptoms to potential conditions." icon="🔍" />
                            <FeatureCard title="Private & Secure" desc="Your data is stored locally on your device." icon="🔒" />
                            <FeatureCard title="Detailed Insights" desc="Get clear recommendations and urgency levels." icon="📊" />
                        </div>
                    </div>
                )}

                {view === 'assess' && (
                    <SymptomInput onSubmit={handleSymptomSubmit} />
                )}

                {view === 'results' && (
                    <AssessmentResult
                        symptoms={currentSymptoms}
                        onSave={saveResult}
                        onRetake={() => setView('assess')}
                    />
                )}

                {view === 'dashboard' && (
                    <Dashboard history={assessmentHistory} />
                )}
            </main>
        </div>
    );
};

const FeatureCard = ({ title, desc, icon }) => (
    <div className="glass-panel" style={{ padding: '2rem', textAlign: 'left' }}>
        <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{icon}</div>
        <h3 style={{ marginBottom: '0.5rem' }}>{title}</h3>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{desc}</p>
    </div>
);

export default App;
