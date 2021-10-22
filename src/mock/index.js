import Mock from "mockjs"

const Random = Mock.Random

Mock.mock('/mock/transaction', 'post', () => {
  let citys = ['123']
  // for (let i = 0; i < 10; i++) {
  //   let obj = {
  //     id: i+1,
  //     city: Random.city(),
  //     color: Random.color()
  //   }
  //   citys.push(obj)
  // }
  return {cityList: citys}
})

// console.log(Mock)
export default Mock