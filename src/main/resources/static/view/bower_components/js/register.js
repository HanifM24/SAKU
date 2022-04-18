

$(function(){

    var forminsert = $("#forminsert").dxForm({
                    colCount: 1,
                    width: '300px',
                    position:'center',
                    labelLocation: "top",
                    alignItemLabels: true,
                    alignItemLabelsInAllGroups: true,
                    items: [
                    {
                                                                        itemType: "simple",
                                                                        editorType: "dxTextBox",
                                                                        dataField: "username",
                                                                        label: { text: "Masukkan User Name", location: "top" },
                                                                        editorOptions: {
                                                                            placeholder:"Masukkan User ID"
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
                            dataField: "userid",
                            label: { text: "Masukkan NIP", location: "top" },
                            editorOptions: {
                                placeholder:"Masukkan NIP"
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
                            dataField: "password",
                            label: { text: "Masukkan Password", location: "top" },
                            editorOptions: {
                                mode:'password'
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
                                                    dataField: "repassword",
                                                    label: { text: "Ulangi Password", location: "top" },
                                                    editorOptions: {
                                                        mode:'password'
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
                                                        dataField: "role_Name",
                                                        label: { text: "Pilih Role", location: "top" },
                                                        editorOptions: {
                                                            dataSource: "/api/getroleappnames",
                                                            placeholder: "Pilih Nomor COA disini...",
                                                            showSelectionControls: true,
                                                            applyValueMode: "useButtons",
                                                            displayExpr: function (data) {
                                                                if (data) {
                                                                    return `${data.role_Name}`;
                                                                }
                                                                return null;
                                                            },
                                                            keyExpr: "role_Name",
                                                            valueExpr: "role_Name",
                                                            searchEnabled: true,
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
                                     text: 'Submit',
                                     type: 'default',
                                     onClick: function() {


                                            var userid = $('#forminsert').find('input[name="userid"]').val();
                                            var username = $('#forminsert').find('input[name="username"]').val();
                                            var password = $('#forminsert').find('input[name="password"]').val();
                                            var repassword = $('#forminsert').find('input[name="repassword"]').val();
                                            var role_Name = $('#forminsert').find('input[name="role_Name"]').val();

                                            alert(userid == "")
                                            debugger
                                            if (
                                                userid !== "" &&
                                                username !== "" &&
                                                password !== "" &&
                                                repassword !== "" &&
                                                role_Name !== ""
                                                )
                                            {
                                                if (password === repassword){
                                                    let dataraw = new FormData();

                                                    dataraw.append('userid', userid);
                                                    dataraw.append('username', username);
                                                    dataraw.append('password', password);
                                                    dataraw.append('role_Name', role_Name);
                                                    $.ajax({
                                                url: '/api/registernewuser',
                                                method: 'POST',
                                                data: dataraw,
                                                contentType: false,
                                                processData: false,
                                                success: function (e) {
                                                if (e == "1"){
                                                DevExpress.ui.notify("User ID telah terdaftar", "error", 10000);}
                                                else{
                                                DevExpress.ui.notify("Registrasi telah berhasil ", "success", 10000);
                                                                                            location.reload();}
                                                                                        },
                                                error: function () {
                                                      DevExpress.ui.notify("Koneksi Terputus/Error", "error", 10000);
                                                                    }

                                                                                    });}}
                                            else
                                            {
                                                DevExpress.ui.notify("Data tidak boleh ada yang kosong", "error", 10000);

                                            }

                                                                                }

                                            },
                    },







                    ],
                });
});