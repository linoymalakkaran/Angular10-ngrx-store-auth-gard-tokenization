Object.defineProperty(exports, "__esModule", {
  value: true,
});

exports.default = function (ctx) {
  let ejs = require("../../../../../../node_modules/ejs/ejs");
  let str = `<table class="{{ ctx.tableClass }}">
                <tbody>
                    {% for (let i = 0; i < ctx.component.numRows; i++) { %}
                        <tr>
                            {% for (let j = 0; j < ctx.component.numCols; j++) { %}
                                <td>{{ ctx.renderCell(i, j) }}</td>
                            {% } %}
                        </tr>
                    {% } %}
                </tbody>
                </table>`;
 
  //   let ejstemplate = ejs.compile(str);
  //  var k = ejstemplate(ctx);
  //   // => Rendered HTML string
  //   let html =  ejs.render(str, ctx,{async:true});

  //   return html;

  //   ejs.renderFile(filename, ctx, ejsOptions, function (err, str) {
  //     // str => Rendered HTML string
  //     debugger;
  //     return str;
  //   });

  async function renderEjsAsync(path, data, ejsOptions,cb) {
    try {
      let html = await ejs.renderFile(path, data, ejsOptions);
      cb(null, html);
    } catch (e) {
      cb(e, "");
    }
  }

  let ejsOptions = {
    // delimiter: '?', Adding this to tell you do NOT use this like I've seen in other docs, does not work for Express 4
    async: true,
  };
  //let filename = "../HppinessSurvey/form.ejs";
  let filename = require("../form.ejs");
  var htmlToReturn = "";
  renderEjsAsync(filename, ctx, ejsOptions, function (error, htmlData) {
      debugger;
    //return htmlData;
    //return str;
    htmlToReturn = str;
  });

  return htmlToReturn;



  //return ejs.render(str, ctx);
  // => Rendered HTML string

  //return str;

  // ejs.renderFile(filename, data, options, function(err, str){
  //     // str => Rendered HTML string
  //     return str;
  // });

  //   var ejshtml = ejs.render(str, { ctx: ctx });
  //   return ejshtml;
};
