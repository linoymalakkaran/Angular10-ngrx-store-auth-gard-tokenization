Object.defineProperty(exports, "__esModule", {
  value: true,
});

exports.default = function (ctx) {
  let ejs = require("../../../../../../../node_modules/ejs/ejs");
  let str = `<table class="<%= ctxVal.tableClass %>">
                <tbody>
                    <% for (let i = 0; i < ctxVal.component.numRows; i++) { %>
                        <tr>
                            <% for (let j = 0; j < ctxVal.component.numCols; j++) { %>
                                <td><%- ctxVal.renderCell(i, j) %></td>
                            <% } %>
                        </tr>
                      <% } %>
                </tbody>
                </table>`;

  debugger;
  let html = ejs.render(str, { ctxVal: ctx });
  return html;
};
