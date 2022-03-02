$(function()
{
    $('#DataNeraca').dxDataGrid({
        dataSource: "/api/getNeraca_old",
        method: "GET",

        contentType: "application/json",

        columns:[
//            {checkbox: true},
            {dataField:"NOCOA",caption:"Nomor COA", alignment: "center"},
            {dataField:"NAMACOA",caption:"Nama COA", alignment: "center"},
            {dataField:'DEBIT',caption:'Debit', format:{
                    type:'fixedPoint',
                    precision: 2}, alignment: 'center'},
            {dataField:"KREDIT",caption:"Kredit", format:{
                    type:'fixedPoint',
                    precision: 2}, alignment: "center"}

        ],
    });
})