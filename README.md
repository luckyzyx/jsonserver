# Headers
Key=Content-Type
Value=application/json

# POST添加
## 添加数据到user,自动添加ID
http://localhost:3000/users
```json
{
"name": "zyx",
"email": "281305@qq.com",
"company":2
}
```

# Delete删除
## 删除ID为6的user信息
http://localhost:3000/users/6

# Patch更新
## 将ID为1的name更新为 (啊啊啊啊)
http://localhost:3000/users/1
```json
{
"name": "啊啊啊啊",
}
```

# GET获取

## 获取某个列表的所有信息
http://localhost:3000/posts  
http://localhost:3000/users
http://localhost:3000/comments

## 获取列表ID为1的用户信息
http://localhost:3000/users/1
http://localhost:3000/comments/1

## 获取comments为1的所有user
http://localhost:3000/comments/1

## 根据name获取信息
http://localhost:3000/comments?name=Apple
http://localhost:3000/comments?name=Apple&name=Microsoft

## 设置某一页有多少数据量
http://localhost:3000/comments?_page=1&_limit=2

## 根据name进行升序排序   asc升序   desc降序
http://localhost:3000/comments?_sort=name&_order=asc

## 获取age为30及以上的user
http://localhost:3000/users?age_gte=30

## 获取age为30-40之间的user
http://localhost:3000/users?age_gte=30&age_lte=40

## 搜索列表内包含abc的user
http://localhost:3000/users?q=abs







