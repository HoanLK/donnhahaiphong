
//thay đổi style table
var headertext = [],
headers = document.querySelectorAll("#miyazaki th span"),
tablerows = document.querySelectorAll("#miyazaki th"),
tablebody = document.querySelector("#miyazaki tbody");

for (var i = 0; i < headers.length; i++) {
    var current = headers[i];
    headertext.push(current.textContent.replace(/\r?\n|\r/, ""));
}
for (var i = 0, row; row = tablebody.rows[i]; i++) {
    for (var j = 1, col; col = row.cells[j]; j++) {
        col.setAttribute("data-th", headertext[j]);
    }
}
//end


	//căn lại css cho row tên dịch vụ
$(window).ready(function () {
    $("ul.dichvu").css("width", "100%");
    $("ul.dichvu").css("padding-left", "0");
    $("ul.dichvu").parent().addClass("tddichvu");
});
