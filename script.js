function calculateCAC(type) {
    // Get input values and set default to 0 if empty
    let revenue = parseFloat(document.getElementById(`revenue-${type}`).value) || 0;
    let discount = parseFloat(document.getElementById(`discount-${type}`).value);
    let firstPurchasePercentage = parseFloat(document.getElementById(`firstPurchasePercentage-${type}`).value);
    let firstPurchaseCommission = parseFloat(document.getElementById(`firstPurchaseCommission-${type}`).value);
    let remuneration = parseFloat(document.getElementById(`remuneration-${type}`).value) || 0;
    let recurringCommission = parseFloat(document.getElementById(`recurringCommission-${type}`).value);
    let bonus = parseFloat(document.getElementById(`bonus-${type}`).value) || 0;

    // Calculate discounted amount
    let discountedAmount = revenue - (revenue * discount / 100);
    document.getElementById(`discountedAmount-${type}`).innerText = '$' + discountedAmount.toFixed(2);

    // Calculate first purchase amount
    let firstPurchaseAmount = discountedAmount * firstPurchasePercentage / 100;
    document.getElementById(`firstPurchaseAmount-${type}`).innerText = '$' + firstPurchaseAmount.toFixed(2);

    // Calculate first purchase commission
    let firstPurchaseCommissionAmount = firstPurchaseAmount * firstPurchaseCommission / 100;
    document.getElementById(`firstPurchaseCommissionAmount-${type}`).innerText = '$' + firstPurchaseCommissionAmount.toFixed(2);

    // Calculate the amount after the first purchase
    let remainingAmount = discountedAmount * (1 - firstPurchasePercentage / 100);

    // Calculate recurring commission based on the remaining amount
    let recurringCommissionAmount = remainingAmount * recurringCommission / 100;
    document.getElementById(`recurringCommissionAmount-${type}`).innerText = '$' + recurringCommissionAmount.toFixed(2);

    // Calculate total expense
    let totalExpense = firstPurchaseCommissionAmount + remuneration + recurringCommissionAmount + bonus;
    document.getElementById(`totalExpense-${type}`).innerText = '$' + totalExpense.toFixed(2);

    // Calculate CAC
    let cac = (totalExpense / discountedAmount + (discount / 100)) * 100; // Calculate CAC as a percentage
    document.getElementById(`cac-${type}`).innerText = cac.toFixed(2) + '%'; // Format as percentage with two decimal places

    // Call the negotiated amount calculation
    calculateNegotiatedAmount();
}

function calculateNegotiatedAmount() {
    // Get total expenses from the displayed results
    let totalExpenseAffiliate = parseFloat(document.getElementById('totalExpense-affiliate').innerText.replace('$', ''));
    let totalExpenseCounter = parseFloat(document.getElementById('totalExpense-counter').innerText.replace('$', ''));

    // Calculate negotiated amount
    let negotiatedAmount = totalExpenseAffiliate - totalExpenseCounter;

    // Display negotiated amount
    document.getElementById('negotiatedAmount').innerText = 'Negotiated Amount: $' + negotiatedAmount.toFixed(2);
}
