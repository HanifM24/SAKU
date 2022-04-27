$(function()
{

        $("#popup2").dxPopup({
                title: "Input nilai Mata Uang",
                showTitle: true,
                width: 500,
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
                            {
                                            itemType: "simple",
                                            editorType: "dxNumberBox",
                                            dataField: "NOMINALTRXKDT",
                                            label: { text: "Masukkan kurs tengah BI", location: "top" },
                                            editorOptions: {placeholder:"Masukkan Nominal Kredit..",
                                                format: '#,##0.00',


                                            },
                                            validationRules: [
                                                {
                                                    type: "required",
                                                },
                                            ]
                                        },


                            {

                                itemType: 'button',
                                editorType: 'dxButton',
                                horizontalAlignment: 'center',
                                buttonOptions: {
                                    text: 'Submit',
                                    type: 'default',
                                    useSubmitBehavior: true,
                                    onClick: function() {


                                        var KODEPLUSNAMAUANGDBT = $("#formInsert").dxForm("instance").getEditor('KODEPLUSNAMAUANGDBT').option('value');
                                        var NOMINALTRXKDT = $("#formInsert").dxForm("instance").getEditor('NOMINALTRXKDT').option('value');
                                        var kodeuang = KODEPLUSNAMAUANGDBT.slice(6, 9);



        //                                var formData = new FormData();
        //                                formData.append('NO_COA', nocoa);
        //                                formData.append('NAMA_COA', namacoa);
        //                                formData.append('POSISI', sliceposisi);
        //                                formData.append('KET',KET);

                                        $.ajax({
                                            url: '/api/postcurtodbmanual?matauang='+kodeuang+'&rate='+NOMINALTRXKDT,
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


                                },


                            },


                        ],
                    });
                }

            });
        $('#buttoncurrency').dxButton({
                    stylingMode: 'contained',
                                text: 'Tarik data currency',
                                type: 'default',
                    //            width: 120,
                                onClick:function () {
                                                                                $.ajax({
                                                                                    url: 'api/postcurtodb',


                                                                                    processData: false,

                                                                                    //
                                                                                    success: function (datag) {
                                                                                           if(datag==1){
                                                                                                DevExpress.ui.notify("Data berhasil ditarik", "success", 20000);
                                                                                                 location.reload();
                                                                                                }
                                                                                           else
                                                                                           {
                                                                                                DevExpress.ui.notify("Data untuk hari ini sudah ditarik", "error", 20000);
                                                                                           }


                                                                                                               },
                                                                                    error: function () {
                                                                                           DevExpress.ui.notify("Tidak ada koneksi internet", "error", 20000);
                                                                                            location.reload();
                                                                                                                }
                                                                                    })
                                                                                // Implement your logic here
                                                                            }
//                    items: [{
//                                itemType: "button",
//                                horizontalAlignment:'left',
//                                buttonOptions: {
//                                    text: "Tarik Data",
//                                    type: "default",
//                                    onClick: function () {
//                                        $.ajax({
//                                            url: 'api/postcurtodb',
//
//
//                                            processData: false,
//
//                                            //
//                                            success: function (datag) {
//                                                   if(datag==1){
//                                                        DevExpress.ui.notify("Data berhasil ditarik", "success", 20000);
//                                                         location.reload();
//                                                        }
//                                                   else
//                                                   {
//                                                        DevExpress.ui.notify("Data untuk hari ini sudah ditarik", "error", 20000);
//                                                   }
//
//
//                                                                       },
//                                            error: function () {
//                                                   DevExpress.ui.notify("Tidak ada koneksi internet", "error", 20000);
//                                                    location.reload();
//                                                                        }
//                                            })
//                                        // Implement your logic here
//                                    }
//                                }
//                            },
//                            // ...
//                            ]
                });
        $('#buttoncurrencymanual').dxButton({
                            stylingMode: 'contained',
                            text: 'Tambah nilai currency manual',
                            type: 'default',
                            onClick:function () {
                                        popup2.show();

                }
                });
        const popup2 = $("#popup2").dxPopup("instance");


        $('#Datadtlcur').dxDataGrid({
                dataSource: '/api/getdetailcur',
                method:'GET',
                contentType: "application/json",
                searchEnabled: true,
                columnAutoWidth: true,
                height:435,
                searchPanel: { visible: true },
                // dataType : 'text',
                // align : 'center',
                // fitColumns:true,
                columns:[
        //            {checkbox: true},
                    {dataField:'KD_MATA_UANG',caption:'Kode Mata Uang', alignment:'center',},
                    {dataField:'NAMA_MATA_UANG',caption:'Nama Mata Uang', alignment:'center',},
                    {dataField:'RATE',caption:'Currency Rate', alignment:'center', format:{
                                                                                                       type:'fixedPoint',
                                                                                                       precision: 2},},
                    {dataField:'UPDATE_DATE',caption:'Tanggal Diperbarui', alignment:'center',},
                    {dataField:'UPDATE_TIME',caption:'Jam Diperbarui', alignment:'center',},

                ]
                });
});
