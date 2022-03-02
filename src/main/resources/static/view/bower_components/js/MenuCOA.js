//function openForm() {
//      document.getElementById("myForm").style.display = "block";
//    }
//
//function closeForm() {
//      dcllocument.getElementById("myForm").style.display = "none";
//    }


$(function(){
    $('#DataCOA').dxDataGrid({
        dataSource: '/api/getCOA',
        method:'GET',
        contentType: "application/json",
        searchEnabled: true,
        columnAutoWidth: true,
        searchPanel: { visible: true },
        // dataType : 'text',
        // align : 'center',
        // fitColumns:true,
        columns:[
//            {checkbox: true},
            {dataField:'NO_COA',caption:'Nomor COA', alignment:'center',},
            {dataField:'NAMA_COA',caption:'Nama COA', alignment:'center',},
            {dataField:'POSISI',caption:'Posisi', alignment:'center',},
            // {dataField:'MATA_UANG',caption:'Mata Uang', alignment:'center',},
            {dataField:'TANGGAL',caption:'Tanggal Diperbarui', alignment:'center',},
            {dataField:'KET',caption:'Header', alignment:'center',},
            {dataField:'STATUS',caption:'STATUS', alignment:'center',},
            {dataField:'DESC',caption:'Deskripsi COA', alignment:'center',},
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
                                    success: function () {
                                        DevExpress.ui.notify("Data Berhasil di submit", "success", 10000);
                                        location.reload();
                                    },
                                    error: function () {
                                        DevExpress.ui.notify("Data tidak Berhasil di submit", "error", 10000);
                                    }

                                });




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
