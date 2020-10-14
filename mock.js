var Mock = require("mockjs");
var fs = require("fs");
var Random = Mock.Random;
//保存数据到data
var data = [];
//动态生成N条数据
for (let i = 1; i < 100; i++) {
    //生成随机项
    let name = Random.cname();
    let age = Mock.mock({ "age|1-100": 100 }).age;
    let address = Random.province();
    //1男2女
    let gender = Random.pick(["1", "2"]);
    let education = Random.pick(["1", "2", "3", "4", "5", "6"]);
    // ["幼儿园", "小学", "初中", "高中", "专科", "本科"]
    data.push({ id: i, name, age, address, gender, education });
}
//写入文件
fs.writeFile("db.json", JSON.stringify({ users: data }), function () {
});
