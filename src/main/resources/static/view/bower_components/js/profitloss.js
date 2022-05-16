$(function()
{
    var today = new Date();
    var datefrom;
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
                                                                 datefrom = $('#formsearch').find('input[name="datefrom"]').val();
            //                                                     var dateto = $('#formsearch').find('input[name="dateto"]').val();
                                                                 popup.show();
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
//    var dataGrid = $('#DataNeraca').dxDataGrid({
//        dataSource: "/api/getLabaRugi",
//        method: "GET",
//         export: {
//                                    enabled: true
//                                },
//
//        contentType: "application/json",
//        toolbar: {
//                                       items: [
//                                       'exportButton',
//                //                         'groupPanel',
//                                         {
//                                           widget: 'dxButton',
//                                           location: 'after',
//                                           options: {
//                                             icon: 'exportpdf',
//                                             text: 'Export to PDF',
//                                             onClick() {
//                                               const doc = new jsPDF('l', 'mm', [297, 210]);
//                                               doc.setFontSize(6);
//                                               DevExpress.pdfExporter.exportDataGrid({
//                                                 jsPDFDocument: doc,
//                                                 component: dataGrid,
//                                               }).then(() => {
//                                                 doc.save('Neraca.pdf');
//                                               });
//                                             },
//                                           },
//                                         },
//                                         'searchPanel'
//                                       ],
//                                     },
//
//
//        columns:[
//            {dataField:"GROUP_COA", caption:"Header", alignment: "center", groupIndex:0},
////            {dataField:"HEADER_COA", caption:"Group", alignment: "center", groupIndex:1, visible: false},
//            {dataField:"NOCOA",caption:"Nomor COA", alignment: "left"},
//            {dataField:"NAMACOA",caption:"Nama COA", alignment: "left"},
//            {dataField:'SALDO',caption:'Saldo', format:{
//                    type:'fixedPoint',
//                    precision: 2}, alignment: 'right'}
//
//
//        ],
//        summary:{groupItems:[
//            {
//                name: "SALDOTOTAL",
//                column:"SALDO",
//                summaryType: "sum",
//                valueFormat:"#,##0.##",
//                showInGroupFooter: true
//            }]}
////            totalItems:[
////            {
////                column:"SALDO",
////                summaryType: "sum",
////                valueFormat:"#,##0.##",
//////                customizeText(data) {
//////                          result = data.value.toFixed(2);
//////                          return `Total Saldo Keseluruhan: ` +result;
//////                        },
////
////            },
////
////            ]}
//    }).dxDataGrid('instance');
    const popup = $("#popup").dxPopup({
                                title: "Laba Rugi",
                                showTitle: true,
                                width: 1000,
                                // height: 450,
                                position: {
                                    my: 'center',
                                    at: 'center',
                                    of: window
                                },
                                showCloseButton: true,
                                visible: false,
                                dragEnabled: false,
                                closeOnOutsideClick: true,
                                contentTemplate: function()  {
                                    let content = $('<div  />');
                                    content.append('<div id="DataProfitloss"/>')
        //                            content.append('<p>Datatrx</p> ')
                                    content.dxScrollView({
                                                        width: '100%',
                                                        height: '100%',
                                                      });
                                    return content;


                                },
                                onShown: function ()
                                {
                                        var dataGrid = $('#DataProfitloss').dxDataGrid({
                                                dataSource: "/api/getLabaRugi/"+ datefrom,
                                                method: "GET",
                                                 export: {
                                                                            enabled: true
                                                                        },

                                                contentType: "application/json",
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


                                                columns:[
                                                    {dataField:"GROUP_COA", caption:"Header", alignment: "center", groupIndex:0},
                                        //            {dataField:"HEADER_COA", caption:"Group", alignment: "center", groupIndex:1, visible: false},
                                                    {dataField:"NOCOA",caption:"Nomor COA", alignment: "left"},
                                                    {dataField:"NAMACOA",caption:"Nama COA", alignment: "left"},
                                                    {dataField:'SALDO',caption:'Saldo', format:{
                                                            type:'fixedPoint',
                                                            precision: 2}, alignment: 'right'}


                                                ],
                                                summary:{groupItems:[
                                                    {
                                                        name: "SALDOTOTAL",
                                                        column:"SALDO",
                                                        summaryType: "sum",
                                                        valueFormat:"#,##0.##",
                                                        showInGroupFooter: true
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
        //                                $('#datefrom').dxDateBox({
        //                                                            type: 'date',
        //                                                            value: today,
        //                                                            width: 200,
        //                                                          });
        //                                $('#dateto').dxDateBox({
        //                                                               type: 'date',
        //                                                               value: today,
        //                                                               width: 200,
        //                                                             });

                                }
                            }).dxPopup("instance");
})