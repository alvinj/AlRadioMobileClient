Ext.define('VP.util.Util', {

    // much of this code is copied from a Packt book

    statics : {
        // required: '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>',
        decodeJSON : function (text) {
            var result = Ext.JSON.decode(text, true);
            if (!result) {
                result = {};
                result.success = false;
                result.msg = text;
            }
            return result;
        },

        showErrorMsg: function (text) {
            // Ext.Msg.alert('Error!', text);
            Ext.Msg.show({
                title:'Error!',
                msg: text,
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
            });
        },

        dumpObject: function(obj) {
            var output, property;
            for (property in obj) {
                output += property + ': ' + obj[property] + '; ';
            }
            console.log(output);
        },

        // `method` is typically 'GET' or 'POST'
        callRestUrl: function(theUrl, theMethod) {
            Ext.Ajax.request({
                url: theUrl,
                method: theMethod,
                success: function(conn, response, options, eOpts) {
                    var result = VP.util.Util.decodeJSON(conn.responseText);
                    if (result.success) {
                        // ignore
                    } else {
                        VP.util.Util.showErrorMsg(result.msg);
                    }
                },
                failure: function(conn, response, options, eOpts) {
                    // TODO get the 'msg' from the json and display it
                    VP.util.Util.showErrorMsg(conn.responseText);
                }
            });
        }
    }
});





