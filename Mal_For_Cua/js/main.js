window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
}

// Replace with actual statistics
document.getElementById('stat-1').innerText = 'The gender wage gap in the Philippines is 19.7%, meaning that women earn only 80.3% of what men earn for the same work (Ibon Foundation, 2020).';
document.getElementById('stat-2').innerText = 'Only 34.5% of managerial positions in the Philippines are held by women (World Bank, 2020).';
document.getElementById('stat-3').innerText = 'The Philippines ranks 16th out of 153 countries in the Global Gender Gap Index, but progress has stalled in recent years (World Economic Forum, 2021).';


window.onload = function() {
  // Sign the Petition button
  document.getElementById('action-1').addEventListener('click', () => {
      window.open('https://www.change.org/p/sign-the-petition-for-gender-equality', '_blank');
  });

  // Donate button
  document.getElementById('action-2').addEventListener('click', () => {
      window.open('https://www.globalfundforwomen.org/get-involved/give-now/', '_blank');
  });

  // Volunteer button
  document.getElementById('action-3').addEventListener('click', () => {
      window.open('https://www.volunteerworld.com/en/volunteer-abroad/goal-5-gender-equality', '_blank');
  });
}
