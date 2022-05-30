//function openForm() {
//      document.getElementById("myForm").style.display = "block";
//    }
//
//function closeForm() {
//      dcllocument.getElementById("myForm").style.display = "none";
//    }

var dataf = [];
$(function(){
    // $("#DataLedger").dxDataGrid({
    //     dataSource: "/api/getTRXledger/",
    //     loadPanel: {
    //         enabled: true
    //     },
    //     allowColumnReordering: true,
    //     allowColumnResizing: true,
    //     columnAutoWidth: true,
    //     columnChooser: {
    //         enabled: true
    //     },
    //     showBorders: true,
    //     showRowLines: true,
    //     onCellPrepared: function(e) {
    //         if (e.rowType === "group") {
    //             e.cellElement.css("background-color", "#f1f2f9");
    //         }
    //     },
    //     columns: [{
    //         dataField: "KTRG",
    //         caption: "Keterangan",
    //     }, {
    //         dataField: "INVOICE",
    //         caption: "No. Invoice",
    //     }, {
    //         dataField: "NOMINALTRXDBT",
    //         caption: "DEBIT",
    //         dataType: "number",
    //         width: 150,
    //         format: "#,##0.00;(#,##0.00)"
    //     }, {
    //         dataField: "NOMINALTRXKDT",
    //         caption: "CREDIT",
    //         dataType: "number",
    //         width: 150,
    //         format: "#,##0.00;(#,##0.00)"
    //     },
    //     //     {
    //     //     dataField: "balance",
    //     //     caption: "BALANCE",
    //     //     dataType: "number",
    //     //     width: 150,
    //     //     format: "#,##0.00;(#,##0.00)"
    //     // },
    //         {
    //             dataField: "NAMA_COA",
    //             caption: "Nama COA",
    //             groupIndex: 0
    //
    //         },
    //         {
    //         dataField: "NO_COA",
    //         caption: "Nomor COA",
    //         columnIndex: 6
    //         }
    //
    //     ],
    //     summary: {
    //         groupItems: [{
    //             column: "debit",
    //             summaryType: "sum",
    //             valueFormat: "#,##0.00;(#,##0.00)",
    //             displayFormat: "{0}",
    //             showInGroupFooter: true
    //         }, {
    //             column: "credit",
    //             summaryType: "sum",
    //             valueFormat: "#,##0.00;(#,##0.00)",
    //             displayFormat: "{0}",
    //             showInGroupFooter: true
    //         }],
    //         totalItems: [{
    //             column: "debit",
    //             summaryType: "sum",
    //             valueFormat: "#,##0.00;(#,##0.00)",
    //             displayFormat: "{0}",
    //
    //         }, {
    //             column: "credit",
    //             summaryType: "sum",
    //             valueFormat: "#,##0.00;(#,##0.00)",
    //             displayFormat: "{0}",
    //         }, {
    //             showInColumn: "balance",
    //             name: "balance",
    //             summaryType: "custom",
    //             valueFormat: "#,##0.00;(#,##0.00)",
    //             displayFormat: "{0}",
    //         }],
    //
    //         calculateCustomSummary: function(options) {
    //             if (options.name === "balance") {
    //                 if (options.summaryProcess === "start") {
    //                     val1 = 0;
    //                     val2 = 0;
    //                     options.totalValue = 0;
    //                 }
    //                 if (options.summaryProcess === "calculate") {
    //                     val1 += options.value.debit;
    //                     val2 += options.value.credit;
    //                 }
    //                 if (options.summaryProcess === 'finalize') {
    //                     options.totalValue = val1 - val2;
    //
    //                 }
    //             }
    //         },
    //     }
    // });
    $('#DataLedger').dxDataGrid({
        dataSource: "/api/getcoaforledger",
        method: "GET",
        export: {
                            enabled: true
                        },
        searchPanel: { visible: true },

        contentType: "application/json",
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
            {dataField:"NAMA_COA",caption:"Nama COA", alignment: "left"},
            {dataField:"NO_COA",caption:"Nomor COA", alignment: "left"},

        ],
        masterDetail: {
            enabled: true,
            template: function(container, info) {
                var currentledgerdata = info.data.NO_COA
                var currentledgername = info.data.NAMA_COA
                $('<div>')
                          .addClass('master-detail-caption')
                          .text(`GL Number : ${currentledgerdata}`)
                          .appendTo(container);
                var griddata = $('<div id="test">').dxDataGrid
                ({
                    dataSource:"/api/getTRXledger/"+currentledgerdata,
                    columnAutoWidth: true,
                    onContentReady: function (e) {
                        dataf = e.component.getDataSource().items();

                    },
                    columns: [
                        {dataField:'NO_TRX',caption:'Nomor Transaksi', alignment: "center"},
                        {dataField:'TGL_TRX',caption:'Tanggal Transaksi', dataType:"date", alignment: "center", format: "MMM dd, yyyy"},
                        {dataField:'KTRG',caption:'Keterangan', alignment: "center"},
                        {dataField:'INVOICE',caption:'Invoice', alignment: "center"},
                        {dataField:'MATA_UANG',caption:'Mata Uang', alignment: "center"},
                        {dataField:'NOMINALTRXDBT',caption:'Nominal Transaksi Debet',
                            format:{
                                type:'fixedPoint',
                                precision: 2}, alignment: "right"},
                        {dataField:'NOMINALTRXKDT',caption:'Nominal Transaksi Kredit',
                            format:{
                                type:'fixedPoint',
                                precision: 2}, alignment: "right"},
                        {dataField:'EKIVRP_DBT',caption:'Nominal Ekivalen Transaksi Debet in Rupiah',
                            format:{
                                type:'fixedPoint',
                                precision: 2}, alignment: "right"},
                        {dataField:'EKIVRP_KDT',caption:'Nominal Ekivalen Transaksi Kredit in Rupiah',
                            format:{
                                type:'fixedPoint',
                                precision: 2}, alignment: "right"},
                    ],
                    summary:{
                        totalItems:[
//                        {
//                            column: "NOMINALTRXDBT",
//                            summaryType: "sum",
//                            valueFormat: "#,##0.##"
//                        },{
//                            column: "NOMINALTRXKDT",
//                            summaryType: "sum",
//                            valueFormat: "#,##0.##"
//                        },
                        {
                            column: "EKIVRP_DBT",
                            summaryType: "sum",
                            valueFormat: "#,##0.##"
                        },{
                            column: "EKIVRP_KDT",
                            summaryType: "sum",
                            valueFormat: "#,##0.##"
                        }]
                    }
                }).appendTo(container)
                // $('<div>')
                //     .addClass('master-detail-caption')
                //     .text("Detail " + currentledgername)
                //     .appendTo(container);
                // $('<div>')
                //     .addClass('master-detail-caption')
                //     .text("Kredit")
                //     .appendTo(container);
                // $('<div>').dxDataGrid
                // ({
                //     dataSource:"/api/getTRXkdtdtl/"+currenttrxdata,
                //     columnAutoWidth: true,
                //
                //     columns: [
                //         {dataField:'NO_COA_KDT',caption:'Nomor COA Kredit', alignment: "center"},
                //         {dataField:'NAMA_COA_KDT',caption:'Nama COA Kredit', alignment: "center"},
                //         {dataField:'MATA_UANG_KDT',caption:'Mata Uang Kredit', alignment: "center"},
                //         {dataField:'INVOICE_KDT',caption:'Invoice Kredit', alignment: "center"},
                //         {dataField:'NOMINALTRXKDT',caption:'Nominal Transaksi Kredit',
                //             format:{
                //             type:'fixedPoint',
                //             precision:2}, alignment: "center"},
                //         {dataField:'KTRG_KDT',caption:'Keterangan Kredit', alignment: "center"},
                //     ],
                // }).appendTo(container)
            }

        }
    });

    $("#popup2").dxPopup({
        title: "List Debit dan Kredit yang telah diinput",
        showTitle: true,
        width: 650,
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
        onContentReady: e => {
            //  console.log('aa');
            $("#batal .dx-button-content .dx-button-text").text("Batal");
        },
        contentTemplate: function()  {
            let content = $('<div />');
            content.append('<div id="formInsert" />');
            // content.append('<div id="matauangdebet"');
            // content.append('<div id="invoicedebet"');
            // content.append('<div id="nominaltransaksidebet"');
            // content.append('<div id="keterangantrxdebet"');
            // content.append('<div id="nocoakredit"');
            // content.append('<div id="matauangkredit"');
            // content.append('<div id="invoicekredit"');
            // content.append('<div id="nominaltransaksikredit"');
            // content.append('<div id="keterangantrxkredit"');
            return content;



        },
        onShown: function ()
        {
            $("#formInsert").dxForm({
                colCount: 1,
                // width: '1000px',
                position:'center',
                labelLocation: "top",
                alignItemLabels: true,
                alignItemLabelsInAllGroups: true,
                items: [

                    {
                        itemType: "simple",
                        editorType: "dxTextBox",
                        dataField: "nocoa",
                        label: { text: "Masukkan Nomor COA", location: "top" },
                        editorOptions: {
                            placeholder:"Masukkan Nomor COA.."
                        },
                        validationRules: [
                            {
                                type: "required",
                            },
                        ]
                    },
                    {
                        itemType: "simple",
                        editorType: "dxTextBox",
                        dataField: "namacoa",
                        label: { text: "Masukkan Nama COA", location: "top" },
                        editorOptions: {
                            placeholder:"Masukkan Nama COA.."
                        },
                        validationRules: [
                            {
                                type: "required",
                            },
                        ]
                    },
                    {
                        itemType: "simple",
                        editorType: "dxSelectBox",
                        dataField: "idplusket",
                        label: { text: "Pilih Posisi COA", location: "top" },
                        editorOptions: {
                            dataSource: "/api/getposisi",
                            placeholder: "Pilih Posisi COA...",
                            showSelectionControls: true,
                            applyValueMode: "useButtons",
                            displayExpr: function (data) {
                                if (data) {
                                    return `${data.idplusket}`;
                                }
                                return null;
                            },

                            keyExpr: "idplusket",
                            valueExpr: "idplusket",
                            searchEnabled: true,
                        },
                        validationRules: [
                            {
                                type: "required",
                            },
                        ]
                    },
                    {
                        itemType: "simple",
                        editorType: "dxTextBox",
                        dataField: "ket",
                        label: { text: "Masukkan Keterangan COA (Optional)", location: "top" },
                        editorOptions: {placeholder:"Masukkan Keterangan COA.."}
                    },
                    {
                        dataField: 'submitBut',
                        itemType: 'button',
                        horizontalAlignment: 'center',
                        buttonOptions: {
                            text: 'Submit',
                            type: 'success',
                            onClick: function() {
                                var nocoa = $('#formInsert').find('input[name="nocoa"]').val();
                                var namacoa = $('#formInsert').find('input[name="namacoa"]').val();
                                var posisi = $('#formInsert').find('input[name="idplusket"]').val();
                                var sliceposisi = posisi.slice(0, 1);
                                var KET = $('#formInsert').find('input[name="ket"]').val();
                                var formData = new FormData();
                                formData.append('NO_COA', nocoa);
                                formData.append('NAMA_COA', namacoa);
                                formData.append('POSISI', sliceposisi);
                                formData.append('KET',KET);
                                debugger
                                $.ajax({
                                    url: '/api/postCOA?NO_COA='+nocoa+'&NAMA_COA='+namacoa+'&POSISI='+sliceposisi+'&KET='+KET,
                                    method: 'POST',

                                    processData: false,

//
                                    success: location.reload()

                                });


                                alert("clicked")
                                // paraminput()

                                debugger


                                cek.show();
                            }
                            // useSubmitBehavior: true,
                        },

                    },


                ],
            });
        }

    });
    $('#AddButton').dxButton({
        stylingMode: 'contained',
        text: 'Tambah COA',
        type: 'success',
        width: 120,
        onClick() {
            popup2.show();
            // DevExpress.ui.notify('The Contained button was clicked');
        },
    });



    const popup2 = $("#popup2").dxPopup("instance");
    $('#Update_Button').click(function(){
        var result= $(this).data('NO_COA');
        alert(result);
    });
    $('#Submit_Button').click(function(){
        {
              var nocoa = $('#forminputcoa').find('input[name="nocoa"]').val();
              var namacoa = $('#forminputcoa').find('input[name="namacoa"]').val();
              var posisi = $('#forminputcoa').find('input[name="posisi"]').val();
              var formData = new FormData();
              formData.append('NO_COA', nocoa);
              formData.append('NAMA_COA', namacoa);
              formData.append('POSISI', posisi);
              $.ajax({
                    url: '/api/postCOA?NO_COA='+nocoa+'&NAMA_COA='+namacoa+'&POSISI='+posisi,
                    method: 'POST',

                    processData: false,

//                    data: formData,
                    success: location.reload()

              });

//            url: '/api/postCOA',
//            method: 'POST',
//            dataType: 'json',
//            data: $("#forminputcoa").serialize(),
//            success: $('#DataCOA').datagrid('reload')

        }
        });

//    $('#forminputcoa').submit({function()
//    {
//        $.ajax({
//            datatype: 'json',
//            url:'/api/postCOA',
//            method: 'POST',
//            success: function(data){alert('suvex')}
//
//        })
//        alert('data tidak ada')
//    }});


});
