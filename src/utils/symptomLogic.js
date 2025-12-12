window.SYMPTOMS_DB = [
    { id: 'fever', label: 'Fever', severity: 'moderate' },
    { id: 'cough', label: 'Cough', severity: 'mild' },
    { id: 'headache', label: 'Headache', severity: 'mild' },
    { id: 'fatigue', label: 'Fatigue', severity: 'mild' },
    { id: 'sore_throat', label: 'Sore Throat', severity: 'mild' },
    { id: 'shortness_of_breath', label: 'Shortness of Breath', severity: 'severe' },
    { id: 'nausea', label: 'Nausea', severity: 'moderate' },
    { id: 'chest_pain', label: 'Chest Pain', severity: 'severe' },
    // Newly added symptoms
    { id: 'body_aches', label: 'Body/Muscle Aches', severity: 'moderate' },
    { id: 'loss_of_taste', label: 'Loss of Taste/Smell', severity: 'moderate' },
    { id: 'runny_nose', label: 'Runny Nose', severity: 'mild' },
    { id: 'sneezing', label: 'Sneezing', severity: 'mild' },
    { id: 'itchy_eyes', label: 'Itchy/Watery Eyes', severity: 'mild' },
    { id: 'vomiting', label: 'Vomiting', severity: 'severe' },
    { id: 'diarrhea', label: 'Diarrhea', severity: 'moderate' },
    { id: 'abdominal_pain', label: 'Abdominal Pain', severity: 'moderate' },
    { id: 'rash', label: 'Skin Rash', severity: 'moderate' },
    { id: 'dizziness', label: 'Dizziness', severity: 'moderate' },
    { id: 'chills', label: 'Chills', severity: 'moderate' },
    { id: 'stiff_neck', label: 'Stiff Neck', severity: 'severe' },
    { id: 'confusion', label: 'Confusion', severity: 'severe' },
    // NHS Extras
    { id: 'frequent_urination', label: 'Frequent Urination', severity: 'moderate' },
    { id: 'burning_urination', label: 'Pain/Burning when Peeing', severity: 'moderate' },
    { id: 'cloudy_urine', label: 'Cloudy Urine', severity: 'mild' },
    { id: 'excessive_thirst', label: 'Excessive Thirst', severity: 'moderate' },
    { id: 'unexplained_weight_loss', label: 'Unexplained Weight Loss', severity: 'moderate' },
    { id: 'palpitations', label: 'Heart Palpitations', severity: 'moderate' },
    { id: 'pale_skin', label: 'Pale Skin', severity: 'mild' },
    { id: 'blisters', label: 'Fluid-filled Blisters', severity: 'moderate' },
];

window.CONDITIONS_DB = [
    {
        id: 'common_cold',
        name: 'Common Cold',
        symptoms: ['cough', 'sore_throat', 'headache', 'fatigue', 'runny_nose', 'sneezing'],
        message: 'Likely a viral infection. Rest and hydration recommended.',
        urgency: 'low',
        recommendation: 'Monitor at home. Consult if symptoms worsen > 3 days.'
    },
    {
        id: 'flu',
        name: 'Influenza (Flu)',
        symptoms: ['fever', 'cough', 'fatigue', 'headache', 'body_aches', 'chills', 'sore_throat'],
        message: 'Symptoms suggest the Flu. Highly contagious.',
        urgency: 'moderate',
        recommendation: 'Rest, fluids, and isolate. See a doctor if fever is high.'
    },
    {
        id: 'covid19',
        name: 'COVID-19',
        symptoms: ['fever', 'cough', 'shortness_of_breath', 'loss_of_taste', 'fatigue', 'body_aches', 'sore_throat'],
        message: 'Possible COVID-19 infection.',
        urgency: 'high',
        recommendation: 'Take a test immediately. Isolate and monitor breathing.'
    },
    {
        id: 'migraine',
        name: 'Migraine',
        symptoms: ['headache', 'nausea', 'sensitivity_to_light', 'dizziness'],
        message: 'Classic migraine symptoms.',
        urgency: 'moderate',
        recommendation: 'Rest in a dark room. Take prescribed medication.'
    },
    {
        id: 'gastroenteritis',
        name: 'Gastroenteritis (Stomach Flu)',
        symptoms: ['nausea', 'vomiting', 'diarrhea', 'abdominal_pain', 'fever', 'chills'],
        message: 'Inflammation of the stomach and intestines.',
        urgency: 'moderate',
        recommendation: 'Stay hydrated (electrolytes). Avoid solid food for a few hours. See doctor if bloody stool.'
    },
    {
        id: 'allergies',
        name: 'Seasonal Allergies (Hay Fever)',
        symptoms: ['sneezing', 'runny_nose', 'itchy_eyes', 'cough', 'headache'],
        message: 'Allergic reaction to pollen or dust.',
        urgency: 'low',
        recommendation: 'Avoid allergens. Try over-the-counter antihistamines.'
    },
    {
        id: 'pneumonia',
        name: 'Pneumonia',
        symptoms: ['fever', 'cough', 'shortness_of_breath', 'chest_pain', 'fatigue', 'confusion'],
        message: 'Infection infouces the air sacs in one or both lungs.',
        urgency: 'high',
        recommendation: 'Seek medical attention immediately. May require antibiotics.'
    },
    {
        id: 'meningitis',
        name: 'Meningitis',
        symptoms: ['fever', 'headache', 'stiff_neck', 'nausea', 'vomiting', 'confusion', 'sensitivity_to_light'],
        message: 'Inflammation of brain and spinal cord membranes.',
        urgency: 'high',
        recommendation: 'MEDICAL EMERGENCY. Go to ER immediately.'
    },
    {
        id: 'food_poisoning',
        name: 'Food Poisoning',
        symptoms: ['nausea', 'vomiting', 'diarrhea', 'abdominal_pain', 'fever'],
        message: 'Illness caused by bacteria or other toxins in food.',
        urgency: 'moderate',
        recommendation: 'Hydrate. See doctor if signs of dehydration occur.'
    },
    {
        id: 'bronchitis',
        name: 'Bronchitis',
        symptoms: ['cough', 'fatigue', 'shortness_of_breath', 'chest_pain', 'sore_throat', 'runny_nose'],
        message: 'Inflammation of the main airways in the lungs (bronchi).',
        urgency: 'moderate',
        recommendation: 'Rest and drink plenty of fluids. See a GP if cough lasts > 3 weeks.'
    },
    {
        id: 'chickenpox',
        name: 'Chickenpox',
        symptoms: ['blisters', 'rash', 'fever', 'body_aches', 'loss_of_appetite'],
        message: 'Common childhood illness with itchy, spotty rash.',
        urgency: 'low',
        recommendation: 'Stay away from school/work until spots scab over. Use calamine lotion for itch.'
    },
    {
        id: 'uti',
        name: 'Urinary Tract Infection (UTI)',
        symptoms: ['burning_urination', 'frequent_urination', 'cloudy_urine', 'abdominal_pain', 'fatigue'],
        message: 'Infection of the urinary system (bladder, urethra, kidneys).',
        urgency: 'moderate',
        recommendation: 'Drink water. See a GP for antibiotics if symptoms persist.'
    },
    {
        id: 'diabetes',
        name: 'Diabetes (Type 1 or 2)',
        symptoms: ['excessive_thirst', 'frequent_urination', 'fatigue', 'unexplained_weight_loss', 'itchy_eyes'],
        message: 'Chronic condition affecting blood sugar regulation.',
        urgency: 'moderate',
        recommendation: 'Consult a GP for blood tests. Monitor sugar intake.'
    },
    {
        id: 'anemia',
        name: 'Iron Deficiency Anemia',
        symptoms: ['fatigue', 'pale_skin', 'palpitations', 'shortness_of_breath', 'headache'],
        message: 'Lack of iron leading to reduced red blood cells.',
        urgency: 'low',
        recommendation: 'Increase iron intake (leafy greens, meat). See GP for blood test.'
    }
];

window.assessSymptoms = function (selectedSymptoms) {
    const results = window.CONDITIONS_DB.map(condition => {
        const matchCount = condition.symptoms.filter(s => selectedSymptoms.includes(s)).length;
        const matchPercentage = matchCount / condition.symptoms.length;

        return {
            ...condition,
            matchCount,
            confidence: matchPercentage
        };
    }).filter(r => r.confidence > 0.3)
        .sort((a, b) => b.confidence - a.confidence);

    return results;
};
