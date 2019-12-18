export const dictionary = (itemname) => {
    
    var drugs = {
        "Ibuprofen" : "Ibuprofen",
        "Advil" : "Ibuprofen",
        "NeoProfen" : "Ibuprofen",
        "Acetaminophen" : "Acetaminophen",
        "Tylenol" : "Acetaminophen",
        "Ofirmev" : "Acetaminophen",
        "Mapap" : "Acetaminophen",
        "Gabapentin" : "Gabapentin",
        "Neurontin" : "Gabapentin",
        "Lortab" : "Hydrocodone-Acetaminophen",
        "Norco" : "Hydrocodone-Acetaminophen",
        "Vicodin" : "Hydrocodone-Acetaminophen",
        "Simvastatin" : "Simvastatin",
        "Zocor" : "Simvastatin",
        "Prinivil" : "Lisinopril",
        "Zestril" : "Lisinopril",
        "Lisinopril": "Lisinopril",
        "Levothroid" : "Levothyroxine",
        "Levoxyl" : "Levothyroxine",
        "Synthroid" : "Levothyroxine",
        "Unithroid" : "Levothyroxine",
        "Azithromycin" : "Azithromycin",
        "Zithromax" : "Azithromycin",
        "Metformin" : "Metformin",
        "Glucophage" : "Metformin",
        "Lipitor" : "Lipitor",
        "Atorvastatin" : "Lipitor",
        "Amlodipine" : "Amlodipine",
        "Katerzia" : "Amlodipine",
        "Norvasc" : "Amlodipine",
        "Amoxicillin" : "Amoxicillin",
        "Amoxicil" : "Amoxicillin",
        "Hydrochlorothiazide" : "Hydrochlorothiazide",
        "Microzide" : "Hydrochlorothiazide",
        
        else: "None"
     }
     
    var dict = {};
    console.log("In Dictionary");
    console.log(itemname);
    
    
    dict["Ibuprofen"] = {
        name: "Ibuprofen",
        alts: "Advil, NeoProfen",
        uses :"Ibuprofen is used to relieve pain from various conditions such as headache, dental pain, menstrual cramps, muscle aches, or arthritis. It is also used to reduce fever and to relieve minor aches and pain due to the common cold or flu. Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID). It works by blocking your body's production of certain natural substances that cause inflammation. This effect helps to decrease swelling, pain, or fever.",
        side_effects: "Upset stomach, nausea, vomiting, headache, diarrhea, constipation, dizziness, or drowsiness may occur. If any of these effects persist or worsen, tell your doctor or pharmacist promptly.",
        donottake: "Before taking this medication, tell your doctor or pharmacist your medical history, especially of: asthma (including a history of worsening breathing after taking aspirin or other NSAIDs), blood disorders (such as anemia, bleeding/clotting problems), growths in the nose (nasal polyps), heart disease (such as previous heart attack), high blood pressure, liver disease, stroke, throat/stomach/intestinal problems (such as bleeding, heartburn, ulcers).",
        image: "https://www.drugs.com/images/pills/fio/MAJ67470.JPG"
    };
    
    dict["Acetaminophen"] = {
        name:"Acetaminophen",
        alts: "Tylenol, Ofirmev, Mapap",
        uses:"This drug is used to treat mild to moderate pain (from headaches, menstrual periods, toothaches, backaches, osteoarthritis, or cold/flu aches and pains) and to reduce fever.",
        side_effects: "This drug usually has no side effects. If you have any unusual effects, contact your doctor or pharmacist promptly.",
        donottake: "Before using this product, tell your doctor or pharmacist your medical history, especially of: liver disease, regular use/abuse of alcohol.",
        image: "https://www.drugs.com/images/pills/custom/pill13082-1/acetaminophen.jpg"
    };
    
    dict["Gabapentin"] = {
        name:"Gabapentin",
        alts: "Neurontin",
        uses:"Gabapentin is used with other medications to prevent and control seizures. It is also used to relieve nerve pain following shingles (a painful rash due to herpes zoster infection) in adults. Gabapentin is known as an anticonvulsant or antiepileptic drug.",
        side_effects: "Drowsiness, dizziness, loss of coordination, tiredness, blurred/double vision, unusual eye movements, or shaking (tremor) may occur. If any of these effects persist or worsen, tell your doctor or pharmacist promptly.",
        donottake: "Before using this medication, tell your doctor or pharmacist your medical history, especially of: kidney disease, mental/mood problems (such as depression, thoughts of suicide), use/abuse of drugs/alcohol, breathing problems.",
        image: "https://www.grxstatic.com/d4fuqqd5l3dbz/products/DrugItem_14345.JPG",
    };

    dict["Hydrocodone-Acetaminophen"] = {
        name:"Hydrocodone-Acetaminophen",
        alts: "Lortab, Norco, Vicodin",
        uses:"This combination medication is used to relieve moderate to severe pain. It contains an opioid (narcotic) pain reliever (hydrocodone) and a non-opioid pain reliever (acetaminophen). Hydrocodone works in the brain to change how your body feels and responds to pain. Acetaminophen can also reduce a fever.",
        side_effects: "Nausea, vomiting, constipation, lightheadedness, dizziness, or drowsiness may occur. Some of these side effects may decrease after you have been using this medication for a while. If any of these effects persist or worsen, tell your doctor or pharmacist promptly.",
        donottake: "Before taking this medication, tell your doctor or pharmacist if you are allergic to it; or to other opioids (such as benzhydrocodone, hydromorphone, morphine, codeine); or if you have any other allergies. This product may contain inactive ingredients, which can cause allergic reactions or other problems. Talk to your pharmacist for more details.",
        image: "https://img.medscapestatic.com/pi/features/drugdirectory/octupdate/MKR03650.jpg"
    };
    
    dict["Simvastatin"] = {
        name:"Simvastatin",
        alts: "Zocor",
        uses:"Simvastatin is used along with a proper diet to help lower 'bad' cholesterol and fats (such as LDL, triglycerides) and raise 'good' cholesterol (HDL) in the blood. It belongs to a group of drugs known as 'statins.' It works by reducing the amount of cholesterol made by the liver. Lowering 'bad' cholesterol and triglycerides and raising 'good' cholesterol decreases the risk of heart disease and helps prevent strokes and heart attacks.",
        side_effects: "A very small number of people taking simvastatin may have mild memory problems or confusion. If these rare effects occur, talk to your doctor. Rarely, statins may cause or worsen diabetes. Talk to your doctor about the benefits and risks. This drug may rarely cause muscle problems (which can rarely lead to very serious conditions called rhabdomyolysis and autoimmune myopathy). Females, older adults, and Chinese people may be at higher risk. Tell your doctor right away if you develop any of these symptoms during treatment and if these symptoms last after your doctor stops this drug: muscle pain/tenderness/weakness (especially with fever or unusual tiredness), signs of kidney problems (such as change in the amount of urine).",
        donottake: "Before taking simvastatin, tell your doctor or pharmacist if you are allergic to it; or if you have any other allergies. This product may contain inactive ingredients, which can cause allergic reactions or other problems. Talk to your pharmacist for more details. Before using this medication, tell your doctor or pharmacist your medical history, especially of: liver disease, kidney disease, alcohol use.",
        image: "https://img.medscapestatic.com/pi/features/drugdirectory/octupdate/BLU03030.jpg"
    };
    
    dict["Lisinopril"] = {
        name:"Lisinopril",
        alts: "Prinivil, Zestril",
        uses:"Lisinopril is used to treat high blood pressure. Lowering high blood pressure helps prevent strokes, heart attacks, and kidney problems. It is also used to treat heart failure and to improve survival after a heart attack. Lisinopril belongs to a class of drugs known as ACE inhibitors. It works by relaxing blood vessels so blood can flow more easily.",
        side_effects: "Dizziness, lightheadedness, tiredness, or headache may occur as your body adjusts to the medication. Dry cough may also occur. If any of these effects last or get worse, tell your doctor or pharmacist promptly. To reduce the risk of dizziness and lightheadedness, get up slowly when rising from a sitting or lying position.",
        donottake: "Before taking lisinopril, tell your doctor or pharmacist if you are allergic to it; or to other ACE inhibitors (such as benazepril); or if you have any other allergies. This product may contain inactive ingredients, which can cause allergic reactions or other problems. Talk to your pharmacist for more details.",
        image: "https://img.medscapestatic.com/pi/features/drugdirectory/octupdate/LUP05151.jpg"
    };
    
    dict["Levothyroxine"] = {
        name:"Levothyroxine",
        alts: "Levothroid, Levoxyl, Synthroid, Unithroid",
        uses:"Levothyroxine is used to treat an underactive thyroid (hypothyroidism). It replaces or provides more thyroid hormone, which is normally produced by the thyroid gland. Low thyroid hormone levels can occur naturally or when the thyroid gland is injured by radiation/medications or removed by surgery. Having enough thyroid hormone is important for maintaining normal mental and physical activity. In children, having enough thyroid hormone is important for normal mental and physical development.",
        side_effects: "Tell your doctor right away if any of these unlikely but serious effects of high thyroid hormone levels occur: increased sweating, sensitivity to heat, mental/mood changes (such as nervousness, mood swings), tiredness, diarrhea, shaking (tremor), headache, shortness of breath, bone pain, easily broken bones.",
        donottake: "Before using this medication, tell your doctor or pharmacist your medical history, especially of: increased thyroid hormones (thyrotoxicosis), decreased adrenal gland function, heart disease (such as coronary artery disease, irregular heartbeat), high blood pressure, diabetes.",
        image: "https://i5.walmartimages.com/asr/08bd0bfa-000d-42e7-ba61-f9af66ce6d56_1.312180a28ef3408e8b8476b7f0f5937a.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF"
    };
    
    dict["Azithromycin"] = {
        name:"Azithromycin",
        alts: "Zithromax",
        uses:"Azithromycin is used to treat a wide variety of bacterial infections. It is a macrolide-type antibiotic. It works by stopping the growth of bacteria.",
        side_effects: "Stomach upset, diarrhea/loose stools, nausea, vomiting, or abdominal pain may occur. If any of these effects persist or worsen, tell your doctor or pharmacist promptly.",
        donottake: "Before using this medication, tell your doctor or pharmacist your medical history, especially of: liver disease, kidney disease, a certain muscle disease (myasthenia gravis). Azithromycin may cause a condition that affects the heart rhythm (QT prolongation). QT prolongation can rarely cause serious (rarely fatal) fast/irregular heartbeat and other symptoms (such as severe dizziness, fainting) that need medical attention right away.",
        image: "https://img.medscapestatic.com/pi/features/drugdirectory/octupdate/LUP01600.jpg"
    };
    
    dict["Metformin"] = {
        name:"Metformin",
        alts: "Glucophage",
        uses:"Metformin is used with a proper diet and exercise program and possibly with other medications to control high blood sugar. It is used in patients with type 2 diabetes. Controlling high blood sugar helps prevent kidney damage, blindness, nerve problems, loss of limbs, and sexual function problems. Proper control of diabetes may also lessen your risk of a heart attack or stroke. Metformin works by helping to restore your body's proper response to the insulin you naturally produce. It also decreases the amount of sugar that your liver makes and that your stomach/intestines absorb.",
        side_effects: "Nausea, vomiting, stomach upset, diarrhea, weakness, or a metallic taste in the mouth may occur. If any of these effects persist or worsen, tell your doctor or pharmacist promptly. If stomach symptoms return later (after taking the same dose for several days or weeks), tell your doctor right away. Stomach symptoms that occur after the first days of your treatment may be signs of lactic acidosis.",
        donottake: "Before using this medication, tell your doctor or pharmacist your medical history, especially of: severe breathing problems (such as obstructive lung disease, severe asthma), blood problems (such as anemia, vitamin B12 deficiency), kidney disease, liver disease.",
        image: "https://img.medscapestatic.com/pi/features/drugdirectory/octupdate/ING01540.jpg"
    };
    
    dict["Lipitor"] = {
        name:"Lipitor",
        alts: "Atorvastatin",
        uses: "Lipitor is used along with a proper diet to help lower 'bad' cholesterol and fats (such as LDL, triglycerides) and raise 'good' cholesterol (HDL) in the blood. It belongs to a group of drugs known as statins. It works by reducing the amount of cholesterol made by the liver. Lowering 'bad' cholesterol and triglycerides and raising 'good' cholesterol decreases the risk of heart disease and helps prevent strokes and heart attacks.",
        side_effects: "A very small number of people taking atorvastatin may have mild memory problems or confusion. If these rare effects occur, talk to your doctor. Rarely, statins may cause or worsen diabetes. Talk to your doctor about the benefits and risks.",
        donottake: "Before using this medication, tell your doctor or pharmacist your medical history, especially of: liver disease, kidney disease, alcohol use.",
        image: "https://img.medscapestatic.com/pi/features/drugdirectory/octupdate/PKD01580.jpg"
    };
    
    dict["Amlodipine"] = {
        name:"Amlodipine",
        alts: "Katerzia, Norvasc",
        uses:"Amlodipine is used with or without other medications to treat high blood pressure. Lowering high blood pressure helps prevent strokes, heart attacks, and kidney problems. Amlodipine belongs to a class of drugs known as calcium channel blockers. It works by relaxing blood vessels so blood can flow more easily.",
        side_effects: "Dizziness, lightheadedness, swelling ankles/feet, or flushing may occur. If any of these effects persist or worsen, tell your doctor or pharmacist promptly. To lower your risk of dizziness and lightheadedness, get up slowly when rising from a sitting or lying position.",
        donottake: "Before using this medication, tell your doctor or pharmacist your medical history, especially of: a certain structural heart problem (aortic stenosis), very low blood pressure, liver disease.",
        image: "https://img.medscapestatic.com/pi/features/drugdirectory/octupdate/UCP02430.jpg"
    };
    
    dict["Amoxicillin"] = {
        name:"Amoxicillin",
        alts: "Amoxil",
        uses:"Amoxicillin is used to treat a wide variety of bacterial infections. This medication is a penicillin-type antibiotic. It works by stopping the growth of bacteria.",
        side_effects: "Nausea, vomiting, or diarrhea may occur. If any of these effects persist or worsen, tell your doctor or pharmacist promptly.",
        donottake: "Before using this medication, tell your doctor or pharmacist your medical history, especially of: kidney disease, a certain type of viral infection (infectious mononucleosis).",
        image: "https://img.medscapestatic.com/pi/features/drugdirectory/octupdate/SKB60460.jpg"
    };
    
    dict["Hydrochlorothiazide"] = {
        name:"Hydrochlorothiazide",
        alts: "Microzide",
        uses:"This medication is used to treat high blood pressure. Lowering high blood pressure helps prevent strokes, heart attacks, and kidney problems. Hydrochlorothiazide belongs to a class of drugs known as diuretics/water pills. It works by causing you to make more urine. This helps your body get rid of extra salt and water.",
        side_effects: "Upset stomach, dizziness, or headache may occur as your body adjusts to the medication. If any of these effects last or get worse, tell your doctor or pharmacist promptly.",
        donottake: "Before using this medication, tell your doctor or pharmacist your medical history, especially of: diabetes, gout, kidney disease, liver disease, lupus, skin cancer.",
        image: "https://img.medscapestatic.com/pi/features/drugdirectory/octupdate/HER00080.jpg"
    };


    
    if(dict[drugs[itemname]] != null){ 
        console.log(dict[drugs[itemname]])
        return (dict[drugs[itemname]]);
    }
    else{
        
        return 0;
    }
}