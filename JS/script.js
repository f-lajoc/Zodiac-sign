let zodSign = document.getElementById("zod-sign")
let zodMsg = document.getElementById("zod-msg")
    
 function zodiacSignCond() {
    
    if (document.getElementById('cond').value === 'Aries')    {
    zodSign.textContent = 'Aries';
    zodMsg.textContent = "Strengths: Courageous, Determined, Confident, Enthusiastic, Optimistic, Honest, Passionate."
    }
    
  else if(document.getElementById('cond').value === 'Taurus') {
    zodSign.textContent = 'Taurus'
    zodMsg.textContent = "Strengths: Reliable, Patient, Practical, Devoted, Responsible, Stable."
  }
  
   else if(document.getElementById('cond').value === 'Gemini') {
    zodSign.textContent = 'Gemini'
    zodMsg.textContent = "Strengths: Gentle, Affectionate, Curious, Adaptable, Ability To Learn Quickly and Exchange Ideas."
  }
  
  else if(document.getElementById('cond').value === 'Cancer') {
    zodSign.textContent = 'Cancer'
    zodMsg.textContent = "Strengths: Tenacious, Highly Imaginative, Loyal, Emotional, Sympathetic, Persuasive."
  }
  
  else if(document.getElementById('cond').value === 'Leo') {
    zodSign.textContent = 'Leo'
    zodMsg.textContent = "Strengths: Creative, Passionate, Generous, Warm-hearted, Cheerful, Humorous."
  }
  
  else if(document.getElementById('cond').value === 'Virgo') {
    zodSign.textContent = 'Virgo'
    zodMsg.textContent = "Strengths: Loyal, Analytical, Kind, Hardworking, Practical."
  }
  
  else if(document.getElementById('cond').value === 'Libra') {
    zodSign.textContent = 'Libra'
    zodMsg.textContent = "Strengths: Cooperative, Diplomatic, Gracious, Fair-minded, Social."
  }
  
   else if(document.getElementById('cond').value === 'Scorpio') {
    zodSign.textContent = 'Scorpio'
    zodMsg.textContent = "Strengths: Resourceful, Powerful, Brave, Passionate, A True Friend."
  }
  
   else if(document.getElementById('cond').value === 'Saggitarius') {
    zodSign.textContent = 'Saggitarius'
    zodMsg.textContent = "Strengths: Generous, Idealistic, Great Sense Of Humor."
  }
  
  else if(document.getElementById('cond').value === 'Capricorn') {
    zodSign.textContent = 'Capricorn'
    zodMsg.textContent = "Strengths: Responsible, Disciplined, Self-control, Good Managers."
  }
  
   else if(document.getElementById('cond').value === 'Aquarius') {
    zodSign.textContent = 'Aquarius'
    zodMsg.textContent = "Strengths: Progressive, Original, Independent, Humanitarian."
  }
  
  else if(document.getElementById('cond').value === 'Pisces') {
    zodSign.textContent = 'Pisces'
    zodMsg.textContent = "Strengths: Compassionate, Artistic, Intuitive, Gentle, Wise, Musical."
  }
  else{
    zodSign.textContent = ""
    zodMsg.textContent = ""
  }
}
   
    
