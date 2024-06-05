var currentTrID = "";
var _boxType = 0;
var _isList1 = !0, _isList2 = !0;
var __newLine = '\n';
var _language = "";
var _popDialog;
var _flag = 'brandcvwithoutnum';
var LengthConstants = {
    INT_MAX_VAL: 2147483647,
    URL_MAX_VAL: 2000,
    SHOPNAME_MAX_VAL: 250,
    PAGE_RANGE_MAX_VAL: 9999,
    SEARCH_MAX_LENGTH: 500,
    USER_NAME_MAX_LENGTH: 55,
    EMAIL_MAX_LENGTH: 250,
    TRIALDAYS_MAX_LENGTH : 3,
    TRIALDAYS_MAX_VAL : 999
}

$(document).ready(function(){
    selTableRow.rowLength();
    selTableRow.notSel();
    selTableRow1.rowLength();
    selTableRow1.notSel();
});

var __lbl_maxCharactersAllowed = "(Max {0} character(s) allowed)";
function showAddBox(_flag, boxType, obj, actionType) {   
    //console.log("actionType"+actionType+' obj'+obj); 
    var actionType = actionType;
    var title = '', txtSmName = '', txtSmUrl = '', txtSmIcon = '', txtSmNumber = '', txtSmTxt = '', id = '';
    _flag = _flag;
    switch (_flag) {       
        case 'brandcvwithoutnum':
            title = "Add Social Media";         
            var action = "";
            action = (obj == undefined || obj == null) ? '' : 'edit';
          
            if (actionType == 'edit') {
                title = "Edit Social Media";
                if ($(obj) && $(obj).closest("tr")) {
                    id = $(obj).closest("tr").attr("smdId");
                    txtSmUrl = $(obj).closest("tr").find(".attrUrl").find("span").text();
                    txtSmName = $(obj).closest("tr").find(".attrName").find("span").text();
                    txtSmIcon = $(obj).closest("tr").find(".attrIcon").find("img").attr("src");                    
                }
            }         
            break;
            case 'brandcvwithnum':
                title = "Add Social Media";         
                var action = "";
                action = (obj == undefined || obj == null) ? '' : 'edit';
                if (actionType == 'edit') {
                    title = "Edit Social Media";
                    if ($(obj) && $(obj).closest("tr")) {
                        id = $(obj).closest("tr").attr("smsdId");
                        txtSmUrl = $(obj).closest("tr").find(".attrUrl").find("span").text();
                        txtSmName = $(obj).closest("tr").find(".attrName").find("span").text();
                        txtSmIcon = $(obj).closest("tr").find(".attrIcon").find("img").attr("src");
                        txtSmNumber = $(obj).closest("tr").find(".attrNumber").find("span").text();
                        txtSmTxt = $(obj).closest("tr").find(".attrTxt").find("span").text();
                    }
                }         
            break;        
    }

    BootstrapDialog.show({
        id: "divSocialMediaAddDialog",
        title: title,
        //type: getDialogType("PRIMARY"),
        message: function () {
            var $message = $('<div id="divSocialMediaAddPopup"></div>');
            var html = '<div class="body">';
            var hide = _boxType == 1 ? "hide" : "";
            var margin = _boxType == 1 ? "" : "margin-top:25px;";
            html += '<div class="row">';
            html += '<div class="col-md-8 ' + hide + '">';
            html += '   <div class="form-group">';
            html += '       <label for="Url">URL:</label>&nbsp;<span class="star">*</span>';
            html += '       <input maxlength="2000" type="text" id="txtSmUrl" onkeydown="CallEnter(event, \'btnSMDSave\')" class="form-control" placeholder="Enter URL" />';
            html += '   </div>';
            html += '   <div class="form-group">';
            html += '       <label for="Name">Name:</label>&nbsp;<span class="star">*</span>';
            html += '       <input maxlength="250" type="text" id="txtSmName" onkeydown="CallEnter(event, \'btnSMDSave\')" class="form-control" placeholder="Enter URL Name" />';
            html += '   </div>';
            
            if(_flag == "brandcvwithnum"){
                html += '   <div class="form-group">';
                html += '       <label for="Name">Number:</label>&nbsp;<span class="star">*</span>';
                html += '       <input type="text" id="txtSmNumber" onkeydown="CallEnter(event, \'btnSMDSave\')" class="form-control numberonly" placeholder="Enter Number" />';
                html += '   </div>';

                html += '   <div class="form-group">';
                html += '       <label for="Name">Text:</label>&nbsp;<span class="star">*</span>';
                // html += '       <input type="text" id="txtSmTxt" onkeydown="CallEnter(event, \'btnSMDSave\')" class="form-control" placeholder="Enter Text" />';
                html += '          <select id="txtSmTxt" onkeydown="CallEnter(event, \'btnSMDSave\')" class="card_inputs dropdownDownArrow" style="cursor:pointer;">';
                html += '               <option value="">Select Text</option>';
                html += '               <option value="Number of Videos">Number of Videos</option>';
                html += '               <option value="Number of Posts">Number of Posts</option>';
                html += '               <option value="Number of Followers">Number of Followers</option>';
                html += '               <option value="Number of Subscribers">Number of Subscribers</option>';
                html += '               <option value="Official Channels in various countries">Official Channels in various countries</option>';
                html += '               <option value="Number of Tweets">Number of Tweets</option>';
                html += '               <option value="Videos and Pictures on Twitter">Videos and Pictures on Twitter</option>';
                html += '               <option value="Number of Likes">Number of Likes</option>';
                html += '   </select>';
                html += '   </div>';
            }            

            html += '</div>';
            html += '<div class="col-md-4">';
            html += '   <div class="form-group">';
            html += '       <div class="creator-pdf-cover" style="' + margin + '">';            
            html += '           <img id="imgSmdIcon" style="max-height:100px; max-width:120px;" src="../public/images/no-image.jpg" />';
            html += '       </div>';
            html += '       <div class="btn btn-success btn-file btn-sm" style="margin-top:5px; font-size:14px;">';
            html += '           <i class="fa fa-paperclip"></i> Upload Logo';

            if(_flag == "brandcvwithnum"){
                html += '       <input id="fuImageStats" type="file" name="attachment" onchange=upload("brandcvwithnum",event)>';
            }
            else{
                html += '       <input id="fuImage" type="file" name="fuImage" onchange=upload("brandcvwithoutnum",event)>';
            }

            html += '       </div>';            
            html += '       <p class="help-block" style="font-size:13px;">Allowed File Type(s): JPG and PNG</p>';
            html += '   </div>';
            html += '</div>';
            html += '</div>';
            html += '<div class="clear"></div>';
            html += '</div>';
            $message.append(html);

            $message.find("input[id=txtSmUrl]").val(txtSmUrl);
            $message.find("input[id=txtSmName]").val(txtSmName);
            $message.find("input[id=txtSmNumber]").val(txtSmNumber);
            //$message.find("input[id=txtSmTxt]").val(txtSmTxt);
            $message.find("select[id=txtSmTxt]").val(txtSmTxt);
            if (txtSmIcon != "")
                $message.find("img[id=imgSmdIcon]").attr('src', txtSmIcon);
            
            return $message;
        },
        closeByBackdrop: !1,
        closable: !0,
        buttons: [
            {
                label: "Most Popular",
                cssClass: 'btn btn-success pull-left btn-sm',
                id: 'btnPopularLogos',
                action: function (dialog) {
                    showPopular();
                }
            }, {
                label: "Cancel",
                cssClass: 'btn btn-default btn-sm',
                action: function (dialog) {
                    dialog.close();
                }
            }, {
                label: "Done",
                cssClass: 'btn btn-primary btn-sm',
                id: 'btnSMDSave',
                action: function (dialog) {
                    var name = $("#txtSmName").val();                    
                    var url = $("#txtSmUrl").val().replace(/\s/g, '').trim();                    
                    var src = $("#imgSmdIcon").attr("src");
                    
                    if(_flag == "brandcvwithnum"){
                        var num = $('#txtSmNumber').val();
                        var txt = $('#txtSmTxt').val();
                    }
                    if (validateDefineBox(_flag)) {                        
                        url = getValidUrl(url);
                        mapSocialMedia(name, url, src, id, actionType, _flag, num, txt); //common method should be defined in respective .js file for different types.(eg.types: profile, shoplink)                        
                        BootstrapDialog.closeAll();
                        
                        if(_flag == "brandcvwithnum"){
                            $("#tblSocialMediaStats").find("tbody tr:first-child").removeClass("selectedTr"); // for remove class from first TR                         
                            selTableRow1.selRow();
                        }
                        else{
                            $("#tblSocialMedia").find("tbody tr:first-child").removeClass("selectedTr"); // for remove class from first TR                         
                            selTableRow.selRow();
                        }                     
                        
                    }
                }
            }
        ],
        onshown: function (dialogRef) {            
            $("#txtSmUrl").focus();   
            numberOnly();         
        }
    });
}

function showPopular() {
    var listId = 1;
    _popDialog = BootstrapDialog.show({
        id: "divPopularDialog",
        title: "Select from most popular",
        //type: getDialogType("PRIMARY"),
        //size: BootstrapDialog.SIZE_WIDE,
        message: function () {
            var $message = $('<div id="divPopular"></div>');
            //var tab1_Active = 'active', tab2_Active = '';

            var url = $("#smUrl").val();
            $.ajax({
                type: "GET",
                url: url,
                data: "",
                success: function(data) {
                    //console.log(data);
                    $message.append(data);                        
                }
                
            });

            return $message;
        },
        closeByBackdrop: !1,
        closable: !0,
        buttons: [
           {
               label: 'Cancel',
               cssClass: 'btn btn-primary',
               action: function (dialog) {
                   dialog.close();
               }
           }
        ],
        onshown: function (dialogRef) {
            //getList(listId);
        },
        onhide: function (dialogRef) {
            //_isList1 = _isList2 = !0;
        }
    });
}
//function assignVals(smmId, name, icon, url) {
function assignVals(icon) {
    $("#imgSmdIcon").attr("src", icon);
    //$("#txtSmName").val(name);
    //$("#txtSmUrl").val(url);

    //_smmId = smmId;
    _popDialog.close();
    if (_boxType == 0)
        setTimeout(function () { $("#txtSmUrl").focus() }, 400);
}
function CallEnter(objEvent, obj) {
    if (objEvent) {
        if (objEvent.which || objEvent.keyCode) {
            if ((objEvent.which == 13) || (objEvent.keyCode == 13)) {
                $("#" + obj).click();
                return false;
            }
        }
    }
    else
        return true;
}
function validateDefineBox(_flag) {
    var flag = !0;
    var msg = "";
    var url = $("#txtSmUrl").val().trim();
    var src = $("#imgSmdIcon").attr("src");
    

    if (_boxType == 0) {
        if (url == "") {
            msg += 'URL' + __newLine;
            flag = !1;
        }
        else if (getValidUrl(url).length > LengthConstants.URL_MAX_VAL) {
            msg += 'Valid Link Length' + __lbl_maxCharactersAllowed.replace(/\{0}/g, LengthConstants.URL_MAX_VAL) + __newLine;
            flag = !1;
        }
        else if (!urlOnly(url)) {
            msg += 'Valid URL' + __newLine;
            flag = !1;
        }
        if ($("#txtSmName").val().trim() == "") {
            msg += 'Name' + __newLine;
            flag = !1;
        }
    }
    if (src.indexOf('/public/images/no-image.jpg') != -1) {
        msg += 'Logo' + __newLine;
        flag = !1;
    }
    if(_flag == "brandcvwithnum") {

       if ($("#txtSmNumber").val()=="") {
            msg += 'Number' + __newLine;
            flag = !1;
        }
        
        if ($("#txtSmTxt").val().trim() == "") {
            msg += 'Text' + __newLine;
            flag = !1;
        }
    }

    if (!flag)
        showBSAlert('Warning! The following data has not been provided:', msg, 'DANGER');
    else {
        if (_boxType == 0 && url.indexOf('.') == -1) {
            $("#txtSmUrl").val('').focus();
            showBSAlert('Error!', 'Invalid URL' + __newLine, 'DANGER');
            flag = !1;
        }
    }
    return flag;
}

function upload(_flag,event) {
    var reader = new FileReader();
    reader.onload = function(){
      var output = document.getElementById('imgSmdIcon');
      output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
    
    //console.log(_flag);
    if(_flag == "brandcvwithnum"){
        var fileID = "fuImageStats";
    }
    else{
        var fileID = "fuImage";
    }
    var files = $("#"+fileID).get(0).files;
    
    var fileName = files[0].name;
    var ext = fileName.substring(fileName.lastIndexOf('.')).toLowerCase();

    if (ext == ".jpg" || ext == ".png") {
        //
    }
    else {
        showBSAlert('Invalid file type!', 'Allowed File Type(s):' + 'JPG and PNG', 'DANGER');
        $("#"+fileID).val('');
    }    
}

var selTableRow = {
    rowLength : function () {
        
        rowLen = $("#tblSocialMedia").find("tbody tr");        
        if (rowLen.length == 0 || rowLen.length <= 1) {
            $("#moveToTheTop, #moveUp").addClass("disabled");
        }
        else {
            $("#moveToTheTop, #moveUp").removeClass("disabled");
            selTableRow.selRow();
        }
    },
    notSel : function(){
        if (!$("#tblSocialMedia").find("tbody tr").hasClass("selectedTr")) {
            $("#moveToTheTop, #moveUp").addClass("disabled");
        }
    },
    selRow : function () {
        $("#tblSocialMedia").find("tbody tr").click(function () {
            currentTrID = $(this).attr("smdId");            
            $("#moveToTheTop, #moveUp").removeClass("disabled");
            if ($(this).hasClass("selectedTr")) {
                //$(this).removeClass("selectedTr");
            }
            else {
                $("#tblSocialMedia").find("tbody tr").not($(this).addClass("selectedTr")).removeClass("selectedTr");
                //selTableRow.moveUp(currentTrID);
                selTableRow.moveToTheTop(currentTrID);
            }

            selTableRow.disabledBtn();
        });
    },
    moveUp: function () {
        console.log("tblSocialMedia");
        var prevTrID = $("#tblSocialMedia tbody").find(".selectedTr").prev("tr").attr("smdId");        
        $("#tblSocialMedia tbody").find(".selectedTr").insertBefore("#tblSocialMedia tbody [smdId=" + prevTrID + "]");        
        selTableRow.disabledBtn();
        selTableRow.resetRowNum();
        console.log(prevTrID + " Prev ID");
    },
    moveToTheTop: function (currentTrID) {
        $("#moveToTheTop").click(function () {            
            $("#tblSocialMedia tbody").find("[smdId=" + currentTrID + "]").insertBefore("#tblSocialMedia tbody tr:first-child");
            selTableRow.disabledBtn();
            selTableRow.resetRowNum();  
            console.log(currentTrID + " currentTrID ID");   
        });
    },
    disabledBtn : function () {
        if ($("#tblSocialMedia").find("tbody tr:first-child").hasClass("selectedTr")) {
            $("#moveToTheTop, #moveUp").addClass("disabled");
        }
    },
    resetRowNum: function () {
        $.each($("#tblSocialMedia").find("tbody tr"), function (index, item) {
            $(item).attr('row', index);
            $(item).attr('id', 'smID_'+index);
            $(item).attr('smdId', index);
            $(item).find('input:first').attr('id', 'smTrid_'+index);
            $(item).find('input:first').attr('name', 'smTrid_'+index);
            $(item).find('.attrIcon').attr('id', 'attrIcon_'+index);
            $(item).find('.attrIcon').find('input').attr('id', 'smTrIcon_'+index);
            $(item).find('.attrIcon').find('input').attr('name', 'smTrIcon_'+index);
            $(item).find('.attrIcon').find('img').attr('id', 'attriconimg_'+index);
            $(item).find('.attrUrl').attr('id', 'attrUrl_'+index);
            $(item).find('.attrUrl').find('input').attr('id', 'smTrUrl_'+index);
            $(item).find('.attrUrl').find('input').attr('name', 'smTrUrl_'+index);
            $(item).find('.attrUrl').find('span').attr('id', 'urltxt_'+index);
            $(item).find('.attrName').attr('id', 'attrName_'+index);
            $(item).find('.attrName').find('input').attr('id', 'smTrName_'+index);
            $(item).find('.attrName').find('input').attr('name', 'smTrName_'+index);
            $(item).find('.attrName').find('span').attr('id', 'nametxt_'+index);
        });
    }
}

var selTableRow1 = {
    rowLength : function () {
        
        rowLen = $("#tblSocialMediaStats").find("tbody tr");        
        if (rowLen.length == 0 || rowLen.length <= 1) {
            $("#moveToTheTopStats, #moveUpStats").addClass("disabled");
        }
        else {
            $("#moveToTheTopStats, #moveUpStats").removeClass("disabled");
            selTableRow1.selRow();
        }
    },
    notSel : function(){
        if (!$("#tblSocialMediaStats").find("tbody tr").hasClass("selectedTr")) {
            $("#moveToTheTopStats, #moveUpStats").addClass("disabled");
        }
    },
    selRow : function () {
        $("#tblSocialMediaStats").find("tbody tr").click(function () {
            currentTrID = $(this).attr("smsdId");            
            $("#moveToTheTopStats, #moveUpStats").removeClass("disabled");
            if ($(this).hasClass("selectedTr")) {
                //$(this).removeClass("selectedTr");
            }
            else {
                $("#tblSocialMediaStats").find("tbody tr").not($(this).addClass("selectedTr")).removeClass("selectedTr");
                //selTableRow.moveUp(currentTrID);
                selTableRow1.moveToTheTop(currentTrID);
            }

            selTableRow1.disabledBtn();
        });
    },
    moveUp: function () {
        console.log("tblSocialMediaStats");
        var prevTrID = $("#tblSocialMediaStats tbody").find(".selectedTr").prev("tr").attr("smsdId");        
        $("#tblSocialMediaStats tbody").find(".selectedTr").insertBefore("#tblSocialMediaStats tbody [smsdId=" + prevTrID + "]");        
        selTableRow1.disabledBtn();
        selTableRow1.resetRowNum();
        console.log(prevTrID + " Prev ID");
    },
    moveToTheTop: function (currentTrID) {
        $("#moveToTheTopStats").click(function () {            
            $("#tblSocialMediaStats tbody").find("[smsdId=" + currentTrID + "]").insertBefore("#tblSocialMediaStats tbody tr:first-child");
            selTableRow1.disabledBtn();
            selTableRow1.resetRowNum();  
            console.log(currentTrID + " currentTrID ID");   
        });
    },
    disabledBtn : function () {
        if ($("#tblSocialMediaStats").find("tbody tr:first-child").hasClass("selectedTr")) {
            $("#moveToTheTopStats, #moveUpStats").addClass("disabled");
        }
    },
    resetRowNum: function () {
        $.each($("#tblSocialMediaStats").find("tbody tr"), function (index, item) {
            $(item).attr('row', index);
            $(item).attr('id', 'smsID_'+index);
            $(item).attr('smsdId', index);
            $(item).find('input:first').attr('id', 'smsTrid_'+index);
            $(item).find('input:first').attr('name', 'smsTrid_'+index);
            //$(item).find('.attrIcon').attr('id', 'attrIcon_'+index);
            $(item).find('.attrIcon').find('input').attr('id', 'smsTrIcon_'+index);
            $(item).find('.attrIcon').find('input').attr('name', 'smsTrIcon_'+index);
            $(item).find('.attrIcon').find('img').attr('id', 'attr_iconimg_'+index);
            $(item).find('.attrUrl').attr('id', 'attrUrl_'+index);
            $(item).find('.attrUrl').find('input').attr('id', 'smsTrUrl_'+index);
            $(item).find('.attrUrl').find('input').attr('name', 'smsTrUrl_'+index);
            $(item).find('.attrUrl').find('span').attr('id', 'urltxt_'+index);
            $(item).find('.attrName').attr('id', 'attrName_'+index);
            $(item).find('.attrName').find('input').attr('id', 'smsTrName_'+index);
            $(item).find('.attrName').find('input').attr('name', 'smsTrName_'+index);
            $(item).find('.attrName').find('span').attr('id', 'nametxt_'+index);
            $(item).find('.attrNumber').attr('id', 'attrNumber'+index);
            $(item).find('.attrNumber').find('input').attr('id', 'smsTrNumber_'+index);
            $(item).find('.attrNumber').find('input').attr('name', 'smsTrNumber_'+index);
            $(item).find('.attrNumber').find('span').attr('id', 'numbertxt_'+index);

            $(item).find('.attrTxt').attr('id', 'attrTxt'+index);
            $(item).find('.attrTxt').find('input').attr('id', 'smsTrTxt_'+index);
            $(item).find('.attrTxt').find('input').attr('name', 'smsTrTxt_'+index);
            $(item).find('.attrTxt').find('span').attr('id', 'txttxt_'+index);
        });
    }
}
function getValidUrl(url) {
    if (url) {
        url = url.trim();
        if (url.indexOf('.') > -1 && url.length > 4 && url.toLowerCase().substring(0, 4) != "http")
            url = 'http://www.' + (url.toLowerCase().substring(0, 4) == "www." ? url.replace(/www./i, '') : url);
    }
    return url;
}
function urlOnly(url) {
    //var re = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i;
    //var re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
    var re = /^(http|https|ftp):\/\/[A-Za-z0-9]+([\-\.]{1}[A-Za-z0-9]+)*\.[A-Za-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i;
    return re.test(getValidUrl(url));
}

function mapSocialMedia(name, url, icon, id, actionType, _flag, num, txt) {
    
    if(actionType == "add"){
        if(_flag == "brandcvwithnum"){
            var smTblTrCount = $("#tblSocialMediaStats").find("tbody tr").length;
        }
        else {
            var smTblTrCount = $("#tblSocialMedia").find("tbody tr").length;
        }
        if(smTblTrCount != 0)
        {
            smTblTrCount-1;
        }
        
        /* var smTblTrData = '';
        smTblTrData +='<tr id="smID_'+smTblTrCount+'" smdId="'+smTblTrCount+'"><input type="hidden" name="smTrid_'+smTblTrCount+'" id="smTrid_'+smTblTrCount+'" value="'+smTblTrCount+'">';
        smTblTrData +='     <td class="attrIcon" id="attrIcon_'+smTblTrCount+'"><div class="shoplink-logo-holder"><input type="hidden" name="smTrIcon_'+smTblTrCount+'" id="smTrIcon_'+smTblTrCount+'" value="'+icon+'"> <img id="attriconimg_'+smTblTrCount+'" src="'+icon+'" class=""  alt="'+name+'" /> </div></td>';
        smTblTrData +='     <td class="attrUrl" id="attrUrl_'+smTblTrCount+'" url=""><div class="form-group"><input type="hidden" name="smTrUrl_'+smTblTrCount+'" id="smTrUrl_'+smTblTrCount+'" value="'+url+'"> <span id="urltxt_'+smTblTrCount+'" class="wordbreak" style="display:inline-block;">'+url+'</span> </div></td>';
        smTblTrData +='     <td class="attrName" id="attrName_'+smTblTrCount+'"><div class="form-group"><input type="hidden" name="smTrName_'+smTblTrCount+'" id="smTrName_'+smTblTrCount+'" value="'+name+'"> <span id="nametxt_'+smTblTrCount+'" class="wordbreak" style="display:inline-block;">'+name+'</span> </div></td>';

        if(_flag == "brandcvwithnum"){
            smTblTrData +='<td class="attrNumber" id="attrNumber_'+smTblTrCount+'"><div class="form-group"><input type="hidden" class="numberonly" name="smTrNumber_'+smTblTrCount+'" id="smTrNumber_'+smTblTrCount+'" value="'+num+'"> <span id="numbertxt_'+smTblTrCount+'" class="wordbreak" style="display:inline-block;">'+num+'</span> </div></td>';
        }

        smTblTrData +='     <td>';

        if(_flag == "brandcvwithnum"){
            smTblTrData +='     <button class="btn btn-default" onClick=removeSocialMedia(this,"brandcvwithnum") type="button" index="'+smTblTrCount+'">Delete</button>';
            smTblTrData +='     <button class="btn btn-primary" id="btnEditSocialMediaStats" type="button" onClick=showAddBox("brandcvwithnum",null,this,"edit")>Edit</button>';
        }
        else
        {
            smTblTrData +='     <button class="btn btn-default" onClick=removeSocialMedia(this,"brandcvwithoutnum") type="button" index="'+smTblTrCount+'">Delete</button>';
            smTblTrData +='     <button class="btn btn-primary" id="btnEditSocialMedia" type="button" onClick=showAddBox("brandcvwithoutnum",null,this,"edit")>Edit</button>'; 
        }
        
        smTblTrData +='     </td>';
        smTblTrData +='</tr>';
        if(_flag == "brandcvwithnum"){
            $("#tblSocialMediaStats").find("tbody").append(smTblTrData);
            $("#smsDataCount").val($("#tblSocialMediaStats").find("tbody tr").length);
            
        }
        else
        {
            $("#tblSocialMedia").find("tbody").append(smTblTrData); 
            $("#smDataCount").val($("#tblSocialMedia").find("tbody tr").length);  
        } */

        if(_flag == "brandcvwithnum"){
            var smTblTrData = '';
            smTblTrData +='<tr id="smsID_'+smTblTrCount+'" smsdId="'+smTblTrCount+'"><input type="hidden" name="smsTrid_'+smTblTrCount+'" id="smsTrid_'+smTblTrCount+'" value="">';
            smTblTrData +='     <td class="attrIcon"><div class="shoplink-logo-holder"><input type="hidden" name="smsTrIcon_'+smTblTrCount+'" id="smsTrIcon_'+smTblTrCount+'" value="'+icon+'"> <img id="attr_iconimg_'+smTblTrCount+'" src="'+icon+'" class=""  alt="'+name+'" /> </div></td>';
            smTblTrData +='     <td class="attrUrl" url=""><div class="form-group"><input type="hidden" name="smsTrUrl_'+smTblTrCount+'" id="smsTrUrl_'+smTblTrCount+'" value="'+url+'"> <span id="urltxt_'+smTblTrCount+'" class="wordbreak" style="display:inline-block;">'+url+'</span> </div></td>';
            smTblTrData +='     <td class="attrName"><div class="form-group"><input type="hidden" name="smsTrName_'+smTblTrCount+'" id="smsTrName_'+smTblTrCount+'" value="'+name+'"> <span id="nametxt_'+smTblTrCount+'" class="wordbreak" style="display:inline-block;">'+name+'</span> </div></td>';
            smTblTrData +='     <td class="attrNumber"><div class="form-group"><input type="hidden" class="numberonly" name="smsTrNumber_'+smTblTrCount+'" id="smsTrNumber_'+smTblTrCount+'" value="'+num+'"> <span id="numbertxt_'+smTblTrCount+'" class="wordbreak" style="display:inline-block;">'+num+'</span> </div></td>';
            smTblTrData +='     <td class="attrTxt"><div class="form-group"><input type="hidden" name="smsTrTxt_'+smTblTrCount+'" id="smsTrTxt_'+smTblTrCount+'" value="'+txt+'"> <span id="txttxt_'+smTblTrCount+'" class="wordbreak" style="display:inline-block;">'+txt+'</span> </div></td>';
            smTblTrData +='     <td>';
            smTblTrData +='     <button class="btn btn-default btn-sm" onClick=removeSocialMedia(this,"brandcvwithnum") type="button" index="'+smTblTrCount+'">Delete</button>';
            smTblTrData +='     <button class="btn btn-primary btn-sm" id="btnEditSocialMediaStats" type="button" onClick=showAddBox("brandcvwithnum",null,this,"edit")>Edit</button>';
            smTblTrData +='     </td>';
            smTblTrData +='</tr>';
            $("#tblSocialMediaStats").find("tbody").append(smTblTrData);
            $("#smsDataCount").val($("#tblSocialMediaStats").find("tbody tr").length);
        }
        else
        {
            var smTblTrData = '';
            smTblTrData +='<tr id="smID_'+smTblTrCount+'" smdId="'+smTblTrCount+'"><input type="hidden" name="smTrid_'+smTblTrCount+'" id="smTrid_'+smTblTrCount+'" value="">';
            smTblTrData +='     <td class="attrIcon" id="attrIcon_'+smTblTrCount+'"><div class="shoplink-logo-holder"><input type="hidden" name="smTrIcon_'+smTblTrCount+'" id="smTrIcon_'+smTblTrCount+'" value="'+icon+'"> <img id="attriconimg_'+smTblTrCount+'" src="'+icon+'" class=""  alt="'+name+'" /> </div></td>';
            smTblTrData +='     <td class="attrUrl" id="attrUrl_'+smTblTrCount+'" url=""><div class="form-group"><input type="hidden" name="smTrUrl_'+smTblTrCount+'" id="smTrUrl_'+smTblTrCount+'" value="'+url+'"> <span id="urltxt_'+smTblTrCount+'" class="wordbreak" style="display:inline-block;">'+url+'</span> </div></td>';
            smTblTrData +='     <td class="attrName" id="attrName_'+smTblTrCount+'"><div class="form-group"><input type="hidden" name="smTrName_'+smTblTrCount+'" id="smTrName_'+smTblTrCount+'" value="'+name+'"> <span id="nametxt_'+smTblTrCount+'" class="wordbreak" style="display:inline-block;">'+name+'</span> </div></td>';
            smTblTrData +='     <td>';
            smTblTrData +='     <button class="btn btn-default btn-sm" onClick=removeSocialMedia(this,"brandcvwithoutnum") type="button" index="'+smTblTrCount+'">Delete</button>';
            smTblTrData +='     <button class="btn btn-primary btn-sm" id="btnEditSocialMedia" type="button" onClick=showAddBox("brandcvwithoutnum",null,this,"edit")>Edit</button>'; 
            smTblTrData +='     </td>';
            smTblTrData +='</tr>';
            $("#tblSocialMedia").find("tbody").append(smTblTrData); 
            $("#smDataCount").val($("#tblSocialMedia").find("tbody tr").length);  
        }
    }
    else {  
          
        if(_flag == "brandcvwithnum"){ 
            
            $("#tblSocialMediaStats").find("tbody tr#smsID_"+id).find(".attrName").find("input").val(name); 
            $("#tblSocialMediaStats").find("tbody tr#smsID_"+id).find(".attrName").find("span").text(name); 
            $("#tblSocialMediaStats").find("tbody tr#smsID_"+id).find(".attrIcon").find("input").val(icon);
            $("#tblSocialMediaStats").find("tbody tr#smsID_"+id).find(".attrIcon").find("img").attr("src", icon);
            $("#tblSocialMediaStats").find("tbody tr#smsID_"+id).find(".attrUrl").find("input").val(url);
            $("#tblSocialMediaStats").find("tbody tr#smsID_"+id).find(".attrUrl").find("span").text(url);
            $("#tblSocialMediaStats").find("tbody tr#smsID_"+id).find(".attrNumber").find("input").val(num); 
            $("#tblSocialMediaStats").find("tbody tr#smsID_"+id).find(".attrNumber").find("span").text(num); 
            $("#tblSocialMediaStats").find("tbody tr#smsID_"+id).find(".attrTxt").find("input").val(txt); 
            $("#tblSocialMediaStats").find("tbody tr#smsID_"+id).find(".attrTxt").find("span").text(txt); 
        }
        else
        {
            $("#tblSocialMedia").find("tbody tr#smID_"+id).find(".attrName").find("input").val(name); 
            $("#tblSocialMedia").find("tbody tr#smID_"+id).find(".attrName").find("span").text(name); 
            $("#tblSocialMedia").find("tbody tr#smID_"+id).find(".attrIcon").find("input").val(icon);
            $("#tblSocialMedia").find("tbody tr#smID_"+id).find(".attrIcon").find("img").attr("src", icon);
            $("#tblSocialMedia").find("tbody tr#smID_"+id).find(".attrUrl").find("input").val(url);
            $("#tblSocialMedia").find("tbody tr#smID_"+id).find(".attrUrl").find("span").text(url);
        }
    }
}
function removeSocialMedia(obj, _flag) {
    var i = $(obj).attr("index");
    if (i != undefined && i != "") {        
        $(obj).closest("tr").remove();
        if(_flag == "brandcvwithnum"){
            selTableRow1.rowLength(); // show hide moveup and movetop from socialmedia.js
            selTableRow1.resetRowNum();
            $("#smsDataCount").val($("#tblSocialMediaStats").find("tbody tr").length);
        }
        else{
            selTableRow.rowLength(); // show hide moveup and movetop from socialmedia.js
            selTableRow.resetRowNum();
            $("#smDataCount").val($("#tblSocialMedia").find("tbody tr").length);
        }        
    }   
    if(_flag == "brandcvwithnum"){
        selTableRow1.notSel();
    }
    else{
        selTableRow.notSel();
    }    
}
