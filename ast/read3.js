const recast = require("recast");
const TNT = recast.types.namedTypes

recast.run(function(ast, printSource) {
  recast.visit(ast, {
      visitExpressionStatement: function(path) {
        const node = path.value
        // 判断是否为ExpressionStatement，正确则输出一行字。
        /* if(TNT.ExpressionStatement.check(node)){
          console.log('这是一个ExpressionStatement')
        } */
        // 判断是否为ExpressionStatement，正确不输出，错误则全局报错
        TNT.ExpressionStatement.assert(node)
        this.traverse(path);
      }
    });
});