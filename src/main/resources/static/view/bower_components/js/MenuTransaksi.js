




$(function(){
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
    const dataGrid = $('#Datatrx').dxDataGrid({
                dataSource: "/api/getTRXjrnldtl",
                method: "GET",
                columnAutoWidth: true,
                searchPanel: { visible: true },
                contentType: "application/json",
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
                         'searchPanel'
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


    // $("#modalbody2").on("show.bs.modal", function(e) {
    //
    //     $(this).find(".modal-body").load(datas.getAll('NO_COA'));
    // });



    $("#buttonadd").dxButton({
        stylingMode: 'contained',
        text:'Click untuk melakukan transaksi',
        type: 'default',
        width:'auto',
        onClick: () => {
            window.location = "http://localhost:8080/InputTransaksi";
            // popup.show();
        }
    });
});
