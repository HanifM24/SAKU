$(function()
{
    var today = new Date();
    window.jsPDF = window.jspdf.jsPDF;
    applyPlugin(window.jsPDF);
    $("#formsearch").dxForm({
                             colCount: 1,
                             width: '300px',
                             position:'center',
                             labelLocation: "left",
                             alignItemLabels: true,
                             alignItemLabelsInAllGroups: true,
                             items: [
                             {

                                                                                 editorType: "dxDateBox",
                                                                                 dataField: "datefrom",
                                                                                 label: { text: "Hari", location: "left" },
                                                                                 editorOptions: {
                                                                                     value: today
                                                                                 },
                                                                                 validationRules: [
                                                                                     {
                                                                                         type: "required",
                                                                                     },
                                                                                 ]
                                                                             },

                             {
                                     itemType: "button",
                                     editorType: "dxTextBox",
                                     itemType: 'button',
                                     horizontalAlignment: 'center',
                                     buttonOptions: {
                                              text: 'Cari',
                                              type: 'danger',
                                              onClick: function() {
//                                                     var datefrom = $('#formsearch').find('input[name="datefrom"]').val();
//                                                     var dateto = $('#formsearch').find('input[name="dateto"]').val();
                                                     alert('Sedang dalam pengembangan, silahkan dicoba lagi nanti')
//                                                     $.ajax({
//                                                        url:'/api/getTRXjrnldtlwithparam'+'/'+datefrom+'/'+dateto,
//                                                        contentType: 'application/x-www-form-urlencoded',
//                                                        success: function(data){
//                                                                dataGrid.option("dataSource", {store:{type:"array", data: data}})
//                                                        }
//
//                                                     })


                                                                                         }

                                                                                     },
                                                         },
                             {
                                                              itemType: "button",
                                                              editorType: "dxTextBox",
                                                              itemType: 'button',
                                                              horizontalAlignment: 'center',
                                                              buttonOptions: {
                                                                       text: 'Reset tanggal',
                                                                       type: 'default',
                                                                       onClick: function() {
                                                                                $("#formsearch").dxForm('instance').getEditor("datefrom").option("value", today);
//                                                                                $("#formsearch").dxForm('instance').getEditor("dateto").option("value", today);

                                                                                                                  }

                                                                                                              },
                                                                                  },







                             ],
                         });
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
                                       const doc = new jsPDF();
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
            {dataField:"GROUP_COA", caption:"Header", alignment: "center", groupIndex:0},
            {dataField:"HEADER_COA", caption:"Group", alignment: "center", groupIndex:1, visible: false},
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
                showInGroupFooter: true,


            }]}
//            totalItems:[
//            {
//                column:"SALDO",
//                summaryType: "sum",
//                valueFormat:"#,##0.##",
////                customizeText(data) {
////                          result = data.value.toFixed(2);
////                          return `Total Saldo Keseluruhan: ` +result;
////                        },
//
//            },
//
//            ]}
    }).dxDataGrid('instance');
})