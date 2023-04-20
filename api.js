function calculateLoanDecision(creditModifier, loanSum, loanPeriod) {
  let creditDecision = (creditModifier / loanSum) * loanPeriod;

  // Check if credit decision is at least 1
  if (creditDecision >= 1) {
    let maxLoanSum = loanSum;
    while (creditDecision > 1 && maxLoanSum < 10000) {
      maxLoanSum += 100;
      creditDecision = (creditModifier / maxLoanSum) * loanPeriod;
    }
    return { loanSum: maxLoanSum, loanPeriod };
  } else {
    let minLoanSum = loanSum;
    let months = loanPeriod;
    // Check for the maximum loan sum within the same period
    while (creditDecision < 1 && minLoanSum > 2000) {
      minLoanSum -= 100;
      creditDecision = (creditModifier / minLoanSum) * loanPeriod;
    }
    // Check for the next month until credit decision is 1
    if (creditDecision < 1) {
      let month = loanPeriod + 1;
      while (creditDecision < 1 && month <= 60) {
        creditDecision = (creditModifier / minLoanSum) * month;
        month++;
      }
    }
    return { loanSum: minLoanSum, loanPeriod: months };
  }
}

function calculateLoan(creditModifiers, loanSum, loanPeriod) {
  const { loanSum: newLoanSum, loanPeriod: newLoanPeriod } =
    calculateLoanDecision(
      parseInt(creditModifiers),
      parseInt(loanSum),
      parseInt(loanPeriod)
    );

  let creditDecision = (creditModifiers / loanSum) * loanPeriod;

  return {
    creditScore: `${creditDecision.toFixed(2)}`,
    result:
      creditModifiers == "debt"
        ? "no loan for debt"
        : ` ${newLoanSum} for ${newLoanPeriod} months`,
  };
}

module.exports = { calculateLoan };
