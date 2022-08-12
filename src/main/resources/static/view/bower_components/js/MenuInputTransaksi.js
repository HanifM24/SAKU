

// let datar = new FormData();
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

    function getcurrency(key, datacur, matauang, namacoa, invoice, keterangan, kodeplusnamauang, jsntrxs){
        if (jsntrxs == "DBT") {
            if (matauang == "IDR") {
                if(namacoa == null)
                {
                    DevExpress.ui.notify("COA number/name must be inputted", "error", 10000);
                }
                else if(datacur <= 0)
                {
                    DevExpress.ui.notify("Nominal value must be greater than zero", "error", 10000);
                }
                else{
                    eqrupiahdbt = datacur;
                    datadr.push({
                        KEYDBT: key,
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



                }
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



        }
        else
        {
            if (matauang == "IDR") {
                eqrupiahkdt = datacur;
                datacr.push({
                    KEYKDT: key,
                    NO_COA_KDT: namacoa,
                    MATA_UANG_KDT: kodeplusnamauang,
                    INVOICE_KDT: invoice,
                    NOMINALTRXKDT: datacur,
                    KTRG_KDT: keterangan,
                    EQIVALRPKDT: eqrupiahkdt
                });
                NO_COA_KDT.push(namacoa.slice(0, 6));
                MATA_UANG_KDT.push(matauang.slice(0, 3));
                INVOICE_KDT.push(invoice);
                NOMINALTRXKDT.push(datacur.toFixed(2));
                KTRG_KDT.push(keterangan);
                arreqrupiahkdt.push(eqrupiahkdt)
                sumeqkdt += parseFloat(eqrupiahkdt)

            } else {
                $.ajax({

                    method: 'GET',
                    url: urlapi,
                    processData: false,
                    contentType: false,  // "application/json",
                    success: function (data) {
                        JSON.stringify(data);
                        eqrupiahkdt = parseFloat(datacur)*parseFloat(data.find(x => x.KD_MATA_UANG === matauang).RATE);
                        // eqrupiahkdt = parseFloat(datacur) / parseFloat(data.data[matauang]) /// parseFloat(data.data[matauang]); (kalo kurs dollar) // old
                        datacr.push({
                            NO_COA_KDT: namacoa,
                            MATA_UANG_KDT: kodeplusnamauang,
                            INVOICE_KDT: invoice,
                            NOMINALTRXKDT: datacur,
                            KTRG_KDT: keterangan,
                            EQIVALRPKDT: eqrupiahkdt
                        });
                        NO_COA_KDT.push(namacoa.slice(0, 6));
                        MATA_UANG_KDT.push(matauang.slice(0, 3));
                        INVOICE_KDT.push(invoice);
                        NOMINALTRXKDT.push(datacur.toFixed(2));
                        KTRG_KDT.push(keterangan);
                        arreqrupiahkdt.push(eqrupiahkdt)

                        sumeqkdt += parseFloat(eqrupiahkdt)

                    },
                    error: function () {
                        DevExpress.ui.notify("Tidak Terkoneksi ke internet", "error", 10000);
                    }

                    // contentType: 'application/x-www-form-urlencoded',

                });
            }
//            cek.show();
        }


    }




    const datapreviewdbt = $("#datapreviewdbt").dxDataGrid({
                    dataSource: datadr,
                    allowColumnResizing: true,
                    columnAutoWidth: true,
//                    scrolling: {
//                      mode: 'standard',
//                    },
//                    showBorders: true,
                    editing:{
                        mode: 'row',
                        allowDeleting: true,
                    },
                    onRowRemoving(data){
                           datadr.splice(data.data.KEYDBT - 1, 1);
                           MATA_UANG_DBT.splice(data.data.KEYDBT - 1, 1);
                           INVOICE_DBT.splice(data.data.KEYDBT - 1, 1);
                           NOMINALTRXDBT.splice(data.data.KEYDBT - 1, 1);
                           KTRG_DBT.splice(data.data.KEYDBT - 1, 1);
                           NO_COA_DBT.splice(data.data.KEYDBT - 1, 1);
                           arreqrupiahdbt.splice(data.data.KEYDBT - 1, 1);
                           sumeqdbt -= data.data.EQIVALRPDBT;

                    },
                    onRowRemoved(){
                                        for(var i=0; i<NO_COA_DBT.length; i++)
                                             {
                                                    datadr[i].KEYDBT = i+1
                                             };
                                    },
                    columns: [
                        // 'NO_COA_DBT','MATA_UANG_DBT', 'INVOICE_DBT', 'NOMINALTRXDBT'
                        {dataField:"KEYDBT",caption:"No.", alignment: "left"},
                        {dataField:"NO_COA_DBT",caption:"COA debit number", alignment: "left"},
                        {dataField:"MATA_UANG_DBT",caption:"Currency", alignment: "left"},
                        {dataField:"INVOICE_DBT",caption:"Debit Invoice", alignment: "left"},
                        {dataField:"NOMINALTRXDBT",caption:"Debit Nominal", format:{
                                type:'fixedPoint',
                                precision: 2}, alignment: "right"},
                        {dataField:"EQIVALRPDBT",caption:"Equivalent Rupiahs", format:{
                                type:'fixedPoint',
                                precision: 2}, alignment: "right"},
                        {dataField:"KTRG_DBT",caption:"Des", alignment: "left"}
                    ],
                    summary:{
                        totalItems:[
                            {
                                column: "NOMINALTRXDBT",
                                summaryType: "sum",
                                valueFormat: "#,##0.##"
                            },
                            {
                                column: "EQIVALRPDBT",
                                summaryType: "sum",
                                valueFormat: "#,##0.##"
                            }
                        ]
                    }


                }).dxDataGrid("instance");
    const datapreviewkdt = $("#datapreviewkdt").dxDataGrid({
                    dataSource: datacr,
//                    showBorders: true,
                    allowColumnResizing: true,
                    columnAutoWidth: true,
                    editing:{
                                        mode: 'row',
                                        allowDeleting: true
                                    },
//                    showBorders: true,
                    onRowRemoving(data){

                                        datacr.splice(data.data.KEYKDT - 1, 1);
                                        MATA_UANG_KDT.splice(data.data.KEYKDT - 1, 1);
                                        INVOICE_KDT.splice(data.data.KEYKDT - 1, 1);
                                        NOMINALTRXKDT.splice(data.data.KEYKDT - 1, 1);
                                        KTRG_KDT.splice(data.data.KEYKDT - 1, 1);
                                        NO_COA_KDT.splice(data.data.KEYKDT - 1, 1);
                                        arreqrupiahkdt.splice(data.data.KEYKDT - 1, 1);
                                        sumeqkdt -= data.data.EQIVALRPKDT;





                                    },
                    onRowRemoved(){
                        for(var i=0; i<NO_COA_KDT.length; i++)
                             {
                                    datacr[i].KEYKDT = i+1
                             };
                    },
                    columns: [
                        {dataField:"KEYKDT",caption:"No.", alignment: "left"},
                        {dataField:"NO_COA_KDT",caption:"COA credit number", alignment: "left"},
                        {dataField:"MATA_UANG_KDT",caption:"Currency", alignment: "left"},
                        {dataField:"INVOICE_KDT",caption:"Credit invoice", alignment: "left"},
                        {dataField:"NOMINALTRXKDT",caption:"Credit Nominal", format:{
                                type:'fixedPoint',
                                precision: 2}, alignment: "right"},
                        {dataField:"EQIVALRPKDT",caption:"Equivalent Rupiahs", format:{
                                type:'fixedPoint',
                                precision: 2}, alignment: "right"},
                        {dataField:"KTRG_KDT",caption:"Des", alignment: "left"},
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


                }).dxDataGrid("instance");
    $("#buttondebet").dxButton({
        stylingMode: 'outlined',
        text:'Click to add debit data',
        type:'normal',
        onClick()
        {
            modaldebit.show();
        }
    });
    $("#buttonkredit").dxButton({
        stylingMode: 'outlined',
        text:'Click to add credit data',
        type:'normal',
        onClick()
        {
            modalcredit.show();
//            cek.show();
        }
    });


    $("#popup").dxPopup({
        title: "Add debit",
        showTitle: true,
        width: 500,
//        height: 520,
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
            content.append('<div id="formInsertdebit" />');
//            content.append('<p>Kredit</p> ')
//            content.append('<div id="datapreviewkdt" />');
//            content.append('<div id="submitbutton" />')
//            content.dxScrollView({
//                    width: '100%',
//                    height: '100%',
//                  });
            return content;


        },

        onShown: function(){

            $("#formInsertdebit").dxForm({
                    colCount: 1,
//                    width: '75%',
                    position:'center',
                    labelLocation: "top",
                    alignItemLabels: true,
                    alignItemLabelsInAllGroups: true,
                    items: [

                        {
                            itemType: "simple",
                            editorType: "dxSelectBox",
                            dataField: "NOPLUSNAMACOADBT",
                            label: { text: "Select COA debit", location: "top" },
                            editorOptions: {
                                dataSource: "/api/getnocoaplusname/1",
                                placeholder: "Enter here...",
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
                            dataField: "KODEPLUSNAMAUANGDBT",
                            label: { text: "Select debit currency", location: "top" },
                            editorOptions: {
                                dataSource: "/api/getmatauang",
                                placeholder: "Enter currency...",
                                showSelectionControls: true,
                                applyValueMode: "useButtons",
                                displayExpr: function (data) {
                                    if (data) {
                                        return `${data.KODEPLUSNAMAUANGDBT}`;
                                    }
                                    return '360 - IDR';
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
                        {
                            itemType: "simple",
                            editorType: "dxTextBox",
                            dataField: "INVOICE_DBT",
                            label: { text: "Input invoice debit if exist", location: "top" },
                            editorOptions: {placeholder:"Enter Here.."}
                        },
                        {
                            itemType: "simple",
                            editorType: "dxNumberBox",
                            dataField: "NOMINALTRXDBT",
                            label: { text: "Enter debet nominal", location: "top" },
                            editorOptions: {placeholder:"Enter Here..",
                                format: '#,##0.00',

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
                            dataField: "KTRG_DBT",
                            label: { text: "Enter debet description (Optional)", location: "top" },
                            editorOptions: {
                                placeholder:"Enter Here .."

                            }
                        },
                        {
                            itemType: 'button',
                            editorType: 'dxButton',
                            horizontalAlignment: 'center',
                            buttonOptions: {
                                text: 'Input Debet',
                                type: 'default',
                                onClick: function() {
                                    var NOPLUSNAMACOADBT = $("#formInsertdebit").dxForm("instance").getEditor('NOPLUSNAMACOADBT').option('value');
                                    var KODEPLUSNAMAUANGDBT = $("#formInsertdebit").dxForm("instance").getEditor('KODEPLUSNAMAUANGDBT').option('value');
                                    var INVOICE_DBTV = $("#formInsertdebit").dxForm("instance").getEditor('INVOICE_DBT').option('value');
                                    var NOMINALTRXDBTV = $("#formInsertdebit").dxForm("instance").getEditor('NOMINALTRXDBT').option('value');
                                    var KTRGNDBT = $("#formInsertdebit").dxForm("instance").getEditor('KTRG_DBT').option('value');
                                    var kodeuang;
                                    if (NOPLUSNAMACOADBT && NOPLUSNAMACOADBT != null )
                                    {
                                    if(KODEPLUSNAMAUANGDBT === null)
                                    {
                                        kodeuang='IDR';
                                        KODEPLUSNAMAUANGDBT = '360 - IDR';
                                    }
                                    else
                                    {
                                        kodeuang = KODEPLUSNAMAUANGDBT.slice(6, 9);
                                    }
                                    var jnstrx = "DBT";
                                    keydbt ++
                                    getcurrency(
                                                keydbt,
                                                NOMINALTRXDBTV,
                                                kodeuang,
                                                NOPLUSNAMACOADBT,
                                                INVOICE_DBTV,
                                                KTRGNDBT,
                                                KODEPLUSNAMAUANGDBT,
                                                jnstrx);
                                    DevExpress.ui.notify("Data "+ NOPLUSNAMACOADBT + " with nominal "+ NOMINALTRXDBT + " is inputted" , "success", 10000);
                                    datapreviewdbt.refresh();
                                    modaldebit.hide();
                                    }
                                    else
                                    {
                                        DevExpress.ui.notify("Data must not be empty", "error", 5000);
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


                    ],
                });

        }

//        onShown: function ()
//        {
//            $("#datapreviewdbt").dxDataGrid({
//                dataSource: datadr,
//                columnAutoWidth: true,
//                showBorders: true,
//                editing:{
//                    mode: 'row',
//                    allowDeleting: true
//                },
//                onRowRemoving(data){
//                       datadr.splice(data.data.KEYDBT - 1, 1);
//                       MATA_UANG_DBT.splice(data.data.KEYDBT - 1, 1);
//                       INVOICE_DBT.splice(data.data.KEYDBT - 1, 1);
//                       NOMINALTRXDBT.splice(data.data.KEYDBT - 1, 1);
//                       KTRG_DBT.splice(data.data.KEYDBT - 1, 1);
//                       NO_COA_DBT.splice(data.data.KEYDBT - 1, 1);
//                       arreqrupiahdbt.splice(data.data.KEYDBT - 1, 1);
//                       sumeqdbt -= data.data.EQIVALRPDBT;
//
//                },
//                onRowRemoved(){
//                                    for(var i=0; i<NO_COA_DBT.length; i++)
//                                         {
//                                                datadr[i].KEYDBT = i+1
//                                         };
//                                },
//                columns: [
//                    // 'NO_COA_DBT','MATA_UANG_DBT', 'INVOICE_DBT', 'NOMINALTRXDBT'
//                    {dataField:"KEYDBT",caption:"Nomor", alignment: "left"},
//                    {dataField:"NO_COA_DBT",caption:"Nomor COA Debet", alignment: "center"},
//                    {dataField:"MATA_UANG_DBT",caption:"Mata Uang", alignment: "center"},
//                    {dataField:"INVOICE_DBT",caption:"Invoice Debit", alignment: "center"},
//                    {dataField:"NOMINALTRXDBT",caption:"Nominal Debet", format:{
//                            type:'fixedPoint',
//                            precision: 2}, alignment: "right"},
//                    {dataField:"EQIVALRPDBT",caption:"Ekivalen Rupiah", format:{
//                            type:'fixedPoint',
//                            precision: 2}, alignment: "right"},
//                    {dataField:"KTRG_DBT",caption:"Keterangan", alignment: "center"}
//                ],
//                summary:{
//                    totalItems:[
//                        {
//                            column: "NOMINALTRXDBT",
//                            summaryType: "sum",
//                            valueFormat: "#,##0.##"
//                        },
//                        {
//                            column: "EQIVALRPDBT",
//                            summaryType: "sum",
//                            valueFormat: "#,##0.##"
//                        }
//                    ]
//                }
//
//
//            });
//            $("#datapreviewkdt").dxDataGrid({
//                dataSource: datacr,
//                showBorders: true,
//                allowColumnResizing: true,
//                columnAutoWidth: true,
//                editing:{
//                                    mode: 'row',
//                                    allowDeleting: true
//                                },
//                showBorders: true,
//                onRowRemoving(data){
//
//                                    datacr.splice(data.data.KEYKDT - 1, 1);
//                                    MATA_UANG_KDT.splice(data.data.KEYKDT - 1, 1);
//                                    INVOICE_KDT.splice(data.data.KEYKDT - 1, 1);
//                                    NOMINALTRXKDT.splice(data.data.KEYKDT - 1, 1);
//                                    KTRG_KDT.splice(data.data.KEYKDT - 1, 1);
//                                    NO_COA_KDT.splice(data.data.KEYKDT - 1, 1);
//                                    arreqrupiahkdt.splice(data.data.KEYKDT - 1, 1);
//                                    sumeqkdt -= data.data.EQIVALRPKDT;
//
//
//
//
//
//                                },
//                onRowRemoved(){
//                    for(var i=0; i<NO_COA_KDT.length; i++)
//                         {
//                                datacr[i].KEYKDT = i+1
//                         };
//                },
//                columns: [
//                    // 'NO_COA_DBT','MATA_UANG_DBT', 'INVOICE_DBT', 'NOMINALTRXDBT'
//                    {dataField:"NO_COA_KDT",caption:"Nomor COA Kredit", alignment: "center"},
//                    {dataField:"MATA_UANG_KDT",caption:"Mata Uang", alignment: "center"},
//                    {dataField:"INVOICE_KDT",caption:"Invoice Kredit", alignment: "center"},
//                    {dataField:"NOMINALTRXKDT",caption:"Nominal Kredit", format:{
//                            type:'fixedPoint',
//                            precision: 2}, alignment: "right"},
//                    {dataField:"EQIVALRPKDT",caption:"Ekivalen Rupiah", format:{
//                            type:'fixedPoint',
//                            precision: 2}, alignment: "right"},
//                    {dataField:"KTRG_KDT",caption:"Keterangan", alignment: "center"},
//                ],
//                summary:{
//                    totalItems:[
//                        {
//                            column: "NOMINALTRXKDT",
//                            summaryType: "sum",
//                            valueFormat: "#,##0.##"
//                        },
//                        {
//                            column: "EQIVALRPKDT",
//                            summaryType: "sum",
//                            valueFormat: "#,##0.##"
//                        }
//                    ]
//                }
//
//
//            });


//        }
    });

    $("#popup2").dxPopup({
            title: "Add credit",
            showTitle: true,
            width: 500,
    //        height: 520,
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
                content.append('<div id="formInsertcredit" />');
    //            content.append('<p>Kredit</p> ')
    //            content.append('<div id="datapreviewkdt" />');
    //            content.append('<div id="submitbutton" />')
    //            content.dxScrollView({
    //                    width: '100%',
    //                    height: '100%',
    //                  });
                return content;


            },

            onShown: function(){

                $("#formInsertcredit").dxForm({
                        colCount: 1,
                        position:'center',
                        labelLocation: "top",
                        alignItemLabels: true,
                        alignItemLabelsInAllGroups: true,
                        items: [

                            {
                                itemType: "simple",
                                editorType: "dxSelectBox",
                                dataField: "NOPLUSNAMACOAKDT",
                                label: { text: "Select COA credit", location: "top" },
                                editorOptions: {
                                    dataSource: "/api/getnocoaplusname/1",
                                    placeholder: "Enter here...",
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
                                dataField: "KODEPLUSNAMAUANGKDT",
                                label: { text: "Select credit currency", location: "top" },
                                editorOptions: {
                                    dataSource: "/api/getmatauang",
                                    placeholder: "Enter Here...",
                                    showSelectionControls: true,
                                    applyValueMode: "useButtons",
                                    displayExpr: function (data) {
                                        if (data) {
                                            return `${data.KODEPLUSNAMAUANGKDT}`;
                                        }
                                        return '360 - IDR';
                                    },

                                    keyExpr: "KODEPLUSNAMAUANGKDT",
                                    valueExpr: "KODEPLUSNAMAUANGKDT",
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
                                dataField: "INVOICE_KDT",
                                label: { text: "Input invoice credit if exist", location: "top" },
                                editorOptions: {placeholder:"Enter Here.."}
                            },
                            {
                                itemType: "simple",
                                editorType: "dxNumberBox",
                                dataField: "NOMINALTRXKDT",
                                label: { text: "Enter credit nominal", location: "top" },
                                editorOptions: {placeholder:"Enter Here..",
                                    format: '#,##0.00',


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
                                dataField: "KTRG_KDT",
                                label: { text: "Enter credit description (Optional)", location: "top" },
                                editorOptions: {placeholder:"Enter Here.."}
                            },
//                            {
//                                itemType: 'button',
//                                editorType: 'dxButton',
//                                horizontalAlignment: 'center',
//                                buttonOptions: {
//                                    text: 'Input kredit',
//                                    type: 'default',
//                                    onClick: function() {
//                                        var NOPLUSNAMACOAKDT = $("#formInsertcredit").dxForm("instance").getEditor('NOPLUSNAMACOADBT').option('value');
//                                        var KODEPLUSNAMAUANGKDT = $("#formInsertcredit").dxForm("instance").getEditor('KODEPLUSNAMAUANGDBT').option('value');
//                                        var INVOICE_KDTV = $("#formInsertcredit").dxForm("instance").getEditor('INVOICE_DBT').option('value');
//                                        var NOMINALTRXKDTV = $("#formInsertcredit").dxForm("instance").getEditor('NOMINALTRXDBT').option('value');
//                                        var KTRGNKDT = $("#formInsertcredit").dxForm("instance").getEditor('KTRG_DBT').option('value');
//                                        var kodeuang;
//                                        if(KODEPLUSNAMAUANGKDT === null)
//                                        {
//                                            kodeuang='IDR';
//                                            KODEPLUSNAMAUANGKDT = '360 - IDR';
//                                        }
//                                        else
//                                        {
//                                            kodeuang = KODEPLUSNAMAUANGKDT.slice(6, 9);
//                                        }
//                                        var jnstrx = "KDT";
//                                        keykdt ++
//                                        getcurrency(
//                                                    keykdt,
//                                                    NOMINALTRXKDTV,
//                                                    kodeuang,
//                                                    NOPLUSNAMACOAKDT,
//                                                    INVOICE_KDTV,
//                                                    KTRGNKDT,
//                                                    KODEPLUSNAMAUANGKDT,
//                                                    jnstrx);
//
//                                        // datadr.push({NO_COA_DBT: NOPLUSNAMACOADBT,
//                                        //             MATA_UANG_DBT: KODEPLUSNAMAUANGDBT,
//                                        //             INVOICE_DBT: INVOICE_DBTV,
//                                        //             NOMINALTRXDBT: NOMINALTRXDBTV,
//                                        //             KTRG_DBT:KTRGNDBT,
//                                        //             EQIVALRP:eqrupiah} );
//
//
//                                        // sumeqdbt += parseFloat(eqrupiahdbt)
//                                        // JSON.stringify(datadr);
//                                        // datat.push(datadr);
//
//
//
//
//
//
//
//                                        // cek.show();
//                                    }
//                                    // useSubmitBehavior: true,
//
//                                },
//
//                            },
                            {
                                itemType: 'button',
                                horizontalAlignment: 'center',
                                buttonOptions: {
                                    text: 'Submit',
                                    type: 'default',
                                    onClick: function() {
                                        var NOPLUSNAMACOAKDT = $("#formInsertcredit").dxForm("instance").getEditor('NOPLUSNAMACOAKDT').option('value');
                                        var KODEPLUSNAMAUANGKDT = $("#formInsertcredit").dxForm("instance").getEditor('KODEPLUSNAMAUANGKDT').option('value');
                                        var INVOICE_KDTV = $("#formInsertcredit").dxForm("instance").getEditor('INVOICE_KDT').option('value');
                                        var NOMINALTRXKDTV = $("#formInsertcredit").dxForm("instance").getEditor('NOMINALTRXKDT').option('value');
                                        var KTRGNKDT = $("#formInsertcredit").dxForm("instance").getEditor('KTRG_KDT').option('value');
                                        var jnstrx1 = "KDT";
                                        var kodeuang;
                                        if (NOPLUSNAMACOAKDT && NOPLUSNAMACOAKDT != null )
                                        {
                                        if(KODEPLUSNAMAUANGKDT === null)
                                        {
                                            kodeuang = 'IDR';
                                            KODEPLUSNAMAUANGKDT = '360 - IDR';
                                        }
                                        else
                                        {
                                            kodeuang = KODEPLUSNAMAUANGKDT.slice(6, 9);
                                        }
                                        keykdt ++
                                        getcurrency(
                                            keykdt,
                                            NOMINALTRXKDTV,
                                            kodeuang,
                                            NOPLUSNAMACOAKDT,
                                            INVOICE_KDTV,
                                            KTRGNKDT,
                                            KODEPLUSNAMAUANGKDT,
                                            jnstrx1);
                                        DevExpress.ui.notify("Data "+ NOPLUSNAMACOAKDT + " with nominal "+ NOMINALTRXKDT + " is inputted" , "success", 10000);
                                        datapreviewkdt.refresh();
                                        modalcredit.hide();
                                        }
                                        else
                                        {
                                            {
                                                DevExpress.ui.notify("Data must not be empty", "error", 5000);
                                            }
                                        }



                                        // NO_COA_KDT.push(NOPLUSNAMACOAKDT.slice(0, 6));
                                        // MATA_UANG_KDT.push(KODEPLUSNAMAUANGKDT.slice(0, 3));
                                        // INVOICE_KDT.push(INVOICE_KDTV);
                                        // NOMINALTRXKDT.push(NOMINALTRXKDTV).toFixed(2);
                                        // KTRG_KDT.push(KTRGNKDT);
                                        // arreqrupiahkdt.push(eqrupiahkdt)
                                        // sumeqkdt += parseFloat(eqrupiahkdt)
                                        // datat.push(datacr)

                                    }

                                },

                            },


                        ],
                    });

            }


        });
    $("#submitbutton").dxButton({
                    text:'OK',
                    type:'danger',
                    horizontalAlignment: 'center',
                    onClick:function() {
                        if(NO_COA_DBT.length != 0 && NO_COA_KDT.length != 0){
                        let dataraw = new FormData();
                        // dataraw.append('data', datat);
                        // dataraw.append('data', JSON.stringify(datadr));
                        // dataraw.append('datacr', JSON.stringify(datacr));

                        dataraw.append('NO_COA_DBT', NO_COA_DBT);
                        dataraw.append("MATA_UANG_DBT",MATA_UANG_DBT);
                        dataraw.append("INVOICE_DBT",INVOICE_DBT);
                        dataraw.append("NOMINALTRXDBT", NOMINALTRXDBT);
                        dataraw.append("KTRG_DBT", KTRG_DBT)
                        dataraw.append("EKVALRPDBT", arreqrupiahdbt)

                        dataraw.append('NO_COA_KDT', NO_COA_KDT);
                        dataraw.append("MATA_UANG_KDT",MATA_UANG_KDT);
                        dataraw.append("INVOICE_KDT",INVOICE_KDT);
                        dataraw.append("NOMINALTRXKDT", NOMINALTRXKDT);
                        dataraw.append("KTRG_KDT", KTRG_KDT);
                        dataraw.append("EKVALRPKDT", arreqrupiahkdt);
//                        debugger
                        if (sumeqdbt == sumeqkdt) {
                            // let dataraw = JSON.stringify(datadr);
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
                        }
                        else
                        {
                            DevExpress.ui.notify("Jumlah transaksi debit dan kredit harus sama", "error", 10000);
                        }
                        // DevExpress.ui.notify('The Outlined button was clicked');
                    }
                        else
                             {
                                    DevExpress.ui.notify("Data transaction must be inputted", "error", 10000);
                             }

                    }
                })
//    $("#texthrfhisotritrx").dxButton({
//        stylingMode: 'text',
//        text: 'Click to view inputted data',
//        hint: 'Click to view inputted data',
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
    const modaldebit = $("#popup").dxPopup("instance");
    const modalcredit = $("#popup2").dxPopup("instance");

});
