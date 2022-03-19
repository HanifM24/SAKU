$(function()
{
    window.jsPDF = window.jspdf.jsPDF;
    applyPlugin(window.jsPDF);
    var dataGrid = $('#DataNeraca').dxDataGrid({
        dataSource: "/api/getNeraca",
        method: "GET",
        export: {
                    enabled: true
                },
        toolbar: {
                               items: [
                               'exportButton',
        //                         'groupPanel',
                                 {
                                   widget: 'dxButton',
                                   location: 'after',
                                   options: {
                                     icon: 'exportpdf',
                                     text: 'Export to PDF',
                                     onClick() {
                                       const doc = new jsPDF('l', 'mm', [297, 210]);
                                       doc.setFontSize(6);
                                       DevExpress.pdfExporter.exportDataGrid({
                                         jsPDFDocument: doc,
                                         component: dataGrid,
                                       }).then(() => {
                                         doc.save('Neraca.pdf');
                                       });
                                     },
                                   },
                                 },
                                 'searchPanel'
                               ],
                             },

        contentType: "application/json",

        columns:[
//            {checkbox: true},
            {dataField:"GROUP_COA",caption:"", alignment: "center", groupIndex:0},
            {dataField:"NOCOA",caption:"Nomor COA", alignment: "left"},
            {dataField:"NAMACOA",caption:"Nama COA", alignment: "left"},
            {dataField:'SALDO',caption:'Saldo', format:{
                    type:'fixedPoint',
                    precision: 2}, alignment: 'right'}


        ],
        summary:{groupItems:[
            {
                column:"SALDO",
                summaryType: "sum",
                valueFormat:"#,##0.##",
                showInGroupFooter: true
            }],
            totalItems:[
            {
                column:"SALDO",
                summaryType: "sum",
                valueFormat:"#,##0.##",
//                customizeText(data) {
//                          result = data.value.toFixed(2);
//                          return `Total Saldo Keseluruhan: ` +result;
//                        },

            },

            ]}
    }).dxDataGrid('instance');
})