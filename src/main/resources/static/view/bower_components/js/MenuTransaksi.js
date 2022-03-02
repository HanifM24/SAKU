




$(function(){
    var arrobjdbt = [];

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
    $('#Datatrx').dxDataGrid({
                dataSource: "/api/getTRXjrnldtl",
                method: "GET",
                columnAutoWidth: true,
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
                    {dataField:"TGL_TRX",caption:"Tanggal Transaksi", dataType:"date", alignment: "center", format: "MMM dd, yyyy"},
                    {dataField:"NO_TRX",caption:"Nomor Transaksi", alignment: "center", groupIndex:0},
                    {dataField:"NO_TRX",caption:"Nomor Transaksi", alignment: "center"},
                    {dataField:'NAMA_COA_DBT',caption:'Nama COA Debet', alignment: "center"},
                    {dataField:'NAMA_COA_KDT',caption:'Nama COA Kredit', alignment: "center"},
                    {dataField:'NO_COA',caption:'COA Ref', alignment: "center"},
                    {dataField:'MATA_UANG',caption:'Mata Uang', alignment: "center"},
                    {dataField:'NOMINALTRXDBT',caption:'Nominal Transaksi Debet',
                                                        format:{
                                                            type:'fixedPoint',
                                                            precision: 2}, alignment: "center"},
                    {dataField:'NOMINALTRXKDT',caption:'Nominal Transaksi Kredit',
                                                        format:{
                                                            type:'fixedPoint',
                                                            precision: 2}, alignment: "center"},
                    {dataField:'EKIVRP_DBT',caption:'Nominal Ekivalen Transaksi Debet',
                                                        format:{
                                                            type:'fixedPoint',
                                                            precision: 2}, alignment: "center"},
                    {dataField:'EKIVRP_KDT',caption:'Nominal Ekivalen Transaksi Kredit',
                                                        format:{
                                                            type:'fixedPoint',
                                                            precision: 2}, alignment: "center"},
                    {dataField:'INVOICE',caption:'Nomor Invoice', alignment: "center"},
                    {dataField:'KTRG',caption:'Keterangan', alignment: "center"},

                ],

                });


    // $("#modalbody2").on("show.bs.modal", function(e) {
    //
    //     $(this).find(".modal-body").load(datas.getAll('NO_COA'));
    // });


    $("#popup").dxPopup({
        title: "Tambah Transaksi",
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
        onShown: function (e) {


            $("#formInsert").dxForm({
                colCount: 2,
                labelLocation: "top",
                alignItemLabels: true,
                alignItemLabelsInAllGroups: true,
                items: [

                    {
                        itemType: "simple",
                        editorType: "dxSelectBox",
                        dataField: "NOPLUSNAMACOA",
                        label: { text: "Pilih COA Debet", location: "top" },
                        editorOptions: {
                            dataSource: "/api/getnocoaplusname",
                            placeholder: "Pilih Nomor COA disini...",
                            showSelectionControls: true,
                            applyValueMode: "useButtons",
                            displayExpr: function (data) {
                                if (data) {
                                    return `${data.NOPLUSNAMACOA}`;
                                }
                                return null;
                            },
                            // onValueChanged: function (data) {
                            //     var val = data.value ? data.value : "";
                            //     var kodeUser = val;
                            //     var method = "GET";
                            //     var uservalue = "/Simodis/Monitoring/GetdataLDAP?usermail=" + kodeUser;
                            //     assignvalue(method, uservalue);
                            //     tempIndexFailed = {};
                            // },
                            keyExpr: "NOPLUSNAMACOA",
                            valueExpr: "NOPLUSNAMACOA",
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
                        editorType: "dxSelectBox",
                        dataField: "NOPLUSNAMACOA",
                        label: { text: "Pilih COA Kredit", location: "top" },
                        editorOptions: {
                            dataSource: "/api/getnocoaplusname",
                            placeholder: "Pilih Nomor COA disini...",
                            showSelectionControls: true,
                            applyValueMode: "useButtons",
                            displayExpr: function (data) {
                                if (data) {
                                    return `${data.NOPLUSNAMACOA}`;
                                }
                                return null;
                            },
                            // onValueChanged: function (data) {
                            //     var val = data.value ? data.value : "";
                            //     var kodeUser = val;
                            //     var method = "GET";
                            //     var uservalue = "/Simodis/Monitoring/GetdataLDAP?usermail=" + kodeUser;
                            //     assignvalue(method, uservalue);
                            //     tempIndexFailed = {};
                            // },
                            keyExpr: "NOPLUSNAMACOA",
                            valueExpr: "NOPLUSNAMACOA",
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
                        editorType: "dxSelectBox",
                        dataField: "KODEPLUSNAMAUANG",
                        label: { text: "Pilih Mata Uang Debet", location: "top" },
                        editorOptions: {
                            dataSource: "/api/getmatauang",
                            placeholder: "Pilih Mata Uang Debet...",
                            showSelectionControls: true,
                            applyValueMode: "useButtons",
                            displayExpr: function (data) {
                                if (data) {
                                    return `${data.KODEPLUSNAMAUANG}`;
                                }
                                return null;
                            },
                            // onValueChanged: function (data) {
                            //     var val = data.value ? data.value : "";
                            //     var kodeUser = val;
                            //     var method = "GET";
                            //     var uservalue = "/Simodis/Monitoring/GetdataLDAP?usermail=" + kodeUser;
                            //     assignvalue(method, uservalue);
                            //     tempIndexFailed = {};
                            // },
                            keyExpr: "KODEPLUSNAMAUANG",
                            valueExpr: "KODEPLUSNAMAUANG",
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
                        editorType: "dxSelectBox",
                        dataField: "KODEPLUSNAMAUANG",
                        label: { text: "Pilih Mata Uang Kredit", location: "top" },
                        editorOptions: {
                            dataSource: "/api/getmatauang",
                            placeholder: "Pilih Mata Uang Kredit...",
                            showSelectionControls: true,
                            applyValueMode: "useButtons",
                            displayExpr: function (data) {
                                if (data) {
                                    return `${data.KODEPLUSNAMAUANG}`;
                                }
                                return null;
                            },
                            // onValueChanged: function (data) {
                            //     var val = data.value ? data.value : "";
                            //     var kodeUser = val;
                            //     var method = "GET";
                            //     var uservalue = "/Simodis/Monitoring/GetdataLDAP?usermail=" + kodeUser;
                            //     assignvalue(method, uservalue);
                            //     tempIndexFailed = {};
                            // },
                            keyExpr: "KODEPLUSNAMAUANG",
                            valueExpr: "KODEPLUSNAMAUANG",
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
                        label: { text: "Masukkan Invoice debet Jika Ada", location: "top" },
                        editorOptions: {placeholder:"Masukkan Nomor Invoice.."}
                    },
                    {
                        itemType: "simple",
                        editorType: "dxTextBox",
                        label: { text: "Masukkan Invoice Kredit Jika Ada", location: "top" },
                        editorOptions: {placeholder:"Masukkan Nomor Invoice.."}
                    },
                    {
                        itemType: "simple",
                        editorType: "dxTextBox",
                        label: { text: "Masukkan Nominal Debet", location: "top" },
                        editorOptions: {placeholder:"Masukkan Nominal Debet.."},
                        validationRules: [
                            {
                                type: "required",
                            },
                        ]
                    },
                    {
                        itemType: "simple",
                        editorType: "dxTextBox",
                        label: { text: "Masukkan Nominal Kredit", location: "top" },
                        editorOptions: {placeholder:"Masukkan Nominal Kredit.."},
                        validationRules: [
                            {
                                type: "required",
                            },
                        ]
                    },
                    {
                        itemType: "simple",
                        editorType: "dxTextBox",
                        label: { text: "Masukkan Deskripsi Transaksi Debet (Optional)", location: "top" },
                        editorOptions: {placeholder:"Masukkan Deskripsi Transaksi .."}
                    },
                    {
                        itemType: "simple",
                        editorType: "dxTextBox",
                        label: { text: "Masukkan Deskripsi Transaksi Kredit (Optional)", location: "top" },
                        editorOptions: {placeholder:"Masukkan Deskripsi Transaksi.."}
                    },
                    {
                        itemType: 'button',
                        horizontalAlignment: 'center',
                        buttonOptions: {
                            text: 'Input Debet',
                            type: 'success',
                            useSubmitBehavior: true,
                        },
                        onClick: () => {
                            popup.hide();
                            popup2.show();
                        }
                    },
                    {
                        itemType: 'button',
                        horizontalAlignment: 'center',
                        buttonOptions: {
                            text: 'Input Kredit',
                            type: 'success',
                            useSubmitBehavior: true,
                        },
                        onClick: () => {
                            popup.hide();
                            popup2.show();
                        }
                    },



                ],
            });


        },
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
            content.append('test');
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

    });
    const popup = $("#popup").dxPopup("instance");
    const popup2 = $("#popup2").dxPopup("instance");

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



    $('#Submit_Button').click(function(){
        {
              var nocoa = $('#InputTransaksi').find('input[name="nocoa"]').val();
              var slicecoa = nocoa.slice(0, 6);
              var matauang = $('#InputTransaksi').find('input[name="matauang"]').val();
              var slicematauang = matauang.slice(0, 3);
              var invoice = $('#InputTransaksi').find('input[name="invoice"]').val();
              var nominaldebet = $('#InputTransaksi').find('input[name="nominaltransaksidebet"]').val();
              var nominalkredit = $('#InputTransaksi').find('input[name="nominaltransaksikredit"]').val();
//              var formData = new FormData();
//              formData.append('NO_COA', nocoa);
//              formData.append('NAMA_COA', namacoa);
//              formData.append('POSISI', posisi);
              $.ajax({
                    url: '/api/postTRX?NO_COA='+slicecoa+
                         '&INVOICE'+invoice+
                         '&MATA_UANG='+slicematauang+
                         '&NOMINAL_DBT='+nominaldebet+
                         '&NOMINAL_KDT='+nominalkredit,
                    method: 'POST',

                    processData: false,

//                    data: formData,
                    success: $('#Datatrx').datagrid('reload')

              });

//            url: '/api/postCOA',
//            method: 'POST',
//            dataType: 'json',
//            data: $("#forminputcoa").serialize(),
//            success: $('#DataCOA').datagrid('reload')

        }
        });

    $('#insertdebet').click(function(){
            {
                  var dbt_json = {};
                  var nocoadebet = $('#InputTransaksi').find('input[name="nocoadebet"]').val();
                  var slicecoadebet = nocoadebet.slice(0, 6);
                  var matauangdebet = $('#InputTransaksi').find('input[name="matauangdebet"]').val();
                  var slicematauangdebet = matauangdebet.slice(0, 3);
                  var invoicedebet = $('#InputTransaksi').find('input[name="invoicedebet"]').val();
                  var nominaldebet = $('#InputTransaksi').find('input[name="nominaltransaksidebet"]').val();
                  var keterangantrxdebet = $('#InputTransaksi').find('input[name="keterangantrxdebet"]').val();
                  dbt_json = {NO_COA: slicecoadebet,
                              MATA_UANG: slicematauangdebet,
                              INVOICE: invoicedebet,
                              NOMINAL_DBT: nominaldebet,
                              NOMINAL_KDT: null,
                              KTRG_TRX: null
                            }

                  arrobjdbt.push(dbt_json);
                  var dataf = JSON.stringify(dbt_json)
                  datas.append('NO_COA', slicecoadebet);
                  datas.append('MATA_UANG', slicematauangdebet);
                  datas.append('INVOICE', invoicedebet);
                  datas.append('NOMINAL_DBT', nominaldebet);
                  datas.append('NOMINAL_KDT', null);
                  datas.append('KTR_TRX', keterangantrxdebet);



    //              var formData = new FormData();
    //              formData.append('NO_COA', nocoa);
    //              formData.append('NAMA_COA', namacoa);
    //              formData.append('POSISI', posisi);
//                  arrobjdbt

    //            url: '/api/postCOA',
    //            method: 'POST',
    //            dataType: 'json',
    //            data: $("#forminputcoa").serialize(),
    //            success: $('#DataCOA').datagrid('reload')

            }
            });

    $('#insertkredit').click(function(){
                {
                      var dbt_json = {};
                      var nocoakredit = $('#InputTransaksi').find('input[name="nocoakredit"]').val();
                      var slicecoakredit = nocoakredit.slice(0, 6);
                      var matauangkredit = $('#InputTransaksi').find('input[name="matauangkredit"]').val();
                      var slicematauangkredit = matauangkredit.slice(0, 3);
                      var invoicekredit = $('#InputTransaksi').find('input[name="invoicekredit"]').val();
                      var nominalkredit = $('#InputTransaksi').find('input[name="nominaltransaksikredit"]').val();
                      var keterangantrxkredit = $('#InputTransaksi').find('input[name="keterangantrxkredit"]').val();

                      datas.append('NO_COA', slicecoakredit);
                      datas.append('MATA_UANG', slicematauangkredit);
                      datas.append('INVOICE', invoicekredit);
                      datas.append('NOMINAL_DBT', null);
                      datas.append('NOMINAL_KDT', nominalkredit);
                      datas.append('KTR_TRX', keterangantrxkredit);



        //              var formData = new FormData();
        //              formData.append('NO_COA', nocoa);
        //              formData.append('NAMA_COA', namacoa);
        //              formData.append('POSISI', posisi);
    //                  arrobjdbt

        //            url: '/api/postCOA',
        //            method: 'POST',
        //            dataType: 'json',
        //            data: $("#forminputcoa").serialize(),
        //            success: $('#DataCOA').datagrid('reload')

                }
                });


    $('#buttonallert').click(function () {
        alert(datas.getAll('NO_COA'))
    })


//     $('#viewsubmitteddata').datagrid((
//         {
//             data: datas,
//             dataTypes:'json',
//             fitColumns:true,
//             columns:[[
//                 //            {checkbox: true},
//                 {field:'NO_COA',title:'No COA',sortable:true},
//                 {field:'MATA_UANG',title:'Nama COA',sortable:true},
//                 {field:'INVOICE',title:'Invoice',sortable:true},
//                 {field:'NOMINAL_DBT',title:'Flag Valas',sortable:true},
//                 {field:'NOMINAL_KDT',title:'Nominal Debit Dalam Rupiah', sortable:true},
//                 {field:'KTR_TRX',title:'Keterangan Transaksi', sortable:true},
//
//
//
// //                        {field:'ACTION', title:'Action',
// //                            formatter:function(value, row, index)
// //                                {
// //                                    var e = '<button type="button" id="Update_Button" class="btn btn-info">Edit</button> ';
// //                                    var d = '<button href="javascript:void(0)" type="button" class="btn btn-danger" onclick="deleterow(this)">Delete</button>';
// //                                    return e+d;
// //                                }
// //
// //                            }
//
//
//                 //          {title:'Details',colspan:4}
//             ]]
//         }
//     ));

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
