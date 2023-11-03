import Func from "../functions.js"
export default {
    generateEquas() {
        equaLeft.querySelector(".equa-title").innerHTML = `<span class="equaA">${Func.randomSign()}${Func.random(15,1)}</span>x²<span class="equaB">${Func.randomSign()}${Func.random(15,1)}</span>x <span class="equaC">${Func.randomSign()}${Func.random(15,1)}</span>=0`;
        equaRight.querySelector(".equa-title").innerHTML = `<span class="equaA">${Func.randomSign()}${Func.random(15,1)}</span>x²<span class="equaB">${Func.randomSign()}${Func.random(15,1)}</span>x <span class="equaC">${Func.randomSign()}${Func.random(15,1)}</span>=0`;
      },
      solveEqua() {
        
        const solve = (equa) => {
          const D = Math.pow(equa.b, 2) - 4 * (equa.a * equa.c);

          if (D < 0) {
            return {};
          }
          const x1 = Number(((-equa.b + Math.sqrt(D)) / (2 * equa.a)).toFixed(1));
          const x2 = Number(((-equa.b - Math.sqrt(D)) / (2 * equa.a)).toFixed(1));
          return {
            x1,
            x2
          };
        }
    
        const equaLeftParams = {
          'a': Number(equaLeft.querySelector(".equaA").innerHTML),
          'b': Number(equaLeft.querySelector(".equaB").innerHTML),
          'c': Number(equaLeft.querySelector(".equaC").innerHTML)
        };
        const equaRightParams = {
          'a': Number(equaRight.querySelector(".equaA").innerHTML),
          'b': Number(equaRight.querySelector(".equaB").innerHTML),
          'c': Number(equaRight.querySelector(".equaC").innerHTML)
        }
        const equaLeftAnswers = solve(equaLeftParams);
        const equaRightAnswers = solve(equaRightParams);
        return {equaLeftAnswers,
        equaRightAnswers}
      },
      checkAnswer(equaUserAnswers) {
        const {equaLeftAnswers,
        equaRightAnswers} = this.solveEqua();

        const equaLeftAnswerX1 = equaLeftAnswers.x1 ?? 0;
        const equaLeftAnswerX2 = equaLeftAnswers.x2 ?? 0;
        const equaRightAnswerX1 = equaRightAnswers.x1 ?? 0;
        const equaRightAnswerX2 = equaRightAnswers.x2 ?? 0;
        const equaLeftUserAnswerX1 = equaUserAnswers.equaLeftUserAnswers.x1;
        const equaLeftUserAnswerX2 = equaUserAnswers.equaLeftUserAnswers.x2;
        const equaRightUserAnswerX1 = equaUserAnswers.equaRightUserAnswers.x1;
        const equaRightUserAnswerX2 = equaUserAnswers.equaRightUserAnswers.x2;

        const leftEquaCheck =(equaLeftAnswerX1 == equaLeftUserAnswerX1 || equaLeftAnswerX1 == equaLeftUserAnswerX2) && (equaLeftAnswerX2 == equaLeftUserAnswerX1 || equaLeftAnswerX2 == equaLeftUserAnswerX2);
         const rightEquaCheck = (equaRightAnswerX1 == equaRightUserAnswerX1 || equaRightAnswerX1 == equaRightUserAnswerX2) && (equaRightAnswerX2 == equaRightUserAnswerX1 || equaRightAnswerX2 == equaRightUserAnswerX2);
        if (leftEquaCheck && rightEquaCheck) {
            return true;
        }
        return false;
      
    }
}