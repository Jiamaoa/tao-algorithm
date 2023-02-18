// 递归

const data = [
  {
    id: 2,
    pid: 0,
    content: "哇哇大叫"
  },
  {
    id: 5,
    pid: 2,
    content: "威武不凡"
  },
  {
    id: 3,
    pid: 2,
    content: "呱呱坠地"
  },
  {
    id: 11,
    pid: 3,
    content: "瑟瑟发抖"
  },
  {
    id: 9,
    pid: 0,
    content: "胡言乱语"
  },
  {
    id: 1,
    pid: 9,
    content: "呼朋引伴"
  },
  {
    id: 7,
    pid: 1,
    content: "英俊潇洒"
  },
  {
    id: 8,
    pid: 1,
    content: "风流倜傥"
  }
];

var dataTree = formDataTree(data);

console.log(dataTree);

function formDataTree(data) {
  let parents = data.filter((p) => p.pid === 0),
    childrens = data.filter((c) => c.pid !== 0);
  dataToTree(parents, childrens);
  return parents;
}
function dataToTree(parents, childrens) {
  parents.map((p) => {
    childrens.map((c, i) => {
      if (c.pid === p.id) {
        let _childrens = JSON.parse(JSON.stringify(childrens));
        _childrens.slice(i, 1);
        dataToTree([c], _childrens);
        if (p.children) {
          p.children.push(c);
        } else {
          p.children = [c];
        }
      }
    });
  });
}
