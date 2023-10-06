import ruleValidator from "./validateRules.js";
import { rulesContent } from "./rulesContent.js";


export function validatePsw(){
    let password = document.getElementById('password').value;
    addRule('rule1');
    const rule1=ruleValidator.rule1(password);
    const rule2 = ruleValidator.rule2(password);
    const rule3 = ruleValidator.rule3(password);
    const rule4 = ruleValidator.rule4(password);
    const rule5 = ruleValidator.rule5(password);
    const rule6 = ruleValidator.rule6(password);
    const rule7 = ruleValidator.rule7(password);
    const rule8 = ruleValidator.rule8(password);

    if (ruleValidator.rule1(password)){
        addRule('rule2');
    }
    if (ruleValidator.rule2(password)){
        addRule('rule3');
    }
    if (ruleValidator.rule3(password)){
        addRule('rule4');
    }
    if (ruleValidator.rule4(password)){
        addRule('rule5');
    }
    if (ruleValidator.rule5(password)){
        addRule('rule6');
    }
    if (ruleValidator.rule6(password)){
        addRule('rule7');
    }
    if (ruleValidator.rule7(password)){
        addRule('rule8');
    }
    if (ruleValidator.rule8(password)){
        addRePassword();
    }
}

function addRule(ruleID)  {
    if (document.getElementById(ruleID)){
        return;
    }
    const ruleTitle= rulesContent[ruleID].title;
    const ruleText= rulesContent[ruleID].text;
    const rulesContainer= document.querySelector('.rules');
    const ruleCard=
    `
                        <div class="card rule" id="${ruleID}">
                            <div class="card-header rule-number" >
                                ${ruleTitle}
                            </div>
                            <div class="card-body rule-inner">
                                <p class="card-text rule-text">${ruleText}</p>
                            </div>
                       </div>
    `;
    rulesContainer.insertAdjacentHTML('beforeend', ruleCard);
}
function addRePassword() {

    const passwordContainer = document.querySelector('.password-container');
    if (document.querySelector('.rePassword-container')) return;
    const rePasswordContainer = 
    `
    <div class="d-flex flex-row align-items-center mb-4 rePassword-container">
                        <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="rePassword"
                            class="form-control form-reg"
                            value="Repeat your password"
                          />
                          <label class="form-label" for="form3Example5c"
                            >Repeat your password (●'◡'●)</label
                          >
                        </div>
                      </div>
    `;
    passwordContainer.insertAdjacentHTML('afterend', rePasswordContainer);

}

