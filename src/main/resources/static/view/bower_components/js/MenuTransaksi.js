




$(function(){
    var datefrom;
    var dateto;
    var today = new Date();
    var arrobjdbt = [];
    window.jsPDF = window.jspdf.jsPDF;
    applyPlugin(window.jsPDF);

    var datas = new FormData();
//    $('#Datatrx').dxDataGrid({
//        dataSource: "/api/getTRX",
//        method: "GET",
//
//        contentType: "application/json",
//        // dataSource: {
//        //     url: '/api/getTRX',
//        //     method: 'GET',
//        //     contentType: "application/json",
//        //     dataType: 'text',
//        //     align: 'center',
//        //     // fitColumns: true
//        // },
//        columns:[
////            {checkbox: true},
//            {dataField:"TGL_TRX",caption:"Tanggal Transaksi", dataType:"date", alignment: "center", format: "MMM dd, yyyy"},
//            {dataField:"NO_TRX",caption:"Nomor Transaksi", alignment: "center"},
//
//        ],
//        masterDetail: {
//            enabled: true,
//            template: function(container, info) {
//                var currenttrxdata = info.data.NO_TRX
//                // $('<div>')
//                //     .addClass('master-detail-caption')
//                //     .text("Detail")
//                //     .appendTo(container);
//                $('<d   iv>').dxDataGrid
//                ({
//                    dataSource:"/api/getTRXjrnldtl/"+currenttrxdata,
//                    columnAutoWidth: true,
//
//                    columns: [
//                        {dataField:'NAMA_COA_DBT',caption:'Nama COA Debet', alignment: "center"},
//                        {dataField:'NAMA_COA_KDT',caption:'Nama COA Kredit', alignment: "center"},
//                        {dataField:'NO_COA',caption:'COA Ref', alignment: "center"},
//                        {dataField:'MATA_UANG',caption:'Mata Uang', alignment: "center"},
//                        {dataField:'NOMINALTRXDBT',caption:'Nominal Transaksi Debet',
//                            format:{
//                                type:'fixedPoint',
//                                precision: 2}, alignment: "center"},
//                        {dataField:'NOMINALTRXKDT',caption:'Nominal Transaksi Kredit',
//                            format:{
//                                type:'fixedPoint',
//                                precision: 2}, alignment: "center"},
//                        {dataField:'EKIVRP_DBT',caption:'Nominal Ekivalen Transaksi Debet',
//                            format:{
//                                type:'fixedPoint',
//                                precision: 2}, alignment: "center"},
//                        {dataField:'EKIVRP_KDT',caption:'Nominal Ekivalen Transaksi Kredit',
//                            format:{
//                                type:'fixedPoint',
//                                precision: 2}, alignment: "center"},
//                        {dataField:'INVOICE',caption:'Nomor Invoice', alignment: "center"},
//                        {dataField:'KTRG',caption:'Keterangan', alignment: "center"},
//                    ],
//                }).appendTo(container)
//                // $('<div>')
//                //     .addClass('master-detail-caption')
//                //     .text("Kredit")
//                //     .appendTo(container);
//                // $('<div>').dxDataGrid
//                // ({
//                //     dataSource:"/api/getTRXkdtdtl/"+currenttrxdata,
//                //     columnAutoWidth: true,
//                //
//                //     columns: [
//                //         {dataField:'NO_COA_KDT',caption:'Nomor COA Kredit', alignment: "center"},
//                //         {dataField:'NAMA_COA_KDT',caption:'Nama COA Kredit', alignment: "center"},
//                //         {dataField:'MATA_UANG_KDT',caption:'Mata Uang Kredit', alignment: "center"},
//                //         {dataField:'INVOICE_KDT',caption:'Invoice Kredit', alignment: "center"},
//                //         {dataField:'NOMINALTRXKDT',caption:'Nominal Transaksi Kredit',
//                //             format:{
//                //             type:'fixedPoint',
//                //             precision:2}, alignment: "center"},
//                //         {dataField:'KTRG_KDT',caption:'Keterangan Kredit', alignment: "center"},
//                //     ],
//                // }).appendTo(container)
//            }
//
//        }
//        });
//    $('#datefrom').dxDateBox({
//                                type: 'date',
//                                value: today,
//                                width: 200,
//                              });
//    $('#dateto').dxDateBox({
//                                   type: 'date',
//                                   value: today,
//                                   width: 200,
//                                 });
                $("#formsearch").dxForm({
                         colCount: 2,
                         width: '500px',
                         position:'center',
                         labelLocation: "left",
                         alignItemLabels: true,
                         alignItemLabelsInAllGroups: true,
                         items: [
                         {

                                                                             editorType: "dxDateBox",
                                                                             dataField: "datefrom",
                                                                             label: { text: "Dari", location: "left" },
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

                                 editorType: "dxDateBox",
                                 dataField: "dateto",
                                 label: { text: "Ke", location: "left" },
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
                                                 dateto = $('#formsearch').find('input[name="dateto"]').val();
                                                 popup.show();
//                                                 $.ajax({
//                                                    url:'/api/getTRXjrnldtlwithparam'+'/'+datefrom+'/'+dateto,
//                                                    contentType: 'application/x-www-form-urlencoded',
//                                                    success: function(data){
//                                                                popup.show()
////                                                            dataGrid.option("dataSource", {store:{type:"array", data: data}})
//                                                    }
//
//                                                 })


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
                                                                            $("#formsearch").dxForm('instance').getEditor("dateto").option("value", today);

                                                                                                              }

                                                                                                          },
                                                                              },







                         ],
                     });
//    const dataGrid = $('#Datatrx').dxDataGrid({
//                dataSource: "/api/getTRXjrnldtl",
//                method: "GET",
//                columnAutoWidth: true,
//                searchPanel: { visible: true },
//                contentType: "application/json",
//                export: {
//
//                                    enabled: true
//                                },
//                toolbar: {
//                       items: [
//                       'exportButton',
////                         'groupPanel',
//                         {
//                           widget: 'dxButton',
//                           location: 'after',
//                           options: {
//                             icon: 'exportpdf',
//                             text: 'Export to PDF',
//                             onClick() {
//                               const doc = new jsPDF('l', 'mm', [297, 210]);
//                               doc.setFontSize(6);
//                               DevExpress.pdfExporter.exportDataGrid({
//                                 jsPDFDocument: doc,
//                                 component: dataGrid,
//                               }).then(() => {
//                                 doc.save('JurnalTRX.pdf');
//                               });
//                             },
//                           },
//                         },
//                         'searchPanel',
//                       ],
//                     },
//                // dataSource: {
//                //     url: '/api/getTRX',
//                //     method: 'GET',
//                //     contentType: "application/json",
//                //     dataType: 'text',
//                //     align: 'center',
//                //     // fitColumns: true
//                // },
//                columns:[
//        //            {checkbox: true},
//                    {dataField:"TGL_TRX",caption:"Tanggal Transaksi", dataType:"date", alignment: "left", format: "MMM dd, yyyy"},
//                    {dataField:"NO_TRX",caption:"Nomor Transaksi", alignment: "left", groupIndex:0},
////                    {dataField:"NO_TRX",caption:"Nomor Transaksi", alignment: "center"},
//                    {dataField:'NAMA_COA',caption:'Nama COA', alignment: "left"},
////                    {dataField:'NAMA_COA_KDT',caption:'Nama COA Kredit', alignment: "center"},
//                    {dataField:'NO_COA',caption:'COA Ref', alignment: "left"},
//                    {dataField:'MATA_UANG',caption:'Mata Uang', alignment: "left"},
//                    {dataField:'NOMINALTRXDBT',caption:'Nominal Transaksi Debet',
//                                                        format:{
//                                                            type:'fixedPoint',
//                                                            precision: 2}, alignment: "right"},
//                    {dataField:'NOMINALTRXKDT',caption:'Nominal Transaksi Kredit',
//                                                        format:{
//                                                            type:'fixedPoint',
//                                                            precision: 2}, alignment: "right"},
//                    {dataField:'EKIVRP_DBT',caption:'Nominal Ekivalen Transaksi Debet',
//                                                        format:{
//                                                            type:'fixedPoint',
//                                                            precision: 2}, alignment: "right"},
//                    {dataField:'EKIVRP_KDT',caption:'Nominal Ekivalen Transaksi Kredit',
//                                                        format:{
//                                                            type:'fixedPoint',
//                                                            precision: 2}, alignment: "right"},
//                    {dataField:'INVOICE',caption:'Nomor Invoice', alignment: "left"},
//                    {dataField:'KTRG',caption:'Keterangan', alignment: "left"},
//
//                ],
//
//                }).dxDataGrid('instance');
    const popup = $("#popup").dxPopup({
                        title: "Jurnal Entri",
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
                            content.append('<div id="Datatrx"/>')
//                            content.append('<p>Datatrx</p> ')
                            content.dxScrollView({
                                                width: '100%',
                                                height: '100%',
                                              });
                            return content;


                        },
                        onShown: function ()
                        {
                                 const dataGrid = $('#Datatrx').dxDataGrid({
                                                 dataSource: '/api/getTRXjrnldtlwithparam'+'/'+datefrom+'/'+dateto,  // "/api/getTRXjrnldtl",
                                                 method: "GET",
                                                 columnAutoWidth: true,
                                                 searchPanel: { visible: true },
//                                                 showBorders: true,
                                                 contentType: "application/json",
//                                                  scrolling: {
//                                                       mode: 'virtual',
//                                                     },
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
                                                                  doc.save('JurnalTRX.pdf');
                                                                });
                                                              },
                                                            },
                                                          },
                                                          'searchPanel',
                                                        ],
                                                      },
                                                 // dataSource: {
                                                 //     url: '/api/getTRX',
                                                 //     method: 'GET',
                                                 //     contentType: "application/json",
                                                 //     dataType: 'text',
                                                 //     align: 'center',
                                                 //     // fitColumns: true
                                                 // },
                                                 columns:[
                                         //            {checkbox: true},
                                                     {dataField:"TGL_TRX",caption:"Tanggal Transaksi", dataType:"date", alignment: "left", format: "MMM dd, yyyy"},
                                                     {dataField:"NO_TRX",caption:"Nomor Transaksi", alignment: "left", groupIndex:0},
                                 //                    {dataField:"NO_TRX",caption:"Nomor Transaksi", alignment: "center"},
                                                     {dataField:'NAMA_COA',caption:'Nama COA', alignment: "left"},
                                 //                    {dataField:'NAMA_COA_KDT',caption:'Nama COA Kredit', alignment: "center"},
                                                     {dataField:'NO_COA',caption:'COA Ref', alignment: "left"},
                                                     {dataField:'MATA_UANG',caption:'Mata Uang', alignment: "left"},
                                                     {dataField:'NOMINALTRXDBT',caption:'Nominal Transaksi Debet',
                                                                                         format:{
                                                                                             type:'fixedPoint',
                                                                                             precision: 2}, alignment: "right"},
                                                     {dataField:'NOMINALTRXKDT',caption:'Nominal Transaksi Kredit',
                                                                                         format:{
                                                                                             type:'fixedPoint',
                                                                                             precision: 2}, alignment: "right"},
                                                     {dataField:'EKIVRP_DBT',caption:'Nominal Ekivalen Transaksi Debet',
                                                                                         format:{
                                                                                             type:'fixedPoint',
                                                                                             precision: 2}, alignment: "right"},
                                                     {dataField:'EKIVRP_KDT',caption:'Nominal Ekivalen Transaksi Kredit',
                                                                                         format:{
                                                                                             type:'fixedPoint',
                                                                                             precision: 2}, alignment: "right"},
                                                     {dataField:'INVOICE',caption:'Nomor Invoice', alignment: "left"},
                                                     {dataField:'KTRG',caption:'Keterangan', alignment: "left"},

                                                 ],

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


    // $("#modalbody2").on("show.bs.modal", function(e) {
    //
    //     $(this).find(".modal-body").load(datas.getAll('NO_COA'));
    // });
});
