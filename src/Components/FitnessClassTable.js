import React from 'react';
import '../Components/Styles/Fitnesstable.css';


const timeSlots = [
  { start: '05:00 AM', end: '06:00 AM' },
  { start: '06:30 AM', end: '07:30 AM' },
  { start: '08:00 AM', end: '09:30 AM' },
  { start: '02:00 PM', end: '03:30 PM' },
  { start: '03:30 PM', end: '04:30 PM' },
  { start: '04:30 PM', end: '05:30 PM' },
  { start: '05:30 PM', end: '06:30 PM' },
  { start: '06:30 PM', end: '07:30 PM' },
  { start: '07:30 PM', end: '08:30 PM' },
  { start: '08:30 PM', end: '09:30 PM' },
  { start: '09:30 PM', end: '10:00 PM' },
];

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const fitnessClasses = [
  ['BJJ', 'Wrestling', 'Armed combatives', '', 'Muay Thai', '', 'Boxing'],
  ['', 'BJJ', '', 'Boxing', '', 'BJJ', 'Wrestling'],
  ['', '', 'BJJ', 'Boxing', 'Boxing', 'Armed Combatives', 'Boxing'],
  ['BJJ', '', 'Muay Thai', '', 'Armed Combatives', 'BJJ', 'Boxing'],
  ['', '', 'Wrestling', 'BJJ', '', 'Muay THai', ''],
  ['', 'Boxing', 'BJJ', 'Armed Combatives', 'BJJ', 'Wrestling', ''],
  ['', 'Muay Thai', 'Boxing', '', '', 'Wrestling', ''],
  ['Muay Thai', '', '', 'BJJ', 'Wrestling', '', 'Boxing'],
  ['BJJ', '', 'Wrestling', '', 'Muay Thai', 'Wrestling', 'Armed Combatives'],
  ['BJJ', '', 'Boxing', 'Muay Thai', 'BJJ', 'Armed Combatives', 'Wrestling'],
  ['BJJ', 'Muay Thai', '', 'BJJ', 'Wrestling', 'Boxing', 'Armed Combatives'],
];

const FitnessClassTable = () => {
  return (
    <table className='tablecontainer'>
      <thead className='table'>
        <tr className='tr'>
          <th className='th'>Time Slot</th>
          {daysOfWeek.map(day => (
            <th key={day}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody className='time-slot'>
        {timeSlots.map((slot, index) => (
          <tr className='tr' key={index}>
            <td  className='td'>{slot.start} - {slot.end}</td>
            {fitnessClasses[index].map((fitnessClass, dayIndex) => (
              <td className='td' key={dayIndex}>{fitnessClass}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FitnessClassTable;