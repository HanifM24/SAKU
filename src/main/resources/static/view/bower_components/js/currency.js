$(function()
{
        $('#buttoncurrency').dxForm({
            items: [{
                        itemType: "button",
                        horizontalAlignment:'left',
                        buttonOptions: {
                            text: "Tarik Data",
                            type: "default",
                            onClick: function () {
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
                        }
                    },
                    // ...
                    ]
        })
        $('#Datadtlcur').dxDataGrid({
                dataSource: '/api/getdetailcur',
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
                    {dataField:'KD_MATA_UANG',caption:'Kode Mata Uang', alignment:'center',},
                    {dataField:'NAMA_MATA_UANG',caption:'Nama Mata Uang', alignment:'center',},
                    {dataField:'RATE',caption:'Currency Rate', alignment:'center',},
                    {dataField:'UPDATE_DATE',caption:'Tanggal Diperbarui', alignment:'center',},
                    {dataField:'UPDATE_TIME',caption:'Jam Diperbarui', alignment:'center',},

                ]
                });
})