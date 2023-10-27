function ruleCorrect(rule) {
  const ruleNumber = rule.querySelector(".rule-number");
  const ruleInner = rule.querySelector(".rule-inner");
  rule.classList.add("correct");
  ruleNumber.classList.add("correct");
  ruleInner.classList.add("correct");
}

function ruleError(rule) {
  const ruleNumber = rule.querySelector(".rule-number");
  const ruleInner = rule.querySelector(".rule-inner");
  rule.classList.remove("correct");
  ruleNumber.classList.remove("correct");
  ruleInner.classList.remove("correct");
}

export default {
  rule1(value) {
    const ruleID = "rule1";
    const rule = document.getElementById(ruleID);
    if (!rule) return false;
    if (value.length >= 5) {
      ruleCorrect(rule);
      return true;
    }
    ruleError(rule);
    return false;
  },
  rule2(value) {
    const ruleID = "rule2";
    const rule = document.getElementById(ruleID);
    if (!rule) return false;

    if (/\d/.test(value)) {
      ruleCorrect(rule);
      return true;
    }
    ruleError(rule);
    return false;
  },
  rule3(value) {
    const ruleID = "rule3";
    const rule = document.getElementById(ruleID);
    if (!rule) return false;

    if (/[A-Z]/.test(value)) {
      ruleCorrect(rule);
      return true;
    }
    ruleError(rule);
    return false;
  },
  rule4(value) {
    const ruleID = "rule4";
    const rule = document.getElementById(ruleID);
    if (!rule) return false;

    if (/[!@#\$%\^\&*]/.test(value)) {
      ruleCorrect(rule);
      return true;
    }
    ruleError(rule);
    return false;
  },
  rule5(value) {
    const ruleID = "rule5";
    const rule = document.getElementById(ruleID);
    if (!rule) return false;
    const numbers = value.match(/\d/g);
    let digitsSum = 0;
    if (numbers) {
      digitsSum = value
        .match(/\d/g)
        .map(Number)
        .reduce((a, b) => a + b);
    }
    if (digitsSum >= 35) {
      ruleCorrect(rule);
      return true;
    }
    ruleError(rule);
    return false;
  },
  rule6(value) {
    const ruleID = "rule6";
    const rule = document.getElementById(ruleID);
    if (!rule) return false;
    const numbers = value.match(/\d/g);
    let digitsSum = 1;
    if (numbers) {
      digitsSum = numbers.map(Number).reduce((a, b) => a + b);
    }
    if (digitsSum % 3 == 0) {
      ruleCorrect(rule);
      return true;
    }
    ruleError(rule);
    return false;
  },
  rule7(value) {
    const ruleID = "rule7";
    const rule = document.getElementById(ruleID);
    if (!rule) return false;
    const numbers = value.match(/\d/g);
    let digitsSum = 1;
    if (numbers) {
      digitsSum = numbers.map(Number).reduce((a, b) => a + b);
    }
    if (digitsSum % 5 == 0) {
      ruleCorrect(rule);
      return true;
    }
    ruleError(rule);
    return false;
  },
  rule8(value) {
    const ruleID = "rule8";
    const rule = document.getElementById(ruleID);
    const word = localStorage.getItem("wordle") ?? "apple";

    if (!rule) return false;
    if (value.search(word) != -1) {
      ruleCorrect(rule);
      return true;
    }
    ruleError(rule);
    return false;
  },
  rule9(value) {
    const ruleID = "rule9";
    const rule = document.getElementById(ruleID);
    if (!rule) return false;
    const re_password = document.getElementById("rePassword").value;
    if (value == re_password) {
      ruleCorrect(rule);
      return true;
    }
    ruleError(rule);
    return false;
  },
  allRulesCorrect(value) {
    if (
      this.rule1(value) &&
      this.rule2(value) &&
      this.rule3(value) &&
      this.rule4(value) &&
      this.rule5(value) &&
      this.rule6(value) &&
      this.rule7(value) &&
      this.rule8(value) &&
      this.rule9(value)
    ) {
      return true;
    } else {
      return false;
    }
  },
};
