'use client';

import ExerciseTemplate from '@/components/templates/ExerciseTemplate';

// Datos directamente en el componente
const exercises = [
  {
    id: '1',
    name: 'Puxada frontal',
    series: 3,
    repetitions: 12,
    image: '/images/exercises/puxada-frontal.jpg'
  },
  {
    id: '2', 
    name: 'Remada curvada',
    series: 3,
    repetitions: 12,
    image: '/images/exercises/remada-curvada.jpg'
  },
  {
    id: '3',
    name: 'Remada unilateral', 
    series: 3,
    repetitions: 12,
    image: '/images/exercises/remada-unilateral.jpg'
  },
  {
    id: '4',
    name: 'Levantamento terra',
    series: 3,
    repetitions: 12,
    image: '/images/exercises/levantamento-terra.jpg'
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
