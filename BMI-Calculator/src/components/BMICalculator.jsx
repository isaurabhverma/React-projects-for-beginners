// src/components/BMICalculator.jsx
import React, { useState, useEffect } from 'react';
import { useTranslate, T } from '@tolgee/react';

const BMICalculator = () => {
  const { t } = useTranslate();
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [message, setMessage] = useState('');
  const [isCalculated, setIsCalculated] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (bmi !== null) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 500);
      return () => clearTimeout(timer);
    }
  }, [bmi]);

  const calculateBMI = (e) => {
    e.preventDefault();
    if (height && weight) {
      const bmiValue = (weight / (height * height)).toFixed(2);
      setBMI(bmiValue);
      setIsCalculated(true);
      
      if (bmiValue < 18.5) {
        setMessage(t('bmi-calculator-underweight'));
      } else if (bmiValue < 24.9) {
        setMessage(t('bmi-calculator-normal-weight'));
      } else if (bmiValue < 29.9) {
        setMessage(t('bmi-calculator-overweight'));
      } else {
        setMessage(t('bmi-calculator-obese'));
      }
    } else {
      setMessage(t('bmi-calculator-invalid-input'));
    }
  };

  const resetForm = () => {
    setHeight('');
    setWeight('');
    setBMI(null);
    setMessage('');
    setIsCalculated(false);
    setIsAnimating(false);
  };

  const getBMIColor = () => {
    if (!bmi) return 'text-gray-600';
    const bmiValue = parseFloat(bmi);
    if (bmiValue < 18.5) return 'text-blue-500';
    if (bmiValue < 24.9) return 'text-green-500';
    if (bmiValue < 29.9) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getMessageColor = () => {
    if (!bmi) return 'text-gray-600';
    const bmiValue = parseFloat(bmi);
    if (bmiValue < 18.5) return 'text-blue-600';
    if (bmiValue < 24.9) return 'text-green-600';
    if (bmiValue < 29.9) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg text-center transition-all duration-300 hover:shadow-xl">
      <h1 className="text-2xl font-bold mb-4 transition-transform duration-300 hover:scale-105">
        <T keyName="bmi-calculator-title" />
      </h1>
      
      <form onSubmit={calculateBMI} className="mb-4">
        <div className="mb-4 transition-all duration-300">
          <label className="block text-left font-medium text-gray-700 mb-1 transition-colors duration-300">
            <T keyName="bmi-calculator-height-label" />
          </label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            step="0.01"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:border-blue-300"
            placeholder={t('bmi-calculator-height-placeholder')}
            required
          />
        </div>
        
        <div className="mb-6 transition-all duration-300">
          <label className="block text-left font-medium text-gray-700 mb-1 transition-colors duration-300">
            <T keyName="bmi-calculator-weight-label" />
          </label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            step="0.1"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:border-blue-300"
            placeholder={t('bmi-calculator-weight-placeholder')}
            required
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
        >
          <T keyName="bmi-calculator-calculate-button" />
        </button>
      </form>

      {isCalculated && (
        <div
          className={`
            transition-all duration-500 transform
            ${isAnimating ? 'scale-110 opacity-90' : 'scale-100 opacity-100'}
          `}
        >
          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg border-2 border-gray-100 shadow-inner">
            <div className="flex items-center justify-center mb-4">
              <div className={`text-4xl font-bold ${getBMIColor()} transition-all duration-500 transform hover:scale-110`}>
                {bmi}
              </div>
            </div>
            
            <p className="text-lg font-semibold mb-2 transition-colors duration-300">
              <T keyName="bmi-calculator-your-bmi" params={{ bmi }} />
            </p>
            
            <div
              className={`
                text-md font-medium p-3 rounded-lg bg-white shadow-sm border
                transition-all duration-500 ${getMessageColor()}
                ${isAnimating ? 'translate-y-2' : 'translate-y-0'}
              `}
            >
              {message}
            </div>

            {/* BMI Scale Indicator */}
            <div className="mt-4 bg-gray-200 rounded-full h-2 overflow-hidden">
              <div 
                className={`h-full transition-all duration-1000 ease-out ${
                  parseFloat(bmi) < 18.5 ? 'bg-blue-500 w-1/4' :
                  parseFloat(bmi) < 24.9 ? 'bg-green-500 w-1/2' :
                  parseFloat(bmi) < 29.9 ? 'bg-yellow-500 w-3/4' :
                  'bg-red-500 w-full'
                }`}
                style={{
                  transition: 'width 1s ease-out, background-color 1s ease-out'
                }}
              ></div>
            </div>

            <button
              onClick={resetForm}
              className="mt-6 px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 active:scale-95 w-full"
            >
              <T keyName="bmi-calculator-reset-button" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
