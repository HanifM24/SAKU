
var datagrup;
var datag = new FormData();
var formData = new FormData();
var json1;
var json_object;

$(function(){

    function uploadexcel(dataj){
    $.ajax({
                  data: dataj,
                 contentType: false,
                 processData: false,
                  method: 'POST',
                  enctype: 'multipart/form-data',
//                                     datatype: 'json',
                     url:'/api/postCOAexcel',

                                         success: function(data){alert('Data berhasil di upload');
                                                  location.reload();
                                         }


                                     });
    };
    function sendBatchRequest(url, changes) {
        const d = $.Deferred();
        debugger

        $.ajax(url, {
          method: 'POST',
          data: JSON.stringify(changes),
          cache: false,
          contentType: 'application/json',

        }).done(d.resolve).fail((xhr) => {
          d.reject(xhr.responseJSON ? xhr.responseJSON.Message : xhr.statusText);
        });

        return d.promise();

      }
    $("#formbutton").dxForm({
        colCount: 2,
        width: '800px',
        position:'center',
        labelLocation: "left",
        alignItemLabels: true,
        alignItemLabelsInAllGroups: true,
        items: [{
                     itemType: 'button',
                     horizontalAlignment: 'left',
                     buttonOptions:{
                            text: 'Add COA Header',
                            type: 'normal',
                            stylingMode: 'outlined',
                            onClick: function()
                            {
                                popup3.show();
                            }
                     }
                 },
                {
                     itemType: 'button',
                     horizontalAlignment: 'left',
                     buttonOptions:{
                            text: 'Add COA Detail',
                            type: 'normal',
                            stylingMode: 'outlined',
                            onClick: function()
                            {
                                popup2.show();
                            }
                     }
                },
                {
                     name: 'Add COA Bulk By excel',
                     template: function(data, itemElement) {
                                itemElement.append($("<div>").attr("id", "dxfu1").dxFileUploader());
                     },

                },
                {
                     itemType: 'button',
                     horizontalAlignment: 'left',
                     buttonOptions:{
                            text: 'Download template for excel COA',
                            type: 'normal',
                            stylingMode: 'outlined',
                            onClick: function()
                            {
                                window.location.href = '/view/DOC/excelcoa.xlsx'
                            }
                     }
                },
               ],
    });
    $('#dxfu1').dxFileUploader({
        selectButtonText: 'Select Excel',
        labelText: 'Upload COA in bulk file',
        accept: '.xls, .xlsx',
        uploadMode: 'useForm',
//        uploadUrl:'/api/getCOAexcel',
        onValueChanged(e)
        {
            debugger

            const reader = new FileReader();

            var jsData = {};
            const file = e.value[0];
            debugger
            reader.readAsBinaryString(file);
            reader.onloadend = function(f) {
                    debugger
                     var workbook = XLSX.read(f.target.result, {
                                type: 'binary'
                                        });
                     workbook.SheetNames.forEach(function(sheetName){
                     var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
                  json_object = JSON.stringify(XL_row_object);
                  json1 = json_object;

                  formData.append('datas', json_object);
                  console.log(json_object);
                  });
                     uploadexcel(formData);




                    debugger
                    };



            debugger
        }

    });
    $('#DataCOA').dxDataGrid({
        dataSource: '/api/getCOA',
        method:'GET',
        contentType: "application/json",
        searchEnabled: true,
        columnAutoWidth: true,
        columnChooser: true,
        height:435,
        searchPanel: { visible: true },
        editing: {
            mode: 'batch',
            allowUpdating:true
        },
            onSaving(e) {
              e.cancel = true;


              if (e.changes.length) {
                debugger

                datag.append('dataf', e.changes)

                e.promise = sendBatchRequest('/api/updateCOA', e.changes).done(() => {
                  e.component.refresh(true).done(() => {
                    e.component.cancelEditData();
                  });
                });
                location.reload();

              }
            },
        // dataType : 'text',
        // align : 'center',
        // fitColumns:true,
        columns:[
//            {checkbox: true},
            {dataField:'NO_COA',caption:'Nomor COA', alignment:'left', allowEditing: false},
            {dataField:'NAMA_COA',caption:'Nama COA', alignment:'left',},
            {dataField:'POSISI',caption:'Posisi Normal', alignment:'left', allowEditing: false,},
            // {dataField:'MATA_UANG',caption:'Mata Uang', alignment:'center',},
            {dataField:'TANGGAL',caption:'Tanggal Diperbarui', alignment:'left', allowEditing: false,},
            {dataField:'KET',caption:'Header', alignment:'left', allowEditing: false,},
            {dataField:'GROUP_COA',caption:'Nomor Grup COA', alignment:'left', allowEditing: false,},
            {dataField:'CREATED_BY',caption:'Created By', alignment:'left', allowEditing: false,},
            {dataField:'CREATED_DATE',caption:'Created Date', alignment:'left', allowEditing: false,},
            {dataField:'CREATED_TIME',caption:'Created Time', alignment:'left', allowEditing: false,},
            {dataField:'UPDATED_BY',caption:'Updated By', alignment:'left', allowEditing: false,},
            {dataField:'UPDATED_DATE',caption:'Updated Date', alignment:'left', allowEditing: false,},
            {dataField:'UPDATED_TIME',caption:'Updated Time', alignment:'left', allowEditing: false,},
//            {dataField:'STATUS',caption:'STATUS', alignment:'center',},
            {dataField:'DESC',caption:'Deskripsi COA', alignment:'left',},

            // {field:'ACTION', title:'Action',
            //     formatter:function(value, row, index)
            //         {
            //             var e = '<button type="button" id="Update_Button" class="btn btn-info">Edit</button> ';
            //             var d = '<button href="javascript:void(0)" type="button" class="btn btn-danger" onclick="deleterow(this)">Delete</button>';
            //             return e+d;
            //         }
            //
            //     }


//          {title:'Details',colspan:4}
        ]
        });
    $("#popup2").dxPopup({
        title: "Tambah COA Detail",
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
            return content;



        },
        onShown: function ()
        {
            var forminsert = $("#formInsert").dxForm({
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
                                    dataField: "NOPLUSNAMACOADBT",
                                    label: { text: "Pilih group COA", location: "top" },
                                    editorOptions: {
                                        dataSource: "/api/getnocoaplusname/0",
                                        placeholder: "Pilih Nomor COA disini...",
                                        showSelectionControls: true,
                                        applyValueMode: "useButtons",
                                        displayExpr: function (data) {
                                            if (data) {
                                                datagrup = data.NOPLUSNAMACOADBT.slice(0,6)
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
                                var group = $('#formInsert').find('input[name="NOPLUSNAMACOADBT"]').val();
                                var slicegroup = group.slice(0, 6);



//                                var formData = new FormData();
//                                formData.append('NO_COA', nocoa);
//                                formData.append('NAMA_COA', namacoa);
//                                formData.append('POSISI', sliceposisi);
//                                formData.append('KET',KET);

                                $.ajax({
                                    url: '/api/postCOA?NO_COA='+nocoa+'&NAMA_COA='+namacoa+'&POSISI='+sliceposisi+'&KET='+KET+'&GROUP_COA='+slicegroup+'&Identifier=1',
                                    method: 'POST',

                                    processData: false,

//
                                    success: function (data) {
                                        if(data === "0")
                                            DevExpress.ui.notify("Nomor COA Tidak Boleh Kosong", "error", 10000);
                                        else if(data === "1"){
                                            DevExpress.ui.notify("Data Berhasil ditambahkan", "success", 10000);
                                            location.reload();
                                        }
                                        else
                                        {
                                            DevExpress.ui.notify("Data Nomor COA sudah ada", "error", 10000);
                                        }
                                        },


                                    error: function () {
                                        DevExpress.ui.notify("Koneksi terputus/error", "error", 10000);
                                    }

                                });


                            }
                            // useSubmitBehavior: true,
                        },

                    },


                ],
            });
        }

    });
    $("#popup3").dxPopup({
            title: "Tambah COA Header",
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
                content.append('<div id="formInsert3" />');
                return content;



            },
            onShown: function ()
            {
                var forminsert3 = $("#formInsert3").dxForm({
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
                             editorType: "dxTextBox",
                             dataField: "pilihnamacoaheader",
                             visible: false,
                             label: { text: "Bila menjadi detail, pilih nomor dan coa untuk menjadi headernya", location: "top" },
                             editorOptions: {placeholder:"Masukkan Keterangan COA.."}
                        },
                        {
                                                            itemType: "simple",
                                                            editorType: "dxSelectBox",
                                                            dataField: "NOPLUSNAMACOADBT",
                                                            label: { text: "Pilih group COA", location: "top" },
                                                            editorOptions: {
                                                                dataSource: "/api/getnocoaplusname/0",
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
                                    var nocoa = $('#formInsert3').find('input[name="nocoa"]').val();
                                    var namacoa = $('#formInsert3').find('input[name="namacoa"]').val();
                                    var posisi = $('#formInsert3').find('input[name="idplusket"]').val();
                                    var sliceposisi = posisi.slice(0, 1);
                                    var KET = $('#formInsert3').find('input[name="ket"]').val();
                                    var group = $('#formInsert3').find('input[name="NOPLUSNAMACOADBT"]').val();
                                    var slicegroup = group.slice(0, 6);
                                    $.ajax({
                                        url: '/api/postCOA?NO_COA='+nocoa+'&NAMA_COA='+namacoa+'&POSISI='+sliceposisi+'&KET='+KET+'&GROUP_COA='+slicegroup+'&Identifier=0',
                                        method: 'POST',

                                        processData: false,

    //
                                        success: function (data) {
                                             if(data === "0"){
                                                    DevExpress.ui.notify("Nomor COA Tidak Boleh Kosong", "error", 10000);}
                                             else if(data === "1"){
                                                    DevExpress.ui.notify("Data Berhasil ditambahkan", "success", 10000);
                                                           location.reload();
                                                    }
                                             else
                                                    {
                                                           DevExpress.ui.notify("Data Nomor COA sudah ada", "error", 10000);
                                                    }
                                                    },

                                        error: function () {
                                                    DevExpress.ui.notify("Koneksi terputus/error", "error", 10000);
                                                     }

                                    });





                                }
                                // useSubmitBehavior: true,
                            },

                        },


                    ],
                });
            }

        });
    $("#popup4").dxPopup({
                    title: "Edit COA Header",
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
                        content.append('<div id="formInsert4" />');
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
                        var forminsert4 = $("#formInsert4").dxForm({
                            colCount: 1,
                            // width: '1000px',
                            position:'center',
                            labelLocation: "top",
                            alignItemLabels: true,
                            alignItemLabelsInAllGroups: true,
                            items: [

//                                {
//                                    itemType: "simple",
//                                    editorType: "dxTextBox",
//                                    dataField: "nocoa",
//                                    label: { text: "Masukkan Nomor COA", location: "top" },
//                                    editorOptions: {
//                                        placeholder:"Masukkan Nomor COA.."
//                                    },
//                                    validationRules: [
//                                        {
//                                            type: "required",
//                                        },
//                                    ]
//                                },

//
//
//                                {
//                                     itemType: "simple",
//                                     editorType: "dxTextBox",
//                                     dataField: "pilihnamacoaheader",
//                                     visible: false,
//                                     label: { text: "Bila menjadi detail, pilih nomor dan coa untuk menjadi headernya", location: "top" },
//                                     editorOptions: {placeholder:"Masukkan Keterangan COA.."}
//                                },
                                {
                                                                    itemType: "simple",
                                                                    editorType: "dxSelectBox",
                                                                    dataField: "NOPLUSNAMACOADBT",
                                                                    label: { text: "Pilih group COA", location: "top" },
                                                                    editorOptions: {
                                                                        dataSource: "/api/getnocoaplusname/0",
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
                                       editorType: "dxTextBox",
                                       dataField: "namacoa",
                                       label: { text: "Masukkan Nama COA Yang Baru", location: "top" },
                                       editorOptions: {
                                                    placeholder:"Masukkan Nama COA.."
                                                       },
                                                    validationRules: [
                                                    {
                                                       type: "required",
                                                    },
                                                                     ]
                                  },
//                                {
//                                    itemType: "simple",
//                                    editorType: "dxSelectBox",
//                                    dataField: "idplusket",
//                                    label: { text: "Pilih Posisi COA", location: "top" },
//                                    editorOptions: {
//                                        dataSource: "/api/getposisi",
//                                        placeholder: "Pilih Posisi COA...",
//                                        showSelectionControls: true,
//                                        applyValueMode: "useButtons",
//                                        displayExpr: function (data) {
//                                            if (data) {
//                                                return `${data.idplusket}`;
//                                            }
//                                            return null;
//                                        },
//
//                                        keyExpr: "idplusket",
//                                        valueExpr: "idplusket",
//                                        searchEnabled: true,
//                                    },
//                                    validationRules: [
//                                        {
//                                            type: "required",
//                                        },
//                                    ]
//                                },
                                {
                                    itemType: "simple",
                                    editorType: "dxTextBox",
                                    dataField: "ket",
                                    label: { text: "Jika Keterangan Berubah Masukkan Perubahannya", location: "top" },
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
                                            var nocoa = $('#formInsert4').find('input[name="nocoa"]').val();
                                            var namacoa = $('#formInsert4').find('input[name="namacoa"]').val();
                                            var posisi = $('#formInsert4').find('input[name="idplusket"]').val();
                                            var sliceposisi = posisi.slice(0, 1);
                                            var KET = $('#formInsert4').find('input[name="ket"]').val();
                                            var group = $('#formInsert4').find('input[name="NOPLUSNAMACOADBT"]').val();
                                            var slicegroup = group.slice(0, 6);
                                            $.ajax({
                                                url: '/api/postCOA?NO_COA='+nocoa+'&NAMA_COA='+namacoa+'&POSISI='+sliceposisi+'&KET='+KET+'&GROUP_COA='+slicegroup+'&Identifier=0',
                                                method: 'POST',

                                                processData: false,

            //
                                                success: function () {
                                                    DevExpress.ui.notify("Data Berhasil di submit", "success", 10000);
                                                    location.reload();
                                                },
                                                error: function () {
                                                    DevExpress.ui.notify("Data tidak Berhasil di submit", "error", 10000);
                                                }

                                            });





                                        }
                                        // useSubmitBehavior: true,
                                    },

                                },


                            ],
                        });
                    }

                });
    $("#popup5").dxPopup({
                                    title: "Edit COA Detail",
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
                                        content.append('<div id="formInsert5" />');
                                        return content;



                                    },
                                    onShown: function ()
                                    {
                                        var forminsert5 = $("#formInsert5").dxForm({
                                            colCount: 1,
                                            // width: '1000px',
                                            position:'center',
                                            labelLocation: "top",
                                            alignItemLabels: true,
                                            alignItemLabelsInAllGroups: true,
                                            items: [

                //                                {
                //                                    itemType: "simple",
                //                                    editorType: "dxTextBox",
                //                                    dataField: "nocoa",
                //                                    label: { text: "Masukkan Nomor COA", location: "top" },
                //                                    editorOptions: {
                //                                        placeholder:"Masukkan Nomor COA.."
                //                                    },
                //                                    validationRules: [
                //                                        {
                //                                            type: "required",
                //                                        },
                //                                    ]
                //                                },
                //                                {
                //                                    itemType: "simple",
                //                                    editorType: "dxTextBox",
                //                                    dataField: "namacoa",
                //                                    label: { text: "Masukkan Nama COA", location: "top" },
                //                                    editorOptions: {
                //                                        placeholder:"Masukkan Nama COA.."
                //                                    },
                //                                    validationRules: [
                //                                        {
                //                                            type: "required",
                //                                        },
                //                                    ]
                //                                },
                //
                //
                //                                {
                //                                     itemType: "simple",
                //                                     editorType: "dxTextBox",
                //                                     dataField: "pilihnamacoaheader",
                //                                     visible: false,
                //                                     label: { text: "Bila menjadi detail, pilih nomor dan coa untuk menjadi headernya", location: "top" },
                //                                     editorOptions: {placeholder:"Masukkan Keterangan COA.."}
                //                                },
                                                {
                                                    itemType: "simple",
                                                    editorType: "dxSelectBox",
                                                    dataField: "NOPLUSNAMACOADBT",
                                                    label: { text: "Pilih group COA", location: "top" },
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
                                                            var nocoa = $('#formInsert5').find('input[name="nocoa"]').val();
                                                            var namacoa = $('#formInsert5').find('input[name="namacoa"]').val();
                                                            var posisi = $('#formInsert5').find('input[name="idplusket"]').val();
                                                            var sliceposisi = posisi.slice(0, 1);
                                                            var KET = $('#formInsert5').find('input[name="ket"]').val();
                                                            var group = $('#formInsert5').find('input[name="NOPLUSNAMACOADBT"]').val();
                                                            var slicegroup = group.slice(0, 6);
                                                            $.ajax({
                                                                url: '/api/postCOA?NO_COA='+nocoa+'&NAMA_COA='+namacoa+'&POSISI='+sliceposisi+'&KET='+KET+'&GROUP_COA='+slicegroup+'&Identifier=0',
                                                                method: 'POST',

                                                                processData: false,

                            //
                                                                success: function () {
                                                                    DevExpress.ui.notify("Data Berhasil di submit", "success", 10000);
                                                                    location.reload();
                                                                },
                                                                error: function () {
                                                                    DevExpress.ui.notify("Data tidak Berhasil di submit", "error", 10000);
                                                                }

                                                            });





                                                        }
                                                        // useSubmitBehavior: true,
                                                    },

                                                },


                                            ],
                                        });
                                    }

                                });
//    $('#AddButtonHeader').dxButton({
//            stylingMode: 'contained',
//            text: 'Tambah COA Header',
//            type: 'default',
////            height: 50,
////            width: 300,
//            onClick() {
//                popup3.show();
//                // DevExpress.ui.notify('The Contained button was clicked');
//            },
//        });
//    $('#AddButtonDetail').dxButton({
//        stylingMode: 'contained',
//        text: 'Tambah COA Detail',
//        type: 'default',
////        height: 50,
////        width: 300,
//        onClick() {
//            popup2.show();
//            // DevExpress.ui.notify('The Contained button was clicked');
//        },
//    });
//    $('#AddByExcel').dxButton({
//            stylingMode: 'contained',
//            text: 'Tambah COA Bulk By excel',
//            type: 'default',
//    //        height: 50,
//    //        width: 300,
//            onClick() {
//                popup2.show();
//                // DevExpress.ui.notify('The Contained button was clicked');
//            },
//        });
    const popup2 = $("#popup2").dxPopup("instance");
    const popup3 = $("#popup3").dxPopup("instance");
    const popup4 = $("#popup4").dxPopup("instance");
    const popup5 = $("#popup5").dxPopup("instance");
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