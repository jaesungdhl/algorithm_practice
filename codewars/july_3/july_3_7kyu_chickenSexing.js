Bob is a chicken sexer. His job is to sort baby chicks into a Male(M) and Female(F) piles. When bob can't guess can throw his hands up and declare it with a '?'.

Bob's bosses don't trust Bob's ability just yet, so they have paired him with an expert sexer. All of Bob's decisions will be checked against the experts choices to generate a correctness score.

Scoring Rules
When they agree, he gets 1 point.
When they disagree but one has said '?', he gets 0.5 points.
When they disagree completely, he gets 0 points.

function correctness(bobsDecisions, expertDecisions) {
    let score = 0;
    let scoreCard = ['M', '?', 'F'];
    for(let i = 0 ; i < bobsDecisions.length ; i++){
      if(scoreCard.indexOf(bobsDecisions[i]) === scoreCard.indexOf(expertDecisions[i])){
        score++;
      } else if(bobsDecisions[i] !== '?' && expertDecisions[i] !== '?' && scoreCard.indexOf(bobsDecisions[i]) !== scoreCard.indexOf(expertDecisions[i])){
        score += 0;
      } else {
        score += 0.5;
      }
    }
    return score;
  }

  const correctness=(a,b)=>b.reduce((x,y,i)=>x+(a[i]==y?1:(a[i]+y).includes("?")?0.5:0),0)