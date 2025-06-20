'use client';

import ExerciseTemplate from '@/components/templates/ExerciseTemplate';

// Datos directamente en el componente
const exercises = [
  {
    id: '1',
    name: 'Puxada frontal',
    series: 3,
    repetitions: 12,
    image: '/images/imagen 2.png'
  },
  {
    id: '2', 
    name: 'Remada curvada',
    series: 3,
    repetitions: 12,
    image: '/images/imagen 1.png'
  },
  {
    id: '3',
    name: 'Remada unilateral', 
    series: 3,
    repetitions: 12,
    image: '/images/imagen 4 .png'
  },
  {
    id: '4',
    name: 'Levantamento terra',
    series: 3,
    repetitions: 12,
    image: '/images/imagen 3 .png'
  }
];

export default function Home() {
  const handleExerciseClick = (exercise: any) => {
    console.log('Ejercicio seleccionado:', exercise.name);
    // Aquí puedes agregar la lógica de navegación o modal
  };

  return (
    <ExerciseTemplate 
      exercises={exercises}
      onExerciseClick={handleExerciseClick}
    />
  );
}