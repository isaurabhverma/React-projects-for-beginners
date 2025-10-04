'use client'
import { useState, useEffect } from 'react';

export default function Home() {
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(true);
  const [mode, setMode] = useState(null); // 'home', 'revise', 'assessment', 'revise-results', 'assessment-results', 'llm-feedback'
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedLesson, setSelectedLesson] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('Easy');
  const [flashcards, setFlashcards] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredCards, setMasteredCards] = useState([]);
  const [reviseCards, setReviseCards] = useState([]);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [quizScore, setQuizScore] = useState(0);
  const [weakTopics, setWeakTopics] = useState([]);
  const [llmFeedback, setLlmFeedback] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Welcome screen animation logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcomeScreen(false);
    }, 3000); // Display welcome screen for 3 seconds
    return () => clearTimeout(timer);
  }, []);

  // Replicated CBSE NCERT Curriculum Data Structure (Expanded)
  const curriculum = {
    'Class 1': {
      'EVS': {
        'My Body': 'Parts of the body, sense organs.',
        'My Family': 'Types of families, roles of family members.',
        'Animals Around Us': 'Domestic and wild animals, animal sounds.',
      },
      'Math': {
        'Shapes and Space': 'Basic shapes, positions.',
        'Numbers from 1 to 9': 'Counting, addition, subtraction.',
        'Money': 'Identifying coins and notes.',
      },
    },
    'Class 2': {
      'EVS': {
        'Plants Around Us': 'Parts of a plant, types of plants.',
        'Food We Eat': 'Sources of food, healthy eating habits.',
        'Homes and Shelters': 'Types of houses, materials used.',
      },
      'Math': {
        'Addition and Subtraction': 'Adding and subtracting two-digit numbers.',
        'Multiplication': 'Introduction to multiplication tables.',
        'Time': 'Reading time from a clock.',
      },
    },
    'Class 3': {
      'Science': {
        'Living and Non-Living Things': 'Characteristics of living things.',
        'Our Environment': 'Air, water, land pollution.',
        'Our Solar System': 'Planes, sun, and moon.',
      },
      'Math': {
        'Division': 'Concept of division, simple division problems.',
        'Measurement': 'Measuring length, weight, and capacity.',
        'Data Handling': 'Introduction to pictographs and bar graphs.',
      },
    },
    'Class 4': {
      'Science': {
        'Human Body': 'Digestive, respiratory, and circulatory systems.',
        'States of Matter': 'Solids, liquids, and gases.',
        'Force and Energy': 'Types of force, sources of energy.',
      },
      'Math': {
        'Fractions': 'Understanding fractions, addition and subtraction of fractions.',
        'Perimeter and Area': 'Calculating perimeter and area of basic shapes.',
        'Patterns': 'Identifying and extending number patterns.',
      },
    },
    'Class 5': {
      'Science': {
        'Our Ecosystem': 'Components of an ecosystem, food chain.',
        'Natural Disasters': 'Earthquakes, floods, and droughts.',
        'Simple Machines': 'Lever, pulley, wheel and axle.',
      },
      'Math': {
        'Decimals': 'Operations on decimals.',
        'Symmetry': 'Lines of symmetry, symmetrical shapes.',
        'Percentage': 'Introduction to percentage.',
      },
    },
    'Class 6': {
      'Science': {
        'Food: Where Does It Come From?': 'Sources of food, ingredients, plant parts as food.',
        'Components of Food': 'Carbohydrates, fats, proteins, vitamins, minerals.',
        'Fibre to Fabric': 'Sources of fibre (cotton, jute, wool, silk).',
        'Sorting Materials into Groups': 'Properties of materials, distinguishing between objects.',
        'Separation of Substances': 'Methods of separation (handpicking, sieving, filtration).',
      },
      'Math': {
        'Knowing Our Numbers': 'Place value, Indian and International systems.',
        'Whole Numbers': 'Basic properties of whole numbers, number line.',
        'Playing with Numbers': 'Factors, multiples, prime and composite numbers.',
        'Basic Geometrical Ideas': 'Points, lines, rays, angles, polygons.',
      },
      'Social Science': {
        'Early Humans': 'Life of early humans, tools, fire.',
        'The Earth in the Solar System': 'Motions of the Earth, latitudes, longitudes.',
        'Panchayati Raj': 'Local self-government, gram panchayat.',
      },
    },
    'Class 7': {
      'Science': {
        'Nutrition in Plants': 'Photosynthesis, autotrophic and heterotrophic nutrition.',
        'Nutrition in Animals': 'Digestion in humans and other animals.',
        'Heat': 'Transfer of heat, conduction, convection, radiation.',
        'Acids, Bases and Salts': 'Properties of acids, bases, and neutralization.',
        'Physical and Chemical Changes': 'Reversible and irreversible changes, rust formation.',
      },
      'Math': {
        'Integers': 'Operations with integers, properties of integers.',
        'Fractions and Decimals': 'Operations on fractions and decimals.',
        'Simple Equations': 'Solving linear equations with one variable.',
        'Lines and Angles': 'Types of angles, parallel and intersecting lines.',
      },
      'Social Science': {
        'Tracing Changes Through a Thousand Years': 'Mapping, historical sources.',
        'New Kings and Kingdoms': 'Rajputs, Cholas, new dynasties.',
        'Air': 'Composition of the atmosphere, weather, climate.',
      },
    },
    'Class 8': {
      'Science': {
        'Crop Production and Management': 'Agricultural practices, tools, irrigation.',
        'Microorganisms: Friend and Foe': 'Types of microorganisms, diseases.',
        'Coal and Petroleum': 'Formation of fossil fuels, renewable resources.',
      },
      'Math': {
        'Rational Numbers': 'Properties of rational numbers, number line.',
        'Linear Equations in One Variable': 'Solving problems with linear equations.',
        'Quadrilaterals': 'Types of quadrilaterals, properties.',
      },
      'Social Science': {
        'How, When and Where': 'History, dates, historical periods.',
        'From Trade to Territory': 'East India Company, British rule.',
        'Forest and Wild Life Resources': 'Conservation, deforestation.',
      },
    },
    'Class 9': {
      'Science': {
        'Matter in Our Surroundings': 'Characteristics of particles, states of matter.',
        'Is Matter Around Us Pure': 'Mixtures, solutions, colloids.',
        'The Fundamental Unit of Life': 'Cell theory, cell organelles.',
      },
      'Math': {
        'Number Systems': 'Real numbers, rational and irrational numbers.',
        'Polynomials': 'Zeroes of a polynomial, factorization.',
        'Coordinate Geometry': 'Cartesian system, plotting points.',
      },
      'Social Science': {
        'The French Revolution': 'Causes, course, and impact.',
        'Physical Features of India': 'Himalayas, Northern Plains, Peninsular Plateau.',
        'Constitutional Design': 'The Indian Constitution, features.',
      },
    },
    'Class 10': {
      'Science': {
        'Chemical Reactions and Equations': 'Types of chemical reactions.',
        'Acids, Bases and Salts': 'pH scale, properties of acids and bases.',
        'Life Processes': 'Nutrition, respiration, transportation, excretion.',
      },
      'Math': {
        'Real Numbers': 'Euclid’s Division Lemma, HCF, LCM.',
        'Polynomials': 'Relationship between zeroes and coefficients.',
        'Pair of Linear Equations in Two Variables': 'Solving methods.',
      },
      'Social Science': {
        'The Rise of Nationalism in Europe': 'French Revolution, Italian and German unification.',
        'Resources and Development': 'Classification of resources, sustainable development.',
        'Power Sharing': 'Forms of power sharing, federalism.',
      },
    },
  };

  // IMPORTANT: Replace this with your own API key from Google AI Studio.
  // The provided key is a placeholder and will not work.
  const apiKey = "Enter your gemini api key here";  
  const apiUrl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent";

  // --- Utility Functions ---
  const showMessage = (msg) => {
    setError(msg);
  };

  const getCardStatus = (cardIndex) => {
    if (masteredCards.includes(cardIndex)) {
      return 'mastered';
    }
    if (reviseCards.includes(cardIndex)) {
      return 'revise';
    }
    return '';
  };

  const getGrade = (score) => {
    if (score >= 90) return 'A+';
    if (score >= 80) return 'A';
    if (score >= 70) return 'B';
    if (score >= 60) return 'C';
    if (score >= 50) return 'D';
    return 'F';
  };
  
  const getGradeColor = (grade) => {
    if (grade === 'A+' || grade === 'A') return 'text-green-400';
    if (grade === 'B') return 'text-blue-400';
    if (grade === 'C') return 'text-yellow-400';
    return 'text-red-400';
  };

  const calculateScore = () => {
    let correctAnswers = 0;
    let newWeakTopics = [];
    quizQuestions.forEach(q => {
      const userAnswer = userAnswers[q.id]?.toLowerCase().trim();
      const correctAnswer = q.answer?.toLowerCase().trim();
      if (userAnswer === correctAnswer) {
        correctAnswers++;
      } else {
        newWeakTopics.push({
          question: q.question,
          correctAnswer: q.answer
        });
      }
    });
    setWeakTopics(newWeakTopics);
    setQuizScore(Math.round((correctAnswers / quizQuestions.length) * 100));
  };

  // --- API Call Functions ---
  const callLLM = async (systemPrompt, userPrompt, responseSchema) => {
    const payload = {
      contents: [{ parts: [{ text: userPrompt }] }],
      systemInstruction: { parts: [{ text: systemPrompt }] },
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
      }
    };
    
    
    let response;
    try {
      response = await fetch(`${apiUrl}?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`API call failed with status: ${response.status}`);
      }
      
      const result = await response.json();
      const generatedContent = result.candidates?.[0]?.content?.parts?.[0]?.text;

      if (!generatedContent) {
        throw new Error('API response was empty or malformed.');
      }
      
      return JSON.parse(generatedContent);

    } catch (e) {
      console.error("Error calling LLM:", e);
      throw new Error(`Failed to generate content. Reason: ${e.message}`);
    }
  };

  const generateFlashcards = async () => {
    if (!selectedLesson) {
      showMessage('Please select a lesson to generate flashcards.');
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const systemPrompt = `You are an expert tutor creating a set of 10-15 flashcards. Your task is to generate a JSON array of flashcard objects, each with 'question' and 'answer' properties. The content should be short, simple, and child-friendly, based on the user's provided topic.`;
      const userPrompt = `Generate 12 flashcards on the topic: ${selectedLesson}.`;
      const responseSchema = {
        type: "ARRAY",
        items: {
          type: "OBJECT",
          properties: { "question": { "type": "STRING" }, "answer": { "type": "STRING" } },
          propertyOrdering: ["question", "answer"]
        }
      };

      const data = await callLLM(systemPrompt, userPrompt, responseSchema);
      setFlashcards(data);
      setMode('revise');
    } catch (e) {
      showMessage(e.message);
    } finally {
      setLoading(false);
    }
  };

  const generateQuiz = async () => {
    if (!selectedLesson) {
      showMessage('Please select a lesson to generate a quiz.');
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const systemPrompt = `You are an expert teacher creating a quiz. Generate a JSON array of 10 quiz questions based on the topic. Questions should be a mix of multiple-choice ('mcq'), fill-in-the-blanks ('blank'), and short answer ('short').`;
      const userPrompt = `Generate 10 quiz questions on the topic: ${selectedLesson}. Difficulty: ${selectedDifficulty}. The questions should be an array of objects.`;
      const responseSchema = {
        type: "ARRAY",
        items: {
          type: "OBJECT",
          properties: {
            "id": { "type": "STRING" },
            "type": { "type": "STRING" }, // 'mcq', 'blank', 'short'
            "question": { "type": "STRING" },
            "options": { "type": "ARRAY", "items": { "type": "STRING" } }, // Only for MCQ
            "answer": { "type": "STRING" }
          },
          propertyOrdering: ["id", "type", "question", "options", "answer"]
        }
      };

      const data = await callLLM(systemPrompt, userPrompt, responseSchema);
      setQuizQuestions(data.map((q, index) => ({ ...q, id: `q${index}` })));
      setMode('assessment');
    } catch (e) {
      showMessage(e.message);
    } finally {
      setLoading(false);
    }
  };

  const generateFlashcardsForWeakTopics = async () => {
    setLoading(true);
    setError(null);
    try {
      const systemPrompt = `You are an expert tutor creating a set of 10-15 flashcards. Your task is to generate a JSON array of flashcard objects, each with 'question' and 'answer' properties. The content should be short, simple, and child-friendly, based on the user's provided topics.`;
      const userPrompt = `Generate flashcards for the following weak topics: ${weakTopics.map(t => t.question).join(', ')}.`;
      const responseSchema = {
        type: "ARRAY",
        items: {
          type: "OBJECT",
          properties: { "question": { "type": "STRING" }, "answer": { "type": "STRING" } },
          propertyOrdering: ["question", "answer"]
        }
      };
      const data = await callLLM(systemPrompt, userPrompt, responseSchema);
      setFlashcards(data);
      setMode('revise');
      setCurrentCardIndex(0);
      setIsFlipped(false);
      setMasteredCards([]);
      setReviseCards([]);
    } catch (e) {
      showMessage(e.message);
    } finally {
      setLoading(false);
    }
  };

  const getLLMFeedback = async () => {
    setLoading(true);
    setError(null);
    try {
      const systemPrompt = `You are an empathetic, expert tutor providing personalized feedback to a student. Your goal is to analyze their quiz performance, provide encouragement, and offer clear, actionable next steps. Your response should be a single JSON object with the following properties: 'summary', 'strongPoints', 'weakPoints', 'nextSteps', and 'canMoveOn' (a boolean). The feedback should be friendly and simple.`;

      const quizSummary = quizQuestions.map(q => {
        const userAnswer = userAnswers[q.id]?.toLowerCase().trim();
        const correctAnswer = q.answer?.toLowerCase().trim();
        const result = userAnswer === correctAnswer ? '✅' : '❌';
        return `Question: ${q.question}, Correct: ${q.answer}, User Answer: (${userAnswer}). Result: ${result}`;
      }).join('\n');

      const userPrompt = `Here are the quiz questions and the student's answers. Analyze their performance and provide a report.
      
      ${quizSummary}`;

      const responseSchema = {
        type: "OBJECT",
        properties: {
          "summary": { "type": "STRING" },
          "strongPoints": { "type": "ARRAY", "items": { "type": "STRING" } },
          "weakPoints": { "type": "ARRAY", "items": { "type": "STRING" } },
          "nextSteps": { "type": "ARRAY", "items": { "type": "STRING" } },
          "canMoveOn": { "type": "BOOLEAN" }
        },
        propertyOrdering: ["summary", "strongPoints", "weakPoints", "nextSteps", "canMoveOn"]
      };

      const data = await callLLM(systemPrompt, userPrompt, responseSchema);
      setLlmFeedback(data);
      setMode('llm-feedback');

    } catch (e) {
      showMessage(e.message);
    } finally {
      setLoading(false);
    }
  };

  // --- UI Handlers ---
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNextCard = () => {
    setIsFlipped(false);
    if (currentCardIndex < flashcards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    } else {
      setMode('revise-results');
    }
  };

  const handleReviseAgain = (e) => {
    e.stopPropagation();     
    setReviseCards(prev => [...prev, currentCardIndex]);
    handleNextCard();
  };

  const handleKnewThis = (e) => {
    e.stopPropagation(); // Prevents the event from bubbling up to the card, stopping the flip.
    setMasteredCards(prev => [...prev, currentCardIndex]);
    handleNextCard();
  };
  
  const handleQuizChange = (e, qId) => {
    setUserAnswers({ ...userAnswers, [qId]: e.target.value });
  };

  const handleSubmitQuiz = () => {
    calculateScore();
    getLLMFeedback();
  };

  const handleRestart = () => {
    setMode(null);
    setFlashcards([]);
    setQuizQuestions([]);
    setCurrentCardIndex(0);
    setIsFlipped(false);
    setMasteredCards([]);
    setReviseCards([]);
    setUserAnswers({});
    setQuizScore(0);
    setWeakTopics([]);
    setLlmFeedback(null);
    setSelectedClass('');
    setSelectedSubject('');
    setSelectedLesson('');
    setSelectedDifficulty('Easy');
  };

  // --- Rendering Functions ---
  const renderWelcomeScreen = () => {
    const titleText = "Flashcards!";
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-blue-200 animate-fade-out">
        <h1 className="text-8xl font-extrabold text-yellow-400 select-none flex">
          {[...titleText].map((char, index) => (
            <span
              key={index}
              className="inline-block animate-pop-in-bouncy"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {char}
            </span>
          ))}
        </h1>
        <p className="text-2xl text-purple-600 animate-fade-in-up mt-4">Your new learning adventure begins!</p>
      </div>
    );
  };

  const renderHome = () => (
    <div className="space-y-6">
      <h1 className="text-4xl font-extrabold text-white mb-8 select-none">
        Flashcards
      </h1>
      {/* Class Selection */}
      <select
        value={selectedClass}
        onChange={(e) => {
          setSelectedClass(e.target.value);
          setSelectedSubject('');
          setSelectedLesson('');
        }}
        className="w-full p-4 rounded-full bg-yellow-200 text-blue-800 font-bold focus:outline-none focus:ring-4 focus:ring-yellow-400 transition-all duration-300 transform hover:scale-105 cursor-pointer"
      >
        <option value="" disabled>Select Class</option>
        {Object.keys(curriculum).map(c => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>

      {/* Subject Selection */}
      {selectedClass && (
        <select
          value={selectedSubject}
          onChange={(e) => {
            setSelectedSubject(e.target.value);
            setSelectedLesson('');
          }}
          className="w-full p-4 rounded-full bg-green-200 text-blue-800 font-bold focus:outline-none focus:ring-4 focus:ring-green-400 transition-all duration-300 transform hover:scale-105 cursor-pointer"
        >
          <option value="" disabled>Select Subject</option>
          {Object.keys(curriculum[selectedClass]).map(s => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      )}

      {/* Lesson Selection */}
      {selectedSubject && (
        <select
          value={selectedLesson}
          onChange={(e) => setSelectedLesson(e.target.value)}
          className="w-full p-4 rounded-full bg-purple-200 text-blue-800 font-bold focus:outline-none focus:ring-4 focus:ring-purple-400 transition-all duration-300 transform hover:scale-105 cursor-pointer"
        >
          <option value="" disabled>Select Lesson</option>
          {Object.keys(curriculum[selectedClass][selectedSubject]).map(u => (
            <option key={u} value={u}>{u}</option>
          ))}
        </select>
      )}

      {/* Mode Selection */}
      {selectedLesson && (
        <>
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="w-full p-4 rounded-full bg-red-200 text-blue-800 font-bold focus:outline-none focus:ring-4 focus:ring-red-400 transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={generateFlashcards}
              className="w-full px-6 py-4 bg-purple-600 text-white font-bold rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 animate-wiggle"
            >
              🔄 Revise Mode
            </button>
            <button
              onClick={generateQuiz}
              className="w-full px-6 py-4 bg-green-600 text-white font-bold rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 animate-wiggle"
            >
              ✅ Assessment Mode
            </button>
          </div>
        </>
      )}
    </div>
  );

  const renderRevise = () => {
    if (!flashcards.length) {
      return <div>No flashcards generated.</div>;
    }
    const currentCard = flashcards[currentCardIndex];
    const cardStatus = getCardStatus(currentCardIndex);
    const borderColor = cardStatus === 'mastered' ? 'border-green-400' : cardStatus === 'revise' ? 'border-red-400' : 'border-transparent';

    return (
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-extrabold text-white mb-8 select-none">
          Flashcards
        </h1>
        <div className={`relative w-full h-80 perspective-[1000px]`}>
          <div
            onClick={handleFlip}
            className={`absolute inset-0 w-full h-full bg-transparent rounded-2xl shadow-lg cursor-pointer transform transition-all duration-200 [transform-style:preserve-3d] hover:scale-105 ${borderColor} ${isFlipped ? 'rotate-y-180' : 'rotate-y-0'}`}
          >
            {/* Card Front */}
            <div className={`absolute inset-0 flex flex-col items-center justify-center p-6 backface-hidden rounded-2xl bg-gray-700`}>
              <p className="text-3xl font-semibold text-gray-200 text-center">
                {currentCard.question}
              </p>
              <p className="text-sm mt-4 text-gray-400 italic">Tap to flip</p>
            </div>
            {/* Card Back */}
            <div className={`absolute inset-0 flex flex-col items-center justify-center p-6 backface-hidden rounded-2xl bg-gray-700 rotate-y-180`}>
              <p className="text-3xl font-bold text-white mb-6 text-center">
                {currentCard.answer}
              </p>
              <div className='flex gap-4'>
                  <button
                      onClick={handleReviseAgain}
                      className="px-4 py-2 bg-pink-500 text-white font-bold rounded-full shadow-lg hover:bg-pink-600 transition-all duration-300 transform hover:scale-105"
                  >
                      🔁 Revise Again
                  </button>
                  <button
                      onClick={handleKnewThis}
                      className="px-4 py-2 bg-green-500 text-white font-bold rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
                  >
                      ✅ I Knew This
                  </button>
              </div>
            </div>
          </div>
        </div>
        <p className="text-gray-400 mt-4 mb-6">
          Card {currentCardIndex + 1} of {flashcards.length}
        </p>
      </div>
    );
  };

  const renderAssessment = () => (
    <div className="space-y-6">
      <h1 className="text-4xl font-extrabold text-white mb-8 select-none">
        Flashcards
      </h1>
      <h2 className="text-2xl font-bold text-white mb-4">Quiz Time!</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleSubmitQuiz(); }} className="space-y-4">
        {quizQuestions.map((q, index) => (
          <div key={q.id} className="p-4 bg-gray-700 rounded-lg shadow-md">
            <p className="text-gray-200 font-semibold mb-2">{index + 1}. {q.question}</p>
            {q.type === 'mcq' && (
              <div className="space-y-2">
                {q.options.map((option, optIndex) => (
                  <label key={optIndex} className="flex items-center text-gray-400">
                    <input
                      type="radio"
                      name={`quiz-${q.id}`}
                      value={option}
                      onChange={(e) => handleQuizChange(e, q.id)}
                      className="form-radio text-indigo-500 mr-2"
                    />
                    {option}
                  </label>
                ))}
              </div>
            )}
            {(q.type === 'short' || q.type === 'blank') && (
              <input
                type="text"
                value={userAnswers[q.id] || ''}
                onChange={(e) => handleQuizChange(e, q.id)}
                className="w-full mt-2 p-2 rounded-full bg-gray-800 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-indigo-500 transition-all duration-300"
                placeholder="Your answer"
              />
            )}
          </div>
        ))}
        <button
          type="submit"
          className="w-full px-6 py-3 bg-green-600 text-white font-bold rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
        >
          Submit Quiz
        </button>
      </form>
    </div>
  );

  const renderReviseResults = () => (
    <div className="text-center space-y-4">
      <h1 className="text-4xl font-extrabold text-white mb-8 select-none">
        Flashcards
      </h1>
      <h2 className="text-3xl font-bold text-white">Flashcard Session Complete!</h2>
      <p className="text-xl text-gray-300">Total Cards: {flashcards.length}</p>
      <div className="flex justify-center space-x-6">
        <div className="p-4 bg-green-400 text-green-900 rounded-lg shadow-lg">
          <p className="text-2xl font-bold">{masteredCards.length}</p>
          <p className="text-sm">Mastered</p>
        </div>
        <div className="p-4 bg-red-400 text-red-900 rounded-lg shadow-lg">
          <p className="text-2xl font-bold">{reviseCards.length}</p>
          <p className="text-sm">Need Revision</p>
        </div>
      </div>
      <p className="text-green-300 mt-4 text-sm">Loomy points added! (placeholder)</p>
      <button
        onClick={generateQuiz}
        className="w-full px-6 py-4 bg-blue-500 text-white font-bold rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 mt-6"
      >
        Try Assessment
      </button>
      <button
        onClick={handleRestart}
        className="w-full px-6 py-4 mt-2 bg-gray-600 text-white font-bold rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
      >
        Start Over
      </button>
    </div>
  );

  const renderLLMFeedback = () => (
    <div className="text-left space-y-6">
      <h1 className="text-4xl font-extrabold text-white mb-8 select-none">
        Flashcards
      </h1>
      <h2 className="text-3xl font-bold text-white text-center">Your Learning Report</h2>
      
      <div className="p-6 bg-gray-700 rounded-lg shadow-md space-y-4">
        <p className="text-gray-300 font-semibold text-center">{llmFeedback.summary}</p>
        
        {llmFeedback.strongPoints.length > 0 && (
          <div>
            <h3 className="text-xl font-bold text-green-400">Strong Points</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-300 mt-2">
              {llmFeedback.strongPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        )}

        {llmFeedback.weakPoints.length > 0 && (
          <div>
            <h3 className="text-xl font-bold text-red-400">Weak Points</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-300 mt-2">
              {llmFeedback.weakPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        )}

        {llmFeedback.nextSteps.length > 0 && (
          <div>
            <h3 className="text-xl font-bold text-blue-400">Next Steps</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-300 mt-2">
              {llmFeedback.nextSteps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <p className="text-gray-400 text-center mt-4">
        {llmFeedback.canMoveOn ? 
          `You've got a great handle on this topic! You're ready to move on.` : 
          `It looks like this topic needs a bit more work. Let's practice!`
        }
      </p>

      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        {weakTopics.length > 0 && (
          <button
            onClick={generateFlashcardsForWeakTopics}
            className="w-full px-6 py-4 bg-red-600 text-white font-bold rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
          >
            Revise Weak Topics
          </button>
        )}
        <button
          onClick={handleRestart}
          className="w-full px-6 py-4 bg-gray-600 text-white font-bold rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
        >
          Start a New Session
        </button>
      </div>
    </div>
  );
  
  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex flex-col items-center justify-center my-8">
          <svg className="animate-spin h-10 w-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="text-indigo-400 mt-4">Analyzing your results...</p>
        </div>
      );
    }
    if (error) {
      return <div className="text-red-400 my-8">{error}</div>;
    }
    switch (mode) {
      case 'revise':
        return renderRevise();
      case 'assessment':
        return renderAssessment();
      case 'revise-results':
        return renderReviseResults();
      case 'llm-feedback':
        return renderLLMFeedback();
      default:
        return renderHome();
    }
  };

  if (showWelcomeScreen) {
    return renderWelcomeScreen();
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="bg-gray-900 p-8 rounded-3xl shadow-2xl w-full max-w-2xl text-center transform transition-all duration-500">
        <style>{`
          @keyframes pop-in {
            0% { transform: scale(0.5) translateY(20px); opacity: 0; }
            80% { transform: scale(1.1) translateY(-5px); }
            100% { transform: scale(1) translateY(0); opacity: 1; }
          }
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fade-out {
            0% { opacity: 1; }
            90% { opacity: 1; }
            100% { opacity: 0; }
          }
          @keyframes wiggle {
            0%, 100% { transform: rotate(-3deg); }
            50% { transform: rotate(3deg); }
          }
          .animate-pop-in {
            animation: pop-in 1.5s ease-out forwards;
          }
          .animate-fade-in-up {
            animation: fade-in-up 1.5s ease-out;
          }
          .animate-fade-out {
            animation: fade-out 2.5s forwards;
          }
          .animate-wiggle:hover {
            animation: wiggle 0.5s infinite;
          }
          @keyframes pop-in-bouncy {
            0% {
              opacity: 0;
              transform: scale(0.2) translateY(-100px) rotate(-90deg);
            }
            60% {
              opacity: 1;
              transform: scale(1.5) translateY(30px) rotate(15deg);
            }
            80% {
              transform: scale(0.9) translateY(-15px) rotate(-8deg);
            }
            100% {
              transform: scale(1) translateY(0) rotate(0);
            }
          }
          .animate-pop-in-bouncy {
            animation: pop-in-bouncy 1s ease-out forwards;
          }
          .perspective-\[1000px\] {
            perspective: 1000px;
          }
          .backface-hidden {
            backface-visibility: hidden;
          }
        `}</style>
        {renderContent()}
      </div>
    </div>
  );
}
