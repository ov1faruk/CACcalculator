function calculateCAC() {
    // Get input values and set default to 0 if empty
    let revenue = parseFloat(document.getElementById('revenue').value) || 0;
    let discount = parseFloat(document.getElementById('discount').value);
    let firstPurchasePercentage = parseFloat(document.getElementById('firstPurchasePercentage').value);
    let firstPurchaseCommission = parseFloat(document.getElementById('firstPurchaseCommission').value);
    let remuneration = parseFloat(document.getElementById('remuneration').value) || 0;
    let recurringCommission = parseFloat(document.getElementById('recurringCommission').value);
    let bonus = parseFloat(document.getElementById('bonus').value) || 0;

    // Calculate discounted amount
    let discountedAmount = revenue - (revenue * discount / 100);
    document.getElementById('discountedAmount').innerText = '$' + discountedAmount.toFixed(2);

    // Calculate first purchase amount
    let firstPurchaseAmount = discountedAmount * firstPurchasePercentage / 100;
    document.getElementById('firstPurchaseAmount').innerText = '$' + firstPurchaseAmount.toFixed(2);

    // Calculate first purchase commission
    let firstPurchaseCommissionAmount = firstPurchaseAmount * firstPurchaseCommission / 100;
    document.getElementById('firstPurchaseCommissionAmount').innerText = '$' + firstPurchaseCommissionAmount.toFixed(2);

    // Calculate recurring commission
    let recurringCommissionAmount = remuneration * recurringCommission / 100;
    document.getElementById('recurringCommissionAmount').innerText = '$' + recurringCommissionAmount.toFixed(2);

    // Calculate total expense (B7 + C7 + D7 + E7)
    let totalExpense = firstPurchaseCommissionAmount + remuneration + recurringCommissionAmount + bonus;
    document.getElementById('totalExpense').innerText = '$' + totalExpense.toFixed(2);

    // Calculate CAC
    let cac = (totalExpense / discountedAmount + (discount / 100)) * 100; // Calculate CAC as a percentage
    document.getElementById('cac').innerText = cac.toFixed(2) + '%'; // Format as percentage with two decimal places
}
