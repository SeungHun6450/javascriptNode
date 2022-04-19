// 변수 유효범위(Variable Scope)
// var, let, const
console.log("-------변수 유효범위------");
function scope() {
  if (true) {
    let a = 123
  }
  console.log(a)
}
scope()