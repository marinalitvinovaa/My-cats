const MAX_RATE_CAT = 10;

function generateRate(rate){
  const rateElement = []
  for (let index = 0; index < MAX_RATE_CAT; index++) {
    if(index < rate && rate % 1 === 0) {
      rateElement.push('<img src="src/images/Star.svg" alt="" class="rate__icons"></img>')
    } else if (index < Math.floor(rate) && rate % 1 !== 0) {
      rateElement.push('<img src="src/images/Star.svg" alt="" class="rate__icons"></img>')
    }    
    else if(index === Math.floor(rate) && rate % 1 !== 0){
      rateElement.push('<img src="src/images/star_half.svg" alt="" class="rate__icons">')
    } else {
      rateElement.push('<img src="src/images/Stargrey.svg" alt="" class="rate__icons">')
    }
  }

  return rateElement.join('');
}