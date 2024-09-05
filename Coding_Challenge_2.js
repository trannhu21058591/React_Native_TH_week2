// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44

// const bills = [125, 555, 44];

function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
      return bill * 0.15;
    } else {
      return bill * 0.20;
    }
  }
// 2
  const testBill = 100;
  const testTip = calcTip(testBill);
  console.log(`Bill: ${testBill}, Tip: ${testTip}`); 
// 3
  const bills = [125, 555, 44];                                               
  const tips = bills.map(x => calcTip(x));                                                                                                
  console.log(`Bills: ${bills}, Tips: ${tips}`);

// map dùng để duyệt mảng và trả về mảng mới
//Hàm map sẽ duyệt qua từng phần tử trong arr Bills
// và áp dụng hàm calcTip lên từng phần tử
// "x" là tên biến đại diện cho từ phần tủe trong arr Bills

// 4
  const total = bills.map((x, index) => x + tips[index]);            
  console.log(`Bills: ${bills}, Tips: ${tips}, Total: ${total}`);

//  x sẽ đại diện cho từng giá trị hóa đơn và index sẽ đại diện cho chỉ số tương ứng của từng phần tử trong mảng.
// Vd: 
  
//   x là 125 (phần tử đầu tiên của bills)
//   thì index sẽ là 0
//   tips[index] sẽ truy cập tips[0], tức là 18.75
//   Tổng sẽ là: 125 + 18.75 = 143.75

console.log('test-------------')
const result = bills.map((x, index) => {
    return console.log(`Bill: ${x}, Index: ${index}`);
  });
