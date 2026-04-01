// // doTask1(function (result1) {
// //   doTask2(result1, function (result2) {
// //     doTask3(result2, function (result3) {
// //       console.log("All tasks done");
// //     });
// //   });
// // });

// doTask1()
//   .then(function (result1) {
//     return doTask2(result1);
//   })
//   .then(function (result2) {
//     return doTask3(result2);
//   })
//   .then(function (result3) {
//     console.log("All tasks done");
//   })
//   .catch(function (error) {
//     console.log("Something failed", error);
//   });
