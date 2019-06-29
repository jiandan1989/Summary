// /**
//  * @desc: currying 函数
//  */

// function currying(fn) {
//   const args = []
//   return function() {
//     if (arguments.length === 0) {
//       return fn.apply(this, args);
//     } else {
//       [].push.apply(args, arguments)
//       return arguments.callee
//     }
//   }
// }

// const cost = (function() {
//   const money = 0
//   return function(...rest) {
//     return rest.reduce((prev, next) => {
//       return prev + next
//     }, money)
//   }
// })()

// const costMoney = currying(cost) // 转换为 curring 函数
// costMoney(100)
// costMoney(200)
// costMoney(300)
// console.log(costMoney()) // 600 


function curring(fn) {
  const args = [];

  return function() {
    if (arguments.length === 0) {
      return fn.apply(this, args);
    } else {
      args.push(...arguments);
      return arguments.callee;
    }
  }
}

const cost = (() => (...rest) => rest.reduce((prev, next) => {
  return prev + next;
}, 0))();

const costMoney = curring(cost);

costMoney(1);
costMoney(2);
costMoney(3);
console.log(costMoney());