# 注意事项

双引号是字段，单引号才是字符串

mysql天然支持date格式与日期字符串进行比较

MySQL 使用三值逻辑 —— TRUE, FALSE 和 UNKNOWN。任何与 NULL 值进行的比较都会与第三种值 UNKNOWN 做比较。这个“任何值”包括 NULL 本身！这就是为什么 MySQL 提供 IS NULL 和 IS NOT NULL 两种操作来对 NULL 特殊判断。

`= 或 ！=` 只能判断基本数据类型
`is` 关键字只能判断null 
`<=>` 既能判断null 又能判断 基本数据类型

```sql
-- 下面这俩速度差不多
select name from customer where not referee_id <=> 2
-- 不能使用 SELECT name FROM customer WHERE referee_Id <> 2; 无法匹配到null

SELECT name FROM customer WHERE referee_id != 2 OR referee_id IS NULL;
```

# 常见例子

```sql
--使用left join是可能有users是没有记录的
select u.name name, ifnull(sum(r.distance), 0) travelled_distance from Users u left join Rides r on u.id = r.user_id
group by r.user_id
order by travelled_distance desc, u.name asc

```

1、删除重复的项，只保留id比较小的一个

```sql
delete p1 from Person p1, Person p2
where p1.Email = p2.Email && p1.Id > p2.Id;
```

2、查找一张表中，满足值比前一天的要大的条件的id

> cross join, datediff
> 当没有明显的相同值的列可以用作比较做inner join的话，只能用cross join，两个表的每一行都要匹配并处理，这里就是用来处理datediff, 判断是否是前一天的

`Weather`
+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| id            | int     |
| recordDate    | date    |
| temperature   | int     |
+---------------+---------+

```sql
select a.id, a.recordDate from Weather as a cross join Weather as b
on datediff(a.recordDate, b.recordDate) = 1 where a.temperature > b.temperature
```

3、时间相关

获取用户第一次进入平台的时间

`Activity`
+--------------+---------+
| Column Name  | Type    |
+--------------+---------+
| player_id    | int     |
| device_id    | int     |
| event_date   | date    |
| games_played | int     |
+--------------+---------+
表的主键是 (player_id, event_date)。
这张表展示了一些游戏玩家在游戏平台上的行为活动。
每行数据记录了一名玩家在退出平台之前，当天使用同一台设备登录平台后打开的游戏的数目（可能是 0 个）。

```sql
select player_id, min(event_date) first_login from Activity group by player_id
```

获取仅2019年春季才售出的产品

> 不能直接筛选2019-01-01 至 2019-03-31的交易记录，注意“仅在2019-01-01至2019-03-31（含）之间出售的商品”。所以求出每件商品最大售出日期和最小售出日期，在用having比较是否在2019年春季区间内，同时也可以筛掉没有售出过的产品

`Product`
+--------------+---------+
| Column Name  | Type    |
+--------------+---------+
| product_id   | int     |
| product_name | varchar |
| unit_price   | int     |
+--------------+---------+
Product_id是该表的主键。
该表的每一行显示每个产品的名称和价格。

`Sales`
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| seller_id   | int     |
| product_id  | int     |
| buyer_id    | int     |
| sale_date   | date    |
| quantity    | int     |
| price       | int     |
+------ ------+---------+
这个表没有主键，它可以有重复的行。
product_id 是 Product 表的外键。
该表的每一行包含关于一个销售的一些信息。

```sql
select
    product_id,
    product_name
from product
where product_id in (
    select
        product_id
    from sales
    group by product_id
    having max(sale_date) <= '2019-03-31'
    and min(sale_date) >= '2019-01-01'
)
```

查询近30天活跃用户

```sql
select activity_date day, count(distinct user_id) active_users
from activity
where datediff('2019-07-27', activity_date) < 30 and activity_date <= '2019-07-27'
group by activity_date
```

5、订单最多的客户

`Orders`
+-----------------+----------+
| Column Name     | Type     |
+-----------------+----------+
| order_number    | int      |
| customer_number | int      |
+-----------------+----------+
Order_number是该表的主键。
此表包含关于订单ID和客户ID的信息。

```sql
select customer_number from Orders group by customer_number order by count(customer_number) desc limit
```

6、查询，至少n个

查询至少5个学生的课

> 一个维度

`Courses`
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| student     | varchar |
| class       | varchar |
+-------------+---------+
(student, class)是该表的主键列。
该表的每一行表示学生的名字和他们注册的班级。

> 原题这里有个坑，有可能有重修的😹

```sql
select class from Courses group by class having count(distinct student) >= 5
```

查询导演和演员合作过至少三次的

>两个维度，group by，然后`count(*)`

`ActorDirector`
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| actor_id    | int     |
| director_id | int     |
| timestamp   | int     |
+-------------+---------+
timestamp 是这张表的主键.

```sql
select actor_id, director_id from ActorDirector group by actor_id, director_id having count(*) >= 3
```

7、多表连表查询

`SalesPerson`
+-----------------+---------+
| Column Name     | Type    |
+-----------------+---------+
| sales_id        | int     |
| name            | varchar |
| salary          | int     |
| commission_rate | int     |
| hire_date       | date    |
+-----------------+---------+
sales_id 是该表的主键列。
该表的每一行都显示了销售人员的姓名和 ID ，以及他们的工资、佣金率和雇佣日期。

`Company`
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| com_id      | int     |
| name        | varchar |
| city        | varchar |
+-------------+---------+
com_id 是该表的主键列。
该表的每一行都表示公司的名称和 ID ，以及公司所在的城市。

`Orders`
+-------------+------+
| Column Name | Type |
+-------------+------+
| order_id    | int  |
| order_date  | date |
| com_id      | int  |
| sales_id    | int  |
| amount      | int  |
+-------------+------+
order_id 是该表的主键列。
com_id 是 Company 表中 com_id 的外键。
sales_id 是来自销售员表 sales_id 的外键。
该表的每一行包含一个订单的信息。这包括公司的 ID 、销售人员的 ID 、订单日期和支付的金额。

编写一个SQL查询，报告没有任何与名为 **“RED”** 的公司相关的订单的所有销售人员的姓名。

> left join, 连表查询的时候把左边没有匹配到的也放进来，因为需要用到not in
> 主体是订单，用leftjoin是避免有些记录跟company没有关联上，但是确实能查到销售员的情况
> 
> 但是这里其实用join也能过，具体情况具体分析嘛


```sql
select s.name from SalesPerson s where s.sales_id not in
(select o.sales_id from Orders o left join Company c on o.com_id = c.com_id where c.name = 'RED')

--or

select name
from salesperson
where sales_id not in
(select o.sales_id
from orders o, company c
where o.com_id = c.com_id
and c.name='RED')
```

8、字符串相关

字符串拼接

`Activities`
+-------------+---------+
| 列名         | 类型    |
+-------------+---------+
| sell_date   | date    |
| product     | varchar |
+-------------+---------+
此表没有主键，它可能包含重复项。
此表的每一行都包含产品名称和在市场上销售的日期。

按日期分组，并且把商品字符串拼接

```sql
select sell_date, count(distinct product) num_sold, group_concat(distinct product order by product asc separator ',') products from Activites group by sell_date
```

判断是否包含某个前缀

`Patients`
+--------------+---------+
| Column Name  | Type    |
+--------------+---------+
| patient_id   | int     |
| patient_name | varchar |
| conditions   | varchar |
+--------------+---------+
patient_id （患者 ID）是该表的主键。
'conditions' （疾病）包含 0 个或以上的疾病代码，以空格分隔。
这个表包含医院中患者的信息。

```sql
select * from Patients where conditions like 'DIAB1%' or conditions like '% DIAB1%'
```

大小写转换

`Users`
+----------------+---------+
| Column Name    | Type    |
+----------------+---------+
| user_id        | int     |
| name           | varchar |
+----------------+---------+
user_id 是该表的主键。
该表包含用户的 ID 和名字。名字仅由小写和大写字符组成。

```sql
select user_id, concat(upper(left(name, 1)), lower(substr(anme, 2))) as name from Users order by user_id
```

9、数据行列转换

`列转行`

`Products`
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| product_id  | int     |
| store1      | int     |
| store2      | int     |
| store3      | int     |
+-------------+---------+
这张表的主键是product_id（产品Id）。
每行存储了这一产品在不同商店store1, store2, store3的价格。

```sql
select product_id,'store1' store, store1 price from Products where store1 is not null
union all
select product_id,'store2', store2 from Products where store2 is not null
union all
select product_id,'store3', store3 from Products where store3 is not null
```

`行合并`

`Employees`
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| employee_id | int     |
| name        | varchar |
+-------------+---------+
employee_id 是这个表的主键。
每一行表示雇员的id 和他的姓名。

`Salaries`
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| employee_id | int     |
| salary      | int     |
+-------------+---------+
employee_id is 这个表的主键。
每一行表示雇员的id 和他的薪水。

查询有工资信息但是没有员工名字和有员工名字但是没有工资信息的employee_id

```sql
select employee_id from employees where employee_id not in (select employee_id from salaries)
union
select employee_id from salaries where employee_id not in (select employee_id from employees) order by employee_id
```

10、if语句

`Employees`
+-------------+---------+
| 列名        | 类型     |
+-------------+---------+
| employee_id | int     |
| name        | varchar |
| salary      | int     |
+-------------+---------+
employee_id 是这个表的主键。
此表的每一行给出了雇员id ，名字和薪水。

```sql
select employee_id, if(mod(employee_id, 2) != 0 and left(name, 1) != 'M', salary, 0) bonus from Employees order by employee_id
```


# sql优化

使用explain分析执行情况

模拟Mysql优化器是如何执行SQL查询语句的


> 具体参考: https://blog.csdn.net/qq_43332570/article/details/106860200


- id: 值越大优先级越高，越先被执行
- select_type: 查询类型，例如执行子查询或union等查询类型
- table: 表示用到了哪几张表，若出现了 derived 的情况，则表示产生了中间表，常见产生中间表的情况有子查询和联合查询等。
- type: ALL或者index：all最坏情况全表查，index和全表扫描一样。只是扫描表的时候按照索引次序进行而不是行。结果值从最好到最坏依次为：system > const > eq_ref > ref > range > index > all，`一般来说，最好保证达到 range 级别，最好达到 ref`
- possible_keys: 显示`可能`应用在这张表中的索引，一个或多个，`但不一定实际用到，实际用到的在key上显示`
- key: 为null的没走索引，每张表的一次查询只会用到一个索引
- key_len
- ref: 显示哪些索引列或常量被引用了，优先 const。
- rows: 根据表统计信息及索引选用情况，大致估算出所优化的行数，越少越好
- extra: 出现Using temporary的，（Using filesort需视情况而定）：用临时表保存中间结果，常用于GROUP BY 和 ORDER BY操作中，一般看到它说明查询需要优化了，就算避免不了临时表的使用也要尽量避免硬盘临时表的使用。

# 查询

## 连表查询

- 笛卡尔积: 被连接两个表的乘积，不建议使用
- 内连接: 等值连接
- 外连接: 分为左和右两种，即返回符合连接条件的还要返回左边或者右边没有匹配到的数据

```mysql
SELECT a.FirstName, a.LastName, b.City, b.State FROM Person AS a
LEFT JOIN Address AS b
ON a.PersonId = b.PersonId;
```

连续出现三次的元素

```mysql
SELECT DISTINCT a.Num AS ConsecutiveNums FROM Logs AS a
INNER JOIN Logs AS b ON  a.Id + 1 = b.Id
INNER JOIN Logs AS c ON a.Id + 2 = c.Id
WHERE a.Num = b.Num
AND b.Num = c.Num;
```

```mysql
SELECT a.Name AS 'Employee'
FROM Employee AS a, Employee AS b
WHERE a.ManagerId = b.Id
AND a.Salary > b.Salary;
```

## 子查询

获取第二高的salary

```mysql
SELECT
 (SELECT DISTINCT Salary
  FROM Employee
  ORDER BY Salary DESC
  LIMIT 1 OFFSET 1) 
AS SecondHighestSalary;
```

获取第n高的salary(由于无法直接在offset处直接使用`N-1`, 所以需要定义函数)

```mysql
CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
 DECLARE p INT;
 SET p = N - 1;
 RETURN (
    SELECT * FROM
     (SELECT DISTINCT Salary FROM Employee
      ORDER BY Salary DESC
      LIMIT 1 OFFSET p
     ) AS getNthHighestSalary);
END;
```

查询重复的邮箱

```mysql
SELECT Email FROM
 (SELECT Email, COUNT(id) AS num
  FROM Person
  GROUP BY Email) AS tmp
WHERE num > 1;
```

查询没有下过单的用户

```mysql
SELECT name AS 'Customers' FROM Customers
WHERE Id NOT IN
 (SELECT CustomerId FROM Orders);
```

查询每个部门中，薪水最高的员工姓名及其薪水

```mysql
SELECT b.Name AS Department, a.Name AS Employee, a.Salary AS 'Salary' FROM Employee AS a
INNER JOIN Department AS b
ON a.DepartmentId = b.Id
WHERE a.Salary IN
 (SELECT MAX(Salary) FROM Employee AS c
  WHERE a.DepartmentId = c.DepartmentId
  GROUP BY c.DepartmentId);
```

## 窗口函数

成绩由高到低排序列出排名

```mysql
SELECT  Score,
 DENSE_RANK() OVER(ORDER BY Score DESC) AS 'Rank'
FROM Scores;
```

查询各部门薪水排名前三名的员工

```mysql
SELECT x.Department, x.Employee, x.Salary
FROM
(SELECT b.Name AS Department, 
        a.Name AS Employee, 
        a.Salary AS Salary, 
        DENSE_RANK() OVER (PARTITION BY b.Name 
                           ORDER BY a.Salary DESC) AS dept_rank
FROM Employee AS a
INNER JOIN Department AS b
ON a.DepartmentId = b.Id) AS x
WHERE x.dept_rank <= 3;
```

## 时间函数

查找前一天温度高的id

```mysql
SELECT a.id FROM Weather AS a
JOIN Weather AS b
ON a.recordDate = ADDDATE(b.recordDate, INTERVAL 1 DAY)
WHERE a.temperature > b.temperature;
```

查找指定的时间范围内，每一天未被禁止的用户订单取消率

```mysql
SELECT a.Request_at AS Day,
1-ROUND(SUM(CASE WHEN a.Status = 'completed' THEN 1 ELSE 0 END)/COUNT(*),2) AS 'Cancellation Rate' FROM Trips AS a
INNER JOIN 
(SELECT * FROM Users
 WHERE Role = 'client') AS b
ON a.Client_Id = b.Users_Id
INNER JOIN 
(SELECT * FROM Users
 WHERE Role = 'driver') AS c
ON a.Driver_Id = c.Users_Id
WHERE b.Banned = 'No'
AND c.Banned = 'No'
AND a.Request_at BETWEEN '2013-10-01' AND '2013-10-03'
GROUP BY a.Request_at
ORDER BY a.Request_at
```

查询每个用户首次登录的日期

```mysql
SELECT player_id, MIN(event_date) AS first_login FROM Activity
GROUP BY player_id
ORDER BY player_id;
```

查询每个用户首次登录的日期以及设备

```mysql
SELECT a.player_id, a.device_id FROM Activity AS a
INNER JOIN
(SELECT player_id, MIN(event_date) AS first_login FROM Activity
GROUP BY player_id
ORDER BY player_id) AS b
ON a.player_id = b.player_id
AND a.event_date = b.first_login
ORDER BY a.player_id;
```

查询每个用户累计玩的游戏数

```mysql
SELECT a.player_id, a.event_date,
 (SELECT SUM(games_played) FROM Activity AS b
  WHERE a.player_id = b.player_id
  AND a.event_date >= b.event_date) AS games_played_so_far
FROM Activity AS a
```

查询首次登录后第二天也登录的用户比例

```mysql
SELECT ROUND(COUNT(DISTINCT b.player_id)/COUNT(DISTINCT a.player_id), 2) AS fraction FROM Activity AS a
LEFT JOIN
(SELECT player_id, MIN(event_date) AS first_login FROM Activity
GROUP BY player_id) AS b
ON a.player_id = b.player_id
AND DATEDIFF(a.event_date, b.first_login) = 1
```

查出各公司薪水的中位数

```mysql
SELECT  
Company,  
Salary  
FROM (  
SELECT  
Id,  
Company,  
Salary,  
ROW_NUMBER() OVER (PARTITION BY Company ORDER BY Salary) AS sal_id,  
COUNT(Id) OVER (PARTITION BY Company) AS sal_num  
FROM Employee e) T1  
WHERE (ROUND(sal_num/2) = sal_id)  
OR (ROUND((sal_num+1)/2) = sal_id)
```

查找至少管理5个员工经理的名称

```mysql
SELECT Name FROM Employee WHERE Id IN
(SELECT ManagerId FROM Employee
 GROUP BY ManagerId
 HAVING COUNT(ManagerId) >=5);
```

根据每个数字出现的频率找出中位数

```mysql
SELECT AVG(Number) AS median
FROM 
(
select *, SUM(Frequency) OVER (ORDER BY Number) AS cum_sum, 
          (SUM(Frequency) OVER ())/2.0  AS mid
FROM Numbers
) AS temp
WHERE mid BETWEEN cum_sum - frequency AND cum_sum;
```

包含候选人的名字以及票数，选出票数最多的人

```mysql
SELECT Name FROM Candidate AS a
JOIN
(SELECT CandidateId FROM Vote
 GROUP BY CandidateId
 ORDER BY COUNT(*) DESC
 LIMIT 1
) AS b
ON a.id = b.CandidateId;
```

包含员工的姓名、另一张表包含获得奖金数

```mysql
SELECT a.name, 
b.bonus
FROM Employee AS a
LEFT JOIN Bonus AS b
ON a.empId = b.empId
WHERE b.bonus < 1000 OR b.bonus IS NULL;
```

包含问题的出现次数以及回答次数，获取作答率最高的元素

```mysql
SELECT question_id AS 'survey_log'
FROM survey_log
GROUP BY question_id
ORDER BY COUNT(answer_id) / COUNT(IF(action = 'show', 1, NULL)) DESC
LIMIT 1;
```

查询出员工三个月的累积工资，其中不包含最近一个月，且按照员工id升序排列，月份降序排列

```mysql
SELECT E1.id, E1.month,
(IFNULL(E1.salary, 0) + IFNULL(E2.salary, 0) + IFNULL(E3.salary, 0)) AS Salary
FROM
(
SELECT id, MAX(month) AS month FROM Employee
GROUP BY id
HAVING COUNT(*) > 1
) AS maxmonth
LEFT JOIN Employee AS E1 
ON (maxmonth.id = E1.id AND maxmonth.month > E1.month)
LEFT JOIN Employee AS E2 
ON (E2.id = E1.id AND E2.month = E1.month - 1)
LEFT JOIN Employee AS E3 
ON (E3.id = E1.id AND E3.month = E1.month - 2)
ORDER BY id ASC, month DESC;
```

查询每个部门下的学生数，要列出所有部门，即使该部门没有学生。结果按学生数降序、部门名称升序排列。

```mysql
SELECT a.dept_name, COUNT(b.student_id) AS student_number FROM department AS a
LEFT JOIN student AS b
ON a.dept_id = b.dept_id
GROUP BY a.dept_name
ORDER BY student_number DESC, a.dept_name;
```

找出不是被2号顾客推荐来的顾客姓名

```mysql
SELECT name FROM customer WHERE
id NOT IN
(SELECT id FROM customer WHERE referee_id = 2);
```

包含政策制定者id、2015年投资额、2016年投资额，查询2016年的投资总额

```mysql
SELECT SUM(insurance.TIV_2016) AS TIV_2016
FROM insurance
WHERE insurance.TIV_2015 IN
(SELECT TIV_2015 FROM insurance
 GROUP BY TIV_2015
 HAVING COUNT(*) > 1)
AND CONCAT(LAT, ",", LON) IN
(SELECT CONCAT(LAT, ",", LON) FROM insurance
 GROUP BY LAT , LON
 HAVING COUNT(*) = 1);
```

查找下单数最多的用户

```mysql
SELECT customer_number FROM orders
GROUP BY customer_number
ORDER BY COUNT(*) DESC
LIMIT 1;
```

列出至少有5名学生的课程名称

```mysql
SELECT class FROM
(SELECT class, COUNT(DISTINCT student) AS num
 FROM courses
 GROUP BY class) AS temp_table
WHERE num >= 5;
```

找出申请通过率，结果保留两位小数

```mysql
SELECT
ROUND(
    IFNULL(
    (SELECT COUNT(*) FROM (SELECT DISTINCT requester_id,
                           accepter_id from request_accepted)
     AS A)
    /
    (SELECT COUNT(*) FROM (SELECT DISTINCT sender_id,
                           send_to_id FROM friend_request) 
     AS B), 0)
    , 2) 
    AS accept_rate;
```

找出连续至少三条记录体育馆参观人数至少为00人的情况

```mysql
WITH 
tmp AS (
SELECT a.visit_date AS date1,
b.visit_date AS date2,
c.visit_date AS date3
FROM stadium AS a
LEFT JOIN stadium AS b 
ON b.id = a.id + 1
LEFT JOIN stadium AS c
ON c.id = a.id + 2
WHERE a.people >= 100
AND b.people >= 100
AND c.people >= 100
),

tmp1 AS (
SELECT date1 AS total_date FROM tmp
UNION
SELECT date2 AS total_date FROM tmp
UNION
SELECT date3 AS total_date FROM tmp
)

SELECT * FROM stadium
WHERE visit_date IN 
(SELECT * FROM tmp1);
```

找出拥有好友数最多的用户编号及其拥有的好友数

```mysql
SELECT c.people as id, SUM(c.cnt) AS num
FROM (
SELECT requester_id AS people, COUNT(DISTINCT accepter_id) AS cnt
FROM request_accepted
GROUP BY requester_id

UNION ALL   

SELECT accepter_id AS people, COUNT(DISTINCT requester_id) AS cnt
FROM request_accepted
GROUP BY accepter_id 
) AS c

GROUP BY c.people
ORDER BY SUM(c.cnt) DESC
LIMIT 1;
```

找出连续座位的编号

```mysql
SELECT DISTINCT a.seat_id
FROM cinema AS a JOIN cinema AS b
ON ABS(a.seat_id - b.seat_id) = 1
AND a.free = TRUE AND b.free = TRUE
ORDER BY a.seat_id;
```

# 删除

删除邮件重复的行，当有重复值时，保留Id最小的值

```mysql
DELETE p1 FROM Person p1, Person p2
WHERE p1.Email = p2.Email AND p1.Id > p2.Id;
```