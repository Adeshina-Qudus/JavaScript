function checkCreditLimit(accountNumber, beginningBalance, totalCharges, totalCredits, creditLimit) {
    var newBalance = beginningBalance + totalCharges - totalCredits;
    console.log("Account Number:", accountNumber);
    console.log("New Balance:", newBalance);
    if (newBalance > creditLimit) {
        console.log("Credit limit exceeded");
    } else {
        console.log("Credit limit not exceeded");
    }
}