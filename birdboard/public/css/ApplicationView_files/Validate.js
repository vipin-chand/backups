var dtCh = "/";
var minYear = 1900;
var maxYear = 2100;



function isInteger(s) {
    var i;
    for (i = 0; i < s.length; i++) {
        // Check that current character is number.
        var c = s.charAt(i);
        if (((c < "0") || (c > "9"))) return false;
    }
    // All characters are numbers.
    return true;
}

function stripCharsInBag(s, bag) {
    var i;
    var returnString = "";
    // Search through string's characters one by one.
    // If character is not in bag, append to returnString.
    for (i = 0; i < s.length; i++) {
        var c = s.charAt(i);
        if (bag.indexOf(c) == -1) returnString += c;
    }
    return returnString;
}

function daysInFebruary(year) {
    // February has 29 days in any year evenly divisible by four,
    // EXCEPT for centurial years which are not also divisible by 400.
    return (((year % 4 == 0) && ((!(year % 100 == 0)) || (year % 400 == 0))) ? 29 : 28);
}
function DaysArray(n) {
    for (var i = 1; i <= n; i++) {
        this[i] = 31
        if (i == 4 || i == 6 || i == 9 || i == 11) { this[i] = 30 }
        if (i == 2) { this[i] = 29 }
    }
    return this
}

function isValidDate(strDate, dateFormat) {
    var daysInMonth = DaysArray(12)
    var strDay;
    var strMonth;
    var strYear;
    var dtConvertedDate;
    convertedDate = new Array(2);
    if (strDate == "") {
        return true;
    }
    if (strDate.indexOf("/") != 0) {
        convertedDate = strDate.split("/");
    }
    else if (strDate.indexOf("-") != 0) {
        convertedDate = strDate.split("-");
    }
    else if (strDate.indexOf(".") != 0) {
        convertedDate = strDate.split(".");
    }
    else if (strDate.indexOf(" ") != 0) {
        convertedDate = strDate.split(" ");
    }
    if (convertedDate.length != 3) {
        alert("Please enter valid date");
        return false
    }
    if (dateFormat == "dd/mm/yyyy") {
        strDay = convertedDate[0];
        strMonth = convertedDate[1];
        strYear = convertedDate[2];
    }
    else if (dateFormat == "mm/dd/yyyy") {
        strMonth = convertedDate[1];
        strDay = convertedDate[0];
        strYear = convertedDate[2];
    }
    else if (dateFormat == "yyyy/mm/dd") {
        strDay = convertedDate[2];
        strMonth = convertedDate[1];
        strYear = convertedDate[0];
    }
    else if (dateFormat == "dd/mmm/yyyy") {
        strDay = convertedDate[0];
        strMonth = convertedDate[1];
        strYear = convertedDate[2];
    }
    if (isInteger(strDay) != true || isInteger(strMonth) != true || isInteger(strYear) != true) {

        alert("Please enter a valid date");
        return false;
    }
    day = parseInt(strDay, 10);
    month = parseInt(strMonth, 10);
    year = parseInt(strYear, 10);

    if (strMonth.length < 1 || month < 1 || month > 12) {
        alert("Please enter a valid month");
        return false;
    }
    if (strDay.length < 1 || day < 1 || day > 31 || (month == 2 && day > daysInFebruary(year)) || day > daysInMonth[month]) {
        alert("Please enter a valid day");
        return false;
    }
    if (strYear.length != 4 || year == 0 || year < minYear || year > maxYear) {
        alert("Please enter a valid 4 digit year between " + minYear + " and " + maxYear);
        return false;
    }
    return true;
}


function validateForIntNum(obj, event) {
    var keyCode = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
    if ((keyCode >= 48 && keyCode <= 57) || keyCode == 46)
        return true;
    /*	else if()
    return true;*/
    else
        return false;
}

function validateForInt(obj, event) {
    var keyCode = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;

    if ((keyCode >= 35 && keyCode <= 37) || (keyCode == 39) || keyCode >= 48 && keyCode <= 57 || keyCode == 9 || keyCode == 127 || keyCode == 8 || keyCode == 46) {
        if (IsMatch(navigator.userAgent, "Firefox") || IsMatch(navigator.userAgent, "Chrome")) {
            if ((keyCode == 46 && event.which == 46) || (keyCode == 39 && event.which != 0) || ((keyCode >= 35 && keyCode <= 37) && event.which != 0))
                return false;
        }
        else if (IsMatch(navigator.userAgent, "Windows")) {
            if (keyCode == 46 || keyCode == 39 || (keyCode >= 35 && keyCode <= 37)) {
                event.returnValue = false;
                return false;
            }
        }
    }
    else {
        event.returnValue = false;
        return false;
    }
}

function validateForDecimal(obj, event) {
    var keyCode = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
    if ((keyCode >= 35 && keyCode <= 37) || (keyCode == 39) || (keyCode >= 48 && keyCode <= 57) || keyCode == 46 || keyCode == 8 || keyCode == 9) {
        var current = obj.value;
        var decimalpoint = current.lastIndexOf(".");
        if (decimalpoint >= 0) {
            obj.maxLength = decimalpoint + 3;
            if (IsMatch(navigator.userAgent, "Firefox") || IsMatch(navigator.userAgent, "Chrome")) {
                if (keyCode == 46 && event.which == 46)
                    return false;
            }
            else if (IsMatch(navigator.userAgent, "Windows")) {
                if (keyCode == 46)
                    return false;
            }
        }
        else {
            obj.maxLength = "10";
        }
        return true;
    }
    else {
        event.returnValue = false;
        return false;
    }
}

function validateForDecimalOnePoint(obj, event) {
    var keyCode = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
    if ((keyCode >= 35 && keyCode <= 37) || (keyCode == 39) || (keyCode >= 48 && keyCode <= 57) || keyCode == 46 || keyCode == 8 || keyCode == 9) {
        var current = obj.value;
        var decimalpoint = current.lastIndexOf(".");
        if (decimalpoint >= 0) {
            obj.maxLength = decimalpoint + 3;
            if (IsMatch(navigator.userAgent, "Firefox") || IsMatch(navigator.userAgent, "Chrome")) {
                if (keyCode == 46 && event.which == 46)
                    return false;
            }
            else if (IsMatch(navigator.userAgent, "Windows")) {
                if (keyCode == 46)
                    return false;
            }
        }
        else {
            obj.maxLength = "10";
        }
        return true;
    }
    else {
        event.returnValue = false;
        return false;
    }
}

function validateForDecimalForInvoiceOrder(obj, event) {
    var keyCode = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
    if ((keyCode == 39) || (keyCode >= 48 && keyCode <= 57) || keyCode == 46 || keyCode == 8 || keyCode == 9) {
        var current = obj.value;
        var decimalpoint = current.lastIndexOf(".");
        if (decimalpoint >= 0) {
            obj.maxLength = decimalpoint + 3;
            if (IsMatch(navigator.userAgent, "Firefox") || IsMatch(navigator.userAgent, "Chrome")) {
                if (keyCode == 46 && event.which == 46)
                    return false;
            }
            else if (IsMatch(navigator.userAgent, "Windows")) {
                if (keyCode == 46)
                    return false;
            }
        }
        else {
            obj.maxLength = "15";
        }
        return true;
    }
    else {
        event.returnValue = false;
        return false;
    }
}

function countlen(obj, event, mlen) {
    var txtlen = obj.value.length;
    var keyCode = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
    if (txtlen >= mlen) {
        if (keyCode == 8 || keyCode == 35 || keyCode == 36 || keyCode == 37 || keyCode == 39 || keyCode == 46) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return true;
    }
}

function compareDates(date1, dateformat1, date2, dateformat2) {

    var d1 = getDateFromFormat(date1, dateformat1);
    var d2 = getDateFromFormat(date2, dateformat2);

    if (d1 == 0 || d2 == 0) {
        return -1;
    }
    else if (d1 > d2) {
        return 1;
    }
    return 0;
}

// ------------------------------------------------------------------
// Utility functions for parsing in getDateFromFormat()
// ------------------------------------------------------------------
function _isInteger(val) {
    var digits = "1234567890";
    for (var i = 0; i < val.length; i++) {
        if (digits.indexOf(val.charAt(i)) == -1) { return false; }
    }
    return true;
}
function _getInt(str, i, minlength, maxlength) {
    for (var x = maxlength; x >= minlength; x--) {
        var token = str.substring(i, i + x);
        if (token.length < minlength) { return null; }
        if (_isInteger(token)) { return token; }
    }
    return null;
}

// ------------------------------------------------------------------
// getDateFromFormat( date_string , format_string )
//
// This function takes a date string and a format string. It matches
// If the date string matches the format string, it returns the 
// getTime() of the date. If it does not match, it returns 0.
// ------------------------------------------------------------------
function getDateFromFormat(val, format) {
    val = val + "";
    format = format + "";
    var i_val = 0;
    var i_format = 0;
    var c = "";
    var token = "";
    var token2 = "";
    var x, y;
    var now = new Date();
    var year = now.getYear();
    var month = now.getMonth() + 1;
    var date = 1;
    var hh = now.getHours();
    var mm = now.getMinutes();
    var ss = now.getSeconds();
    var ampm = "";

    while (i_format < format.length) {
        // Get next token from format string
        c = format.charAt(i_format);
        token = "";
        while ((format.charAt(i_format) == c) && (i_format < format.length)) {
            token += format.charAt(i_format++);
        }
        // Extract contents of value based on format token
        if (token == "yyyy" || token == "yy" || token == "y") {
            if (token == "yyyy") { x = 4; y = 4; }
            if (token == "yy") { x = 2; y = 2; }
            if (token == "y") { x = 2; y = 4; }
            year = _getInt(val, i_val, x, y);
            if (year == null) { return 0; }
            i_val += year.length;
            if (year.length == 2) {
                if (year > 70) { year = 1900 + (year - 0); }
                else { year = 2000 + (year - 0); }
            }
        }
        else if (token == "MMM" || token == "NNN") {
            month = 0;
            for (var i = 0; i < MONTH_NAMES.length; i++) {
                var month_name = MONTH_NAMES[i];
                if (val.substring(i_val, i_val + month_name.length).toLowerCase() == month_name.toLowerCase()) {
                    if (token == "MMM" || (token == "NNN" && i > 11)) {
                        month = i + 1;
                        if (month > 12) { month -= 12; }
                        i_val += month_name.length;
                        break;
                    }
                }
            }
            if ((month < 1) || (month > 12)) { return 0; }
        }
        else if (token == "EE" || token == "E") {
            for (var i = 0; i < DAY_NAMES.length; i++) {
                var day_name = DAY_NAMES[i];
                if (val.substring(i_val, i_val + day_name.length).toLowerCase() == day_name.toLowerCase()) {
                    i_val += day_name.length;
                    break;
                }
            }
        }
        else if (token == "MM" || token == "M") {
            month = _getInt(val, i_val, token.length, 2);
            if (month == null || (month < 1) || (month > 12)) { return 0; }
            i_val += month.length;
        }
        else if (token == "dd" || token == "d") {
            date = _getInt(val, i_val, token.length, 2);
            if (date == null || (date < 1) || (date > 31)) { return 0; }
            i_val += date.length;
        }
        else if (token == "hh" || token == "h") {
            hh = _getInt(val, i_val, token.length, 2);
            if (hh == null || (hh < 1) || (hh > 12)) { return 0; }
            i_val += hh.length;
        }
        else if (token == "HH" || token == "H") {
            hh = _getInt(val, i_val, token.length, 2);
            if (hh == null || (hh < 0) || (hh > 23)) { return 0; }
            i_val += hh.length;
        }
        else if (token == "KK" || token == "K") {
            hh = _getInt(val, i_val, token.length, 2);
            if (hh == null || (hh < 0) || (hh > 11)) { return 0; }
            i_val += hh.length;
        }
        else if (token == "kk" || token == "k") {
            hh = _getInt(val, i_val, token.length, 2);
            if (hh == null || (hh < 1) || (hh > 24)) { return 0; }
            i_val += hh.length; hh--;
        }
        else if (token == "mm" || token == "m") {
            mm = _getInt(val, i_val, token.length, 2);
            if (mm == null || (mm < 0) || (mm > 59)) { return 0; }
            i_val += mm.length;
        }
        else if (token == "ss" || token == "s") {
            ss = _getInt(val, i_val, token.length, 2);
            if (ss == null || (ss < 0) || (ss > 59)) { return 0; }
            i_val += ss.length;
        }
        else if (token == "a") {
            if (val.substring(i_val, i_val + 2).toLowerCase() == "am") { ampm = "AM"; }
            else if (val.substring(i_val, i_val + 2).toLowerCase() == "pm") { ampm = "PM"; }
            else { return 0; }
            i_val += 2;
        }
        else {
            if (val.substring(i_val, i_val + token.length) != token) { return 0; }
            else { i_val += token.length; }
        }
    }
    // If there are any trailing characters left in the value, it doesn't match
    if (i_val != val.length) { return 0; }
    // Is date valid for month?
    if (month == 2) {
        // Check for leap year
        if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) { // leap year
            if (date > 29) { return 0; }
        }
        else { if (date > 28) { return 0; } }
    }
    if ((month == 4) || (month == 6) || (month == 9) || (month == 11)) {
        if (date > 30) { return 0; }
    }
    // Correct hours value
    if (hh < 12 && ampm == "PM") { hh = hh - 0 + 12; }
    else if (hh > 11 && ampm == "AM") { hh -= 12; }
    var newdate = new Date(year, month - 1, date, hh, mm, ss);
    return newdate.getTime();
}

function confirmDelete(TargetBaseControl, chkname) {
    var elements = TargetBaseControl.getElementsByTagName("input");
    var objchk = new Array();
    var l = 0;
    var m = 0;

    //To find Checkbox Controls inside GridView Control
    for (var j = 0; j < elements.length; ++j) {
        if (elements[j].type == "checkbox") {
            if (IsMatch(elements[j].id, chkname)) {
                objchk[l] = elements[j].id;
                l++;
            }
        }
    }
    //End
    for (var i = 0; i < objchk.length; i++) {
        if (document.getElementById(objchk[i]).checked) {
            m++;
        }
    }

    return m
}
function IsMatch(id, gridname) {
    var pattern = gridname;
    var regularExpresssion = new RegExp(pattern);
    if (id.match(regularExpresssion))
        return true;
    else
        return false;
}
function clickButton(e, buttonid) {
    var evt = e ? e : window.event;
    var bt = document.getElementById(buttonid);
    if (bt) {
        if (evt.keyCode == 13) {
            bt.click();
            return false;
        }
    }
}

function FireDefaultButton(event, target) {
    if (event.keyCode == 13) {
        var status;

        if (IsMatch(navigator.userAgent, "Firefox") || IsMatch(navigator.userAgent, "Chrome")) {
            if (event.target.type.toLowerCase() == "image") {
                return true;
            }
            else if (event.target.type.toLowerCase() == "textarea") {
                return true;
            }
            else {
                status = true;
            }
        }
        else if (IsMatch(navigator.userAgent, "MSIE")) {
            if (event.srcElement.type.toLowerCase() == "textarea") {
                return true;
            }
            else if (event.srcElement.type.toLowerCase() == "image") {
                return true;
            }
            else {
                status = true;
            }
        }

        if (status) {
            var defaultButton;

            if (target.id != null)
                defaultButton = target.id;
            else
                defaultButton = target;

            if (typeof (defaultButton) != "undefined") {
                document.getElementById(defaultButton).click();
            }

            else if (typeof (defaultButton) != "undefined") {
                eval(defaultButton.href.substr(11));
            }

            event.cancelBubble = true;
            if (event.stopPropagation) event.stopPropagation();
            return false;
        }
    }
    return true;
}

function Check(parentChk) {
    if (IsMatch(parentChk.id, "ctl01")) {
        var arr = new Array();
        arr = parentChk.id.split("_");
        //        var obj = document.getElementById(arr[0]);
        var GridView = parentChk.parentNode.parentNode.parentNode;
        var elements = GridView.getElementsByTagName("INPUT");


        xstate = parentChk.checked;

        for (i = 0; i < elements.length; i++) {
            if (IsCheckBox(elements[i])) {
                elements[i].checked = xstate;
            }
        }
    }
    else if (IsMatch(parentChk.id, "ctl")) {
        var arr = new Array();
        arr = parentChk.id.split("_");
        var obj;

        if (arr.length > 3)
            obj = document.getElementById(arr[0] + "_" + arr[1]);
        else
            obj = document.getElementById(arr[0]);

        var elements = obj.getElementsByTagName("INPUT");

        for (i = 0; i < elements.length; i++) {
            if (IsCheckBox(elements[i]) && IsMatch(elements[i].id, "ctl01")) {
                elements[i].checked = false;
                break;
            }
        }
    }
    else {
        var elements = document.getElementsByTagName("input");
        xstate = parentChk.checked;
        for (i = 0; i < elements.length; i++) {
            if (IsCheckBox(elements[i])) {
                elements[i].checked = xstate;
            }
        }
    }
}

function IsCheckBox(chk) {
    if (chk.type == 'checkbox')
        return true;
    else
        return false;
}

String.prototype.trim = function () {
    return this.replace(/^\s*/, "").replace(/\s*$/, "");
}

function fnCopyState(obj, txt, val) {
    var opt = document.createElement("option");
    obj.options.add(opt);
    opt.text = txt;
    opt.value = val;
}

function getQuerystring(key, default_) {
    if (default_ == null) default_ = "";
    key = key.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + key + "=([^&#]*)");
    var qs = regex.exec(window.location.href);
    if (qs == null)
        return default_;
    else
        return qs[1];
}

// ------------------------------------------------------------------
// validateForUserName(obj,event)
//
// This function takes a date string and a format string. It matches
// 
//
function validateForUserName(obj, event) {
    var keyCode = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
    if (keyCode >= 65 && keyCode <= 90 || keyCode >= 97 && keyCode <= 122 || keyCode == 95 || keyCode == 46 || keyCode == 8 || keyCode >= 48 && keyCode <= 57 || keycode == 9 || keycode == 60 || keycode == 62)
        return true;
    else
        return false;
}

function HaltAlphaNumeric(event) {
    var keyCode = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;

    if ((keyCode >= 35 && keyCode <= 37) || (keyCode == 39) || keyCode == 9 || keyCode == 127 || keyCode == 8 || keyCode == 46) {
        if (IsMatch(navigator.userAgent, "Firefox") || IsMatch(navigator.userAgent, "Chrome")) {
            if (keyCode == 46 && event.which == 46)
                return false;
        }
        else if (IsMatch(navigator.userAgent, "Windows")) {
            if (keyCode == 46)
                return false;
        }
    }
    else {
        event.returnValue = false;
        return false;
    }
}

//function fnSelectTZ(obj, obj1, objTZ, str)
//{    
//    var arr = new Array();
//    arr = str.split("$&_");
//    var bstatus = false;
//    
//    for(var i = 0; i < arr.length - 1; i++)
//    {
//        var arrnew = new Array();
//        arrnew = arr[i].split("$&");
//        
//        if(IsMatch(arrnew[2], obj.value))
//        {
//            for(var cnt = 0; cnt < objTZ.options.length; cnt++)
//            {
//                if(IsMatch(objTZ.options[cnt].value, arrnew[2]))
//                {
//                    objTZ.selectedIndex = cnt;
//                    bstatus = true;
//                    break;
//                }
//            }
//                
//            if(!bstatus)
//                continue;
//            else
//                break;
//        }
//    }
//    
//    if(!bstatus && obj1 != null)
//    {               
//        arr = str.split("$&_");
//        bstatus = false;
//        
//        for(var i = 0; i < arr.length - 1; i++)
//        {
//            var arrnew = new Array();
//            arrnew = arr[i].split("$&");
//            
//            if(IsMatch(arrnew[2], obj1.value))
//            {
//                for(var cnt = 0; cnt < objTZ.options.length; cnt++)
//                {
//                    if(IsMatch(objTZ.options[cnt].value, arrnew[2]))
//                    {
//                        objTZ.selectedIndex = cnt;
//                        bstatus = true;
//                        break;
//                    }
//                }
//                    
//                if(!bstatus)
//                    continue;
//                else
//                    break;
//            }
//        }
//    }
//    
//    if(!bstatus)
//        objTZ.selectedIndex = 0;
//        
//    return false;
//}

function fnSelectTZ(obj, objTZ, str) {
    for (var cnt = 0; cnt < obj.length; cnt++) {

        var arr = new Array();
        arr = str.split("$&_");
        var bstatus = false;

        for (var i = 0; i < arr.length - 1 && obj[cnt] != null; i++) {
            var arrnew = new Array();
            arrnew = arr[i].split("$&");

            if (IsMatch(arrnew[2], obj[cnt].value)) {
                for (var indx = 0; indx < objTZ.options.length; indx++) {
                    if (IsMatch(objTZ.options[indx].value, arrnew[2])) {
                        objTZ.selectedIndex = indx;
                        bstatus = true;
                        break;
                    }
                }

                if (!bstatus)
                    continue;
                else
                    break;
            }
        }

        if (!bstatus && obj[cnt + 1] != null)
            continue;
        else
            break;
    }

    if (!bstatus)
        objTZ.selectedIndex = 0;

    return false;
}

function GridTabbing(obj, e, cols) {
    var e = (typeof event != 'undefined') ? window.event : e; // IE : Mozilla

    if (e.keyCode == 9) {
        var ele = document.forms[0].elements;

        for (var i = 0; i < ele.length; i++) {
            var q = (i == ele.length - 1) ? 0 : i + cols; // if last element : if any other. Note i+2 since we have 2 columns

            if (obj == ele[i]) {
                //focus TextBox on next row
                ele[q].focus();
                break;
            }
        }

        e.returnValue = false;

        if (typeof event == 'undefined')
            e.preventDefault();

        return false;
    }
}

function extractNumber(obj, decimalPlaces, allowNegative) {
    var temp = obj.value;

    // avoid changing things if already formatted correctly
    var reg0Str = '[0-9]*';
    if (decimalPlaces > 0) {
        reg0Str += '\\.?[0-9]{0,' + decimalPlaces + '}';
    } else if (decimalPlaces < 0) {
        reg0Str += '\\.?[0-9]*';
    }
    reg0Str = allowNegative ? '^-?' + reg0Str : '^' + reg0Str;
    reg0Str = reg0Str + '$';
    var reg0 = new RegExp(reg0Str);
    if (reg0.test(temp)) return true;

    // first replace all non numbers
    var reg1Str = '[^0-9' + (decimalPlaces != 0 ? '.' : '') + (allowNegative ? '-' : '') + ']';
    var reg1 = new RegExp(reg1Str, 'g');
    temp = temp.replace(reg1, '');

    if (allowNegative) {
        // replace extra negative
        var hasNegative = temp.length > 0 && temp.charAt(0) == '-';
        var reg2 = /-/g;
        temp = temp.replace(reg2, '');
        if (hasNegative) temp = '-' + temp;
    }

    if (decimalPlaces != 0) {
        var reg3 = /\./g;
        var reg3Array = reg3.exec(temp);
        if (reg3Array != null) {
            // keep only first occurrence of .
            //  and the number of places specified by decimalPlaces or the entire string if decimalPlaces < 0
            var reg3Right = temp.substring(reg3Array.index + reg3Array[0].length);
            reg3Right = reg3Right.replace(reg3, '');
            reg3Right = decimalPlaces > 0 ? reg3Right.substring(0, decimalPlaces) : reg3Right;
            temp = temp.substring(0, reg3Array.index) + '.' + reg3Right;
        }
    }

    obj.value = temp;
}

function validatePwd(fieldname) {
    //Initialise variables
    var errorMsg = "";
    var space = " ";
    //fieldname = document.myform.password;
    fieldvalue = fieldname;
    fieldlength = fieldvalue.length;

    //It must not contain a space
    if (fieldvalue.indexOf(space) > -1) {
        errorMsg += "\nPasswords cannot include a space.\n";
    }
    //It must contain at least one character     
    if (!((fieldvalue.match(/[A-Z]/)) || (fieldvalue.match(/[a-z]/)))) {
        errorMsg += "\nStrong passwords must include at least one character.\n";
    }
    //It must contain at least one number
    if (!(fieldvalue.match(/\d/))) {
        errorMsg += "\nStrong passwords must include at least one number.\n";
    }
    //It must be at least 7 characters long.
    if (!((fieldlength >= 7) && (fieldlength <= 16))) {
        errorMsg += "\nStrong passwords must be between 7-16 characters long.\n";
    }
    //If there is aproblem with the form then display an error
    if (errorMsg != "") {
        msg = "______________________________________________________\n\n";
        msg += "Please correct the problem(s) with your trial password test it again.\n";
        msg += "______________________________________________________\n";
        errorMsg += alert(msg + errorMsg + "\n\n");
        return false;
    }
    return true;
}

function toFix(num) {
    var decimalpoint = num.lastIndexOf(".");

    if (!(decimalpoint >= 0 && num.substring(decimalpoint + 1, decimalpoint + 3) == "00")) {
        num *= 100;
        num = Math.round(num);
        num /= 100;
    }
    else
        num = Math.round(num);

    return num;
}

function fnConDecimal(obj, len) {
    if (obj.value.trim() != "" && (!(isNaN(obj.value)))) {
        var decimalpoint = obj.value.lastIndexOf(".");

        if (decimalpoint >= 0) {
            if (obj.value.length - (decimalpoint + 1) != len) {
                for (var ctr = 0; ctr < len - (obj.value.length - (decimalpoint + 1)); ctr++)
                    obj.value = obj.value + "0";
            }
        }
        else if (!(isNaN(obj.value))) {
            obj.value = obj.value + ".";

            for (var ctr = 0; ctr < len; ctr++)
                obj.value = obj.value + "0";
        }
    }
    else
        obj.value = "";
}


/////Added By Anup

function extractNumber(obj, decimalPlaces, allowNegative) {
    var temp = obj.value;

    // avoid changing things if already formatted correctly
    var reg0Str = '[0-9]*';
    if (decimalPlaces > 0) {
        reg0Str += '\\.?[0-9]{0,' + decimalPlaces + '}';
    } else if (decimalPlaces < 0) {
        reg0Str += '\\.?[0-9]*';
    }
    reg0Str = allowNegative ? '^-?' + reg0Str : '^' + reg0Str;
    reg0Str = reg0Str + '$';
    var reg0 = new RegExp(reg0Str);
    if (reg0.test(temp)) return true;

    // first replace all non numbers
    var reg1Str = '[^0-9' + (decimalPlaces != 0 ? '.' : '') + (allowNegative ? '-' : '') + ']';
    var reg1 = new RegExp(reg1Str, 'g');
    temp = temp.replace(reg1, '');

    if (allowNegative) {
        // replace extra negative
        var hasNegative = temp.length > 0 && temp.charAt(0) == '-';
        var reg2 = /-/g;
        temp = temp.replace(reg2, '');
        if (hasNegative) temp = '-' + temp;
    }

    if (decimalPlaces != 0) {
        var reg3 = /\./g;
        var reg3Array = reg3.exec(temp);
        if (reg3Array != null) {
            // keep only first occurrence of .
            //  and the number of places specified by decimalPlaces or the entire string if decimalPlaces < 0
            var reg3Right = temp.substring(reg3Array.index + reg3Array[0].length);
            reg3Right = reg3Right.replace(reg3, '');
            reg3Right = decimalPlaces > 0 ? reg3Right.substring(0, decimalPlaces) : reg3Right;
            temp = temp.substring(0, reg3Array.index) + '.' + reg3Right;
        }
    }

    obj.value = temp;
}
function blockNonNumbers(obj, e, allowDecimal, allowNegative) {
    var key;
    var isCtrl = false;
    var keychar;
    var reg;

    if (window.event) {
        key = e.keyCode;
        isCtrl = window.event.ctrlKey
    }
    else if (e.which) {
        key = e.which;
        isCtrl = e.ctrlKey;
    }

    if (isNaN(key)) return true;

    keychar = String.fromCharCode(key);

    // check for backspace or delete, or if Ctrl was pressed
    if (key == 8 || isCtrl) {
        return true;
    }

    reg = /\d/;
    var isFirstN = allowNegative ? keychar == '-' && obj.value.indexOf('-') == -1 : false;
    var isFirstD = allowDecimal ? keychar == '.' && obj.value.indexOf('.') == -1 : false;

    return isFirstN || isFirstD || reg.test(keychar);
}

function fnValidateExtension(obj, exts) {
    if (obj != null && obj != undefined) {
        var bstatus = false;
        var ext = obj.value.slice(obj.value.lastIndexOf(".")).toLowerCase();

        var arr = new Array();
        arr = exts.split("$@");

        for (var cnt = 0; cnt < arr.length; cnt++) {
            if (arr[cnt] == ext)
                return true;
        }
        return bstatus;
    }
}

function fnValidateExportPrint(id, msg) {
    if (id.rows.length < 2) {
        alert(msg);
        return false;
    }
    else
        return true;
}

function fnAllowNumberOnly(evt) {
    if (BrowserDetect.browser == "Firefox" || BrowserDetect.browser == "Netscape" || BrowserDetect.browser == "Safari") {
        if (evt.which == 8 || evt.which == 0 || evt.which == 9)
            return true;
        else if (evt.which >= 48 && evt.which <= 57)
            return true;
        else
            return false;
    }
    if (BrowserDetect.browser == "Explorer" || BrowserDetect.browser == "Chrome") {
        if (evt.keyCode >= 48 && evt.keyCode <= 57)
            return true;
        else
            return false;

    }
    if (BrowserDetect.browser == "Opera") {
        if (evt.keyCode == 8 || evt.keyCode == 37 || evt.keyCode == 39)
            return true;
        if (evt.keyCode >= 48 && evt.keyCode <= 57)
            return true;
        else
            return false;
    }
}

function validateEmail(field) {
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
    return (regex.test(field)) ? true : false;
}
function validateMultipleEmailsCommaSeparated(emailcntl, seperator) {
    var value = emailcntl.value;
    if (value != '') {
        var result = value.split(seperator);
        for (var i = 0; i < result.length; i++) {
            if (result[i] != '') {
                if (!validateEmail(result[i])) {
                    emailcntl.focus();
                    alert('Please check, `' + result[i] + '` email addresses not valid!');
                    return false;
                }
            }
        }
    }
    return true;
}

function RequiredField(value) {
    if ((value == "") || (value == 0)) {
        return false;
    }
}

function MinLength(value, minlength) {
    var fLength = value;
    if (fLength.length < minlength) {
        return false;
    }

}
function MaxLength(value, maxlength) {
    var fLength = value;
    if (fLength.length > maxlength) {
        return false;
    }
}

var BrowserDetect =
        {
            init: function () {
                this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
                this.version = this.searchVersion(navigator.userAgent)
                || this.searchVersion(navigator.appVersion)
                || "an unknown version";
                this.OS = this.searchString(this.dataOS) || "an unknown OS";
            },
            searchString: function (data) {
                for (var i = 0; i < data.length; i++) {
                    var dataString = data[i].string;
                    var dataProp = data[i].prop;
                    this.versionSearchString = data[i].versionSearch || data[i].identity;
                    if (dataString) {
                        if (dataString.indexOf(data[i].subString) != -1)
                            return data[i].identity;
                    }
                    else if (dataProp)
                        return data[i].identity;
                }
            },
            searchVersion: function (dataString) {
                var index = dataString.indexOf(this.versionSearchString);
                if (index == -1) return;
                return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
            },
            dataBrowser: [
            {
                string: navigator.userAgent,
                subString: "Chrome",
                identity: "Chrome"
            },
            { string: navigator.userAgent,
                subString: "OmniWeb",
                versionSearch: "OmniWeb/",
                identity: "OmniWeb"
            },
            {
                string: navigator.vendor,
                subString: "Apple",
                identity: "Safari"
            },
            {
                prop: window.opera,
                identity: "Opera"
            },
            {
                string: navigator.vendor,
                subString: "iCab",
                identity: "iCab"
            },
            {
                string: navigator.vendor,
                subString: "KDE",
                identity: "Konqueror"
            },
            {
                string: navigator.userAgent,
                subString: "Firefox",
                identity: "Firefox"
            },
            {
                string: navigator.vendor,
                subString: "Camino",
                identity: "Camino"
            },
            {		// for newer Netscapes (6+)
                string: navigator.userAgent,
                subString: "Netscape",
                identity: "Netscape"
            },
            {
                string: navigator.userAgent,
                subString: "MSIE",
                identity: "Explorer",
                versionSearch: "MSIE"
            },
            {
                string: navigator.userAgent,
                subString: "Gecko",
                identity: "Mozilla",
                versionSearch: "rv"
            },
            { 		// for older Netscapes (4-)
                string: navigator.userAgent,
                subString: "Mozilla",
                identity: "Netscape",
                versionSearch: "Mozilla"
            }
        ],
            dataOS: [
            {
                string: navigator.platform,
                subString: "Win",
                identity: "Windows"
            },
            {
                string: navigator.platform,
                subString: "Mac",
                identity: "Mac"
            },
            {
                string: navigator.platform,
                subString: "Linux",
                identity: "Linux"
            }
        ]

        };


BrowserDetect.init();
var bname;

//////////////////////////////////////////////////////////////
//  Function is used to Detect the client's Browser
//  
//
//////////////////////////////////////////////////////////////

function fnBrowserDetect() {
    bname = BrowserDetect.browser;
}
