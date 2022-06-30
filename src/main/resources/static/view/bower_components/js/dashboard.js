$(() => {
    var cuurl = window.location.href;

    function tst(par)
    {
        if(cuurl==par)
        {
            return true;
        }
    };
    var cadd = (window.location.pathname === '/SAKU') ? true:false




//    function()
//    {
//        var loc = window.location.href;
//        if loc = menubar[]
//
//    }

//    var username = JSON.parse('${userName}');
//    function getusername(){
//        $.ajax({
//                                            url: '/api/getuserappnames',
//                                            method: 'GET',
//
//                                            processData: false,
//
//        //
//                                            success: function (data) {
//                                                return data
//
//
//
//
//
//                                        }
//
//
//    })
//    }
    DevExpress.setTemplateEngine('underscore');

    $('#treeview').dxTreeView({
        dataSource: menubar,
        searchEnabled: true,
        searchMode: "startswith",
        selectionMode: 'single',
        selectByClick: true,
        height: 536,
//        onItemRendered(e)
//        {
//            debugger;
//            if(e.itemData.url == window.location.pathname)
//            {e.node.selected = true}},
        onItemSelectionChanged(e) {
            const url = e.itemData.url;


            if(url != null) {

                window.location = e.itemData.url;
//                window.history.replaceState({}, '', url);
//                itemData.selected = true;
                // window.location.href = e.itemData;
                // showCountryData(e.itemData);
            }
        },
    });
    $('#navbar').dxTabs({
        dataSource: navData,
        selectedIndex: 0,
        height:60,
        width:'100%',
        onItemClick(e) {
            const url = e.itemData.url;
            if(url != null) {
                window.location.href = url;
                // window.location.href = e.itemData;
                // showCountryData(e.itemData);
            }
        },
        // onItemClick(e) {
        //     list.option('dataSource', listData[e.itemIndex].data);
        // },
    });
    var selectedItem = $("#treeview").dxTreeView('instance').selectedItem;
//    $('#currencybutton').dxForm({
//        items: [{
//                    itemType: "button",
//                    horizontalAlignment:'right',
//                    buttonOptions: {
//                        text: "Do Something",
//                        type: "default",
//                        onClick: function () {
//                        alert('Happy')
//                            // Implement your logic here
//                        }
//                    }
//                },
//                // ...
//                ]
//    })

    // const tabPanel = $('#tabpanel').dxTabPanel({
    //     animationEnabled: true,
    //     itemTitleTemplate: $('#title'),
    //     itemTemplate: $('#city-template'),
    // }).dxTabPanel('instance');

    // Datalocation(continents[0].items[0]);
    //
    // function Datalocation(data) {
    //     const citiesData = data.cities;
    //     if (citiesData) {
    //         $('#country-flag').attr('src', data.flag);
    //         $('#full-country-name').text(data.fullName);
    //         $('#country-description').text(data.description);
    //
    //         $('#country-area').text(data.area);
    //         $('#country-population').text(data.population);
    //         $('#country-gdp').text(`$${data.gdp}`);
    //
    //         tabPanel.option('dataSource', citiesData);
    //         tabPanel.option('selectedIndex', 0);
    //     }
    // }

    // showCountryData(continents[0].items[0]);

    function showCountryData(data) {
        const citiesData = data.cities;
        if (citiesData) {
            $('#country-flag').attr('src', data.flag);
            $('#full-country-name').text(data.fullName);
            $('#country-description').text(data.description);

            $('#country-area').text(data.area);
            $('#country-population').text(data.population);
            $('#country-gdp').text(`$${data.gdp}`);

            tabPanel.option('dataSource', citiesData);
            tabPanel.option('selectedIndex', 0);
        }
    }
});
const navData = [{
    text: 'PT. PLANA NETWORKS INDONESIA',
//    icon: 'doc',
    url:'/Dashboard',
    icon:'/img/PANNetwork.png'

},{
      text: 'Sistem Akutansi Home',
      icon: 'doc',
      url:'/Dashboard'

  }, {
    text: 'Sistem Kepegawaian PAN',
    icon: 'user',
}, {
    text: 'Sistem Inventori PAN',
    icon: 'product',
     badge: 3,
}, {
    text: 'Logout',
    icon: 'user',
    url:"/Logout"
},
];



const products = [

    {
        ID: "1",
        name: "Stores",
        expanded: true
    }, {
        ID: "1_1",
        categoryId: "1",
        name: "Super Mart of the West",
        expanded: true
    },
    // ...
    {
        ID: "1_1_2",
        categoryId: "1_1",
        name: "Televisions",
        expanded: true
    },
    // ...
];


const menubar = [
    {
        id: '1',
        text:'Admin Setting',
        expanded: (window.location.pathname === '/register' ||
                   window.location.pathname === '/audittrails') ? true:false,
        items:[{
            id : '1_1',
            text : 'Register',
            url :'/register',
            selected: (window.location.pathname === '/register') ? true:false
        },
        {
            id : '1_2',
            text : 'Audit Trails',
            url :'/audittrails',
            selected: (window.location.pathname === '/audittrails') ? true:false

//            url :'/register',
//            selected: (window.location.pathname === '/register') ? true:false
        }]
    },
    {
        id: '2',
        text: 'COA List',
        url: '/SAKU',
        selected: (window.location.pathname === '/SAKU') ? true:false


        // expanded: true
    },
    {
        id: '3',
        text: 'Foreign Currency Input',
        url: '/Currency',
        selected: (window.location.pathname === '/Currency') ? true:false
//        items:[{
//            id:'3_1',
//            text: 'Tarik data currency',
//            url:'/Currency'
//            },
//
//        ]
            // expanded: true
    },
    {
        id: '4',
        text: 'Transaction Menu',
        expanded: (window.location.pathname === '/InputTransaksi' ||
                   window.location.pathname === '/InputTransaksidouble'
        ) ? true:false,
        items: [{
            id:'4_1',
            text: 'Posting',
            url:'/InputTransaksi',
            selected: (window.location.pathname === '/InputTransaksi') ? true:false
        },
//        {
//            id:'4_2',
//            text: 'Posting Bulk',
//            url:'/InputTransaksidouble',
//            selected: (window.location.pathname === '/InputTransaksidouble') ? true:false
//
//        }
        ]
    },
    {
        id: '5',
        text: 'Reporting',
        expanded:(window.location.pathname === '/SAKU_TRANSAKSI' ||
                  window.location.pathname === '/ledger' ||
                  window.location.pathname === '/neraca' ||
                  window.location.pathname === '/neraca_old' ||
                  window.location.pathname === '/cflow' ||
                  window.location.pathname === '/profitloss') ? true:false,
        items:[
        {
             id:'5_1',
             text: 'Journal',
             url:'/SAKU_TRANSAKSI',
             selected:  (window.location.pathname === '/SAKU_TRANSAKSI') ? true:false
        },{
            id:'5_2',
            text:'Cash flow',
            url: '/cflow',
            selected: (window.location.pathname === '/cflow') ? true:false

        },{
            id:'5_3',
            text:'Ledger',
            url:'/ledger',
            selected: (window.location.pathname === '/ledger') ? true:false

        },{
            id:'5_4',
            text:'Balance Sheet',
            url:'/neraca',
            selected: (window.location.pathname === '/neraca') ? true:false
        },{
            id:'5_5',
            text:'Neraca (Old)',
            url:'/neraca_old',
            selected: (window.location.pathname === '/neraca_old') ? true:false
        },{
            id:'5_6',
            text:'Profit Loss',
            url:'/profitloss',
            selected: (window.location.pathname === '/profitloss') ? true:false
        }]

    }
];




