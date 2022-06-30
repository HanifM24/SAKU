//function openForm() {
//      document.getElementById("myForm").style.display = "block";
//    }
//
//function closeForm() {
//      dcllocument.getElementById("myForm").style.display = "none";
//    }

var dataf = [];
$(function(){
    $('#DataAudit').dxDataGrid({
            dataSource: "/api/getaudittrails",
            method: "GET",
            allowColumnResizing: true,
            export: {
                                enabled: true
                            },
            searchPanel: { visible: true },

            contentType: "application/json",

            columns:[
    //            {checkbox: true},
                {dataField:"DESKRIPSI",caption:"Activity", alignment: "left"},
                {dataField:"Tanggal",caption:"Date", alignment: "left"},
                {dataField:"Jam",caption:"Time", alignment: "left"},

            ],

        });

});
