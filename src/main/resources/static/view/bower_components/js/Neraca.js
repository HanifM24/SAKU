var datefrom;
var choicedate = new Date(datefrom)
var today = new Date();
$(function()
{

    var titttle = "Neraca pada tanggal " +choicedate;

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
                                         label: { text: "Tanggal", location: "left" },
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
                                                    popup.show();
//                                                     var datefrom = $('#formsearch').find('input[name="datefrom"]').val();
//                                                     var dateto = $('#formsearch').find('input[name="dateto"]').val();

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
                                                                                           }

                                                                                                              },
                                                                                  },







                             ],
                         }).dxForm("instance");

    const popup = $("#popup").dxPopup({
                            title: titttle,
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
                                content.append('<div id="DataNeraca"/>')
    //                            content.append('<p>Datatrx</p> ')
                                content.dxScrollView({
                                                    width: '100%',
                                                    height: '100%',
                                                  });
                                return content;


                            },
                            onShown: function ()
                            {
                                     var dataGrid = $('#DataNeraca').dxDataGrid({
                                             dataSource: "/api/getNeraca/"+ datefrom,
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
                                                                      'searchPanel',
                                                                      {
                                                                      location: 'center',
                                                                            locateInMenu: 'never',
                                                                            template() {
//                                                                              return $("<div class='toolbar-label'><b>Tom's Club</b> Products</div>");
                                                                              return $("<div class='toolbar-label'>Laporan Neraca Pada Tanggal ${`datefrom`}</div>");
                                                                            },
                                                                      }
                                                                    ],
                                                                  },

                                             contentType: "application/json",

                                             columns:[
                                     //            {checkbox: true},
                                                 {dataField:"GROUP_COA", caption:"Header", alignment: "center", groupIndex:0},
                                                 {dataField:"HEADER_COA", caption:"Group", alignment: "center", groupIndex:1},
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
//                                                     customizeText(data) {
//                                                     debugger
//                                                               return `Total ${GROUP_COA}:` + data.value;
//                                                             }


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


                            }
                        }).dxPopup("instance");
})