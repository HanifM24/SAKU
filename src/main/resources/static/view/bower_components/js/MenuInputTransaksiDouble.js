

// let datar = new FormData();

let dataprev = [];
let datadr = [];
let datacr = [];
var datat = [];
var NO_COA_DBT = [];
var MATA_UANG_DBT = [];
var INVOICE_DBT= [];
var NOMINALTRXDBT =[];
var KTRG_DBT =[];
var NO_COA_KDT = [];
var MATA_UANG_KDT = [];
var INVOICE_KDT= [];
var NOMINALTRXKDT =[];
var KTRG_KDT =[];
var sumeqdbt = 0;
var sumeqkdt = 0;
var arreqrupiahdbt = [];
var arreqrupiahkdt =[];
var eqrupiahdbt;
var eqrupiahkdt;
var keydbt = 0;
var keykdt = 0;


// const urlapi = 'https://freecurrencyapi.net/api/v2/latest?apikey=40db38a0-7b16-11ec-8482-1352ed8d2fa2&base_currency=IDR' //ini yang register dipake seperlunya
// var urlapi = 'https://freecurrencyapi.net/api/v2/latest?apikey=YOUR-APIKEY&base_currency=IDR' // kalo udh abis jatahnya ganti ke register
// const urlapi = '/api/getdetailcur/' //ini yang register dipake seperlunya
const urlapi = '/api/getdetailcur';

$(function(){


    function getcurrencydouble(
                               datacur,
                               matauang,
                               namacoa,
                               namacoakdt,
                               invoice,
                               keterangan
    ){

            if (matauang == "IDR") {
                                dataprev.push({

                                    NO_COA_DBT: namacoa,
                                    MATA_UANG: matauang,
                                    INVOICE: invoice,
                                    NOMINALTRXDBT: datacur,
                                    EQIVALRPDBT: datacur,
                                    KTRG: keterangan
                                });
                                dataprev.push({
                                    NO_COA_KDT: namacoakdt,
                                    MATA_UANG: matauang,
                                    INVOICE: invoice,
                                    NOMINALTRXKDT: datacur,
                                    EQIVALRPKDT: datacur,
                                    KTRG: keterangan


                                });
                                NO_COA_DBT.push(namacoa.slice(0, 6));
                                MATA_UANG_DBT.push(matauang.slice(0, 3));
                                INVOICE_DBT.push(invoice);
                                NOMINALTRXDBT.push(datacur.toFixed(2));
                                KTRG_DBT.push(keterangan);
                                arreqrupiahdbt.push(datacur);
                                NO_COA_KDT.push(namacoakdt.slice(0, 6));
                                MATA_UANG_KDT.push(matauang.slice(0, 3));
                                INVOICE_KDT.push(invoice);
                                NOMINALTRXKDT.push(datacur.toFixed(2));
                                KTRG_KDT.push(keterangan);
                                arreqrupiahkdt.push(datacur)
                            } else {
                                $.ajax({
                                    method: 'GET',
                                    url: urlapi,
                                    // url: 'https://freecurrencyapi.net/api/v2/latest?apikey=YOUR-APIKEY&base_currency=IDR', // kalo udh abis jatahnya ganti ke register
                                    processData: false,
                                    contentType: false,  // "application/json",
                                    success: function (data) {

                                        JSON.stringify(data);
                                        eqrupiahdbt = parseFloat(datacur)*parseFloat(data.find(x => x.KD_MATA_UANG === matauang).RATE);
                                        // eqrupiahdbt = parseFloat(datacur) * parseFloat(data.data[matauang]) /// parseFloat(data.data[matauang]); (kalo kurs dollar) old
                                        datadr.push({
                                            NO_COA_DBT: namacoa,
                                            MATA_UANG_DBT: kodeplusnamauang,
                                            INVOICE_DBT: invoice,
                                            NOMINALTRXDBT: datacur,
                                            KTRG_DBT: keterangan,
                                            EQIVALRPDBT: eqrupiahdbt

                                        });
                                        NO_COA_DBT.push(namacoa.slice(0, 6));
                                        MATA_UANG_DBT.push(matauang.slice(0, 3));
                                        INVOICE_DBT.push(invoice);
                                        NOMINALTRXDBT.push(datacur.toFixed(2));
                                        KTRG_DBT.push(keterangan);
                                        arreqrupiahdbt.push(eqrupiahdbt)
                                        sumeqdbt += parseFloat(eqrupiahdbt)


                                    },
                                    error: function () {
                                        DevExpress.ui.notify("Tidak Terkoneksi ke internet", "error", 10000);
                                    }

                                    // contentType: 'application/x-www-form-urlencoded',

                                });
                            }
                            cek.show();


        }


    $("#formInsert").dxForm({
        colCount: 1,
        width: '35%',
        position:'center',
        labelLocation: "top",
        alignItemLabels: true,
        alignItemLabelsInAllGroups: true,
        items: [

            {
                itemType: "simple",
                editorType: "dxSelectBox",
                dataField: "NOPLUSNAMACOADBT",
                label: { text: "Pilih COA Debet", location: "top" },
                editorOptions: {
                    dataSource: "/api/getnocoaplusname/1",
                    placeholder: "Pilih Nomor COA disini...",
                    showSelectionControls: true,
                    applyValueMode: "useButtons",
                    displayExpr: function (data) {
                        if (data) {
                            return `${data.NOPLUSNAMACOADBT}`;
                        }
                        return null;
                    },
                    keyExpr: "NOPLUSNAMACOADBT",
                    valueExpr: "NOPLUSNAMACOADBT",
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
                dataField: "NOPLUSNAMACOAKDT",
                label: { text: "Pilih COA Kredit", location: "top" },
                editorOptions: {
                    dataSource: "/api/getnocoaplusname/1",
                    placeholder: "Pilih Nomor COA disini...",
                    showSelectionControls: true,
                    applyValueMode: "useButtons",
                    displayExpr: function (data) {
                        if (data) {
                            return `${data.NOPLUSNAMACOAKDT}`;
                        }
                        return null;
                    },
                    keyExpr: "NOPLUSNAMACOAKDT",
                    valueExpr: "NOPLUSNAMACOAKDT",
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
                dataField: "KODEPLUSNAMAUANGDBT",
                label: { text: "Pilih Mata Uang", location: "top" },
                editorOptions: {
                    dataSource: "/api/getmatauang",
                    placeholder: "Pilih Mata Uang...",
                    showSelectionControls: true,
                    applyValueMode: "useButtons",
                    displayExpr: function (data) {
                        if (data) {
                            return `${data.KODEPLUSNAMAUANGDBT}`;
                        }
                        return null;
                    },
                    keyExpr: "KODEPLUSNAMAUANGDBT",
                    valueExpr: "KODEPLUSNAMAUANGDBT",
                    searchEnabled: true,
                },
                validationRules: [
                    {
                        type: "required",
                    },
                ]
            },
//            {
//                itemType: "simple",
//                editorType: "dxSelectBox",
//                dataField: "KODEPLUSNAMAUANGKDT",
//                label: { text: "Pilih Mata Uang Kredit", location: "top" },
//                editorOptions: {
//                    dataSource: "/api/getmatauang",
//                    placeholder: "Pilih Mata Uang Kredit...",
//                    showSelectionControls: true,
//                    applyValueMode: "useButtons",
//                    displayExpr: function (data) {
//                        if (data) {
//                            return `${data.KODEPLUSNAMAUANGKDT}`;
//                        }
//                        return null;
//                    },
//
//                    keyExpr: "KODEPLUSNAMAUANGKDT",
//                    valueExpr: "KODEPLUSNAMAUANGKDT",
//                    searchEnabled: true,
//                },
//                validationRules: [
//                    {
//                        type: "required",
//                    },
//                ]
//            },
            {
                itemType: "simple",
                editorType: "dxTextBox",
                dataField: "INVOICE_DBT",
                label: { text: "Masukkan Invoice Jika Ada", location: "top" },
                editorOptions: {placeholder:"Masukkan Nomor Invoice.."}
            },
//            {
//                itemType: "simple",
//                editorType: "dxTextBox",
//                dataField: "INVOICE_KDT",
//                label: { text: "Masukkan Invoice Kredit Jika Ada", location: "top" },
//                editorOptions: {placeholder:"Masukkan Nomor Invoice.."}
//            },
            {
                itemType: "simple",
                editorType: "dxNumberBox",
                dataField: "NOMINALTRXDBT",
                label: { text: "Masukkan Nominal Transaksi", location: "top" },
                editorOptions: {placeholder:"Masukkan Nominal Transaksi..",
                    format: '#,##0.00',

                },
                validationRules: [
                    {
                        type: "required",
                    },
                ]
            },
//            {
//                itemType: "simple",
//                editorType: "dxNumberBox",
//                dataField: "NOMINALTRXKDT",
//                label: { text: "Masukkan Nominal Kredit", location: "top" },
//                editorOptions: {placeholder:"Masukkan Nominal Kredit..",
//                    format: '#,##0.00',
//
//
//                },
//                validationRules: [
//                    {
//                        type: "required",
//                    },
//                ]
//            },
            {
                itemType: "simple",
                editorType: "dxTextBox",
                dataField: "KTRG_DBT",
                label: { text: "Masukkan Deskripsi Transaksi(Optional)", location: "top" },
                editorOptions: {
                    placeholder:"Masukkan Deskripsi Transaksi .."

                }
            },
//            {
//                itemType: "simple",
//                editorType: "dxTextBox",
//                dataField: "KTRG_KDT",
//                label: { text: "Masukkan Deskripsi Transaksi Kredit (Optional)", location: "top" },
//                editorOptions: {placeholder:"Masukkan Deskripsi Transaksi.."}
//            },
            {
                itemType: 'button',
                editorType: 'dxButton',
                horizontalAlignment: 'center',
                buttonOptions: {
                    text: 'Submit',
                    type: 'default',
                    onClick: function() {
                        var NOPLUSNAMACOADBT = $("#formInsert").dxForm("instance").getEditor('NOPLUSNAMACOADBT').option('value');
                        var KODEPLUSNAMAUANGDBT = $("#formInsert").dxForm("instance").getEditor('KODEPLUSNAMAUANGDBT').option('value');
                        var INVOICE_DBTV = $("#formInsert").dxForm("instance").getEditor('INVOICE_DBT').option('value');
                        var NOMINALTRXDBTV = $("#formInsert").dxForm("instance").getEditor('NOMINALTRXDBT').option('value');
                        var KTRGNDBT = $("#formInsert").dxForm("instance").getEditor('KTRG_DBT').option('value');
                        var kodeuang = KODEPLUSNAMAUANGDBT.slice(6, 9);
//                        var jnstrx = "DBT";
                        var NOPLUSNAMACOAKDT = $("#formInsert").dxForm("instance").getEditor('NOPLUSNAMACOAKDT').option('value');
//                        var KODEPLUSNAMAUANGKDT = $("#formInsert").dxForm("instance").getEditor('KODEPLUSNAMAUANGKDT').option('value');
//                        var INVOICE_KDTV = $("#formInsert").dxForm("instance").getEditor('INVOICE_KDT').option('value');
//                        var NOMINALTRXKDTV = $("#formInsert").dxForm("instance").getEditor('NOMINALTRXKDT').option('value');
//                        var KTRGNKDT = $("#formInsert").dxForm("instance").getEditor('KTRG_KDT').option('value');
//                        var jnstrx1 = "KDT";
//                        var kodeuang = KODEPLUSNAMAUANGKDT.slice(6, 9);
                        if(NOPLUSNAMACOADBT !== "" ||
                           KODEPLUSNAMAUANGDBT !== "" ||
                           INVOICE_DBTV !== "" ||
                           NOMINALTRXDBTV !== "" ||
                           KTRGNDBT !== "" ||
                           kodeuang !== "" ||
                           NOPLUSNAMACOAKDT !== ""
                           )
                          {
                                getcurrencydouble(
                                    NOMINALTRXDBTV,
                                    kodeuang,
                                    NOPLUSNAMACOADBT,
                                    NOPLUSNAMACOAKDT,
                                    INVOICE_DBTV,
                                    KTRGNDBT
                                        );
                            }
                        else
                         {
                                DevExpress.ui.notify("Data tidak boleh ada yang kosong", "error", 10000);

                         }
                        // datadr.push({NO_COA_DBT: NOPLUSNAMACOADBT,
                        //             MATA_UANG_DBT: KODEPLUSNAMAUANGDBT,
                        //             INVOICE_DBT: INVOICE_DBTV,
                        //             NOMINALTRXDBT: NOMINALTRXDBTV,
                        //             KTRG_DBT:KTRGNDBT,
                        //             EQIVALRP:eqrupiah} );


                        // sumeqdbt += parseFloat(eqrupiahdbt)
                        // JSON.stringify(datadr);
                        // datat.push(datadr);







                        // cek.show();
                    }
                    // useSubmitBehavior: true,

                },

            },
//            {
//                itemType: 'button',
//                horizontalAlignment: 'center',
//                buttonOptions: {
//                    text: 'Input Kredit',
//                    type: 'default',
//                    onClick: function() {
//                        var NOPLUSNAMACOAKDT = $("#formInsert").dxForm("instance").getEditor('NOPLUSNAMACOAKDT').option('value');
//                        var KODEPLUSNAMAUANGKDT = $("#formInsert").dxForm("instance").getEditor('KODEPLUSNAMAUANGKDT').option('value');
//                        var INVOICE_KDTV = $("#formInsert").dxForm("instance").getEditor('INVOICE_KDT').option('value');
//                        var NOMINALTRXKDTV = $("#formInsert").dxForm("instance").getEditor('NOMINALTRXKDT').option('value');
//                        var KTRGNKDT = $("#formInsert").dxForm("instance").getEditor('KTRG_KDT').option('value');
//                        var jnstrx1 = "KDT";
//                        var kodeuang = KODEPLUSNAMAUANGKDT.slice(6, 9);
//                        keykdt ++
//                        getcurrency(
//                            keykdt,
//                            NOMINALTRXKDTV,
//                            kodeuang,
//                            NOPLUSNAMACOAKDT,
//                            INVOICE_KDTV,
//                            KTRGNKDT,
//                            KODEPLUSNAMAUANGKDT,
//                            jnstrx1);
//
//
//                        // NO_COA_KDT.push(NOPLUSNAMACOAKDT.slice(0, 6));
//                        // MATA_UANG_KDT.push(KODEPLUSNAMAUANGKDT.slice(0, 3));
//                        // INVOICE_KDT.push(INVOICE_KDTV);
//                        // NOMINALTRXKDT.push(NOMINALTRXKDTV).toFixed(2);
//                        // KTRG_KDT.push(KTRGNKDT);
//                        // arreqrupiahkdt.push(eqrupiahkdt)
//                        // sumeqkdt += parseFloat(eqrupiahkdt)
//                        // datat.push(datacr)
//
//
//
//
//
//
//
//                        cek.show();
//                    }
//
//                },
//
//            },


        ],
    });


    $("#popup").dxPopup({
        title: "Preview Data",
        showTitle: true,
        width: 900,
        height: 300,
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
            let content = $('<div />');
//            content.append('<p>Debit</p> ')
            content.append('<div id="datapreviewdbt" />');
//            content.append('<p>Kredit</p> ');
//            content.append('<div id="datapreviewkdt" />');
            content.append('<div id="submitbutton" />')
            content.dxScrollView({
                    width: '100%',
                    height: '100%',
                  });
            return content;


        },
        onShown: function ()
        {
            $("#datapreviewdbt").dxDataGrid({
                dataSource: dataprev,
                columnAutoWidth: true,
                showBorders: true,

//
                columns: [
                    // 'NO_COA_DBT','MATA_UANG_DBT', 'INVOICE_DBT', 'NOMINALTRXDBT'

                    {dataField:"NO_COA_DBT",caption:"Nomor COA Debet", alignment: "center"},
                    {dataField:"NO_COA_KDT",caption:"Nomor COA Kredit", alignment: "center"},
                    {dataField:"MATA_UANG",caption:"Mata Uang", alignment: "center"},
                    {dataField:"INVOICE",caption:"Invoice", alignment: "center"},
                    {dataField:"NOMINALTRXDBT",caption:"Nominal Debet", format:{
                            type:'fixedPoint',
                            precision: 2}, alignment: "right"},
                    {dataField:"NOMINALTRXKDT",caption:"Nominal Kredit", format:{
                            type:'fixedPoint',
                            precision: 2}, alignment: "right"},
                    {dataField:"EQIVALRPDBT",caption:"Ekivalen Rupiah", format:{
                            type:'fixedPoint',
                            precision: 2}, alignment: "right"},
                    {dataField:"EQIVALRPKDT",caption:"Ekivalen Rupiah", format:{
                            type:'fixedPoint',
                            precision: 2}, alignment: "right"},
                    {dataField:"KTRG",caption:"Keterangan", alignment: "center"}
                ],
                summary:{
                    totalItems:[
                        {
                            column: "NOMINALTRXDBT",
                            summaryType: "sum",
                            valueFormat: "#,##0.##"
                        },
                        {
                            column: "NOMINALTRXKDT",
                            summaryType: "sum",
                            valueFormat: "#,##0.##"
                        },
                        {
                            column: "EQIVALRPDBT",
                            summaryType: "sum",
                            valueFormat: "#,##0.##"
                        },
                        {
                            column: "EQIVALRPKDT",
                            summaryType: "sum",
                            valueFormat: "#,##0.##"
                        }
                    ]
                }


            });
            $("#datapreviewkdt").dxDataGrid({
                dataSource: datacr,
                showBorders: true,
                allowColumnResizing: true,
                columnAutoWidth: true,
                editing:{
                                    mode: 'row',
                                    allowDeleting: true
                                },
                showBorders: true,
                onRowRemoving(data){
                                    datacr.splice(data.data.KEYKDT - 1, 1),
                                    MATA_UANG_KDT.splice(data.data.KEYKDT - 1, 1),
                                    INVOICE_KDT.splice(data.data.KEYKDT - 1, 1),
                                    NOMINALTRXKDT.splice(data.data.KEYKDT - 1, 1),
                                    KTRG_KDT.splice(data.data.KEYKDT - 1, 1),
                                    NO_COA_KDT.splice(data.data.KEYKDT - 1, 1),
                                    arreqrupiahkdt.splice(data.data.KEYKDT - 1, 1),
                                    sumeqkdt -= data.data.EQIVALRPKDT
                                    debugger

                                },
                columns: [
                    // 'NO_COA_DBT','MATA_UANG_DBT', 'INVOICE_DBT', 'NOMINALTRXDBT'
                    {dataField:"NO_COA_KDT",caption:"Nomor COA Kredit", alignment: "center"},
                    {dataField:"MATA_UANG_KDT",caption:"Mata Uang", alignment: "center"},
                    {dataField:"INVOICE_KDT",caption:"Invoice Kredit", alignment: "center"},
                    {dataField:"NOMINALTRXKDT",caption:"Nominal Kredit", format:{
                            type:'fixedPoint',
                            precision: 2}, alignment: "right"},
                    {dataField:"EQIVALRPKDT",caption:"Ekivalen Rupiah", format:{
                            type:'fixedPoint',
                            precision: 2}, alignment: "right"},
                    {dataField:"KTRG_KDT",caption:"Keterangan", alignment: "center"},
                ],
                summary:{
                    totalItems:[
                        {
                            column: "NOMINALTRXKDT",
                            summaryType: "sum",
                            valueFormat: "#,##0.##"
                        },
                        {
                            column: "EQIVALRPKDT",
                            summaryType: "sum",
                            valueFormat: "#,##0.##"
                        }
                    ]
                }


            });
            $("#submitbutton").dxButton({
                text:'OK',
                type:'danger',
                horizontalAlignment: 'center',
                onClick:function() {
                    let dataraw = new FormData();
                    // dataraw.append('data', datat);
                    // dataraw.append('data', JSON.stringify(datadr));
                    // dataraw.append('datacr', JSON.stringify(datacr));

                    dataraw.append('NO_COA_DBT', NO_COA_DBT);
                    dataraw.append("MATA_UANG_DBT",MATA_UANG_DBT);
                    dataraw.append("INVOICE_DBT",INVOICE_DBT);
                    dataraw.append("NOMINALTRXDBT", NOMINALTRXDBT);
                    dataraw.append("KTRG_DBT", KTRG_DBT);
                    dataraw.append("EKVALRPDBT", arreqrupiahdbt)

                    dataraw.append('NO_COA_KDT', NO_COA_KDT);
                    dataraw.append("MATA_UANG_KDT",MATA_UANG_KDT);
                    dataraw.append("INVOICE_KDT",INVOICE_KDT);
                    dataraw.append("NOMINALTRXKDT", NOMINALTRXKDT);
                    dataraw.append("KTRG_KDT", KTRG_KDT);
                    dataraw.append("EKVALRPKDT", arreqrupiahkdt);

                    $.ajax({
                          method: 'POST',
                          url: '/api/web/feedback',
                          data: dataraw,
                          processData: false,
                          contentType: false,  // "application/json",
                          success: function () {
                          DevExpress.ui.notify("Data Berhasil di submit", "success", 10000);
                          location.reload();
                                 },
                                                error: function () {
                                                    DevExpress.ui.notify("Data tidak Berhasil di submit", "error", 10000);
                                                }
                                                // contentType: 'application/x-www-form-urlencoded',

                                            });
                    debugger
//                    if (sumeqdbt == sumeqkdt) {
//                        // let dataraw = JSON.stringify(datadr);
//                        $.ajax({
//                            method: 'POST',
//                            url: '/api/web/feedback',
//                            data: dataraw,
//                            processData: false,
//                            contentType: false,  // "application/json",
//                            success: function () {
//                                DevExpress.ui.notify("Data Berhasil di submit", "success", 10000);
//                                location.reload();
//                            },
//                            error: function () {
//                                DevExpress.ui.notify("Data tidak Berhasil di submit", "error", 10000);
//                            }
//                            // contentType: 'application/x-www-form-urlencoded',
//
//                        });
//                    }
//                    else
//                    {
//                        DevExpress.ui.notify("Jumlah transaksi debit dan kredit harus sama", "error", 10000);
//                    }
                    // DevExpress.ui.notify('The Outlined button was clicked');
                }
            })

        }
    })
//    $("#texthrfhisotritrx").dxButton({
//        stylingMode: 'text',
//        text: 'Click untuk melihat data yang telah di-input',
//        hint: 'Click untuk melihat data yang telah di-input',
//        type: 'default',
//        // width: 120,
//        onClick : ()=> {
//            cek.show();
//            // window.location ="http://localhost:8080/SAKU_TRANSAKSI"  // for open same tab
//            // window.open('http://localhost:8080/SAKU_TRANS//SI') -- for open new tab
//            // DevExpress.ui.notify('The Outlined button was clicked');
//        },
//    });

    // $("#button").dxButton
    const cek = $("#popup").dxPopup("instance");

});
