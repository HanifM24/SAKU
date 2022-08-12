var datefrom;
var choicedate = new Date(datefrom)
var today = new Date();
$(function()
{

    var titttle = "Neraca pada tanggal " +today;

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
                                  text: 'Search',
                                  type: 'danger',
                                  onClick: function() {
                                        datefrom = $('#formsearch').find('input[name="datefrom"]').val();
                                        popup.show();
                                        }

                                        },
                 },
                 {
                          itemType: "button",
                          editorType: "dxTextBox",
                          itemType: 'button',
                          horizontalAlignment: 'center',
                          buttonOptions: {
                                   text: 'Reset Date',
                                   type: 'default',
                                   onClick: function() {
                                                  $("#formsearch").dxForm('instance').getEditor("datefrom").option("value", today);
                                                       }

                                         },
                 },

                 ]
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
                                                    {
                                                        widget: 'dxButton',
                                                        location: 'after',
                                                        options:{
                                                            icon: 'xlsxfile',
                                                            onClick(){
                                                                location.href = "/api/getNeracaExcel/"+ datefrom
//                                                                $.ajax({
//                                                                url:"/api/getNeracaExcel/"+ datefrom,
//                                                                method:'GET',
////                                                                contentType: false,
////                                                                processData: false,
//                                                                success: function(e)
//                                                                {
//                                                                    debugger
//                                                                    alert('success');
////                                                                    const byteCharacters = atob(e);
////                                                                    for (let i = 0; i < byteCharacters.length; i++) {
////                                                                        byteNumbers[i] = byteCharacters.charCodeAt(i);
////                                                                    }
////                                                                    debugger
////                                                                    var arr = data.file;
////                                                                    var byteArray = new Uint8Array(arr);
////                                                                    var a = window.document.createElement('a');
////
////                                                                    a.href = window.URL.createObjectURL(new Blob([e], { type: 'application/octet-stream' }));
////                                                                    a.download = data.filename;
////
////                                                                    // Append anchor to body.
////                                                                    document.body.appendChild(a)
////                                                                    a.click();
////
////
////                                                                    // Remove anchor from body
////                                                                    document.body.removeChild(a)
//
//
////                                                                    const strFile = e.substring(10,48)
////                                                                    const element = document.createElement("a");
////                                                                    element.setAttribute('href', "view/");
////                                                                    element.setAttribute('download', strFile);
////                                                                    debugger
////                                                                    element.style.display = "none";
////                                                                    document.body.appendChild(element);
////                                                                    element.click();
////                                                                    document.body.removeChild(element);
//
//                                                                }
//                                                                })
                                                            }
                                                        }
                             //                         'groupPanel',
                                                        },
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