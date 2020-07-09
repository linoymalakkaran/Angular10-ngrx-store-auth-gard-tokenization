Object.defineProperty(exports, "__esModule", {
  value: true,
});

exports.default = function (ctx) {
  let ejs = require("../../../../../../../node_modules/ejs/ejs");
  let str = `<div class="<%= ctxVal.tableClass %>">
                <% for (let i = 0; i < ctxVal.component.numRows; i++) { %>
                        <% for (let j = ctxVal.component.numCols; j > 0; j--) { %>
                            <%- ctxVal.renderCell(i, j) %>
                            <label for="rating-input-<%= i+1 %>-<%= j %>" class="rating-star"></label>
                        <% } %>
                  <% } %>
              </div>`;

  let html = ejs.render(str, { ctxVal: ctx });
  return html;
};
