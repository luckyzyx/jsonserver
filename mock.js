var Mock = require("mockjs");
var fs = require("fs");
var Random = Mock.Random;
//保存数据到data
var data = [];
//动态生成N条数据
for (let i = 0; i <= 100; i++) {
  //生成随机项

  let city = Random.province();
  let student = {
    id: i,
    name: Random.cname(),
    age: Mock.mock({ "age|1-100": 10 }).age,
    sex: Random.pick(["男", "女"]),
  };

  data.push({ city, student });
}

//写入文件
fs.writeFile("db.json", JSON.stringify({ data }), function () {});
