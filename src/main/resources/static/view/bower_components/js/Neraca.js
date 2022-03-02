$(function()
{
    $('#DataNeraca').dxDataGrid({
        dataSource: "/api/getNeraca",
        method: "GET",

        contentType: "application/json",

        columns:[
//            {checkbox: true},
            {dataField:"GROUP_COA",caption:"", alignment: "center", groupIndex:0},
            {dataField:"NOCOA",caption:"Nomor COA", alignment: "center"},
            {dataField:"NAMACOA",caption:"Nama COA", alignment: "center"},
            {dataField:'SALDO',caption:'Saldo', format:{
                    type:'fixedPoint',
                    precision: 2}, alignment: 'center'}


        ],
        summary:{groupItems:[
            {
                column:"SALDO",
                summaryType: "sum",
                valueFormat:"#,##0.##",
                showInGroupFooter: true
            }]}
    });
})