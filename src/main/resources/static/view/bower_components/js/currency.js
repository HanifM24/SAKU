$(function()
{
        $('#buttoncurrency').dxForm({
            items: [{
                        itemType: "button",
                        horizontalAlignment:'left',
                        buttonOptions: {
                            text: "Do Something",
                            type: "default",
                            onClick: function () {
                                $.ajax({
                                    url
                                    })
                                // Implement your logic here
                            }
                        }
                    },
                    // ...
                    ]
        })
})